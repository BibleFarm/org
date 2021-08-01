$(document).ready(function (){
	
/*
//Get first five words of of the verse
function getWords(string){
    return string.split(/\s+/).slice(0,5).join(" ");
}

//provide string for getWords function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first 5 words back to the DOM
$('<span>' + getWords(str) + '...' + '</span>').appendTo('.top_verse');
*/	

// get the first phrase up to any of these: , ; : . ? ! ( )

function getFirstPhrase(string){

return string.split(/[.\,\;\:\.\?\!\(]/).slice(0,1);

}

//provide string for getFirstPhrase function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first phrase back to the DOM
$('<span>' + getFirstPhrase(str) + '… </span>').appendTo('.top_verse');

// setTimeout(function(){

	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug").textfill({maxFontPixels:2000});
	}
	function renderIn_modalReviewOrder() {
		$('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2000});
	}
renderIn_modalVerse();
renderIn_modalReviewOrder();

	function dupe_renderIn_modalVerse() {
		$('.dupe_selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.dupe_selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$(".dupe_selected_bible_verse_fixed_on_mug").textfill({maxFontPixels:2000});
	}
	function dupe_renderIn_modalReviewOrder() {
		$('.dupe_selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.dupe_selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".dupe_selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2000});
	}
dupe_renderIn_modalVerse();
dupe_renderIn_modalReviewOrder();

// }, 50);


// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.red, .ad_intro, .ad_description').textStroke(2,'black');
    $('.shop > span').textStroke(4,'black');
    $('.ad_big_message, .shop').textStroke(4,'black');
})
// END textStroke


/*
    var len = $('span').text().length;    
    if(len > 60){
        $('.verse').addClass("justify");
console.log("JUSTIFIED // because // character count is: " + len);
    }
else {
console.log("NOT JUSTIFIED // because // character count is: " + len);
}
*/

// custom CSS for biblical or flowers displayed in other modals
var IsItBiblical = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItBiblical.indexOf("B") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItFlowers = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItFlowers.indexOf("F") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItScenery = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItScenery.indexOf("S") > -1) {
      console.log("it's not a flower. Removing custom classes for flowers");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').removeClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_item_little_Left');
      console.log("it's not a flower. Adding custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforScenery_item_little_Left');
 }


// custom CSS for biblical or flowers displayed in other modals
var dupe_IsItBiblical = $('.dupe_container_showing_selected_picture_little_Left').attr('src');
 if (dupe_IsItBiblical.indexOf("B") > -1) {
      console.log("dupe_it's biblical or flower. Adding custom classes for flowers");
$('.dupe_wrap_container_showing_selected_picture').addClass('dupe_customCSSforFlowers_table');
$('img.dupe_container_showing_selected_picture').addClass('dupe_customCSSforFlowers_cell');
$('.dupe_wrap_container_showing_selected_picture_little_Left').addClass('dupe_customCSSforFlowers_flex_little_Left');
$('img.dupe_container_showing_selected_picture_little_Left').addClass('dupe_customCSSforFlowers_item_little_Left');
      console.log("dupe_it's biblical or flower. Removing custom classes for scenery");
$('.dupe_wrap_container_showing_selected_picture_little_Left').removeClass('dupe_customCSSforScenery_flex_little_Left');
$('img.dupe_container_showing_selected_picture_little_Left').removeClass('dupe_customCSSforScenery_item_little_Left');
 }
var dupe_IsItFlowers = $('.dupe_container_showing_selected_picture_little_Left').attr('src');
 if (dupe_IsItFlowers.indexOf("F") > -1) {
      console.log("dupe_it's biblical or flower. Adding custom classes for flowers");
$('.dupe_wrap_container_showing_selected_picture').addClass('dupe_customCSSforFlowers_table');
$('img.dupe_container_showing_selected_picture').addClass('dupe_customCSSforFlowers_cell');
$('.dupe_wrap_container_showing_selected_picture_little_Left').addClass('dupe_customCSSforFlowers_flex_little_Left');
$('img.dupe_container_showing_selected_picture_little_Left').addClass('dupe_customCSSforFlowers_item_little_Left');
      console.log("dupe_it's biblical or flower. Removing custom classes for scenery");
$('.dupe_wrap_container_showing_selected_picture_little_Left').removeClass('dupe_customCSSforScenery_flex_little_Left');
$('img.dupe_container_showing_selected_picture_little_Left').removeClass('dupe_customCSSforScenery_item_little_Left');
 }
var dupe_IsItScenery = $('.dupe_container_showing_selected_picture_little_Left').attr('src');
 if (dupe_IsItScenery.indexOf("S") > -1) {
      console.log("dupe_it's not a flower. Removing custom classes for flowers");
$('.dupe_wrap_container_showing_selected_picture').removeClass('dupe_customCSSforFlowers_table');
$('img.dupe_container_showing_selected_picture').removeClass('dupe_customCSSforFlowers_cell');
$('.dupe_wrap_container_showing_selected_picture_little_Left').removeClass('dupe_customCSSforFlowers_flex_little_Left');
$('img.dupe_container_showing_selected_picture_little_Left').removeClass('dupe_customCSSforFlowers_item_little_Left');
      console.log("dupe_it's not a flower. Adding custom classes for scenery");
$('.dupe_wrap_container_showing_selected_picture_little_Left').addClass('dupe_customCSSforScenery_flex_little_Left');
$('img.dupe_container_showing_selected_picture_little_Left').addClass('dupe_customCSSforScenery_item_little_Left');
 }



});
