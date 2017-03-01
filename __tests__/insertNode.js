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

test("same path => merge", () => {
	var decl = postcss.decl({ prop:"color", value:"red"})
	var block = {path: [".home"], nodes: [decl] }
	var decl2 = postcss.decl({ prop:"display", value:"flex"})
	var block2 = { path: [".home"], nodes: [decl2]}
	var root = postcss.root()

	insertNode(root, block)
	insertNode(root, block2)
	expect(root.nodes[0].selector).toBe(".home")
	expect(root.nodes[0].nodes).toEqual([decl, decl2])
})

test("same media path => merge", () => {
	var decl = postcss.decl({ prop:"color", value:"red"})
	var block = {path: [".home", {name:"media", params:"(min-width: 1600px)"}], nodes: [decl] }
	var decl2 = postcss.decl({ prop:"display", value:"flex"})
	var block2 = { path: [".home", {name:"media", params:"(min-width: 1600px)"}], nodes: [decl2]}
	var root = postcss.root()

	insertNode(root, block)
	insertNode(root, block2)
	expect(root.nodes[0].selector).toBe(".home")
	expect(root.nodes[0].nodes[0].nodes).toEqual([decl, decl2])
})

test("root atrule(font-face, keyframe)", () => {
	var decl = postcss.decl({ prop: "font-family", value: "Bitstream Vera Serif Bold"})
	var block = {path: ["root", {name: "font-face", params: ""}], nodes: [decl]}
	var decl2 = postcss.decl({ prop:"color", value:"red"})
	var block2 = {path: [".home", {name:"media", params:"(min-width: 1600px)"}], nodes: [decl2] }
	var decl3 = postcss.decl({ prop:"display", value:"flex"})
	var block3 = { path: [".home", {name:"media", params:"(min-width: 1600px)"}], nodes: [decl3]}
	var root = postcss.root()

	insertNode(root, block)
	insertNode(root, block2)
	insertNode(root, block3)
	expect(root.nodes[0].name).toBe("font-face")
	expect(root.nodes[0].nodes).toEqual(block.nodes)
	expect(root.nodes[1].selector).toBe(".home")
	expect(root.nodes[1].nodes[0].nodes).toEqual([decl2, decl3])
})