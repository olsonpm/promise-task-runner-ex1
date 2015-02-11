'use strict';

//---------//
// Imports //
//---------//

var ptr = require('promise-task-runner')
    , PromiseTask = ptr.PromiseTask
    , PromiseTaskContainer = ptr.PromiseTaskContainer
    , gulp = require('gulp');


//------//
// Init //
//------//

var ptc = new PromiseTaskContainer();


//-------//
// Tasks //
//-------//

var copyHtml = new PromiseTask()
    .id('copyHtml')
    .task(function() {
        gulp.src('src/**/*.html')
            .pipe(gulp.dest('dev'));
    });

ptc.addTasks(copyHtml);


//---------//
// Exports //
//---------//

module.exports = ptc;
