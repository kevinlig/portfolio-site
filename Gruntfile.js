module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		react: {
			// combine the JSX files into one temporary file
			combined_file_output: {
				files: {
					'js/build/combinedjsx.js': [
						'js/components/HeaderComponents.jsx',
						'js/components/BodyComponents.jsx',
						'js/components/AppWrapper.jsx',
						'js/app/app.jsx',
					]
				}
			}
		},
		concat: {
			// combine all the JS files into one
			options: {
				separator: ';'
			},
			dist: {
				src: ['js/vendor/jquery-1.11.1.min.js','js/vendor/react.min.js','js/vendor/jquery.bxslider.min.js','js/build/combinedjsx.js'],
				dest: 'js/app.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-react');
};