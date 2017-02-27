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
	expect(blocks[2].path).toEqual([".home", ".action", "@media (min-width: 600px)"])
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
	expect(blocks[2].path).toEqual([".home", ".action", "@media (min-width: 600px)"])
	expect(blocks[2].nodes).toEqual(root.nodes[2].nodes[0].nodes)
	expect(blocks[3].path).toEqual([".home", ".action", "@media (min-width: 960px)"])
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
	expect(blocks[2].path).toEqual([".home", "@media (min-width: 600px)"])
	expect(blocks[2].nodes).toEqual(root.nodes[2].nodes[0].nodes)
	expect(blocks[3].path).toEqual([".home", ".action", "@media (min-width: 600px)"])
	expect(blocks[3].nodes).toEqual(root.nodes[2].nodes[1].nodes)
})