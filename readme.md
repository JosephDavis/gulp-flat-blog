# Gulp Flat Blog

A flat file blog generator gulp plugin. Builds html posts from markdown files.

### Features

- Front-matter
- Markdown (via markdown-it)
- Static Code Highlighting (via Highlight.js)
- Template-engine independent (any function works as a template)

### Easy to use:

Simply pass in a `single` and `index` template in a config object.

```javascript
var fs = require('fs');
var gulp = require('gulp');
var handlebars = require('handlebars');
var gulpFlatBlog = require('gulp-flat-blog');

gulp.task('default', function() {
  return gulp.src('posts/*.md')
    .pipe(gulpFlatBlog({
      single: handlebars.compile(fs.readFileSync('single.hbs', 'utf8')),
      index: handlebars.compile(fs.readFileSync('index.hbs', 'utf8'))
    }))
    .pipe(gulp.dest('public'));
});
```

### Installation

```
npm install gulp-flat-blog
```
