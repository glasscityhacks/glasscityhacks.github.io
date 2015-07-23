
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			portal: {
				files: {
					'public/css/glasscityhacks.min.css' : 'src/scss/init.scss'
				}
			}
		},
		clean: {
			css: [
				'public/css'
			],
			js: [
				'public/js'
			]
		},
		uglify: {
			options: {
				sourceMap: true,
				mangle: {
					except: ['jQuery']
				},
				compress: true
			},
			js: {
				files: {
					'public/js/glasscityhacks.min.js': [
						'src/lib/jquery/jquery-2.1.4.min.js',
						'src/lib/scrollspy/jquery.scrollspy.js',
						'src/lib/scrollto/jquery.scrollTo.min.js',
						'src/js/**/*.js'
					]
				}
			}
		},
		includes: {
			views: {
				cwd: 'src/views',
				src: ['**/*.html', '!global/*.html' ],
				dest: 'public',
				flatten: true
			}
		}
	});

	grunt.registerTask('build-views', ['includes:views']);
	grunt.registerTask('build-css', ['clean:css','sass:portal']);
	grunt.registerTask('build-javascript', ['clean:js', 'uglify:js']);
};
