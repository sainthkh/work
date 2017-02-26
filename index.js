const bs = require("browser-sync").create();
const chokidar = require('chokidar')
const exec = require('child_process').exec

chokidar.watch(['./spi/scss'], {
	ignoreInitial: true
})
.on('add', path => {
	compile()
	console.log(`compiled ${path}`)
})
.on('change', path => {
	compile()
	console.log(`compiled ${path}`)
})

function compile() {
	exec('node sass.js', (err, stdout, stderr) => {
		console.log(stdout)
	})
}

bs.init({
    server: "./spi",
	files: [
		"./spi/**/*.html",
		"./spi/**/*.css",
	]
});