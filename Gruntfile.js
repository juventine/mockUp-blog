module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      development: {
        files: {
            "css/styles_new.css": "less/styles.less"
          }
      },
    },

    watch: {
      css: {
        files: ['less/*.less'],
        tasks: ['compileLess'],
        options: {
          spawn: false,
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      no_dest: {
        src: "css/styles_new.css"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.task.registerTask('compileLess', ['less','autoprefixer']);
  grunt.task.registerTask('dev', ['compileLess','watch']);

};