const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');

const scssPath = 'E:/Nhóm Front End/scss/**/*.scss'; // Đường dẫn tuyệt đối
const cssDest = './css';

// Task to compile SCSS to CSS
gulp.task('scss', function() {
  return gulp.src(scssPath) // Nguồn SCSS
    .pipe(sass().on('error', sass.logError)) // Biên dịch SCSS thành CSS
    .pipe(gulp.dest(cssDest)); // Lưu CSS vào thư mục đích
});

// Task theo dõi thay đổi SCSS
gulp.task('watch', function() {
  gulp.watch(scssPath, gulp.series('scss'));
});

// Task mặc định
gulp.task('default', gulp.series('scss', 'watch'));
