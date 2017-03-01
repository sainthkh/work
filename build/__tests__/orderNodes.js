const { orderNodes } = require('../css2scss')
const postcss = require('postcss')

test("rule: decl > atRule(others) > atRule(media) from small to big > rules(html > id > class)", () => {
	var classRule = postcss.rule({selector:".className"})
	var idRule = postcss.rule({selector: "#id"})
	var htmlRule = postcss.rule({selector: "html"})
	var pseudo = postcss.rule({ selector: "&:not(.abc)"})
	var media1440Rule = postcss.atRule({name:"media", params: "(min-width: 1440px)"})
	var media600Rule = postcss.atRule({name:"media", params: "(min-width: 600px)"})
	var supportsAtRule = postcss.atRule({name:"supports", params: "(animation-name: test)"})
	var decl1 = postcss.decl({prop: "color", value: "red"})
	var decl2 = postcss.decl({prop: "display", value: "none"})

	var nodes = [classRule, idRule, htmlRule, pseudo, media1440Rule, media600Rule, supportsAtRule, decl1, decl2]
	orderNodes(nodes)
	expect(nodes[0]).toEqual(decl1)
	expect(nodes[1]).toEqual(decl2)
	expect(nodes[2]).toEqual(supportsAtRule)
	expect(nodes[3]).toEqual(media600Rule)
	expect(nodes[4]).toEqual(media1440Rule)
	expect(nodes[5]).toEqual(pseudo)
	expect(nodes[6]).toEqual(htmlRule)
	expect(nodes[7]).toEqual(idRule)
	expect(nodes[8]).toEqual(classRule)
})

test("decls - no change in position", () => {
	var decl1 = postcss.decl({prop: "color", value: "red"})
	var decl2 = postcss.decl({prop: "display", value: "none"})

	var nodes = [decl1, decl2]
	orderNodes(nodes)
	expect(nodes[0]).toEqual(decl1)
	expect(nodes[1]).toEqual(decl2)
})

test("decl, at, rule order", () => {
	var classRule = postcss.rule({selector:".className"})
	var media1440Rule = postcss.atRule({name:"media", params: "(min-width: 1440px)"})
	var decl1 = postcss.decl({prop: "color", value: "red"})
	var nodes = [classRule, media1440Rule, decl1]
	orderNodes(nodes)
	expect(nodes[0]).toEqual(decl1)
	expect(nodes[1]).toEqual(media1440Rule)
	expect(nodes[2]).toEqual(classRule)
})

test("atrule order: other -> media(small -> big)", () => {
	var media1440Rule = postcss.atRule({name:"media", params: "(min-width: 1440px)"})
	var media960Rule = postcss.atRule({name:"media", params: "(min-width: 960px)"})
	var media600Rule = postcss.atRule({name:"media", params: "(min-width: 600px)"})
	var supportsAtRule = postcss.atRule({name:"supports", params: "(animation-name: test)"})

	var nodes = [media1440Rule, media960Rule, media600Rule, supportsAtRule, ]
	orderNodes(nodes)
	expect(nodes[0]).toEqual(supportsAtRule)
	expect(nodes[1]).toEqual(media600Rule)
	expect(nodes[2]).toEqual(media960Rule)
	expect(nodes[3]).toEqual(media1440Rule)
})

test("rule order: pseudo > html > id > class", () => {
	var classRule = postcss.rule({selector:".className"})
	var idRule = postcss.rule({selector: "#id"})
	var htmlRule = postcss.rule({selector: "html"})
	var pseudo = postcss.rule({ selector: "&:not(.abc)"})

	var nodes = [classRule, idRule, htmlRule, pseudo, ]
	orderNodes(nodes)
	expect(nodes[0]).toEqual(pseudo)
	expect(nodes[1]).toEqual(htmlRule)
	expect(nodes[2]).toEqual(idRule)
	expect(nodes[3]).toEqual(classRule)
})

test("sub nodes in rules", () => {
	var classRule = postcss.rule({selector:".className"})
	var idRule = postcss.rule({selector: "#id"})
	var htmlRule = postcss.rule({selector: "html"})
	var pseudo = postcss.rule({ selector: "&:not(.abc)"})
	var media600Rule = postcss.atRule({name:"media", params: "(min-width: 600px)"})
	var decl1 = postcss.decl({prop: "color", value: "red"})
	var decl2 = postcss.decl({prop: "display", value: "none"})
	pseudo = pseudo.append(media600Rule, decl1, decl2)

	var nodes = [classRule, idRule, htmlRule, pseudo, ]
	orderNodes(nodes)
	expect(nodes[0]).toEqual(pseudo)
		expect(nodes[0].nodes[0]).toEqual(decl1)
		expect(nodes[0].nodes[1]).toEqual(decl2)
		expect(nodes[0].nodes[2]).toEqual(media600Rule)
	expect(nodes[1]).toEqual(htmlRule)
	expect(nodes[2]).toEqual(idRule)
	expect(nodes[3]).toEqual(classRule)
})