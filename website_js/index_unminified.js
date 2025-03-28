/* BEGIN Document Ready ****** */
$(document).ready(function() {
  ///////////////////////////
  // BEG landing video unmute
  ///////////////////////////
  var muted = $("video").prop("muted");
  var x = document.getElementById("myVideo");
  $( ".unmuteClick, .unmuteTap" ).on( "click", function() {
  $("video").prop("muted", !muted);
  x.currentTime = 0
  });
  ///////////////////////////
  // END landing video unmute
  ///////////////////////////
  /////////////////////////////////////
  // BEG append visit counter and today's date to showcase-content
  /////////////////////////////////////
  //setTimeout(function() {
  $('.showcase-content').append('<h3><div class="timerDiv"><span class="timer count-title count-number" data-to="593" data-speed="10000"></span>593 visits as of today, </span><span id="month">11</span> <span id="day">11</span>, <span id="year">11</span></div></h3>');
  //},2000);
  /////////////////////////////////////
  // END append visit counter and today's date to showcase-content
  /////////////////////////////////////

  /////////////////////////////////////
  // BEG Today's Date and visit counter
  /////////////////////////////////////
  //gets todays date and calls on the draw function
  function initLunarPhase(){
    var $date=new Date();
    var $year=$date.getFullYear();
    var $month=$date.getMonth()+1;
    var $day=$date.getDate();

    document.getElementById('day').innerHTML=$day;
    if ($month<10) {
      document.getElementById('month').innerHTML='0'+$month;
    }
    else {
      document.getElementById('month').innerHTML=$month;
    }
    document.getElementById('year').innerHTML=$year;

  }
  initLunarPhase();
  // END today's date
/*
  // BEG counter
  (function ($) {
  	$.fn.countTo = function (options) {
  		options = options || {};

  		return $(this).each(function () {
  			// set options for current element
  			var settings = $.extend({}, $.fn.countTo.defaults, {
  				from:            $(this).data('from'),
  				to:              $(this).data('to'),
  				speed:           $(this).data('speed'),
  				refreshInterval: $(this).data('refresh-interval'),
  				decimals:        $(this).data('decimals')
  			}, options);

  			// how many times to update the value, and how much to increment the value on each update
  			var loops = Math.ceil(settings.speed / settings.refreshInterval),
  				increment = (settings.to - settings.from) / loops;

  			// references & variables that will change with each update
  			var self = this,
  				$self = $(this),
  				loopCount = 0,
  				value = settings.from,
  				data = $self.data('countTo') || {};

  			$self.data('countTo', data);

  			// if an existing interval can be found, clear it first
  			if (data.interval) {
  				clearInterval(data.interval);
  			}
  			data.interval = setInterval(updateTimer, settings.refreshInterval);
  			// initialize the element with the starting value
  			render(value);
  			function updateTimer() {
  				value += increment;
  				loopCount++;
  				render(value);
  				if (typeof(settings.onUpdate) == 'function') {
  					settings.onUpdate.call(self, value);
  				}
  				if (loopCount >= loops) {
  					// remove the interval
  					$self.removeData('countTo');
  					clearInterval(data.interval);
  					value = settings.to;
  				if (typeof(settings.onComplete) == 'function') {
  						settings.onComplete.call(self, value);
  					}
  				}
  			}
  			function render(value) {
  				var formattedValue = settings.formatter.call(self, value, settings);
  				$self.html(formattedValue);
  			}
  		});
  	};
  	$.fn.countTo.defaults = {
  		from: 0,               // the number the element should start at
  		to: 0,                 // the number the element should end at
  		speed: 1000,           // how long it should take to count between the target numbers
  		refreshInterval: 100,  // how often the element should be updated
  		decimals: 0,           // the number of decimal places to show
  		formatter: formatter,  // handler for formatting the value before rendering
  		onUpdate: null,        // callback method for every time the element is updated
  		onComplete: null       // callback method for when the element finishes updating
  	};
  	function formatter(value, settings) {
  		return value.toFixed(settings.decimals);
  	}
  }(jQuery));
  jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
  	formatter: function (value, options) {
  	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  	}
    });
    // start all the timers
    $('.timer').each(count);
    function count(options) {
  	var $this = $(this);
  	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  	$this.countTo(options);
    }
  });
  */
  // BEG convert month number to month name in the counter
  setTimeout(function() {
  var monthToChange = $('#month').text();
  if (monthToChange == '01') {$('#month').text('Jan');};
  if (monthToChange == '02') {$('#month').text('Feb');};
  if (monthToChange == '03') {$('#month').text('Mar');};
  if (monthToChange == '04') {$('#month').text('Apr');};
  if (monthToChange == '05') {$('#month').text('May');};
  if (monthToChange == '06') {$('#month').text('Jun');};
  if (monthToChange == '07') {$('#month').text('Jul');};
  if (monthToChange == '08') {$('#month').text('Aug');};
  if (monthToChange == '09') {$('#month').text('Sep');};
  if (monthToChange == '10') {$('#month').text('Oct');};
  if (monthToChange == '11') {$('#month').text('Nov');};
  if (monthToChange == '12') {$('#month').text('Dec');};
  },500);

  // EBD convert month number to month name in the counter
  // END counter
  /////////////////////////////////////
  // END Today's Date and visit counter
  /////////////////////////////////////

  ////////////////////////////////////////////////////
  //// BEG landing video
  ////////////////////////////////////////////////////
  setTimeout(function() {
    if ( $(window).width() < $(window).height() ) {
  // 1st of all, update with last visit's -0001.jpg
  /*
  $(".showcase").css("background", "url(https://biblefarm.github.io/farm-photos-2025/2025-03-01-593/2025-03-01-593-0001.jpg) no-repeat center center / contain");
  console.log("portrait is contain");
  */
  // 1st of all, update with last landing video
  $(".landing_video_wrap").append('<video id="myVideo" controls autoplay muted loop><source src="https://www.biblefarm.org/videos/FbAd_1_2025_KDENLIVE_1080x1080_ads-1-thisOne-Procuro%20Por%20Voc%C3%AA.mp4" type="video/mp4"></video><div class="unmute_overlay_wrap"><div class="unmute_overlay_button"><button class="unmuteTap" aria-label="unmuteTap">tap to unmute</button></div></div><div class="mute_overlay_wrap"><div class="mute_overlay_button"><button class="muteTap" aria-label="muteTap">tap to mute</button></div></div>');
  $('.tap_here_to_choose').show();
  }
  else {
  // and here
  /*
  $(".showcase").css("background", "url(https://biblefarm.github.io/farm-photos-2025/2025-03-01-593/2025-03-01-593-0001.jpg) no-repeat center center / cover");
  console.log("landscape is cover");
  */
  // and here
  $(".landing_video_wrap").append('<video id="myVideo" controls autoplay muted loop><source src="https://www.biblefarm.org/videos/FbAd_1_2025_KDENLIVE_1080x1080_ads-1-thisOne-Procuro%20Por%20Voc%C3%AA.mp4" type="video/mp4"></video><div class="unmute_overlay_wrap"><div class="unmute_overlay_button"><button class="unmuteClick" aria-label="unmuteClick">click to unmute</button></div></div><div class="mute_overlay_wrap"><div class="mute_overlay_button"><button class="muteClick" aria-label="muteClick">click to mute</button></div></div>');
  $('.click_here_to_choose').show();
  };
  ////////////////////////////////////////////////////
  ////BEG unmute button and show video controls
  ////////////////////////////////////////////////////
  var muted = $("video").prop("muted");
  var x = document.getElementById("myVideo");
  $( ".unmuteClick, .unmuteTap" ).on( "click", function() {
  $("video").prop("muted", !muted);
  x.currentTime = 0;
  $( ".unmute_overlay_wrap" ).hide();
  $( ".mute_overlay_wrap" ).hide();
  });
  $( ".muteClick, .muteTap" ).on( "click", function() {
  $("video").prop('muted', true);
  x.currentTime = 0;
  $( ".mute_overlay_wrap" ).hide();
  $( ".unmute_overlay_wrap" ).show();
  });
  ////////////////////////////////////////////////////
  ////END unmute button and show video controls
  ////////////////////////////////////////////////////
},500);
  ////////////////////////////////////////////////////
  //// END landing video
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  // BEGIN simple menu
  ////////////////////////////////////////////////////
  $("#menu").on("click", function() {
    setTimeout(function() {
    if($('.menu_modal').is(':visible'))
  {
    $(".opacity_cover").hide();
    $(".menu_modal").hide("slow");
  }
  }, 100);
  setTimeout(function() {
  if(!$('.menu_modal').is(':visible'))
  {
  $(".opacity_cover").show();
  $(".menu_modal").show("slow");
  }
  }, 100);
  });
  ////////////////////////////////////////////////////
  // END simple menu
  ////////////////////////////////////////////////////
// hide any and all modals when click on menu, except menu_modal
$("#menu").click(function() {
$(".modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal, .giving_options_modal, .food_modal").hide();
$("#PureChatWidget").attr("style", "z-index: -1 !important");
});
// hide any and all modals when click on givingOptionsClick, except giving_options_modal
$("#menu").click(function() {
$(".modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal, .menu_modal, .food_modal").hide();
$("#PureChatWidget").attr("style", "z-index: -1 !important");
});
// hide any and all modals when click outside
$(".opacity_cover, .wrap_gofundme_modal_bar, .title, .myFixedAtTheBottom").click(function() {
$(".opacity_cover, .menu_modal, .modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal, .giving_options_modal, .food_modal").hide();
});
////////////////////////////////////////////////////
////BEGIN about modal ///////////////////////
////////////////////////////////////////////////////
$( "#about" ).on( "click", function() {
$( ".about_modal" ).show('slow');
});
////////////////////////////////////////////////////
////END about modal ///////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// BEG giving options inside menu
////////////////////////////////////////////////////
$("#givingOptionsClickInsideMenu").on("click", function() {
  setTimeout(function() {
  if($('.giving_options_modal').is(':visible'))
{
  $(".opacity_cover").hide();
  $(".giving_options_modal").hide("slow");
}
}, 100);
setTimeout(function() {
if(!$('.giving_options_modal').is(':visible'))
{
$(".opacity_cover").show();
$(".giving_options_modal").show("slow");
}
}, 100);
});
////////////////////////////////////////////////////
// END giving options inside menu
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// BEGIN food
////////////////////////////////////////////////////
$("#givingOptionsClick").on("click", function() {
  setTimeout(function() {
  if($('.food_modal').is(':visible'))
{
  $(".opacity_cover").hide();
  $(".food_modal").hide("slow");
}
}, 100);
setTimeout(function() {
if(!$('.food_modal').is(':visible'))
{
$(".opacity_cover").show();
$(".food_modal").show("slow");
}
}, 100);
});
////////////////////////////////////////////////////
// END food
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEG giving options button change background interval
////////////////////////////////////////////////////
    var images = ['givingOptionsClick_blue', /*'givingOptionsClick_gold_black',*/ 'givingOptionsClick_purple'],
     i = 0;

    function changeBackground() {
        $('#givingOptionsClick').attr('class', images[i++]);
        i = i % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 7000);
////////////////////////////////////////////////////
// END giving options button change background interval
////////////////////////////////////////////////////
/////////////////////////////////////
// BEG smartResizeOrScroll
/////////////////////////////////////
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
    // smartResizeOrScroll
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize scroll', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartResizeOrScroll');


////////////////////////////////////////////////////
////BEG get the data file ///////////////////////
////////////////////////////////////////////////////
setTimeout(function() {
$.get("https://www.biblefarm.org/data_files/ALL_visits_flex_items.html", function(data, status){
//  alert("Data: " + data + "\nStatus: " + status);
console.log("I got the data. Status: " + status);
$('.gofundme_flex-container').append(data);
});
},1000);
////////////////////////////////////////////////////
////END get the data file ///////////////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
////BEG the days ago thing ///////////////////////
////////////////////////////////////////////////////
setTimeout(function() {
    // Count days due
    function daysUntil(year, month, day) {
      var now = new Date(),
          dateEnd = new Date(year, month - 1, day), // months are zero-based
          days = ((dateEnd - now) / 1000/60/60/24) * -1;   // convert milliseconds to days

      return Math.round(days);
    }

    // Set days due
    $('.visit_sub_panel_details span.date').each(function () {

        var monthDue = $(this).find('.due-date').text().substr(0,2);
        var dayDue = $(this).find('.due-date').text().substr(3,2);
        var yearDue = $(this).find('.due-date').text().substr(6,4);

        $(this).find('.days-due').text(daysUntil(yearDue, monthDue, dayDue));

        $('.due-date').hide();

    });

},2000);
////////////////////////////////////////////////////
////END the days ago thing ///////////////////////
////////////////////////////////////////////////////

/////////////////////////////////////
// BEG giving options button hover
/////////////////////////////////////
$(function() {
  $('.givingOptions').hover(function() {
    $(this).fadeTo(200,.9);
  }, function() {
    $(this).fadeTo(200,1);
  });
});
/////////////////////////////////////
// END giving options button hover
/////////////////////////////////////

/////////////////////////////////////
// BEG hide progress bar
/////////////////////////////////////
setTimeout(function() {
$(".loading_progress_bar_container").hide();
},5000);
/////////////////////////////////////
// END hide progress bar
/////////////////////////////////////

/* END Document Ready ****** */
});
