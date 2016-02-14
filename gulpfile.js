
// ---

var gulp = require('gulp');
var path = require('path');
var mocha = require('gulp-mocha');
var clean = require('gulp-clean');

var ts = require('gulp-typescript');  // https://www.npmjs.com/package/gulp-typescript
var merge = require('merge2');  // https://www.npmjs.com/package/merge2

// ---

var tsProject1 = ts.createProject('tsconfig.json', {
    typescript: require('typescript'), // use installed typescript compiler
    //sortOutput: true
});

var tsProject2 = ts.createProject('tsconfig.json', {
    typescript: require('typescript'), // use installed typescript compiler
    //sortOutput: true
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// ---

gulp.task('clean', ['clean-devxbase', 'clean-devxbase-test'], function () {
});

gulp.task('clean-devxbase', function () {
	return gulp.src('.devxbase/src/**/*.js', {read: false})
		.pipe(clean());
});

gulp.task('clean-devxbase-test', function () {
	return gulp.src('.devxbase/test/**/*.js', {read: false})
		.pipe(clean());
});

// ---

gulp.task('compile', ['compile-devxbase', 'compile-devxbase-test'], function () {
});

gulp.task('compile-devxbase', ['clean-devxbase'], function() {
    var tsResult = gulp.src('.devxbase/src/**/*.ts')
		.pipe(ts(tsProject1));
        
    // Merge the two output streams, so this task is finished when the IO of both operations are done. 
    return merge([
        //tsResult.dts.pipe(gulp.dest('.devxbase/build')),
        tsResult.js.pipe(gulp.dest('.devxbase/src'))
    ]);
});

gulp.task('compile-devxbase-test', ['clean-devxbase-test'], function() {
    var tsResult = gulp.src('.devxbase/test/**/*.ts')
		.pipe(ts(tsProject2));
        
    // Merge the two output streams, so this task is finished when the IO of both operations are done. 
    return merge([
        tsResult.js.pipe(gulp.dest('.devxbase/test'))
    ]);
});

// --

//gulp.task('karma', function(done) {
//    new Server({
//       configFile: __dirname + '/karma.conf.js',
//       singleRun: true 
//    }, done).start();
//})

// ---

gulp.task('mocha', ['compile'],  function() {
    return gulp.src('./.devxbase/test/*.js', { read: false })
        // glup-mocha needs filepaths, so you can't have any plugins before it
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', handleError)
    
});

// --

gulp.task('default', ['mocha'], function () {
    // 'test'
    // 'karma'
    // 'watch'
});

gulp.task('watch', ['compile-ts'], function () {
    gulp.watch('.devxbase/src/**/*.ts', ['compile-devxbase']);
    gulp.watch('.devxbase/test/**/*.ts', ['compile-devxbase-test']);
});

gulp.task('test', [], function(){
    console.log('Testing...');
    var mainTest = require('./.devxbase/test/mainTest.js');
    console.log(mainTest);
});