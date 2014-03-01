module.exports = function(grunt) {
    var timestamp = new Date().getTime();

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



                jshint: {
              files: ['js/*.js'],
              options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                globals: {
                  jQuery: true,
                  console: true,
                  module: true,
                  document: true
                }
              }
        },
            shell: {

                build: {
                    command: [
                    'git add .',
                    'git commit -m "<%= timestamp %>"',
                    'git push origin master'
                    ].join('&&')
                }

                },


        watch: {
            scripts:    {
                files: ['ts/*.ts'],
                tasks: ['typescript','jshint'],
                options: {
                    livereload:true,
                    spawn: false,
                    },
                },

            css: {
                files: ['scss/**/*.scss','*.html'],
                tasks: ['sass','autoprefixer'],
                options: {
                    livereload:true,
                    spawn: false,
                }
            }
                },

        sass: {
            dist: {
            options: {
            compass: false,
            style: 'nested',
                    },
            files: {
            'css/build/style.css': 'scss/pages/style.scss'
                    }
                    }
                },

        autoprefixer: {

            options: {
            browsers: ['last 2 version']
                    },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/build/*.css',
                dest: 'css/build/prefixed/'
              }
            },
        typescript: {
              base: {
                src: 'ts/pkg.ts',
                dest: 'js/main.js'
              }
    },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-typescript');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('dev', ['typescript','jshint','sass','autoprefixer','watch']);

  grunt.registerTask('build', ['typescript','jshint','sass','autoprefixer','shell']);

};
