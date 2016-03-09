
var gulp = require('gulp');
var bemGulp = require('@bem/gulp');
var concat = require('gulp-concat');

var examleProject = bemGulp({
    bemconfig: {
        'common.blocks': {scheme: 'nested'}
    }
});

var exampleBundle = examleProject.bundle({
    path: 'bundles/example',
    decl: 'example.bemjson.js'
});

gulp.task('example-js', function() {
    return exampleBundle.src({
            tech: 'js',
            extensions: ['.js']
        })
        .pipe(concat(exampleBundle.name() + '.js'))
        .pipe(gulp.dest(exampleBundle.path()));
});


gulp.task('example', gulp.series('example-js'));

gulp.task('default', gulp.series('example'));
