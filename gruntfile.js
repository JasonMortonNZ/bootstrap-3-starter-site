'use strict';

module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Clean files and folders
        clean: {
            all: {
                src: ["assets/css/bootstrap.css", "assets/css/bootstrap.min.css", "assets/js/bootstrap.js", "assets/js/bootstrap.min.js"]
            }
        },

        // Compile LESS (Bootstrap v3.0.0 & Font Awesome v3)
        less: {
            all: {
                options: {
                    yuicompress: true,
                    paths: ["less", "less/font-awesome"]
                },
                files: {
                    "assets/css/bootstrap.css": "less/bootstrap.less"
                }
            }
        },

        // Minify CSS
        cssmin: {
            compress: {
                files: {
                    "assets/css/bootstrap.min.css": ["assets/css/bootstrap.css"]
                }
            }
        },

        // Concatenate JavaScript files
        concat: {
            all: {
                src: ["js/*.js"],
                dest: "assets/js/bootstrap.js"
            }
        },

        // Minify JavaScript
        uglify: {
            all: {
                files: {
                    "assets/js/bootstrap.min.js": ["assets/js/bootstrap.js"]
                }
            }
        },

        // Watch for file changes
        watch: {
            files: [
                "less/**/*.less",
                "js/**/*.js",
                "**/*.html"
            ],
            tasks: ["default"],
            options: {
                nospawn: true,
                livereload: true
            }
        }

    });

    // Load the pluigns the provide the tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', ["clean:all", "less", "cssmin", "concat", "uglify"]);

};