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
				let atruleBlocks = createStyleBlocks(node, `@${node.name} ${node.params}`)
				blocks = blocks.concat(atruleBlocks)
				break;
		}
	})

	return blocks
}

module.exports = {
	selectorPath,
	createStyleBlocks,
}