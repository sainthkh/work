const postcss = require('postcss')

exports.selectorPath = (selector, media) => {
	selector = selector.replace(/\s*(:|~|\+|>)\s*/g, '$1')
	selector = selector.replace(/(:|~|\+|>)/g, ' &$1')
	selector = selector.replace(/([^\s:~+>])\./g, '$1 &.')
	var path = selector.split(' ')
	if(media) {
		path.push(media)
	}
	return path
}

exports.createStyleBlocks = (root, media) => {

}