// Include gulp and gulp plugin
var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),	
	rename = require('gulp-rename'),	
	cache = require('gulp-cache'),
	cssmin = require('gulp-cssmin'),
	del = require('del'),
	newer = require('gulp-newer'),
	sourcemaps = require('gulp-sourcemaps'),
	pleeease   = require('gulp-pleeease'),	
	size = require('gulp-size'),	
	browserSync = require('browser-sync').create();
	
// set reload variable
var reload = browserSync.reload; 	

//set assest folder path	
var mainsrc = 'assets',
	msrc = mainsrc+'/';
var path = {
			scriptSrcout : msrc+'js',
			cssSrcout : msrc+'css',
			imgSrc : msrc+'img/**/*',
			imgoutSrc : msrc+'images',
			fancyimgsrc : msrc+'fancybox'
			};
	
//set pleeease option
var pleeasOpt = {browsers: ['last 2 versions','> 1%'],
				rem:['16px'],
				pseudoElements:true,
				mqpacker:true
				};
	
//Set variable for login page script path
var loginSrcpath = [msrc+'fancybox/jquery.fancybox.js',
	msrc+'js/jquery_msgbox_min.js',
	msrc+'js/jstz-1.0.4.min.js',
	msrc+'js/ajaxupload.js',
	msrc+'js/jq-ajax-progress.min.js',
	msrc+'js/jquery.expander.js',
	msrc+'js/jquery.flip.js',
	msrc+'js/jquery.richtextarea.js',
	msrc+'countdown/jquery.countdown.js',
	msrc+'jcarousel/jquery.jcarousel.min.js',
	msrc+'rating/jquery.rating.js',
	msrc+'gallery/js/jquery.elastislide.js',
	msrc+'menu/jquery.navgoco.min.js',
	msrc+'tokeninput/jquery.tokeninput.js',
	msrc+'scrollbar/jquery.nanoscroller.js',
	msrc+'js/common.js',
	msrc+'js/commonext.js']; 	
	
//Set variable for Home page script path
var homeSrcpath = [msrc+'fancybox/jquery.fancybox.js',
	msrc+'js/jquery_msgbox_min.js',
	msrc+'js/ajaxupload.js',
	msrc+'js/jq-ajax-progress.min.js',
	msrc+'js/jquery.expander.js',
	msrc+'js/jquery.flip.js',
	msrc+'js/jquery.richtextarea.js',
	msrc+'countdown/jquery.countdown.js',
	msrc+'jcarousel/jquery.jcarousel.min.js',
	msrc+'rating/jquery.rating.js',
	msrc+'gallery/js/jquery.elastislide.js',
	msrc+'crop/cropbox.js',
	msrc+'menu/jquery.navgoco.min.js',
	msrc+'tokeninput/jquery.tokeninput.js',
	msrc+'js/screenfull.js',
	msrc+'js/jquery.simple-color-picker.js',
	msrc+'scrollbar/jquery.nanoscroller.js',
	msrc+'js/common.js',
	msrc+'js/commonext.js'];

//Set variable for Post POPUP script path
var postSrcpath = [msrc+'js/jquery.stylish-select.js',
	msrc+'colorpicker/js/colorpicker.min.js',
	msrc+'js/ajaxupload.js',
	msrc+'js/htmlEncode.js',
	msrc+'js/jquery_msgbox_min.js',
	msrc+'countdown/jquery.countdown.js',
	msrc+'js/date.format.js',
	msrc+'datepicker/jquery.ui.core.js',
	msrc+'datepicker/jquery.ui.datepicker.js',
	msrc+'datepicker/jquery-ui-timepicker-addon.js',
	msrc+'rating/jquery.rating.js',
	msrc+'tokeninput/jquery.tokeninput.js',
	msrc+'js/jquery.simple-color-picker.js',
	msrc+'js/common.js',
	msrc+'js/post.js'];

//Set variable for Event POPUP script path
var eventSrcpath = [msrc+'js/jquery_msgbox_min.js',
	msrc+'fancybox/jquery.fancybox.js',
	msrc+'js/ajaxupload.js',
	msrc+'js/jq-ajax-progress.min.js',
	msrc+'rating/jquery.rating.js',
	msrc+'js/jquery-ui.js',
	msrc+'js/jquery.expander.js',
	msrc+'js/jquery.flip.js',
	msrc+'js/jquery.richtextarea.js',
	msrc+'countdown/jquery.countdown.js',
	msrc+'tokeninput/jquery.tokeninput.js',
	msrc+'scrollbar/jquery.nanoscroller.js',
	msrc+'menu/jquery.navgoco.min.js',
	msrc+'js/common.js',
	msrc+'js/commonext.js'];	
	
//Set variable for show Planner POPUP script path
var plannerSrcpath = [msrc+'js/cal/jquery.js',
	msrc+'js/cal/Common.js',
	msrc+'js/cal/datepicker_lang_US.js',
	msrc+'js/cal/jquery.datepicker.js',
	msrc+'js/cal/jquery.alert.js',
	msrc+'js/cal/jquery.ifrmdailog.js',
	msrc+'js/cal/wdCalendar_lang_US.js',
	msrc+'js/cal/jquery.calendar.js'];
	
//Set variable for view Planner POPUP script path
var vplannerSrcpath = [msrc+'js/cal/jquery.js',
	msrc+'js/cal/Common.js',
	msrc+'js/cal/jquery.form.js',
	msrc+'js/cal/jquery.validate.js',
	msrc+'js/cal/datepicker_lang_US.js',
	msrc+'js/cal/jquery.datepicker.js',
	msrc+'js/cal/jquery.dropdown.js',
	msrc+'js/cal/jquery.colorselect.js'];	
	
//Set variable for mobile script path
var mobileSrcpath =	[msrc+'js/jquery.ui.touch-punch.min.js',
  msrc+'js/jquery.ui.touch-punch.hack.js',
  msrc+'js/scrollfix.js'];
  
//Set variable for main script(home) path
var mhomeSrcpath = [msrc+'crop/yui-min.js',
  msrc+'menu/highlight.pack.js',
  msrc+'menu/demo.js',
  msrc+'js/jquery-ui.js',
  msrc+'js/jquery.imagesloaded.js',
  msrc+'js/jquery.wookmark.js',
  msrc+'fancybox/jquery.mousewheel-3.0.6.pack.js'];
  
//Set variable for css path
var cssPath = [msrc+'css/main.css',msrc+'css/responsive.css'];

//Set variable for Post channel css path
var postCsspath = [msrc+'colorpicker/css/colorpicker.css',
	msrc+'datepicker/jquery-ui-timepicker-addon.css',
	msrc+'css/main.css',
	msrc+'css/postchannel.css'];

//Set variable for Planner css path
var plannerCsspath = [msrc+'css/cal/dailog.css',
	msrc+'css/cal/calendar.css',
	msrc+'css/cal/dp.css',
	msrc+'css/cal/alert.css',
	msrc+'css/cal/main.css'];	
	
//Set variable for View Planner css path
var vplannerCsspath = [msrc+'css/cal/main.css',
	msrc+'css/cal/dp.css',
	msrc+'css/cal/dropdown.css',
	msrc+'css/cal/colorselect.css'];	
	
//Clean CSS, JS files and image folder
gulp.task('clean',function(){
	return del.sync([path.scriptSrcout+'/login.min.js',
					path.scriptSrcout+'/front.min.js',
					path.scriptSrcout+'/all.min.js',
					path.scriptSrcout+'/mall.min.js',
					path.scriptSrcout+'/post.min.js',
					path.scriptSrcout+'/event.min.js',
					path.scriptSrcout+'/cal/showplanner.min.js',
					path.scriptSrcout+'/cal/viewplanner.min.js',
					path.cssSrcout+'/style.css',
					path.cssSrcout+'/pstyle.css',
					path.cssSrcout+'/cal/plannerstyle.css',
					path.cssSrcout+'/cal/vplannerstyle.css',
					//path.imgoutSrc					
					]);
});	
// Browser sync
gulp.task('serve',['styles'], function() {
    browserSync.init({
        server:"./"
    });	
	gulp.watch("assets/css/*",['styles']);
	gulp.watch("assets/css/*".on('change',reload));
});	

//Optimize images of image folder	
gulp.task('images', function() {
	return gulp.src(path.imgSrc)
		.pipe(size({title:'Images in:'}))
		.pipe(newer(path.imgoutSrc))
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest(path.imgoutSrc))
		.pipe(size({title:'Images out:'}));
});
//Optimize images of fancy box image folder
gulp.task('fancyimages', function() {	
	return gulp.src(path.fancyimgsrc+'/**/*')
		.pipe(size({title:'Fancy images in:'}))
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest(path.fancyimgsrc))
		.pipe(size({title:'Fancy images out:'}))
		;

});
// Concatenate & Minify CSS
gulp.task('styles', function () {	
	gulp.src(cssPath, { base: mainsrc })
		.pipe(size({title:'Main Style in:'}))
		.pipe(sourcemaps.init())		
		.pipe(newer(path.cssSrcout+'/style.css'))	
		.pipe(pleeease(pleeasOpt))
		.pipe(concat('style.css'))
		.pipe(cssmin())	
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(path.cssSrcout))
		.pipe(size({title:'Main Style out:'}))
		.pipe(reload({stream:true}));
});
// Concatenate & Minify CSS Post channel
gulp.task('poststyles', function () {	
	gulp.src(postCsspath, { base: mainsrc })
		.pipe(size({title:'Post Channel Style in:'}))
		.pipe(sourcemaps.init())		
		.pipe(newer(path.cssSrcout+'/pstyle.css'))
		.pipe(pleeease(pleeasOpt))
		.pipe(concat('pstyle.css'))
		.pipe(cssmin())	
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(path.cssSrcout))
		.pipe(size({title:'Post Channel Style out:'}));
});
// Concatenate & Minify CSS Show planner
gulp.task('plannerstyles', function () {	
	gulp.src(plannerCsspath, { base: mainsrc })
		.pipe(size({title:'Show planner Style in:'}))
		.pipe(sourcemaps.init())		
		.pipe(newer(path.cssSrcout+'/cal/plannerstyle.css'))
		.pipe(pleeease(pleeasOpt))
		.pipe(concat('plannerstyle.css'))
		.pipe(cssmin())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(path.cssSrcout+'/cal'))
		.pipe(size({title:'Show planner Style out:'}))
		;
});
// Concatenate & Minify CSS View planner
gulp.task('vplannerstyles', function () {	
	gulp.src(vplannerCsspath, { base: mainsrc })
		.pipe(size({title:'View planner Style in:'}))
		.pipe(sourcemaps.init())		
		.pipe(newer(path.cssSrcout+'/cal/vplannerstyle.css'))
		.pipe(pleeease(pleeasOpt))
		.pipe(concat('vplannerstyle.css'))
		.pipe(cssmin())	
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(path.cssSrcout+'/cal'))
		.pipe(size({title:'View planner Style out:'}))
		;
});
// Concatenate & Minify JS login
gulp.task('loginscripts', function() {	
    return gulp.src(loginSrcpath, { base: mainsrc })		
		.pipe(size({title:'Login script in:'}))
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/login.min.js'))
		.pipe(concat('login.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
		.pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.scriptSrcout))
		.pipe(size({title:'Login script out:'})) 
		;
});
// Concatenate & Minify JS Home
gulp.task('homescripts', function() {	
    return gulp.src(homeSrcpath, { base: mainsrc })		
		.pipe(size({title:'Home script in:'}))
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/front.min.js'))
		.pipe(concat('front.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
		.pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.scriptSrcout))
		.pipe(size({title:'Home script out:'})) 
		;
});
// Concatenate & Minify JS Main home
gulp.task('scripts', function() {	
	return gulp.src(mhomeSrcpath, { base: mainsrc })
		.pipe(size({title:'Main Home script in:'})) 
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/all.min.js'))
		.pipe(concat('all.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(path.scriptSrcout))
		.pipe(size({title:'Main Home script out:'})) 
		;
});
// Concatenate & Minify JS Mobile
gulp.task('mscripts', function() {	
	return gulp.src(mobileSrcpath, { base: mainsrc })		
		.pipe(size({title:'Mobile script in:'})) 
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/mall.min.js'))
		.pipe(concat('mall.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(path.scriptSrcout))
		.pipe(size({title:'Mobile script out:'})) 
		;
});
// Concatenate & Minify JS Postchannel
gulp.task('postscripts', function() {	
    return gulp.src(postSrcpath, { base: mainsrc })
		.pipe(size({title:'Post Channel script in:'})) 
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/post.min.js'))
		.pipe(concat('post.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
		.pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.scriptSrcout))
		.pipe(size({title:'Post Channel script out:'})) 
		;
});
// Concatenate & Minify JS Event POPUP
gulp.task('eventscripts', function() {	
    return gulp.src(eventSrcpath, { base: mainsrc })
		.pipe(size({title:'Event POPUP script in:'})) 
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/event.min.js'))
		.pipe(concat('event.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
		.pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.scriptSrcout))
		.pipe(size({title:'Event POPUP script out:'})) 
		;
});
// Concatenate & Minify JS Show planner POPUP
gulp.task('splannerscripts', function() {	
    return gulp.src(plannerSrcpath, { base: mainsrc })
		.pipe(size({title:'Show Planner POPUP script in:'})) 
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/cal/showplanner.min.js'))
		.pipe(concat('showplanner.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
		.pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.scriptSrcout+'/cal'))
		.pipe(size({title:'Show Planner POPUP script out:'})) 
		;
});
// Concatenate & Minify JS View planner POPUP
gulp.task('vplannerscripts', function() {	
    return gulp.src(vplannerSrcpath, { base: mainsrc })
		.pipe(size({title:'View Planner POPUP script in:'})) 
		.pipe(sourcemaps.init())
		.pipe(newer(path.scriptSrcout+'/cal/viewplanner.min.js'))
		.pipe(concat('viewplanner.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
		.pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.scriptSrcout+'/cal'))
		.pipe(size({title:'View Planner POPUP script out:'})) 
		;
});
//Watch all task
gulp.task('watch', function() { 
	// Initialize Browsersync
  browserSync.init({
		proxy: "http://52.27.115.128/",		
	  });
  gulp.watch(eventSrcpath, ['eventscripts']);  
  gulp.watch(postSrcpath, ['postscripts']);  
  gulp.watch(mobileSrcpath, ['mscripts']);  
  gulp.watch(mhomeSrcpath, ['scripts']); 
  gulp.watch(homeSrcpath, ['homescripts']);  
  gulp.watch(loginSrcpath, ['loginscripts']);  
  gulp.watch(plannerSrcpath, ['splannerscripts']);  
  gulp.watch(vplannerSrcpath, ['vplannerscripts']);  
  gulp.watch(cssPath, ['styles', reload]);  
  gulp.watch(postCsspath, ['poststyles']); 
  gulp.watch(plannerCsspath, ['plannerstyles']);	
  gulp.watch(vplannerCsspath, ['vplannerstyles']); 
  //gulp.watch(imgSrc, ['images']); 
  //gulp.watch(msrc+'fancybox/**/*', ['fancyimages']);
  gulp.watch(['assets/css/*']).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['clean','loginscripts',
'scripts',
'homescripts',
'mscripts',
'styles',
'postscripts',
'splannerscripts',
'vplannerscripts',
'poststyles',
'eventscripts',
'plannerstyles',
'vplannerstyles',
'watch']);
