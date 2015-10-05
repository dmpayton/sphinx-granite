var express = require('express'),
  execSync = require('child_process').execSync
  gulp = require('gulp'),
  livereload = require('connect-livereload'),
  lrserver = require('tiny-lr')(),
  path = require('path'),
  $ = require('gulp-load-plugins')();

var config = {
  livereloadPort: 35729,
  serverPort: 8081
};

var server = express();
server.use(livereload({
  port: config.livereloadPort
}));
server.use(express.static('./demo_docs/build/'));


gulp.task('bower', function(){ 
  return $.bower().pipe(gulp.dest('./bower_components')) ;
});


gulp.task('sass', function(){
  gulp.src('./sass/granite.sass')
    .pipe($.sass({
      includePaths: ['./bower_components'],
      outputStyle: 'compact'
    })
    .on('error', $.sass.logError))
    .pipe($.concat('granite.css'))
    .pipe(gulp.dest('./granite/static/css/'))
    .pipe($.livereload(lrserver));
});


gulp.task('fonts', function(){
  gulp.src('./bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('granite/static/fonts/'))
  $.livereload(lrserver);
});


gulp.task('build', function(){
  execSync('sphinx-build demo_docs/source demo_docs/build');
  $.livereload(lrserver);
});


gulp.task('serve', function() {
  server.listen(config.serverPort);
  lrserver.listen(config.livereloadPort);
});


gulp.task('watch', function() {
  gulp.watch('./gulpfile.js', ['sass', 'build']);
  gulp.watch('./sass/*', ['sass']);
  gulp.watch('./sass/**/*', ['sass']);
  gulp.watch('./demo_docs/source/**/*.rst', ['build']);
  gulp.watch('./granite/*', ['build']);
  gulp.watch('./granite/**/*', ['build']);
});


gulp.task('default', ['sass', 'build', 'serve', 'watch']);
