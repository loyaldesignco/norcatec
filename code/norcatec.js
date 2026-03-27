var g = {
	id: document.body.getAttribute('id')
}
var hOver =	function(){
	  $(this).find('>ul').fadeIn('fast');
	}
var hOut =	function(){
	   $(this).find('>ul').fadeOut('fast');
	}
var hoverConfig = {    
     sensitivity: 7,    
     interval: 100,
     timeout: 300,   
     over: hOver,
     out: hOut
};	  
$('#mainMenu > li.hasSub').hoverIntent(hoverConfig);
$('#mainMenu > li').not('li.hasSub').click(function() {
	var loc = $(this).find('a').not('a.cur').attr('href');
	if (loc) { location = $(this).find('a').not('a.cur').attr('href') };	
});
if (g.id=='home') {
	var imgTotal = 4; imgCount = 1, ctner = $('#mainImg'),
	loadedImg = ctner.find('img')[0].getAttribute('alt');
	while (imgCount < imgTotal+1) {
		if (imgCount !== parseInt(loadedImg)){
			ctner.append('<img src="images/home_ss/'+imgCount+'.jpg" alt="" width="960" height="414">');
		}
		imgCount++;
	};
	ctner.cycle({
		speed: 4000,
		timeout: 3500
	});
	
	$(function() {
		$('#content3Wrap').append($('<div id="sliderBtnLeft"/><div id="sliderBtnRight"/>'));
		$('.initSlider').jCarouselLite({
			btnNext: "#sliderBtnRight",
			btnPrev: "#sliderBtnLeft",
			visible: 6
		});
	});
	$('#content2Wrap a').append($('<span/>'));
	$('#content2Wrap a').hover( function() {
		$(this).find('span').addClass('hover');
	}, function() {
		$(this).find('span').removeClass('hover');
	});
}

if (g.id=='supply') {
	$('<a id="slideShowPrev"></a><a id="slideShowNext"></a>').appendTo('#supplySlideShowWrap');
	var imgCount = 2, imgTotal = 19, ctner = $('#supplySlideShow'),
	cyclePrefs = {
		speed: 2000,
		timeout: 3500,
		pause: 1,
		next: $('#slideShowNext'),
		prev: $('#slideShowPrev')
	};
	while (imgCount < imgTotal+1) {
		ctner.append('<img src="images/supply_ss/'+imgCount+'.jpg" alt="product photo">');
		imgCount++;
	};
	ctner.cycle(cyclePrefs);
}
var setUpHrefs = function() {
	$('a[href]:not(.nosource)').each( function() { 
		var $t = $(this), 
		h = this.href,
		loc = location.href;
		
		if ( 
			h===loc || 
			((h.indexOf('index') > -1) && (g.id==='home')) 
			) 
		{
			$t.addClass('cur').click(function(e) {
				e.preventDefault();
			});
		}
	});
}
setUpHrefs();
//START IE
/*@cc_on
//START IE6
if (parseInt(jQuery.browser.version)===6) { 
	$('#mainMenu > li.f').hover( function() {
		$(this).addClass('curIE6');
	}, function() {
		$(this).removeClass('curIE6');
	});
}//end IE6
@*/
//end IE

