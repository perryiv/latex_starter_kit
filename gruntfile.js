
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2016, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Grunt configuration file.
//
////////////////////////////////////////////////////////////////////////////////

/* eslint-env node */

module.exports = function ( grunt )
{
  // Initialize all the scripts we can run.
  var scripts = require ( "./package.json" ).scripts;
  var commands = {};
  for ( var key in scripts )
  {
    commands[key] = { cmd: "npm", args: [ "run", key ] };
  }

  // All configuration goes here
  var config = {

    // The arbitrary commands to run, defined above.
    run: commands,

    // Configure what files to watch, and what to do when they change.
    watch: {

      // The scripts are a combination of the files to watch and the
      // comands to run when they change.
      scripts: {

        // The files to watch.
        files: [

          // Configuration files.
          "ReadMe.md",
          "gruntfile.js",
          "package.json",

          // Classes, templates, styles, etc.
          "latex/**/*.cls",

          // Source of the paper.
          "source/**/*.tex",
          "source/**/*.bib"
        ],

        // Do these tasks when a file changes.
        tasks: [
          "run:clear",
          "run:clean",
          "run:build",
          "run:clean"
        ],

        // Do not spawn a child process to run the tasks.
        options: { spawn: false }
      }
    }
  };

  // All configuration goes here
  grunt.initConfig ( config );

  // Tell grunt we plan to use these plug-ins.
  grunt.loadNpmTasks ( "grunt-run" );
  grunt.loadNpmTasks ( "grunt-contrib-watch" );

  // What grunt should do when we type "grunt" into the terminal.
  grunt.registerTask ( "default", [ "run:build" ] );
};
