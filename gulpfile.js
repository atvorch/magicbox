const gulp = require('gulp');  
const browserSync = require('browser-sync');

const path = {
	watch: {
		html: 'index.html',
	}
};

//run browsersync
gulp.task('browser-sync', function() {  
    browserSync.init({
        server: {
            baseDir: "./"
        }
	});

	gulp.watch(path.watch.html).on('change', browserSync.reload);
});

gulp.task('dev-server', ['browser-sync']);
