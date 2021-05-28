// load the gulp
const gulp = require('gulp');
const sass  =  require('gulp-sass');

// a task function to transpile SCSS into CSS
function style(){
    // write the logic
    return gulp.src('./scss/**/*.scss')  // read all .scss files from scss directory and its subdirectories
               .pipe(sass()) // load the sass transpiler to transpile .scss into .css
               .pipe(gulp.dest('./css')) // write the output .css files into css folder   
}

// export the task from the gulpfile.js

exports.default = style;