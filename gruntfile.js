module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! \r\n' +
        '* <%= pkg.name %> v<%= pkg.version %>\r\n' +
        '* <%= pkg.repository.url %>\r\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\r\n' +
        '* Licensed MIT\r\n'+
        '*/\r\n',

        concat: {
            options: {
                stripBanners: true,
                //separator: ';\r\n',
                banner : '<%= banner %>'
            },

            dist: {
                src: ['src/*'],
                dest: 'dist/jst.js'
            }
        },

        uglify: {
            options: {
                mangle: false,
                banner : '<%= banner %>'
            },
            my_target: {
                files: {
                    'dist/jst.min.js': ['src/*.js']
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