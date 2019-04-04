module.exports = function(grunt){
    grunt.initConfig({

	// Copia os arquivos css e javascript para dentro do diretório build/temp
	copy: {
		main: {
			files: [
				{expand: true, src: ['js/**'], dest: 'build/temp'},
				{expand: true, src: ['css/**'], dest: 'build/temp'},
			]
		}		
	},

	// Concatena arquivos css e javscript criando um novo arquivo apra cada um
	concat: {
		scripts: {
			options: {
				separator: ';',
			},
			src: ['build/temp/js/functions.js', 'build/temp/js/default.js'],
			dest: 'build/js/scripts.js'
		},
		template: {
			options: {
				separator: '\n',
			},
			src: ['build/temp/css/template.css', 'build/temp/css/color.css'],
			dest: 'build/css/template.css'
		}
	},

	// Minifica arquivos css
	cssmin: {
		options: {
			mergeIntoShorthands: false,
			roundingPrecision: -1
	  	},
		target: {
			files: {
				'build/css/template.css': ['build/css/template.css']
			}
		}
	},

	// Minifica arquivos javascript
    uglify: {
        'build/js/scripts.js': 'build/js/scripts.js'
    },

	// Altera tag de carregamento de arquivos css e javascript no html para os arquivos minificados
    processhtml: {
		build: {
		    files: {
			'build/index.html' : ['index.html']
		    }
		}
	},

	// Deleta a pasta build/temp
	clean: {
		folder: ['build/temp']
	},

    // Renomeia arquivos css e javascript para evitar cache
    filerev: {
        options: {
            algorithm: 'md5',
            length: 8
        },
        js: {
            src: ['build/js/scripts.js']
        },
        css: {
            src: ['build/css/template.css']
        }        
    },
    
    // Altera chamdas dos arquivos css e javascript no arquivo html
    filerev_replace: {
        options: {
            assets_root: './'
        },
        compiled_assets: {
            src: [
                'build/index.html'
            ]
        }
    }

    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');	
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-filerev-replace');

    grunt.registerTask('default', ['copy', 'concat', 'cssmin', 'uglify', 'processhtml', 'clean', 'filerev', 'filerev_replace']);
};
