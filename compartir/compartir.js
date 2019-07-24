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

}); // END document ready
