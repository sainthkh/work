const { selectorPath } = require('../css2scss')

test("splitted by blanks", () => {
	var path = selectorPath(".a .b .c")
	expect(path[0]).toBe('.a')
	expect(path[1]).toBe('.b')
	expect(path[2]).toBe('.c')
})

test("selectors with special characters", () => {
	var path = selectorPath(".a .b > a .c:hover + .d~ .e")
	expect(path[0]).toBe('.a')
	expect(path[1]).toBe('.b')
	expect(path[2]).toBe('&>a')
	expect(path[3]).toBe('.c')
	expect(path[4]).toBe('&:hover')
	expect(path[5]).toBe('&+.d')
	expect(path[6]).toBe('&~.e')
})

test("consecutive classes", () => {
	var path = selectorPath("a.b .c.d.e")
	expect(path[0]).toBe("a")
	expect(path[1]).toBe("&.b")
	expect(path[2]).toBe(".c")
	expect(path[3]).toBe("&.d")
	expect(path[4]).toBe("&.e")
})

test("media query added at the back", () => {
	var path = selectorPath("a:hover", {name: "media", params:"(min-width: 600px)"})
	expect(path[0]).toBe("a")
	expect(path[1]).toBe("&:hover")
	expect(path[2]).toEqual({name: "media", params:"(min-width: 600px)"})
})

test("double colon", () => {
	var path = selectorPath("a b::before")
	expect(path[0]).toBe("a")
	expect(path[1]).toBe("b")
	expect(path[2]).toBe("&::before")
})

test("pseudo-class with parenthesis 1", () => {
	var path = selectorPath("a:not(.hi):not(.you)")
	expect(path[0]).toBe("a")
	expect(path[1]).toBe("&:not(.hi)")
	expect(path[2]).toBe("&:not(.you)")
})

test("pseudo-class with parenthesis 2", () => {
	var path = selectorPath("a:not(.hi .you)")
	expect(path[0]).toBe("a")
	expect(path[1]).toBe("&:not(.hi .you)")
})