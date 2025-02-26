/* BEGIN Document Ready ****** */
$(document).ready(function() {
/* *************************** */
/* *************************** */
/* *************************** */
/* BEGIN site_title & site_made animation
/* *************************** */
/* *************************** */
/*
$(function () {
  count = 0;
  wordsArray = ['<span class="made_title">Welcome <span class="red_heart">❤</span> to BibleFarm.org</span>', '<span class="customize_title">Children hear The Word and Believe</span>'];
  setInterval(function () {
    count++;
    $("#site_title").fadeOut(400, function () {
      $(this).html(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 5000);
});
*/
// '<span class="customize_title bf_links">customize for $10 shipping included</span>',
// '<span class="made_title bf_links">made with <span class="red_heart">❤</span> at BibleFarm.org</span>'
/* *************************** */
/* *************************** */
/* END site_title & site_made animation
/* *************************** */
/* *************************** */
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
$(".modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal, .giving_options_modal").hide();
$("#PureChatWidget").attr("style", "z-index: -1 !important");
});
// hide any and all modals when click on givingOptionsClick, except giving_options_modal
$("#menu").click(function() {
$(".modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal, .menu_modal").hide();
$("#PureChatWidget").attr("style", "z-index: -1 !important");
});
// hide any and all modals when click outside
$(".opacity_cover, .wrap_gofundme_modal_bar").click(function() {
$(".opacity_cover, .menu_modal, .modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal, .giving_options_modal").hide();
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

/* END Document Ready ****** */
});

/* *************************** */
/* *************************** */
/* BEG Jquery Lazy.js
/* *************************** */
/* *************************** */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
/* *************************** */
/* *************************** */
/* END Jquery Lazy.js
/* *************************** */
/* *************************** */

$(function() {
    $('.lazy').lazy();
});



$(document).ready(function() {

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

  $(function() {
      $('.lazy').lazy();
  });


});

////////////////////////////////////////////////////
// BEG giving options menu
////////////////////////////////////////////////////
$(".givingOptionsClick").on("click", function() {
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
// END giving options menu
////////////////////////////////////////////////////












////////////////////////////////////////////////////
////BEGIN Infinite Scroll Random Verses ///////////////////////
////////////////////////////////////////////////////
/*
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
*/
/////////////////////////////////////
// BEGIN function getWelcome get random json record
/////////////////////////////////////
/*
function getWelcome() {
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState == 4) {
      //the request is completed, now check its status
      if (ajaxRequest.status == 200) {
        //turn JSON into array
        var messagesArray = JSON.parse(ajaxRequest.responseText);
        //get random object from array
        var randomIndex = Math.floor(Math.random() * messagesArray.length);
        var messageObj = messagesArray[randomIndex]; // for random, replace messagesArray; with messagesArray[randomIndex];
        //use that object to set content and color
        var welcomeDiv = document.getElementById("hidden_welcome");
        welcomeDiv.innerHTML = messageObj.ref;
        welcomeDiv.style.color = messageObj.color;
        // BEGIN / get these things and put them in the hidden divs
  //      var verse = messageObj.ref;
        var v = messageObj.v;
        var y = messageObj.y;
        var m = messageObj.m;
        var d = messageObj.d;
  //      $('#hidden_div_verse').html(verse);
  //      $('#hidden_div_ref').html(ref);
        $('.gofundme_flex-container').append('<div class="wrap_featured_item"><div class="placeholder_mug_featured-btn">featured-item-image<img class="m" width="296" height="444" src="https://biblefarm.github.io/farm-photos-' + y + '/' + y + '-' + m + '-' + d + '-' + v + '/' + y + '-' + m + '-' + d + '_0001' + '.jpg" alt="" /></div><div class="visit_sub_panel_details"><span class="visit_number flex_item">visit # ' + v + '</span><span class="date flex_item"><span class=""><span class="rendered_date days-due"></span> days ago</span><span class="added_date due-date">' + m + '/' + d + '/' + y + '</span></span></div></div>');

      } else {
        console.log("Status error: " + ajaxRequest.status);
      }
    } else {
      console.log("Ignored readyState: " + ajaxRequest.readyState);
    }
  };
  ajaxRequest.open(
    "GET",
    "data_files/visits_v_y_m_d.json"
  );
  ajaxRequest.send();
}
*/
/////////////////////////////////////
// END function getWelcome get random json record
/////////////////////////////////////
/*
$(window).on("resize scroll", function () {
  var currentscrollHeight = 0;
    const scrollHeight = $(document).height();
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    const isBottom = scrollHeight - 200 < scrollPos;
    if (isBottom && currentscrollHeight < scrollHeight) {
/////////////////////////////////////////////
getWelcome();
getWelcome();
getWelcome();
getWelcome();
getWelcome();
getWelcome();
/////////////////////////////////////////////
    //    currentscrollHeight = scrollHeight;
    }
});
*/
////////////////////////////////////////////////////
////END Infinite Scroll Random Verses ///////////////////////
////////////////////////////////////////////////////


setInterval(function() {

var objcollection = $('.rendered_date');

  $('.rendered_date').each(function () {
if(objcollection.length==0)
{
  // do something
}
else // if it's nott empty, that means rendered_date now has the number of days
{
  // do something
  $(this).css("color", "red");

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

}
});
}, 1000);

/////////////////////////////////////
// BEGIN function bringInAllVisitFlexItems
/////////////////////////////////////
/*
function bringInAllVisitFlexItems() {
  $.ajax({
      url: "data_files/ALL_visits_flex_items.html",
      type : "GET",
      dataType : "html"
  }).done(function(data) {
      var obj = $(data);
      $(".gofundme_flex-container").append(data);
  }).fail(function(jqXHR, textStatus, errorThrown) {

});
};
*/
/////////////////////////////////////
// END function bringInAllVisitFlexItems get random json record
/////////////////////////////////////










/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */

!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);






  $(function() {
	  var sidebar = $('div#sidebar'), loadedElements = 0;

	  $('.lazy').lazy({
		  beforeLoad: function(element){
			  console.log('image "' + stripTime(element.data('src')) + '" is about to be loaded');
		  },
		  afterLoad: function(element) {
			  loadedElements++;
			  $('p span', sidebar).html(strPad(loadedElements, '0', 2));
			  $('ul', sidebar).append('<li>element ' + strPad(loadedElements, '0', 2) + ' loaded</li>');
			  console.log('image "' + stripTime(element.data('src')) + '" was loaded successfully');
		  },
		  onError: function(element) {
			  loadedElements++;
			  $('p span', sidebar).html(strPad(loadedElements, '0', 2));
			  $('ul', sidebar).append('<li>element ' + strPad(loadedElements, '0', 2) + ' NOT loaded</li>');
			  console.log('image "' + stripTime(element.data('src')) + '" could not be loaded');
		  },
		  onFinishedAll: function() {
			  console.log('finished loading ' + loadedElements + ' elements');
			  console.log('lazy instance is about to be destroyed')
		  }
	  });
  });

  /////////////////////////////////////
  // BEG bringInAllVisitFlexItems and lazy the photos
  /////////////////////////////////////
  /*
  $(window).on("resize scroll", function () {
    var currentscrollHeight = 0;
      const scrollHeight = $(document).height();
      const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
      const isBottom = scrollHeight - 200 < scrollPos;
      if (isBottom && currentscrollHeight < scrollHeight) {
  /////////////////////////////////////////////
//  bringInAllVisitFlexItems();
if (!$( "#591" ).length) {
  $('.gofundme_flex-container').append($('<div>').load('https://www.biblefarm.org/data_files/ALL_visits_flex_items.html #' + '591'));
};

  /////////////////////////////////////////////
};
  });
  */
  /////////////////////////////////////
  // END bringInAllVisitFlexItems and lazy the photos
  /////////////////////////////////////

/////////////////////////////////////
// BEG function moreContentNeeded
/////////////////////////////////////
/*
if (!$( "#591" ).length) {
*/
  $(window).on("resize scroll", function () {
    var currentscrollHeight = 0;
      const scrollHeight = $(document).height();
      const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
      const isBottom = scrollHeight - 200 < scrollPos;
      if (isBottom && currentscrollHeight < scrollHeight) {
$('.gofundme_flex-container').append($('<div>').load('https://www.biblefarm.org/data_files/ALL_visits_flex_items.html #' + '591'));
};
};
/////////////////////////////////////
// END function moreContentNeeded
/////////////////////////////////////
