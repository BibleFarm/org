// Red Cinco v0.03 //

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
//  slidesPerView: 3,
    spaceBetween: 4,
    preventClicks: true,
    //    scrollbar: ".swiper-scrollbar",
    //    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: false,
//    effect: "coverflow",
//    effect: 'cube',
//    grabCursor: true,
    shortSwipes: false,
    centeredSlides: false,
    slidesPerView: "auto",
    hashnav: true,
//    coverflowEffect: {
//      rotate: 50,
//      stretch: 0,
//      depth: 100,
//      modifier: 1,
//      slideShadows: true
//    },
//    cubeEffect: {
//      shadow: true,
//      slideShadows: true,
//      shadowOffset: 20,
//      shadowScale: 0.94,
//    },
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
  $(".move_to_bf-policiales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(2);
  });
  $(".move_to_bf-nacionales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(3);
  });
  $(".move_to_bf-politica").click(swiper_jovi, function() {
    swiper_jovi.slideTo(4);
  });
  $(".move_to_bf-misiones").click(swiper_jovi, function() {
    swiper_jovi.slideTo(5);
  });
  $(".move_to_bf-deportes").click(swiper_jovi, function() {
    swiper_jovi.slideTo(6);
  });
  $(".move_to_bf-cultura").click(swiper_jovi, function() {
    swiper_jovi.slideTo(7);
  });
  $(".move_to_bf-espectaculos").click(swiper_jovi, function() {
    swiper_jovi.slideTo(8);
  });
  $(".move_to_bf-educacion").click(swiper_jovi, function() {
    swiper_jovi.slideTo(9);
  });
  $(".move_to_bf-salud").click(swiper_jovi, function() {
    swiper_jovi.slideTo(10);
  });
  $(".move_to_bf-tecnologia").click(swiper_jovi, function() {
    swiper_jovi.slideTo(11);
  });
  $(".move_to_bf-mascotas").click(swiper_jovi, function() {
    swiper_jovi.slideTo(12);
  });
  $(".move_to_bf-clasificados").click(swiper_jovi, function() {
    swiper_jovi.slideTo(13);
  });
  $(".move_to_bf-profesionales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(14);
  });
  $(".move_to_bf-mediakit").click(swiper_jovi, function() {
    swiper_jovi.slideTo(15);
  });
  $(".move_to_bf-info").click(swiper_jovi, function() {
    swiper_jovi.slideTo(16);
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
////// nacionales
///////////////////////////////////
var loadnacionales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#nacionales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.nacionales')) ) ) {
		console.log('nacionales is empty && is visible');
$(".nacionales").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Nacionales-111172713648141%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
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
$(".politica").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Pol%C3%ADtica-107881443966133%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadpolitica);
	}
}, 1000);
///////////////////////////////////
////// misiones
///////////////////////////////////
var loadmisiones = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#misiones').hasClass("swiper-slide-visible") ) && ( isEmpty($('.misiones')) ) ) {
		console.log('misiones is empty && is visible');
$(".misiones").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Misiones-108787037220372%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadmisiones);
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
$(".deportes").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Deportes-108965590523332%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loaddeportes);
	}
}, 1000);
///////////////////////////////////
////// cultura
///////////////////////////////////
var loadcultura = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#cultura').hasClass("swiper-slide-visible") ) && ( isEmpty($('.cultura')) ) ) {
		console.log('cultura is empty && is visible');
$(".cultura").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Cultura-102536434521779%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadcultura);
	}
}, 1000);
///////////////////////////////////
////// espectaculos
///////////////////////////////////
var loadespectaculos = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#espectaculos').hasClass("swiper-slide-visible") ) && ( isEmpty($('.espectaculos')) ) ) {
		console.log('espectaculos is empty && is visible');
$(".espectaculos").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Espect%C3%A1culos-108856270550050%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadespectaculos);
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
$(".educacion").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Educaci%C3%B3n-113085440117866%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
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
$(".salud").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Salud-106048144164645%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
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
$(".tecnologia").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Tecno-102777781161620%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
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
$(".mascotas").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Mascotas-102501234528007%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
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
$(".clasificados").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Clasificados-102751944502471%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadclasificados);
	}
}, 1000);
///////////////////////////////////
////// profesionales
///////////////////////////////////
var loadprofesionales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#profesionales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.profesionales')) ) ) {
		console.log('profesionales is empty && is visible');
$(".profesionales").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Profesionales-104024767700689%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadprofesionales);
	}
}, 1000);
///////////////////////////////////
////// mediakit
///////////////////////////////////
var loadmediakit = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#mediakit').hasClass("swiper-slide-visible") ) && ( isEmpty($('.mediakit')) ) ) {
		console.log('mediakit is empty && is visible');
$(".mediakit").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-Cinco-Media-Kit-114178356680212%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadmediakit);
	}
}, 1000);
///////////////////////////////////
////// info
///////////////////////////////////
var loadinfo = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#info').hasClass("swiper-slide-visible") ) && ( isEmpty($('.info')) ) ) {
		console.log('info is empty && is visible');
$(".info").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgranjasolidaria%2F&tabs=timeline&width=312&height=2000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=244071169860258" width="312" height="2000" style="border:none;overflow:scroll" scrolling="yes" frameborder="10" allowTransparency="true" allow="encrypted-media"></iframe>');
// clear the setInterval
clearInterval(loadinfo);
	}
}, 1000);
///////////////////////////////////
////// radio
///////////////////////////////////
/*var loadradio = setInterval(function() {
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
*/


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
