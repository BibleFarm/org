$(document).ready(function() {

//////////////////////////////////////////////////
////////////////// Polish Changes ///////////////
//////////////////////////////////////////////////

setTimeout(function() {
$("#edited_app_name").text("Twoje Imię Idzie Tutaj");
}, 8100);

//////////////////////////////////////////////////
////// BEGIN MutationObserver MutationObserverUserLoggedInOrNotAddOn_pl ////
//////////////////////////////////////////////////
// First create our observer and get our target element
var observer = new MutationObserver(MutationObserverUserLoggedInOrNotAddOn_pl),
  elTarget = document.querySelector("body #continue_as_a_visitor_admin"),
  objConfig = {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  };
// Then actually do some observing
observer.observe(elTarget, objConfig);
// Finally react when needed
function MutationObserverUserLoggedInOrNotAddOn_pl() {
  console.log("TRIGGERED Mutation Observer MutationObserverUserLoggedInOrNotAddOn_pl");


if($('#continue_as_a_visitor_admin').css('display') == 'none')
{
var welcome_user_with_name = $("body").find("#name").text();
$("#logged_in_user_is_a_part").text("Jestem częścią BibleFarm.org");
console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to Jestem częścią BibleFarm.org");

// give it time upon arrival
setTimeout(function() {
$("#edited_app_name").text(welcome_user_with_name);
console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to current user's name");
}, 8100);
// do it immediately also for a page that's already loaded
$("#edited_app_name").text(welcome_user_with_name);
console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to current user's name");

setTimeout(function() {
$(".app_wrap").find("p.msg1").text(welcome_user_with_name).fadeOut("5000").fadeIn("7000");
}, 8100);
} else {
$("#logged_in_user_is_a_part").text("być częścią BibleFarm.org");
$("#edited_app_name").text("Twoje Imię Idzie Tutaj");

setTimeout(function() {
$(".app_wrap").find("p.msg1").text("dzięki za wizytę").fadeOut("5000").fadeIn("7000");
}, 8100);
}

}; // end mutation observer
//////////////////////////////////////////////////
////// END MutationObserver MutationObserverUserLoggedInOrNotAddOn_pl ////
//////////////////////////////////////////////////

$(".app_intro_splash_text").html('<p class="msg1" data-in-effect="rotateInDownRight" data-out-effect="hinge">Witamy<h1>BibleFarm.org</h1><p class="msg2" data-in-effect="bounceInDown">wejdźmy do Słowa</p>');

$(".panel_first_time_users_title").text("Użyj tej app dla siebie lub swojej służby:");

$(".panel_first_time_users_body").text("Aby udostępnić zwrotki lub zmienić preferencje, zaloguj się. Nie ma tutaj żadnych praw autorskich. Jesteśmy tutaj, aby pomóc. Chcemy pomóc Ci dzielić się Słowem. Czy chcesz mieć własną stronę? Zrobimy to za Ciebie, a my zaparkujemy na https://YourName.biblefarm.org/ lub poinformujemy nas, jeśli masz własną domenę.");

$("#continue_as_a_visitor_first").text("kontynuuj jako gość");
$("#continue_as_a_visitor_admin").text("kontynuuj jako gość");

$("#login_now").text("Zaloguj Się");

$(".menu_title_first_time_users").text("jestem tu nowy");
$(".menu_title_who_else_is_part").text("poznaj drużynę");
$(".menu_title_admin").text("zarządzaj moim kontem");
$(".menu_title_console").text("konsola");
$(".menu_title_terminal").text("terminal");
$(".menu_title_language_preferences").text("języki");
$(".menu_title_colour_preferences").text("kolory");
$(".menu_title_fullscreen_preferences").text("pełny ekran");

$(".menu_title_close").text("zamknięte");

$(".top_help").text("pomoc");

$(".help_body_temp").html("W przyszłości będziemy mieli kompleksową pomoc. W międzyczasie skontaktuj się z nami w celu uzyskania odpowiedzi na każde pytanie, klikają <span class='show_pure_chat bf_links'>tutaj</span>");

$(".panel_who_else_is_part_title").text("Spełnianie Mat 25:31-40 wizyty na raz");

$(".panel_console_title").text("Ta konsola jest przeznaczona do zadań osobistych");
$(".panel_console_body_temp").text("Wkrótce będziemy mogli przechowywać rzeczy osobiste tutaj. Listy ludzi, dla których się modlimy, ludzie, którym dajemy świadectwo, sprawy biblijne, które studiujemy itd.");

$("#sign-out").text("wyloguj");

$("#setup_verse_sharing_welcome").text("Spersonalizujmy werset biblijny:");

$("#setup_verse_sharing_all_set").text("Kliknij dowolny wiersz, aby go udostępnić");
$('input#config_name_change').attr("placeholder", "wpisz swój kod tutaj");
$("#I_dont_have_a_sharing_code").text("nie mam kodu");
$("#activate_sharing_code").text("aktywuj");

// ref header
$(".ref_header").html("<div class='temp_header_title_for_audio'>wybierz rozdział, aby posłuchać Słowa</div>");
// ref footer
$(".ref_footer").html('<div class="temp_footer_title_for_audio"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" target="_blank" class="bf_links"><span id="" class="">daj darowiznę miłości</span></a></div>');

//////////////////////////////////////////////////
////////////////// Generic Changes ///////////////
//////////////////////////////////////////////////
// clicking on bottom right ref shows audio
$(".item_right").on('click', function() {
$('.wrap_ref_body_audio').show();
});
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


});
