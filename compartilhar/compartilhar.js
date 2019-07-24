$(document).ready(function() {

//////////////////////////////////////////////////
////////////////// Portuguese Changes ///////////////
//////////////////////////////////////////////////

setTimeout(function() {
$("#edited_app_name").text("Seu Nome Vai Aqui");
}, 8100);

//////////////////////////////////////////////////
////// BEGIN MutationObserver MutationObserverUserLoggedInOrNotAddOn_pt ////
//////////////////////////////////////////////////
// First create our observer and get our target element
var observer = new MutationObserver(MutationObserverUserLoggedInOrNotAddOn_pt),
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
function MutationObserverUserLoggedInOrNotAddOn_pt() {
  console.log("TRIGGERED Mutation Observer MutationObserverUserLoggedInOrNotAddOn_pt");


if($('#continue_as_a_visitor_admin').css('display') == 'none')
{
var welcome_user_with_name = $("body").find("#name").text();
$("#logged_in_user_is_a_part").text("sou parte da BibleFarm.org");
console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to sou parte da BibleFarm.org");

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
$("#logged_in_user_is_a_part").text("seja parte da BibleFarm.org");
$("#edited_app_name").text("Seu Nome Vai Aqui");

setTimeout(function() {
$(".app_wrap").find("p.msg1").text("obrigado pela visita").fadeOut("5000").fadeIn("7000");
}, 8100);
}

}; // end mutation observer
//////////////////////////////////////////////////
////// END MutationObserver MutationObserverUserLoggedInOrNotAddOn_pt ////
//////////////////////////////////////////////////

$(".app_intro_splash_text").html('<p class="msg1" data-in-effect="rotateInDownRight" data-out-effect="hinge">Seja Bem-vindo<h1>BibleFarm.org</h1><p class="msg2" data-in-effect="bounceInDown">vamos entrar na Palavra</p>');

$(".panel_first_time_users_title").text("Use este app para você ou seu ministério:");

$(".panel_first_time_users_body").text("Para compartilhar versículos ou fazer mudanças de preferência, faça o login. Aqui não há direitos autorais. Estamos aqui para ajudar. Queremos ajudar você a compartilhar a Palavra. Você gostaria de ter seu próprio site? Nós faremos isso por você e nós o estacionaremos em https://SeuNome.biblefarm.org/ ou nos avise se você tiver seu próprio domínio.");

$("#continue_as_a_visitor_first").text("continuar como visitante");
$("#continue_as_a_visitor_admin").text("continuar como visitante");

$("#login_now").text("faça o login");

$(".menu_title_first_time_users").text("sou um novo usuário");
$(".menu_title_who_else_is_part").text("conheça a equipe");
$(".menu_title_admin").text("administrar minha conta");
$(".menu_title_console").text("console");
$(".menu_title_terminal").text("terminal");
$(".menu_title_language_preferences").text("línguas");
$(".menu_title_colour_preferences").text("cores");
$(".menu_title_fullscreen_preferences").text("tela cheia");

$(".menu_title_close").text("fechar");

$(".top_help").text("ajuda");

$(".help_body_temp").html("Teremos ajuda integral no futuro. Enquanto isso, por favor, entre em contato conosco para qualquer pergunta, clicando <span class='show_pure_chat bf_links'>aqui</span>");

$(".panel_who_else_is_part_title").text("Cumprindo Mat 25:31-40 uma visita de cada vez");

$(".panel_console_title").text("Este console é para tarefas pessoais");
$(".panel_console_body_temp").text("Em breve poderemos armazenar coisas pessoais aqui. Listas de pessoas pelas quais estamos orando, pessoas a quem estamos testemunhando, questões bíblicas que estamos estudando, etc.");

$("#sign-out").text("fechar sessão");

$("#setup_verse_sharing_welcome").text("Personalize o seu compartilhamento dos versos:");

$("#setup_verse_sharing_all_set").text("Clique em qualquer verso para compartilhá-lo");
$('input#config_name_change').attr("placeholder", "digite seu código aqui");
$("#I_dont_have_a_sharing_code").text("eu não tenho o código");
$("#activate_sharing_code").text("ativar");

// ref header
$(".ref_header").html("<div class='temp_header_title_for_audio'>selecione um capítulo para ouvir a Palavra</div>");
// ref footer
$(".ref_footer").html('<div class="temp_footer_title_for_audio"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" target="_blank" class="bf_links"><span id="" class="">dê uma oferta de amor</span></a></div>');

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
