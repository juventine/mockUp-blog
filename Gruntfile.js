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
        files: ['less/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          spawn: false,
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie10']
      },
      files: {
        'css/styles_new.css' : 'less/styles.less'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.task.registerTask('dev', ['less','autoprefixer']);

};