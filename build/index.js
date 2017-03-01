const fs = require('fs-extra')
const path = require('path')
const beautifyHtml = require('js-beautify').html_beautify
const { css2scss } = require('./css2scss')

const dir = process.argv[2]
const source = path.join('./pages', dir)
const dist = path.join('./original', dir)
fs.ensureDirSync(dist)
fs.copySync(source, dist)
console.log('copied files')

let html = fs.readFileSync(path.join(dist, 'index.html')).toString()
html = beautifyHtml(html)
fs.writeFileSync(path.join(source, 'index.html'), html)
console.log('beautified html')

console.log('scss conversion started')
let cssPath = path.join(source, 'scss', 'style.scss')
fs.ensureFileSync(cssPath)
fs.ensureFileSync(path.join(source, 'scss', 'index.scss'))
//css2scss(path.join(dist, 'style.css'), cssPath)
console.log('scss conversion ended')