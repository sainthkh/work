const postcss = require('postcss')
const { insertNode } = require('../css2scss')

test("simple insert", () => {
	var decl = postcss.decl({ prop:"color", value:"red"})
	var block = {path: [".home"], nodes: [decl] }
	var root = postcss.root()

	insertNode(root, block)
	expect(root.nodes[0].selector).toBe(".home")
	expect(root.nodes[0].nodes).toEqual(block.nodes)
})

test("under the parent", () => {
	var decl = postcss.decl({ prop:"color", value:"red"})
	var block = {path: [".home"], nodes: [decl] }
	var decl2 = postcss.decl({ prop:"display", value:"flex"})
	var block2 = { path: [".home", ".action"], nodes: [decl2]}
	var root = postcss.root()

	insertNode(root, block)
	insertNode(root, block2)
	expect(root.nodes[0].selector).toBe(".home")
	expect(root.nodes[0].nodes[0]).toEqual(block.nodes[0])
	expect(root.nodes[0].nodes[1].selector).toBe(".action")
	expect(root.nodes[0].nodes[1].nodes).toEqual(block2.nodes)
})