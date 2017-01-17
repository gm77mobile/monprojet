module.exports = function(grunt) {

'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    
    // Task configuration.
    mkdir: {
      all: {
        options: {
          create: ['image', 'css', 'test', 'dist']
        },
      },
    },

    clean: {
      before: {
        src: ["dist", "tmp"]
      },   
      after: {
        src: ["tmp"]    
      }
    },

    copy: {
      main: {
          files: [
       
            {expand: true, src: ['templates/*'], dest: 'dist/'},
            {expand: true, src: ['lib/*'], dest: 'dist/'},
            {expand: true, src: ['css/*'], dest: 'dist/'},
            {expand: true, src: ['fonts/*'], dest: 'dist/'},
            {expand: true, src: ['script/*'], dest: 'dist/'},    
            {expand: true, flatten: true, src: ['src/*'], dest: 'dist/'}                   
        ],        
      },
    }

});
    
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 
    ['clean:before',
    'mkdir',
    'copy']);
};
