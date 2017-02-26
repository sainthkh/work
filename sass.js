const sass = require('node-sass')
const fs = require('fs')

let result = sass.renderSync({
	file: "./spi/scss/index.scss",
	includePaths: ["./spi/scss"]
})
fs.writeFileSync('./spi/style.css', result.css)