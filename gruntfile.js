module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                stripBanners: true
                //separator: ';\r\n'
            },

            dist: {
                src: ['src/*'],
                dest: 'dist/jst.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/jst.min.js': ['src/**/*']
                }
            }
        },

        watch: {
            all:{
                files: ['src/**/*'],
                tasks: ['concat', 'uglify']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

};