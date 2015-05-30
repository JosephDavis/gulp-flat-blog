var fs = require('fs');
var gulp = require('gulp');
var handlebars = require('handlebars');
var gulpFlatBlog = require('../index');

gulp.task('default', function() {
  return gulp.src('posts/*.md')
    .pipe(gulpFlatBlog({
      single: handlebars.compile(fs.readFileSync('single.hbs', 'utf8')),
      index: handlebars.compile(fs.readFileSync('index.hbs', 'utf8'))
    }))
    .pipe(gulp.dest('public'));
});
