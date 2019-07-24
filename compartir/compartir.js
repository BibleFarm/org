$(document).ready(function() {
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
//////////////////////////////////////////////////
////////////////// Spanish Changes ///////////////
//////////////////////////////////////////////////
// ref header
$(".ref_header").html("<div class='temp_header_title_for_audio'>seleccione un capitulo para escuchar la Palabra</div>");
// ref footer
$(".ref_footer").html('<div class="temp_footer_title_for_audio"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" target="_blank" class="bf_links"><span id="" class="">dar una ofrenda de amor</span></a></div>');

setTimeout(function() {
$("#edited_app_name").text("Su Nombre Va Aquí");
}, 8100);

//////////////////////////////////////////////////
////// BEGIN MutationObserver MutationObserverUserLoggedInOrNotAddOn_es ////
//////////////////////////////////////////////////
// First create our observer and get our target element
var observer = new MutationObserver(MutationObserverUserLoggedInOrNotAddOn_es),
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
function MutationObserverUserLoggedInOrNotAddOn_es() {
  console.log("TRIGGERED Mutation Observer MutationObserverUserLoggedInOrNotAddOn_es");


if($('#continue_as_a_visitor_admin').css('display') == 'none')
{
var welcome_user_with_name = $("body").find("#name").text();
$("#logged_in_user_is_a_part").text("soy parte de BibleFarm.org");
console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to soy parte de BibleFarm.org");

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
$("#logged_in_user_is_a_part").text("sea parte de BibleFarm.org");
$("#edited_app_name").text("Su Nombre Va Aquí");

setTimeout(function() {
$(".app_wrap").find("p.msg1").text("gracias por visitarnos").fadeOut("5000").fadeIn("7000");
}, 8100);
}

}; // end mutation observer
//////////////////////////////////////////////////
////// END MutationObserver MutationObserverUserLoggedInOrNotAddOn_es ////
//////////////////////////////////////////////////

$(".app_intro_splash_text").html('<p class="msg1" data-in-effect="rotateInDownRight" data-out-effect="hinge">Bienvenido<h1>BibleFarm.org</h1><p class="msg2" data-in-effect="bounceInDown">entremos en la Palabra</p>');

$(".panel_first_time_users_title").text("Use esta app para usted o su ministerio:");

$(".panel_first_time_users_body").text("Para compartir versículos o hacer cambios de preferencias, por favor inicie sesión. Aquí no hay derechos de autor. Estamos aquí para ayudar. Queremos ayudarle a compartir La Palabra. ¿Le gustaría tener su propio sitio? Lo haremos por usted y lo estacionaremos en https://SuNombre.biblefarm.org/ o háganos saber si tiene su propio dominio.");
$("#continue_as_a_visitor_first").text("continuar como visitante");
$("#continue_as_a_visitor_admin").text("continuar como visitante");

$("#login_now").text("iniciar sesión");

$(".menu_title_first_time_users").text("soy un usuario nuevo");
$(".menu_title_who_else_is_part").text("conozca el equipo");
$(".menu_title_admin").text("administrar mi cuenta");
$(".menu_title_console").text("consola");
$(".menu_title_terminal").text("terminal");
$(".menu_title_language_preferences").text("idiomas");
$(".menu_title_colour_preferences").text("colores");
$(".menu_title_fullscreen_preferences").text("pantalla completa");

$(".menu_title_close").text("cerrar");

$(".top_help").text("ayuda");

$(".help_body_temp").html("Tendremos ayuda comprensiva en el futuro. Mientras tanto, por favor, contáctenos para cualquier pregunta, haciendo click <span class='show_pure_chat bf_links'>aquí</span>");

$(".panel_who_else_is_part_title").text("Cumpliendo Mat 25:31-40 una visita a la vez");

$(".panel_console_title").text("Esta consola es para tareas personales");
$(".panel_console_body_temp").text("Pronto vamos a poder guardar cosas personales aquí. Listas de personas por las cuales estamos orando, gente a quien le estamos dando testimonio, asuntos bíblicos que estamos estudiando, etc.");

$("#sign-out").text("cerrar sesión");

$("#setup_verse_sharing_welcome").text("Personalicemos sus versículos para compartir:");

$("#setup_verse_sharing_all_set").text("Click en cualquier versículo para compartirlo");
$('input#config_name_change').attr("placeholder", "ingrese su código aquí");
$("#I_dont_have_a_sharing_code").text("no tengo el código");
$("#activate_sharing_code").text("activar");

///////////////////////////////////////////////
////BEGIN login hack to Spanish wording
///////////////////////////////////////////////
$(document).ready(function() {
// wait for it to be in DOM
  var waitForFirebaseUIUponArrival = setInterval(function() {
    if ($("body").find('.firebaseui-idp-text').length > 0) {
      console.log("FirebaseUI ready in DOM upon arrival");
      // clear the setInterval
      clearInterval(waitForFirebaseUIUponArrival);
// upon arrival
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Google");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Facebook");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Twitter");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Email");
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
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Google");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Facebook");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Twitter");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").text("Iniciar sesión con Email");
}
}, 1100);
});
});
///////////////////////////////////////////////
////END login hack to Spanish wording
///////////////////////////////////////////////
// rename audio files and playlist
$("body").find(".sm2-playlist-bd li a").each(function(){
// directory language code
this.href = this.href.replace('audio-en', 'audio-es');
// file language code
this.href = this.href.replace('KJV', 'RV9');
// file name prefix
this.href = this.href.replace('KJV_', 'RV9_');
// text in the playlist
this.text = this.text.replace('Genesis', 'Génesis');
this.text = this.text.replace('Exodus', 'Éxodo');
this.text = this.text.replace('Leviticus', 'Levítico');
this.text = this.text.replace('Numbers', 'Números');
this.text = this.text.replace('Deuteronomy', 'Deuteronomio');
this.text = this.text.replace('Joshua', 'Josué');
this.text = this.text.replace('Judges', 'Jueces');
this.text = this.text.replace('1 Samuel', '1 Samuel');
this.text = this.text.replace('2 Samuel', '2 Samuel');
this.text = this.text.replace('1 Kings', '1 Reyes');
this.text = this.text.replace('2 Kings', '2 Reyes');
this.text = this.text.replace('Isaiah', 'Isaías');
this.text = this.text.replace('Jeremiah', 'Jeremías');
this.text = this.text.replace('Ezekiel', 'Ezequiel');
this.text = this.text.replace('Daniel', 'Daniel');
this.text = this.text.replace('Hosea', 'Oseas');
this.text = this.text.replace('Joel', 'Joel');
this.text = this.text.replace('Amos', 'Amós');
this.text = this.text.replace('Obadiah', 'Abdías');
this.text = this.text.replace('Jonah', 'Jonás');
this.text = this.text.replace('Micah', 'Miqueas');
this.text = this.text.replace('Nahum', 'Nahum');
this.text = this.text.replace('Habakkuk', 'Habacuc');
this.text = this.text.replace('Zephaniah', 'Sofonías');
this.text = this.text.replace('Haggai', 'Haggeo');
this.text = this.text.replace('Zechariah', 'Zacarías');
this.text = this.text.replace('Malachi', 'Malaquías');
this.text = this.text.replace('Psalms', 'Salmos');
this.text = this.text.replace('Proverbs', 'Proverbios');
this.text = this.text.replace('Job', 'Job');
this.text = this.text.replace('Song of Songs', 'Canción de Canciones');
this.text = this.text.replace('Ruth', 'Ruth');
this.text = this.text.replace('Lamentations', 'Lamentaciones');
this.text = this.text.replace('Ecclesiastes', 'Ecclesiastés');
this.text = this.text.replace('Esther', 'Esther');
this.text = this.text.replace('Ezra', 'Esdras');
this.text = this.text.replace('Nehemiah', 'Nehemías');
this.text = this.text.replace('1 Chronicles', '1 Crónicas');
this.text = this.text.replace('2 Chronicles', '2 Crónicas');
this.text = this.text.replace('John', 'Juan');
this.text = this.text.replace('Matthew', 'Mateo');
this.text = this.text.replace('Mark', 'Marcos');
this.text = this.text.replace('Luke', 'Lucas');
this.text = this.text.replace('Acts', 'Hechos');
this.text = this.text.replace('Romans', 'Romanos');
this.text = this.text.replace('1 Corinthians', '1 Corintios');
this.text = this.text.replace('2 Corinthians', '2 Corintios');
this.text = this.text.replace('Galatians', 'Gálatas');
this.text = this.text.replace('Ephesians', 'Efesios');
this.text = this.text.replace('Philippians', 'Filipenses');
this.text = this.text.replace('Colossians', 'Colosenses');
this.text = this.text.replace('1 Thessalonians', '1 Tesalonicenses');
this.text = this.text.replace('2 Thessalonians', '2 Tesalonicenses');
this.text = this.text.replace('1 Timothy', '1 Timoteo');
this.text = this.text.replace('2 Timothy', '2 Timoteo');
this.text = this.text.replace('Titus', 'Tito');
this.text = this.text.replace('Philemon', 'Filemón');
this.text = this.text.replace('Hebrews', 'Hebreos');
this.text = this.text.replace('James', 'Jacobo');
this.text = this.text.replace('1 Peter', '1 Pedro');
this.text = this.text.replace('2 Peter', '2 Pedro');
this.text = this.text.replace('1 John', '1 Juan');
this.text = this.text.replace('2 John', '2 Juan');
this.text = this.text.replace('3 John', '3 Juan');
this.text = this.text.replace('Jude', 'Judas');
this.text = this.text.replace('Revelation', 'Apocalipsis');
});

// rename menu sections
$("body").find(".menu_sec_reg:contains('Teaching')").html("Enseñanza");
$("body").find(".menu_sec_reg:contains('Former Prophets')").html("Profetas Anteriores");
$("body").find(".menu_sec_reg:contains('Latter Prophets')").html("Profetas Posteriores");
$("body").find(".menu_sec_reg:contains('The Twelve')").html("Los Doce");
$("body").find(".menu_sec_reg:contains('Scrolls of Truth')").html("Escrituras de Verdad");
$("body").find(".menu_sec_reg:contains('Five Scrolls')").html("Los Cinco Rollos");
$("body").find(".menu_sec_reg:contains('Other Scrolls')").html("Otros Rollos");
$("body").find(".menu_sec_reg:contains('Messiah')").html("Mesías");
$("body").find(".menu_sec_reg:contains('Emissaries')").html("Emisarios");
$("body").find(".menu_sec_reg:contains('Assemblies')").html("Asambleas");
$("body").find(".menu_sec_reg:contains('Disciples')").html("Discípulos");
$("body").find(".menu_sec_reg:contains('Vision')").html("Visión");

// wait for it to be in DOM
  var waitForBookNamesInDOM = setInterval(function() {
    if ($("body").find('.menu_book_reg').length > 0) {
      console.log("book names are in DOM");
      // clear the setInterval
      clearInterval(waitForBookNamesInDOM);
// rename menu books
$("body").find(".menu_book_reg:contains('1 John')").html("1 Juan");
$("body").find(".menu_book_reg:contains('2 John')").html("2 Juan");
$("body").find(".menu_book_reg:contains('3 John')").html("3 Juan");
$("body").find(".menu_book_reg:contains('Genesis')").html("Génesis");
$("body").find(".menu_book_reg:contains('Exodus')").html("Éxodo");
$("body").find(".menu_book_reg:contains('Leviticus')").html("Levítico");
$("body").find(".menu_book_reg:contains('Numbers')").html("Números");
$("body").find(".menu_book_reg:contains('Deuteronomy')").html("Deuteronomio");
$("body").find(".menu_book_reg:contains('Joshua')").html("Josué");
$("body").find(".menu_book_reg:contains('Judges')").html("Jueces");
$("body").find(".menu_book_reg:contains('1 Samuel')").html("1 Samuel");
$("body").find(".menu_book_reg:contains('2 Samuel')").html("2 Samuel");
$("body").find(".menu_book_reg:contains('1 Kings')").html("1 Reyes");
$("body").find(".menu_book_reg:contains('2 Kings')").html("2 Reyes");
$("body").find(".menu_book_reg:contains('Isaiah')").html("Isaías");
$("body").find(".menu_book_reg:contains('Jeremiah')").html("Jeremías");
$("body").find(".menu_book_reg:contains('Ezekiel')").html("Ezequiel");
$("body").find(".menu_book_reg:contains('Daniel')").html("Daniel");
$("body").find(".menu_book_reg:contains('Hosea')").html("Oseas");
$("body").find(".menu_book_reg:contains('Joel')").html("Joel");
$("body").find(".menu_book_reg:contains('Amos')").html("Amós");
$("body").find(".menu_book_reg:contains('Obadiah')").html("Abdías");
$("body").find(".menu_book_reg:contains('Jonah')").html("Jonás");
$("body").find(".menu_book_reg:contains('Micah')").html("Miqueas");
$("body").find(".menu_book_reg:contains('Nahum')").html("Nahum");
$("body").find(".menu_book_reg:contains('Habakkuk')").html("Habacuc");
$("body").find(".menu_book_reg:contains('Zephaniah')").html("Sofonías");
$("body").find(".menu_book_reg:contains('Haggai')").html("Haggeo");
$("body").find(".menu_book_reg:contains('Zechariah')").html("Zacarías");
$("body").find(".menu_book_reg:contains('Malachi')").html("Malaquías");
$("body").find(".menu_book_reg:contains('Psalms')").html("Salmos");
$("body").find(".menu_book_reg:contains('Proverbs')").html("Proverbios");
$("body").find(".menu_book_reg:contains('Job')").html("Job");
$("body").find(".menu_book_reg:contains('Song of Songs')").html("Canción de Canciones");
$("body").find(".menu_book_reg:contains('Ruth')").html("Ruth");
$("body").find(".menu_book_reg:contains('Lamentations')").html("Lamentaciones");
$("body").find(".menu_book_reg:contains('Ecclesiastes')").html("Ecclesiastés");
$("body").find(".menu_book_reg:contains('Esther')").html("Esther");
$("body").find(".menu_book_reg:contains('Ezra')").html("Esdras");
$("body").find(".menu_book_reg:contains('Nehemiah')").html("Nehemías");
$("body").find(".menu_book_reg:contains('1 Chronicles')").html("1 Crónicas");
$("body").find(".menu_book_reg:contains('2 Chronicles')").html("2 Crónicas");
$("body").find(".menu_book_reg:contains('John')").html("Juan");
$("body").find(".menu_book_reg:contains('Matthew')").html("Mateo");
$("body").find(".menu_book_reg:contains('Mark')").html("Marcos");
$("body").find(".menu_book_reg:contains('Luke')").html("Lucas");
$("body").find(".menu_book_reg:contains('Acts')").html("Hechos");
$("body").find(".menu_book_reg:contains('Romans')").html("Romanos");
$("body").find(".menu_book_reg:contains('1 Corinthians')").html("1 Corintios");
$("body").find(".menu_book_reg:contains('2 Corinthians')").html("2 Corintios");
$("body").find(".menu_book_reg:contains('Galatians')").html("Gálatas");
$("body").find(".menu_book_reg:contains('Ephesians')").html("Efesios");
$("body").find(".menu_book_reg:contains('Philippians')").html("Filipenses");
$("body").find(".menu_book_reg:contains('Colossians')").html("Colosenses");
$("body").find(".menu_book_reg:contains('1 Thessalonians')").html("1 Tesalonicenses");
$("body").find(".menu_book_reg:contains('2 Thessalonians')").html("2 Tesalonicenses");
$("body").find(".menu_book_reg:contains('1 Timothy')").html("1 Timoteo");
$("body").find(".menu_book_reg:contains('2 Timothy')").html("2 Timoteo");
$("body").find(".menu_book_reg:contains('Titus')").html("Tito");
$("body").find(".menu_book_reg:contains('Philemon')").html("Filemón");
$("body").find(".menu_book_reg:contains('Hebrews')").html("Hebreos");
$("body").find(".menu_book_reg:contains('James')").html("Jacobo");
$("body").find(".menu_book_reg:contains('1 Peter')").html("1 Pedro");
$("body").find(".menu_book_reg:contains('2 Peter')").html("2 Pedro");
$("body").find(".menu_book_reg:contains('Jude')").html("Judas");
$("body").find(".menu_book_reg:contains('Revelation')").html("Apocalipsis");
}
}, 1100);

}); // END document ready
