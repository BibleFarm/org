// Red Cinco v0.01 //

$(document).ready(function() {

setTimeout(function() {
$(".bf_lock_n_load_wrap, .bf_lock_n_load, .bf_intro_splash_bg").hide();
}, 2000);


//////////////////////////////////
///// BEGIN if mobile or desktop /
//////////////////////////////////
// upon arrival
if ($(window).width() < 769) {
  $('.bf_wrap_top_mobile').css('display', 'flex');
  $('.bf_wrap_top_desktop').css('display', 'none');
  $('.bf_wrap_top_menu').hide();
}
else {
  $('.bf_wrap_top_mobile').css('display', 'none');
  $('.bf_wrap_top_desktop').css('display', 'flex');
  $('.bf_wrap_top_menu').show();
}
// upon resize
$(window).on('resize', function () {
  if ($(window).width() < 769) {
    $('.bf_wrap_top_mobile').css('display', 'flex');
    $('.bf_wrap_top_desktop').css('display', 'none');
    $('.bf_wrap_top_menu').hide();
  }
  else {
    $('.bf_wrap_top_mobile').css('display', 'none');
    $('.bf_wrap_top_desktop').css('display', 'flex');
    $('.bf_wrap_top_menu').show();
  }
});
//////////////////////////////////
///// END if mobile or desktop /
//////////////////////////////////



//////////////////////////////////
///// BEGIN flexbox top menu /
//////////////////////////////////
var neededWidth = $(".flex-parent").outerWidth(); //you can also use static value
var totalChildWidth = 0;

$(".flex-parent").children(".flex-child").each(function() {
    totalChildWidth+= $(this).outerWidth(); //add up to the total height
    if(totalChildWidth> neededWidth) {  //compare if the height limit was exceeded
       $(this).hide(); // if it did, hide the current element
       $(this).nextAll().hide(); //hide all other list also
       return false; // break the loop to stop the further iteration
    }
});

$(window).on('resize', function () {

  var neededWidth = $(".flex-parent").outerWidth(); //you can also use static value
  var totalChildWidth = 0;

  $(".flex-child").show();


$(".flex-parent").children(".flex-child").each(function() {
    totalChildWidth+= $(this).outerWidth(); //add up to the total height
    if(totalChildWidth> neededWidth) {  //compare if the height limit was exceeded
       $(this).hide(); // if it did, hide the current element
       $(this).nextAll().hide(); //hide all other list also
       return false; // break the loop to stop the further iteration
    }
});

});

//////////////////////////////////
///// END flexbox top menu /
//////////////////////////////////


//////////////////////////////////
///// BEGIN swiper bf navigation /
//////////////////////////////////
  var swiper_jovi = new Swiper(".swiper-container-main", {
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    initialSlide: 1,
    preventClicks: true,
    //    scrollbar: ".swiper-scrollbar",
    //    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: false,
    effect: "coverflow",
//    grabCursor: true,
    shortSwipes: false,
    centeredSlides: true,
    slidesPerView: "auto",
    hashnav: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar"
    },
    hashNavigation: {
      watchState: true
    },
    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev"
  });
  // navigation menu clicks
  $(".move_to_bf-menu").click(swiper_jovi, function() {
    swiper_jovi.slideTo(0);
  });
  $(".move_to_bf-general").click(swiper_jovi, function() {
    swiper_jovi.slideTo(1);
  });
  $(".move_to_bf-nacionales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(2);
  });
  $(".move_to_bf-politica").click(swiper_jovi, function() {
    swiper_jovi.slideTo(3);
  });
  $(".move_to_bf-posadas").click(swiper_jovi, function() {
    swiper_jovi.slideTo(4);
  });
  $(".move_to_bf-policiales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(5);
  });
  $(".move_to_bf-deportes").click(swiper_jovi, function() {
    swiper_jovi.slideTo(6);
  });
  $(".move_to_bf-cultura_y_espectaculos").click(swiper_jovi, function() {
    swiper_jovi.slideTo(7);
  });
  $(".move_to_bf-educacion").click(swiper_jovi, function() {
    swiper_jovi.slideTo(8);
  });
  $(".move_to_bf-salud").click(swiper_jovi, function() {
    swiper_jovi.slideTo(9);
  });
  $(".move_to_bf-tecnologia").click(swiper_jovi, function() {
    swiper_jovi.slideTo(10);
  });
  $(".move_to_bf-mascotas").click(swiper_jovi, function() {
    swiper_jovi.slideTo(11);
  });
  $(".move_to_bf-clasificados").click(swiper_jovi, function() {
    swiper_jovi.slideTo(12);
  });
  $(".move_to_bf-radio").click(swiper_jovi, function() {
    swiper_jovi.slideTo(13);
  });
///////////////////////////////////
// BEGIN load iframes as needed
///////////////////////////////////

///////////////////////////////////
////// general
///////////////////////////////////
var loadgeneral = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#general').hasClass("swiper-slide-visible") ) && ( isEmpty($('.general')) ) ) {
		console.log('general is empty && is visible');
$(".general").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fredcincodiario%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadgeneral);
	}
}, 1000);
///////////////////////////////////
////// nacionales
///////////////////////////////////
var loadnacionales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#nacionales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.nacionales')) ) ) {
		console.log('nacionales is empty && is visible');
$(".nacionales").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadnacionales);
	}
}, 1000);
///////////////////////////////////
////// politica
///////////////////////////////////
var loadpolitica = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#politica').hasClass("swiper-slide-visible") ) && ( isEmpty($('.politica')) ) ) {
		console.log('politica is empty && is visible');
$(".politica").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbiblefarm.org%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadpolitica);
	}
}, 1000);
///////////////////////////////////
////// posadas
///////////////////////////////////
var loadposadas = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#posadas').hasClass("swiper-slide-visible") ) && ( isEmpty($('.posadas')) ) ) {
		console.log('posadas is empty && is visible');
$(".posadas").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadposadas);
	}
}, 1000);
///////////////////////////////////
////// policiales
///////////////////////////////////
var loadpoliciales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#policiales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.policiales')) ) ) {
		console.log('policiales is empty && is visible');
$(".policiales").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Policiales-107124010707450%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadpoliciales);
	}
}, 1000);
///////////////////////////////////
////// deportes
///////////////////////////////////
var loaddeportes = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#deportes').hasClass("swiper-slide-visible") ) && ( isEmpty($('.deportes')) ) ) {
		console.log('deportes is empty && is visible');
$(".deportes").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loaddeportes);
	}
}, 1000);
///////////////////////////////////
////// cultura_y_espectaculos
///////////////////////////////////
var loadcultura_y_espectaculos = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#cultura_y_espectaculos').hasClass("swiper-slide-visible") ) && ( isEmpty($('.cultura_y_espectaculos')) ) ) {
		console.log('cultura_y_espectaculos is empty && is visible');
$(".cultura_y_espectaculos").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadcultura_y_espectaculos);
	}
}, 1000);
///////////////////////////////////
////// educacion
///////////////////////////////////
var loadeducacion = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#educacion').hasClass("swiper-slide-visible") ) && ( isEmpty($('.educacion')) ) ) {
		console.log('educacion is empty && is visible');
$(".educacion").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadeducacion);
	}
}, 1000);
///////////////////////////////////
////// salud
///////////////////////////////////
var loadsalud = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#salud').hasClass("swiper-slide-visible") ) && ( isEmpty($('.salud')) ) ) {
		console.log('salud is empty && is visible');
$(".salud").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadsalud);
	}
}, 1000);
///////////////////////////////////
////// tecnologia
///////////////////////////////////
var loadtecnologia = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#tecnologia').hasClass("swiper-slide-visible") ) && ( isEmpty($('.tecnologia')) ) ) {
		console.log('tecnologia is empty && is visible');
$(".tecnologia").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadtecnologia);
	}
}, 1000);
///////////////////////////////////
////// mascotas
///////////////////////////////////
var loadmascotas = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#mascotas').hasClass("swiper-slide-visible") ) && ( isEmpty($('.mascotas')) ) ) {
		console.log('mascotas is empty && is visible');
$(".mascotas").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadmascotas);
	}
}, 1000);
///////////////////////////////////
////// clasificados
///////////////////////////////////
var loadclasificados = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#clasificados').hasClass("swiper-slide-visible") ) && ( isEmpty($('.clasificados')) ) ) {
		console.log('clasificados is empty && is visible');
$(".clasificados").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadclasificados);
	}
}, 1000);
///////////////////////////////////
////// radio
///////////////////////////////////
var loadradio = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#radio').hasClass("swiper-slide-visible") ) && ( isEmpty($('.radio')) ) ) {
		console.log('radio is empty && is visible');
$(".radio").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadradio);
	}
}, 1000);



///////////////////////////////////
// END load iframes as needed
///////////////////////////////////







///////////////////
$('.bf_intro_container').perfectScrollbar({
//  wheelPropagation: true,
//  scrollXMarginOffset: 2
});
///////////////////




}); // end document ready
