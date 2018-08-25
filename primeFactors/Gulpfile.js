var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var run = require('gulp-run');
// var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var phpunit = require('gulp-phpunit');

gulp.task('phpunit', function() {
  var options = {
    debug:             true,
    statusLine:        true,
    configurationFile: './phpunit.xml'
  };

  gulp.src('')
    .pipe(run('clear'))
    .pipe(phpunit('', options))
    .on('error', notify);

});

gulp.task('watch', function() {
    gulp.watch(['*.php','tests/*.php', 'app/*.php'], ['phpunit']);
});

gulp.task('default', ['phpunit', 'watch']);

// gulp.task('test', function() {
//     gulp.src('*.php')
//         .pipe(run('clear'))
//         .pipe(phpunit('', {notify: true }))
//         .on('error', notify.onError({
//             title: "Crap",
//             message: "Your tests failed, Jeffrey!",
//             icon: __dirname + '/fail.png'
//         }))
//         .pipe(notify({
//             title: "Success",
//             message: "All tests have returned green!"
//         }));
// });

