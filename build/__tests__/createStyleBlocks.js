const postcss = require('postcss')
const { createStyleBlocks } = require('../css2scss')

test("correct path", () => {
	const style = ".home { display: block; }"
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual([".home"])
	expect(blocks[0].nodes).toEqual(root.nodes[0].nodes)
})

test("correct complicated path", () => {
	const style = ".home .action { display: flex; flex-direction: column; }"
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual([".home", ".action"])
	expect(blocks[0].nodes).toEqual(root.nodes[0].nodes)
})

test("multiple style blocks", () => {
	const style = `
.home {
	display: block;
}

.home .action {
	display: flex;
	flex-direction: column;
}
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual([".home"])
	expect(blocks[0].nodes).toEqual(root.nodes[0].nodes)
	expect(blocks[1].path).toEqual([".home", ".action"])
	expect(blocks[1].nodes).toEqual(root.nodes[1].nodes)
})

test("media query block", () => {
	const style = `
.home {
	display: block;
}

.home .action {
	display: flex;
	flex-direction: row;
}

@media (min-width: 600px) {
	.home .action {
		flex-direction: column;
	}
}
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[2].path).toEqual([".home", ".action", {name:"media", params:"(min-width: 600px)"}])
	expect(blocks[2].nodes).toEqual(root.nodes[2].nodes[0].nodes)
})

test("multiple media query blocks", () => {
	const style = `
.home {
	display: block;
}

.home .action {
	display: flex;
	flex-direction: row;
}

@media (min-width: 600px) {
	.home .action {
		flex-direction: column;
	}
}

@media (min-width: 960px) {
	.home .action {
		flex-wrap: true;
	}
}
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[2].path).toEqual([".home", ".action", {name:"media", params:"(min-width: 600px)"}])
	expect(blocks[2].nodes).toEqual(root.nodes[2].nodes[0].nodes)
	expect(blocks[3].path).toEqual([".home", ".action", {name:"media", params:"(min-width: 960px)"}])
	expect(blocks[3].nodes).toEqual(root.nodes[3].nodes[0].nodes)
})

test("multiple blocks in media query block", () => {
	const style = `
.home {
	display: block;
}

.home .action {
	display: flex;
	flex-direction: row;
}

@media (min-width: 600px) {
	.home {
		display: table;
	}

	.home .action {
		flex-direction: column;
	}
}
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[2].path).toEqual([".home", {name:"media", params:"(min-width: 600px)"}])
	expect(blocks[2].nodes).toEqual(root.nodes[2].nodes[0].nodes)
	expect(blocks[3].path).toEqual([".home", ".action", {name:"media", params:"(min-width: 600px)"}])
	expect(blocks[3].nodes).toEqual(root.nodes[2].nodes[1].nodes)
})

test("other atrule block", () => {
	const style = `
@font-face {
	font-family: "Bitstream Vera Serif Bold";
    src: url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf");
}

@import "abc.css";
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual(["root", {name:"font-face", params: ""}])
	expect(blocks[0].nodes).toEqual(root.nodes[0].nodes)
	expect(blocks[1].path).toEqual(["root", {name:"import", params: `"abc.css"`}])
	expect(blocks[1].nodes).toEqual(root.nodes[1].nodes)
})

test("supports atrule", () => {
	const style = `
@supports (animation-name: test) {
	@keyframes {
		from { margin-top: 50px; }
		to { margin-top: 100px; }
	}
}

@supports (position: sticky) {
	.a {
		width: 100%;
	}

	.b {
		height: 50px;
	}
}
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual(["root", {name:"supports", params:"(animation-name: test)"}])
	expect(blocks[0].nodes).toEqual(root.nodes[0].nodes)
	expect(blocks[1].path).toEqual([".a", {name: "supports", params:"(position: sticky)"}, ])
	expect(blocks[1].nodes).toEqual(root.nodes[1].nodes[0].nodes)
	expect(blocks[2].path).toEqual([".b", {name: "supports", params:"(position: sticky)"}, ])
	expect(blocks[2].nodes).toEqual(root.nodes[1].nodes[1].nodes)
})

test("real example", () => {
	const style = `
@media screen and (min-width: 1600px) {
  article footer {
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
  }

  article footer .disqus {
    padding-left: 0;
  }
}
`
	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual(["article", "footer", {name:"media", params: "screen and (min-width: 1600px)"}])
	expect(blocks[1].path).toEqual(["article", "footer", ".disqus", {name:"media", params: "screen and (min-width: 1600px)"}])
})

test("comma", () => {
	const style =`
a, b, c d:hover {
	margin: 0 10px;
}
`

	const root = postcss.parse(style)
	var blocks = createStyleBlocks(root)
	expect(blocks[0].path).toEqual(["a"])
	expect(blocks[1].path).toEqual(["b"])
	expect(blocks[2].path).toEqual(["c", "d", "&:hover"])
})