var bs = require("browser-sync").create();

bs.init({
    server: "./spi",
	files: "./spi/**/*.*"
});