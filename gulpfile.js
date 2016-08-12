var gulp = require('gulp');

var angular2 = 'public/javascripts';

gulp.task('angular2', function() {
    // Angular 2 Framework
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(angular2 + '/@angular'));

    //core-js
    gulp.src('node_modules/core-js/**')
        .pipe(gulp.dest(angular2 + '/core-js/'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(angular2 + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(angular2 + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(angular2 + '/systemjs/'));

    //angular2-in-memory-web-api
    gulp.src('node_modules/angular2-in-memory-web-api/**')
        .pipe(gulp.dest(angular2 + '/angular2-in-memory-web-api/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(angular2 + '/zone.js/'));
});

gulp.task('default', ['angular2']);