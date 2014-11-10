module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['assets/stylesheets/components/*.scss'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['*.html', 'assets/javascripts/**/*.{js,json}', 'assets/stylesheets/*.css','assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				style: 'expanded'
			},
			dist: {
				files: {
					'assets/stylesheets/application.css': ['assets/stylesheets/components/all.scss']
				}
			}
		},
		connect: {
		    server: {
		      options: {
		        port: 3000,
		        base: '',
		        keepalive: true
		      }
		    }
	    }
	});
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('sass', ['sass']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
};