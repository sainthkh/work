const bs = require("browser-sync").create();
const chokidar = require('chokidar')
const exec = require('child_process').exec
const path = require('path')
let dir = process.argv[2]
dir = path.join('pages', dir)

chokidar.watch([path.join(dir, 'scss')], {
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
	exec('node sass.js ' + dir, (err, stdout, stderr) => {
		console.log(stdout)
		console.log(stderr)
	})
}

bs.init({
    server: dir,
	files: path.join(dir, "/**/*.*"),
});