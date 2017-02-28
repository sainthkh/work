const postcss = require('postcss')

const selectorPath = (selector, media) => {
	selector = selector.replace(/\s*(:|~|\+|>)\s*/g, '$1')
	selector = selector.replace(/(:|~|\+|>)/g, ' &$1')
	selector = selector.replace(/([^\s:~+>])\./g, '$1 &.')
	var path = selector.split(' ')
	if(media) {
		path.push(media)
	}
	return path
}

const createStyleBlocks = (parent, media) => {
	let blocks = []
	parent.nodes.forEach(node => {
		switch(node.type) {
			case "rule":
				blocks.push({
					path: selectorPath(node.selector, media),
					nodes: node.nodes,
				})
				break;
			case "atrule":
				if(node.name == "media") {
					let atruleBlocks = createStyleBlocks(node, {
						name: node.name, 
						params: node.params,
					})
					blocks = blocks.concat(atruleBlocks)
				} else if (node.name == "supports") {
					for(let i = 0; i < node.nodes.length; i++) {
						let nodeInSupports = node.nodes[i]
						if(nodeInSupports.type == "atrule") {
							blocks.push({
								path: ["root", {name: node.name, params: node.params, }],
								nodes: node.nodes,		
							})
						} else {
							blocks.push({
								path: selectorPath(nodeInSupports.selector, {name: node.name, params: node.params}),
								nodes: nodeInSupports.nodes
							})
						}
					}
				} else {
					blocks.push({
						path: ["root", {name: node.name, params: node.params, }],
						nodes: node.nodes,
					})
				}
				break;
		}
	})

	return blocks
}

const insertNode = (parent, block) => {
	let inserted
	let path = block.path[0]
	let isAtRule = typeof path == "object"
	for(let i = 0; i < parent.nodes.length; i++) {
		let node = parent.nodes[i]
		if(isAtRule && node.name == path.name && node.params == path.params ||
			node.selector == path || node.selector == "root") {
			block.path.shift()
			insertNode(node, block)
			inserted = true
			break;
		}
	}
	if(!inserted) {
		parent.append(makeNode(block))
	}
}

const makeNode = block => {
	var path = block.path.reverse()
	var nodes = block.nodes
	var atrule
	if (typeof path[0] === "object") {
		atrule = postcss.atRule(path[0])
		path.shift()
	}

	var node
	path.forEach(p => {
		var rule = postcss.rule({ selector: p })
		rule.append(nodes)
		nodes = [rule]
		node = rule
	})

	if(atrule) {
		atrule.append(node)
		node = atrule
	}
	return node
}

module.exports = {
	selectorPath,
	createStyleBlocks,
	makeNode,
	insertNode,
}