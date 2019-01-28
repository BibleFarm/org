// BEGIN ajax_chapters.js

////////////////////////////////////////////////////
$(document).ready(function() {

// still NN to add far left verse numbers to every page
// create an if statement to check if these td's are empty
// otherwise do nothing so that it won't override saved changes





// get what book and chapter I'm dealing with to bring in ajax
var ajax_book_chapter = $("div#hidden_page_id").text();
 console.log(ajax_book_chapter);
// check if grk or heb is needed and act accordingly
var is_grk_heb_needed = $("#tE_ajax_chapters tr td span.audio_book_id").text();
// console.log(is_grk_heb_needed);
// bring in greek text
setTimeout(function(){
if (is_grk_heb_needed > 928) {
var postData = "";
$.ajax({
url: 'ajax_modules/TR_TheWord_2015-05-25/module_TR_TheWord_2015-05-25_' +ajax_book_chapter+ '.php',
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' gr_txt">' + ($(result).html()) + '</td>');
});
}
});
}
}, 100);

// bring in greek transliterated text
setTimeout(function(){
if (is_grk_heb_needed > 928) {
var postData = "";
$.ajax({
url: 'ajax_modules/TR_TheWord_2015-05-25/module_TR_TheWord_2015-05-25_' +ajax_book_chapter+ '.php',
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' gr_tra_txt">' + ($(result).html()) + '</td>');
});
}
});
}
}, 200);

// bring in spanish text
setTimeout(function(){
var postData = "";
$.ajax({
url: 'ajax_modules/RV1909/module_RV1909_with_strongs_' +ajax_book_chapter+ '.php',
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' es_txt">' + ($(result).html()) + '</td>');
});
}
});
}, 300);

// bring in english text
setTimeout(function(){
var postData = "";
$.ajax({
url: 'ajax_modules/KJV_THE_WORD_2016-12-10/module_KJV_PCEbeta_with_strongs_' +ajax_book_chapter+ '.php',
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' en_txt">' + ($(result).html()) + '</td>');
});
}
});
}, 400);
// bring in hebrew transliterated text
setTimeout(function(){
if (is_grk_heb_needed < 929) {
var postData = "";
$.ajax({
url: "ajax_modules/WLC_4_20/module_WLC_4_20_" +ajax_book_chapter+ ".php",
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' he_tra_txt">' + ($(result).html()) + '</td>');
});
}
});
}
}, 500);

// bring in hebrew text
setTimeout(function(){
if (is_grk_heb_needed < 929) {
var postData = "";
$.ajax({
url: "ajax_modules/WLC_4_20/module_WLC_4_20_" +ajax_book_chapter+ ".php",
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' he_txt">' + ($(result).html()) + '</td>');
});
}
});
}
}, 600);

// bring in hebrew verse numbers
setTimeout(function(){
if (is_grk_heb_needed < 929) {
var postData = "";
$.ajax({
url: 'ajax_modules/HEB_VERSE/module_heb_verse_numbers_' +ajax_book_chapter+ '.php',
dataType: "html",
type: "post",
data: postData,
success: function(response) {
$("#tE_ajax_chapters tr").each(function() {
var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);
///////////////////////////////// change this for each page
$(this).append('<td class="' + td_id + ' heb_verse_numbers">' + ($(result).html()) + '</td>');
});
}
});
}
}, 700);

/////////////////////////////////////////////////////
// let it all load and then: 
/////////////////////////////////////////////////////
    setTimeout(function(){
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).css("color", "red");
//$( "w[lemma*='b/']" ).css("color", "blue");
//$( "w[lemma*='c/']" ).css("color", "green");
//$( "w[lemma*='d/']" ).css("color", "orange");
//$( "w[lemma*='l/']" ).css("color", "purple");
// BEGIN remove all cantillation marks
var contains_cantillations = $( "w:contains('\u0590'), w:contains('\u0591'), w:contains('\u0592'), w:contains('\u0593'), w:contains('\u0594'), w:contains('\u0595'), w:contains('\u0596'), w:contains('\u0597'), w:contains('\u0598'), w:contains('\u0599'), w:contains('\u059A'), w:contains('\u059B'), w:contains('\u059C'), w:contains('\u059D'), w:contains('\u059E'), w:contains('\u059F'), w:contains('\u05A0'), w:contains('\u05A1'), w:contains('\u05A2'), w:contains('\u05A3'), w:contains('\u05A4'), w:contains('\u05A5'), w:contains('\u05A6'), w:contains('\u05A7'), w:contains('\u05A8'), w:contains('\u05A9'), w:contains('\u05AA'), w:contains('\u05AB'), w:contains('\u05AC'), w:contains('\u05AD'), w:contains('\u05AE'), w:contains('\u05AF'), w:contains('\u05BE'), w:contains('\u05BD'), w:contains('\u05C0'), w:contains('\u05C3')" );
var replace_these = new RegExp( '[\u0590-\u05AF\u05BE\u05BD\u05C0\u05C3]','g' );
$( contains_cantillations ).html(function(i, text) {
return text.replace(replace_these, '');
});
// END remove all cantillation marks
// BEGIN he_txt addClass for prefix & strongs & suffix & add attr data-
$("w[lemma]").each(function() {
$(this).addClass($(this).attr("lemma"));
//console.log($(this).attr("class"));
 var the_prefix = $(this).attr("class").match('[a-z]/');
// console.log(the_prefix);
 var the_strongs = $(this).attr("class").match('[0-9]{1,4}');
// console.log(the_strongs);
 var the_suffix = $(this).attr("class").match('\ [a-z]');
// console.log(the_suffix);
$(this).attr( "data-wprefix", the_prefix );
$(this).attr( "data-wstrong_h", 'H' + the_strongs );
$(this).attr( "data-wsuffix", the_suffix );
});
// END he_txt addClass for prefix & strongs & suffix & add attr data-

// BEGIN en_txt addClass for hebrew strongs numbers
$("table#tE_ajax_chapters tbody tr td.en_txt span").each(function() {
 var the_strongs_h = $(this).attr("class").match('H[0-9]{1,4}');
// console.log(the_strongs_h);
$(this).attr( "data-wstrong_h", the_strongs_h );
});
// END en_txt addClass for hebrew strongs numbers

// BEGIN es_txt addClass for hebrew strongs numbers
$("table#tE_ajax_chapters tbody tr td.es_txt span").each(function() {
 var the_strongs_h = $(this).attr("class").match('H[0-9]{1,4}');
// console.log(the_strongs_h);
$(this).attr( "data-wstrong_h", the_strongs_h );
});
// END es_txt addClass for hebrew strongs numbers
// BEGIN en_txt addClass for greek strongs numbers
$("table#tE_ajax_chapters tbody tr td.en_txt span").each(function() {
 var the_strongs_g = $(this).attr("class").match('G[0-9]{1,4}');
// console.log(the_strongs_g);
$(this).attr( "data-wstrong_g", the_strongs_g );
});
// END en_txt addClass for greek strongs numbers

// BEGIN es_txt addClass for greek strongs numbers
$("table#tE_ajax_chapters tbody tr td.es_txt span").each(function() {
 var the_strongs_g = $(this).attr("class").match('G[0-9]{1,4}');
// console.log(the_strongs_g);
$(this).attr( "data-wstrong_g", the_strongs_g );
});
// END es_txt addClass for greek strongs numbers

// BEGIN mouseovers and mouseouts

// mouseovers gr
$( "table#tE_ajax_chapters tbody tr td.gr_txt verse w" ).on('mouseover', function(e) {
var this_wstrong_g = $(this).data("wstrong_g");
// this word and same word en
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
// this word and same word es
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
// this word and same word he
$( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
});
// mouseouts gr
$( "table#tE_ajax_chapters tbody tr td.gr_txt verse w" ).on('mouseout', function(e) {
$("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
});

// mouseovers gr_tra
$( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w" ).on('mouseover', function(e) {
var this_wstrong_g = $(this).data("wstrong_g");
// this word and same word en
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
// this word and same word es
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
// this word and same word he
$( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
});
// mouseouts gr_tra
$( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w" ).on('mouseout', function(e) {
$("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
});

// mouseovers en
$( "table#tE_ajax_chapters tbody tr td.en_txt span" ).on('mouseover', function(e) {
var this_wstrong_h = $(this).data("wstrong_h");
var this_wstrong_g = $(this).data("wstrong_g");
// this word and same word gr
$( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
// this word and same word en
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
// this word and same word es
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
// this word and same word he
$( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
});
// mouseouts en
$( "table#tE_ajax_chapters tbody tr td.en_txt span" ).on('mouseout', function(e) {
$("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
});

// mouseovers es
$( "table#tE_ajax_chapters tbody tr td.es_txt span" ).on('mouseover', function(e) {
var this_wstrong_h = $(this).data("wstrong_h");
var this_wstrong_g = $(this).data("wstrong_g");
// this word and same word gr
$( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
// this word and same word en
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
// this word and same word es
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
// this word and same word he
$( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
});
// mouseouts es
$( "table#tE_ajax_chapters tbody tr td.es_txt span" ).on('mouseout', function(e) {
$("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
});

// mouseovers he
$( "table#tE_ajax_chapters tbody tr td.he_txt verse w" ).on('mouseover', function(e) {
var this_wstrong_h = $(this).data("wstrong_h");
// this word and same word en
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
// this word and same word es
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
// this word and same word he
$( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
});
// mouseouts he
$( "table#tE_ajax_chapters tbody tr td.he_txt verse w" ).on('mouseout', function(e) {
$("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
});

// mouseovers he_tra
$( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse w" ).on('mouseover', function(e) {
var this_wstrong_h = $(this).data("wstrong_h");
// this word and same word en
$( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
// this word and same word es
$( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
// this word and same word he
$( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
$( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
});
// mouseouts he_tra
$( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse w" ).on('mouseout', function(e) {
$("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
$("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
});

// END mouseovers and mouseouts

}, 1500);

//return false; this probably needs to be here, but doesn't seem it's necessary



// end of the document ready function
});


// END ajax_chapters.js