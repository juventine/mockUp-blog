module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      development: {
        options: {
          browsers: ['last 2 versions']
        },
      files: {
          "css/styles_new.css": "less/styles.less"
        }
      },
    },

    watch: {
      css: {
        files: ['less/styles.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      files: {
        'css/styles.css': 'css/styles_new.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.task.registerTask('dev', ['watch','less','autoprefixer']);

};