module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        browserify: {
            "./dist/SVGConfigViewer.js": ["./src/SVGConfigViewer.js"],
            "./dist/sample.js": ["./sample.js"]
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
};