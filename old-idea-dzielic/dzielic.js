$(document).ready(function() {
//////////////////////////////////////////////////
////////////////// Generic Changes ///////////////
//////////////////////////////////////////////////
// clicking on bottom right ref shows audio
$(".item_right").on('click', function() {
$('.wrap_ref_body_audio').show();
});
// ref header
$(".ref_header").html("<div class='temp_header_title_for_audio'>wybierz rozdział, aby posłuchać Słowa</div>");
// ref footer
$(".ref_footer").html('<div class="temp_footer_title_for_audio"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" target="_blank" class="bf_links"><span id="" class="">daj darowiznę miłości</span></a></div>');
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
$(".menu_title_admin").text("moim kontem");
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

///////////////////////////////////////////////
////BEGIN login hack to Polish wording
///////////////////////////////////////////////
// wait for it to be in DOM
  var waitForFirebaseUIUponArrival = setInterval(function() {
    if ($("body").find('.firebaseui-idp-text').length > 0) {
      console.log("FirebaseUI ready in DOM upon arrival");
      // clear the setInterval
      clearInterval(waitForFirebaseUIUponArrival);
// upon arrival
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Google");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Facebook");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Twitter");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Email");
}
}, 1100);
// after we signed out
$("#sign-out").on('click', function() {
  // wait for it to be in DOM
    var waitForFirebaseUIAfterSignOut = setInterval(function() {
      if ($("body").find('.firebaseui-idp-text').length > 0) {
        console.log("FirebaseUI ready in DOM after SignOut");
        // clear the setInterval
        clearInterval(waitForFirebaseUIAfterSignOut);
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Google");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Facebook");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Twitter");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").text("Zaloguj się przez Email");
}
}, 1100);
});
///////////////////////////////////////////////
////END login hack to Polish wording
///////////////////////////////////////////////
// rename audio files and playlist
$("body").find(".sm2-playlist-bd li a").each(function(){
// directory language code
this.href = this.href.replace('audio-en','audio-pl');
// file language code
this.href = this.href.replace('KJV','POL');
// file name prefix
this.href = this.href.replace('KJV_','POL_');
// text in the playlist
this.text = this.text.replace('Genesis', '1 Mojżesza');
this.text = this.text.replace('Exodus', '2 Mojżesza');
this.text = this.text.replace('Leviticus', '3 Mojżesza');
this.text = this.text.replace('Numbers', '4 Mojżesza');
this.text = this.text.replace('Deuteronomy', '5 Mojżesza');
this.text = this.text.replace('Joshua', 'Jozuego');
this.text = this.text.replace('Judges', 'Sędziów');
this.text = this.text.replace('1 Samuel', '1 Samuela');
this.text = this.text.replace('2 Samuel', '2 Samuela');
this.text = this.text.replace('1 Kings', '1 Królów');
this.text = this.text.replace('2 Kings', '2 Królów');
this.text = this.text.replace('Isaiah', 'Izajasza');
this.text = this.text.replace('Jeremiah', 'Jeremijasza');
this.text = this.text.replace('Ezekiel', 'Ezechyjela');
this.text = this.text.replace('Daniel', 'Danijel');
this.text = this.text.replace('Hosea', 'Ozeasza');
this.text = this.text.replace('Joel', 'Joela');
this.text = this.text.replace('Amos', 'Amosa');
this.text = this.text.replace('Obadiah', 'Abdyjaszowe');
this.text = this.text.replace('Jonah', 'Jonasza');
this.text = this.text.replace('Micah', 'Micheasza');
this.text = this.text.replace('Nahum', 'Nahuma');
this.text = this.text.replace('Habakkuk', 'Abakuk');
this.text = this.text.replace('Zephaniah', 'Sofonijasza');
this.text = this.text.replace('Haggai', 'Aggieusza');
this.text = this.text.replace('Zechariah', 'Zacharyjasza');
this.text = this.text.replace('Malachi', 'Malachyjasza');
this.text = this.text.replace('Psalms', 'Psalmów');
this.text = this.text.replace('Proverbs', 'Przypowieści');
this.text = this.text.replace('Job', 'Ijob');
this.text = this.text.replace('Song of Songs', 'Pieśń nad pieśniami');
this.text = this.text.replace('Ruth', 'Rut');
this.text = this.text.replace('Lamentations', 'Treny');
this.text = this.text.replace('Ecclesiastes', 'Kaznodziei');
this.text = this.text.replace('Esther', 'Ester');
this.text = this.text.replace('Ezra', 'Ezdrasz');
this.text = this.text.replace('Nehemiah', 'Nehemijasza');
this.text = this.text.replace('1 Chronicles', '1 Kroniki');
this.text = this.text.replace('2 Chronicles', '2 Kroniki');
this.text = this.text.replace('John', 'Jan');
this.text = this.text.replace('Matthew', 'Mateusz');
this.text = this.text.replace('Mark', 'Markiem');
this.text = this.text.replace('Luke', 'Łukasz');
this.text = this.text.replace('Acts', 'Dzieje Apostołów');
this.text = this.text.replace('Romans', 'Rzymianów');
this.text = this.text.replace('1 Corinthians', '1 Koryntów');
this.text = this.text.replace('2 Corinthians', '2 Koryntów');
this.text = this.text.replace('Galatians', 'Galatów');
this.text = this.text.replace('Ephesians', 'Efezów');
this.text = this.text.replace('Philippians', 'Filippensów');
this.text = this.text.replace('Colossians', 'Kolossensów');
this.text = this.text.replace('1 Thessalonians', '1 Tessalonicensów');
this.text = this.text.replace('2 Thessalonians', '2 Tessalonicensów');
this.text = this.text.replace('1 Timothy', '1 Tymoteuszowi');
this.text = this.text.replace('2 Timothy', '2 Tymoteuszowi');
this.text = this.text.replace('Titus', 'Tytusowi');
this.text = this.text.replace('Philemon', 'Filemonowi');
this.text = this.text.replace('Hebrews', 'Hebrajczyków');
this.text = this.text.replace('James', 'Jakób');
this.text = this.text.replace('1 Peter', '1 Piotr');
this.text = this.text.replace('2 Peter', '2 Piotr');
this.text = this.text.replace('1 John', '1 Jan');
this.text = this.text.replace('2 John', '2 Jan');
this.text = this.text.replace('3 John', '3 Jan');
this.text = this.text.replace('Jude', 'Judas');
this.text = this.text.replace('Revelation', 'Objawienie');
});

// rename menu sections
$("body").find(".menu_sec_reg:contains('Teaching')").html("Nauczanie");
$("body").find(".menu_sec_reg:contains('Former Prophets')").html("Poprzedni Prorocy");
$("body").find(".menu_sec_reg:contains('Latter Prophets')").html("Późniejsi Prorocy");
$("body").find(".menu_sec_reg:contains('The Twelve')").html("Dwunastu");
$("body").find(".menu_sec_reg:contains('Scrolls of Truth')").html("Zwoje Prawdy");
$("body").find(".menu_sec_reg:contains('Five Scrolls')").html("Pięć Zwoje");
$("body").find(".menu_sec_reg:contains('Other Scrolls')").html("Inne Zwoje");
$("body").find(".menu_sec_reg:contains('Messiah')").html("Mesjasz");
$("body").find(".menu_sec_reg:contains('Emissaries')").html("Emisariusze");
$("body").find(".menu_sec_reg:contains('Assemblies')").html("Kongregacje");
$("body").find(".menu_sec_reg:contains('Disciples')").html("Uczniowie");
$("body").find(".menu_sec_reg:contains('Vision')").html("Wizja");

// wait for it to be in DOM
  var waitForBookNamesInDOM = setInterval(function() {
    if ($("body").find('.menu_book_reg').length > 0) {
      console.log("book names are in DOM");
      // clear the setInterval
      clearInterval(waitForBookNamesInDOM);
// rename menu books
$("body").find(".menu_book_reg:contains('1 John')").html("1 Jan");
$("body").find(".menu_book_reg:contains('2 John')").html("2 Jan");
$("body").find(".menu_book_reg:contains('3 John')").html("3 Jan");
$("body").find(".menu_book_reg:contains('Genesis')").html("1 Mojżesza");
$("body").find(".menu_book_reg:contains('Exodus')").html("2 Mojżesza");
$("body").find(".menu_book_reg:contains('Leviticus')").html("3 Mojżesza");
$("body").find(".menu_book_reg:contains('Numbers')").html("4 Mojżesza");
$("body").find(".menu_book_reg:contains('Deuteronomy')").html("5 Mojżesza");
$("body").find(".menu_book_reg:contains('Joshua')").html("Jozuego");
$("body").find(".menu_book_reg:contains('Judges')").html("Sędziów");
$("body").find(".menu_book_reg:contains('1 Samuel')").html("1 Samuela");
$("body").find(".menu_book_reg:contains('2 Samuel')").html("2 Samuela");
$("body").find(".menu_book_reg:contains('1 Kings')").html("1 Królów");
$("body").find(".menu_book_reg:contains('2 Kings')").html("2 Królów");
$("body").find(".menu_book_reg:contains('Isaiah')").html("Izajasza");
$("body").find(".menu_book_reg:contains('Jeremiah')").html("Jeremijasza");
$("body").find(".menu_book_reg:contains('Ezekiel')").html("Ezechyjela");
$("body").find(".menu_book_reg:contains('Daniel')").html("Danijel");
$("body").find(".menu_book_reg:contains('Hosea')").html("Ozeasza");
$("body").find(".menu_book_reg:contains('Joel')").html("Joela");
$("body").find(".menu_book_reg:contains('Amos')").html("Amosa");
$("body").find(".menu_book_reg:contains('Obadiah')").html("Abdyjaszowe");
$("body").find(".menu_book_reg:contains('Jonah')").html("Jonasza");
$("body").find(".menu_book_reg:contains('Micah')").html("Micheasza");
$("body").find(".menu_book_reg:contains('Nahum')").html("Nahuma");
$("body").find(".menu_book_reg:contains('Habakkuk')").html("Abakuk");
$("body").find(".menu_book_reg:contains('Zephaniah')").html("Sofonijasza");
$("body").find(".menu_book_reg:contains('Haggai')").html("Aggieusza");
$("body").find(".menu_book_reg:contains('Zechariah')").html("Zacharyjasza");
$("body").find(".menu_book_reg:contains('Malachi')").html("Malachyjasza");
$("body").find(".menu_book_reg:contains('Psalms')").html("Psalmów");
$("body").find(".menu_book_reg:contains('Proverbs')").html("Przypowieści");
$("body").find(".menu_book_reg:contains('Job')").html("Ijob");
$("body").find(".menu_book_reg:contains('Song of Songs')").html("Pieśń nad pieśniami");
$("body").find(".menu_book_reg:contains('Ruth')").html("Rut");
$("body").find(".menu_book_reg:contains('Lamentations')").html("Treny");
$("body").find(".menu_book_reg:contains('Ecclesiastes')").html("Kaznodziei");
$("body").find(".menu_book_reg:contains('Esther')").html("Ester");
$("body").find(".menu_book_reg:contains('Ezra')").html("Ezdrasz");
$("body").find(".menu_book_reg:contains('Nehemiah')").html("Nehemijasza");
$("body").find(".menu_book_reg:contains('1 Chronicles')").html("1 Kroniki");
$("body").find(".menu_book_reg:contains('2 Chronicles')").html("2 Kroniki");
$("body").find(".menu_book_reg:contains('John')").html("Jan");
$("body").find(".menu_book_reg:contains('Matthew')").html("Mateusz");
$("body").find(".menu_book_reg:contains('Mark')").html("Markiem");
$("body").find(".menu_book_reg:contains('Luke')").html("Łukasz");
$("body").find(".menu_book_reg:contains('Acts')").html("Dzieje Apostołów");
$("body").find(".menu_book_reg:contains('Romans')").html("Rzymianów");
$("body").find(".menu_book_reg:contains('1 Corinthians')").html("1 Koryntów");
$("body").find(".menu_book_reg:contains('2 Corinthians')").html("2 Koryntów");
$("body").find(".menu_book_reg:contains('Galatians')").html("Galatów");
$("body").find(".menu_book_reg:contains('Ephesians')").html("Efezów");
$("body").find(".menu_book_reg:contains('Philippians')").html("Filippensów");
$("body").find(".menu_book_reg:contains('Colossians')").html("Kolossensów");
$("body").find(".menu_book_reg:contains('1 Thessalonians')").html("1 Tessalonicensów");
$("body").find(".menu_book_reg:contains('2 Thessalonians')").html("2 Tessalonicensów");
$("body").find(".menu_book_reg:contains('1 Timothy')").html("1 Tymoteuszowi");
$("body").find(".menu_book_reg:contains('2 Timothy')").html("2 Tymoteuszowi");
$("body").find(".menu_book_reg:contains('Titus')").html("Tytusowi");
$("body").find(".menu_book_reg:contains('Philemon')").html("Filemonowi");
$("body").find(".menu_book_reg:contains('Hebrews')").html("Hebrajczyków");
$("body").find(".menu_book_reg:contains('James')").html("Jakób");
$("body").find(".menu_book_reg:contains('1 Peter')").html("1 Piotr");
$("body").find(".menu_book_reg:contains('2 Peter')").html("2 Piotr");
$("body").find(".menu_book_reg:contains('Jude')").html("Judas");
$("body").find(".menu_book_reg:contains('Revelation')").html("Objawienie");
}
}, 1100);

}); // END document ready
