const sass = require('node-sass')
const fs = require('fs')
const dir = process.argv[2]

let result = sass.renderSync({
	file: `${dir}/scss/index.scss`,
	includePaths: [`${dir}/scss`]
})
fs.writeFileSync(`${dir}/style.css`, result.css)