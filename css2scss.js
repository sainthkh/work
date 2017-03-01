const postcss = require('postcss')
const fs = require('fs')

const css2scss = (input, output) => {
	let css = fs.readFileSync(input).toString()
	let scss = cssText2scss(css)
	fs.writeFileSync(output, scss)
}

const cssText2scss = css => {
	let root = postcss.parse(css)
	let blocks = createStyleBlocks(root)
	let result = constructScssTree(blocks)
	return result.toString()
}

const constructScssTree = blocks => {
	let result = postcss.root()
	for(let i = 0; i < blocks.length; i++) {
		insertNode(result, blocks[i])
	}
	return result
}

const selectorPath = (selector, media) => {
	selector = selector.replace(/\s*(::|:|~|\+|>)\s*/g, '$1')
	var path = []
	var token = []
	var chars = selector.split('')
	var lastChar = ''
	var skip = false
	chars.forEach(c => {
		if(!skip) {
			if(c == ' ') {
				path.push(token.join(''))
				token = []
			} else if (c == ':' || c == '~' || c == '+' || c == '>') {
				if(token[0] == '&' && token[1] == ':' && token.length == 2) { // double colon
					token.push(':')
				} else {
					path.push(token.join(''))
					token = ['&', c]
				}
			} else if (c == '.') {
				if (lastChar.match(/[a-zA-Z0-9-_]/)) {
					path.push(token.join(''))
					token = ['&', c]
				} else {
					token.push(c)
				}
			} else if (c == '(') {
				skip = true
				token.push(c)
			} else {
				token.push(c)
			}
		} else if (c == ')') {
			skip = false
			token.push(c)
		} else {
			token.push(c)
		}
		lastChar = c
	})
	path.push(token.join(''))
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
				node.selector.replace(/\s*,\s*/g, ',').split(',').forEach(selector => {
					blocks.push({
						path: selectorPath(selector, media),
						nodes: node.nodes,
					})
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
			node.selector == path) {
			block.path.shift()
			if(block.path.length == 0) {
				node.append(block.nodes)
			} else {
				insertNode(node, block)
			}
			inserted = true
			break
		}
	}
	if(!inserted) {
		if(path == "root") {
			block.path.shift()
		}
		parent.append(makeNode(block))
	}
}

const makeNode = block => {
	var path = block.path
	
	var node = postcssNode(path[0])
	path.shift()
	var lastNode = node
	path.forEach(p => {
		let child = postcssNode(p)
		lastNode.append(child)
		lastNode = child
	})
	if(block.nodes) {
		lastNode.append(block.nodes)
	}

	return node
}

const postcssNode = path => {
	let node
	if(typeof path === "object") {
		node = postcss.atRule({ name: path.name, params: path.params })
	} else {
		node = postcss.rule({ selector: path })
	}
	return node
}

module.exports = {
	css2scss,
	cssText2scss,
	selectorPath,
	createStyleBlocks,
	makeNode,
	insertNode,	
}