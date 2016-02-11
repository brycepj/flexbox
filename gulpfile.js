var gulp = require('gulp');
var ts = require('gulp-typescript');

// TODO: Factor this and paths out into gulp/ dir
var tsProject = ts.createProject({
	declaration: false,
	noExternalResolve: true,
	target: "ES5",
	module: "system",
	moduleResolution: "node",
	sourceMap: true,
	emitDecoratorMetadata: true,
	experimentalDecorators: true,
	removeComments: false,
	noImplicitAny: false,
	//exclude: [ "node_modules"]
});

var paths = {
	ts_in: 'ng_refactor/app/**/*.ts',
	ts_out: 'ng_refactor/public'
};

gulp.task('tsc_app', function () {
	return gulp.src(paths.ts_in)
		.pipe(ts(tsProject))
		.pipe(gulp.dest(paths.ts_out));
});

gulp.task('build', ['tsc_app']);
