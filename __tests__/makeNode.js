const postcss = require('postcss')
const { makeNode } = require('../css2scss')

test("make simple node", () => {
	var decl = postcss.decl({ prop:"color", value:"red"})
	var block = {path: [".home"], nodes: [decl] }
	var node = makeNode(block)

	expect(node.selector).toBe(".home")
	expect(node.nodes).toEqual(block.nodes)
})

test("make recursive node", () => {
	var decl = postcss.decl({ prop:"background", value:"#123456"})
	var block = {path: [".act", ".pass", ".done"], nodes: [decl]}
	var node = makeNode(block)

	expect(node.selector).toBe(".act")
	expect(node.nodes[0].selector).toBe(".pass")
	expect(node.nodes[0].nodes[0].selector).toBe(".done")
	expect(node.nodes[0].nodes[0].nodes).toEqual(block.nodes)
})

test("make media query node", () => {
	var decl = postcss.decl({ prop:"background", value:"#123456"})
	var block = {path: [".page", ".show", {name:"media", params:"(min-width: 600px)"}], nodes: [decl]}
	var node = makeNode(block)
	
	expect(node.type).toBe("atrule")
	expect(node.name).toBe("media")
	expect(node.params).toBe("(min-width: 600px)")
	expect(node.nodes[0].selector).toBe(".page")
	expect(node.nodes[0].nodes[0].selector).toBe(".show")
	expect(node.nodes[0].nodes[0].nodes).toEqual(block.nodes)
})