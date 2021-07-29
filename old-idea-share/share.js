$(document).ready(function() {
//////////////////////////////////////////////////
////////////////// Generic Changes ///////////////
//////////////////////////////////////////////////
// clicking on bottom right ref shows audio
$(".item_right").on('click', function() {
$('.wrap_ref_body_audio').show();
});
// ref header
$(".ref_header").html("<div class='temp_header_title_for_audio'>select a chapter to listen to The Word</div>");
// ref footer
$(".ref_footer").html('<div class="temp_footer_title_for_audio"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" target="_blank" class="bf_links"><span id="" class="">give a love offering</span></a></div>');
// empty menu items: // console // terminal // languages // fullscreen
$("div.accordion_console, div.panel_console, div.accordion_terminal, div.panel_terminal, div.accordion_language_preferences, div.panel_language_preferences, div.accordion_fullscreen_preferences, div.panel_fullscreen_preferences, .splash_console, .splash_terminal, .splash_language_preferences, .splash_fullscreen_preferences").empty();
// hide unnecessary search buttons
$(".filter_grk, .filter_grk_tra, .filter_reg_esp, .filter_heb_tra, .filter_heb").css("visibility","hidden");
$(".searching_filters").find(".wrap_standard_multi_item").find(".standard_multi_item").find("div").eq(0,1,2,4,5).empty().hide();
// hide ref header tabs
$(".select_analysis, .select_lexicons, .select_dictionaries, .select_encyclopedias, .select_topics").css("display","none");
// add temp header
$(".temp_header_title_for_audio").css("display", "block").css("width", "100%").css("height", "44px").css("line-height", "44px").css("font-size", "18px").css("text-align", "center").css("text-shadow", "2px 2px 1px #000000");
// hide ref footer tabs
$(".select_audio, .select_views, .select_notes, .select_highlights, .select_bookmarks, .select_post").css("display","none");
// add temp footer
$(".temp_footer_title_for_audio").css("display", "block").css("width", "100%").css("height", "44px").css("line-height", "44px").css("font-size", "20px").css("text-align", "center").css("text-shadow", "2px 2px 1px #000000");
// hide audio preferences
$(".audio_preferences_wrapper").css("visibility","hidden");
//////////////////////////////////////////////////
////////////////// English Changes ///////////////
//////////////////////////////////////////////////


}); // END document ready
