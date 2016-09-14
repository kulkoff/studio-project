var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет
    browserSync = require('browser-sync'); //Подключаем Обновление браузера

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/style.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/sass/**/*.scss', ['sass']); 
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});
