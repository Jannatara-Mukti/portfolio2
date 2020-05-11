// STICKY MENU
$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }else {
            $('nav').removeClass('sticky');
       }
});


//Slider Show
$('.slider-1').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplay: 1000,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
 });

$('.slider-2').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:30,
    responsive:{
		1200:{
			items:3	
		},
        768:{
            items:2
        },
		480:{
			items:1
		}
    }
});

//HAMBURGER MENU
function closeMenu() {
    document.getElementById('overlayContainer').style.height = "0%";
    document.getElementById('overlayContainer').style.width = "0%";
}

function openMenu() {
    document.getElementById('overlayContainer').style.height = "100%";
    document.getElementById('overlayContainer').style.width = "100%";
}

//SCROLLIFY
 $(function() {
          $.scrollify({
            section : ".scrollify",
			setHeights: false,
			updateHash: false,
			overflowScroll: true,

          });
 });


//SMOOTH SCROLL
$(function(){
	$('.navbar a').on('click', function(){
		$('html, body').animate({
			scrollTop: $($.attr(this,'href')).offset().top
		}, 500);
		return false;
	});
});

//PRELOADER
$.LoadingOverlay("show");

// Hide it after 3 seconds
setTimeout(function(){
    $.LoadingOverlay("hide");
}, 2000);


















