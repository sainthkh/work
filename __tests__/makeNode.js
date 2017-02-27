const postcss = require('postcss')
const { makeNode } = require('../css2scss')

test("simple make", () => {
	var decl = postcss.decl({ prop:"color", value:"red"})
	var block = {path: [".home"], nodes: [decl] }
	var node = makeNode(block)

	expect(node.selector).toBe(".home")
	expect(node.nodes).toEqual(block.nodes)
})

test("recursive make", () => {
	var decl = postcss.decl({ prop:"background", value:"#123456"})
	var block = {path: [".act", ".pass", ".done"], nodes: [decl]}
	var node = makeNode(block)

	expect(node.selector).toBe(".act")
	expect(node.nodes[0].selector).toBe(".pass")
	expect(node.nodes[0].nodes[0].selector).toBe(".done")
	expect(node.nodes[0].nodes[0].nodes).toEqual(block.nodes)
})