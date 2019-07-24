$(document).ready(function() {
//////////////////////////////////////////////////
////////////////// Generic Changes ///////////////
//////////////////////////////////////////////////
// clicking on bottom right ref shows audio
$(".item_right").on('click', function() {
$('.wrap_ref_body_audio').show();
});
// ref header
$(".ref_header").html("<div class='temp_header_title_for_audio'>selecione um capítulo para ouvir a Palavra</div>");
// ref footer
$(".ref_footer").html('<div class="temp_footer_title_for_audio"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" target="_blank" class="bf_links"><span id="" class="">dê uma oferta de amor</span></a></div>');
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

///////////////////////////////////////////////
////BEGIN login hack to Portuguese wording
///////////////////////////////////////////////
// wait for it to be in DOM
  var waitForFirebaseUIUponArrival = setInterval(function() {
    if ($("body").find('.firebaseui-idp-text').length > 0) {
      console.log("FirebaseUI ready in DOM upon arrival");
      // clear the setInterval
      clearInterval(waitForFirebaseUIUponArrival);
// upon arrival
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").text("Faça o login via Google");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").text("Faça o login via Facebook");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").text("Faça o login via Twitter");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").text("Faça o login via Email");
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
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").text("Faça o login via Google");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").text("Faça o login via Facebook");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").text("Faça o login via Twitter");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").text("Faça o login via Email");
}
}, 1100);
});
///////////////////////////////////////////////
////END login hack to Portuguese wording
///////////////////////////////////////////////
// rename audio files and playlist
$("body").find(".sm2-playlist-bd li a").each(function(){
// directory language code
this.href = this.href.replace('audio-en','audio-pt');
// file language code
this.href = this.href.replace('KJV','ACF');
// file name prefix
this.href = this.href.replace('KJV_','ACF_');
// text in the playlist
this.text = this.text.replace('Genesis', 'Gênesis');
this.text = this.text.replace('Exodus', 'Êxodo');
this.text = this.text.replace('Leviticus', 'Levítico');
this.text = this.text.replace('Numbers', 'Números');
this.text = this.text.replace('Deuteronomy', 'Deuteronômio');
this.text = this.text.replace('Joshua', 'Josué');
this.text = this.text.replace('Judges', 'Juízes');
this.text = this.text.replace('1 Samuel', '1 Samuel');
this.text = this.text.replace('2 Samuel', '2 Samuel');
this.text = this.text.replace('1 Kings', '1 Reis');
this.text = this.text.replace('2 Kings', '2 Reis');
this.text = this.text.replace('Isaiah', 'Isaías');
this.text = this.text.replace('Jeremiah', 'Jeremias');
this.text = this.text.replace('Ezekiel', 'Ezequiel');
this.text = this.text.replace('Daniel', 'Daniel');
this.text = this.text.replace('Hosea', 'Oséias');
this.text = this.text.replace('Joel', 'Joel');
this.text = this.text.replace('Amos', 'Amós');
this.text = this.text.replace('Obadiah', 'Obadias');
this.text = this.text.replace('Jonah', 'Jonas');
this.text = this.text.replace('Micah', 'Miquéias');
this.text = this.text.replace('Nahum', 'Naum');
this.text = this.text.replace('Habakkuk', 'Habacuque');
this.text = this.text.replace('Zephaniah', 'Sofonias');
this.text = this.text.replace('Haggai', 'Ageu');
this.text = this.text.replace('Zechariah', 'Zacarias');
this.text = this.text.replace('Malachi', 'Malaquias');
this.text = this.text.replace('Psalms', 'Salmos');
this.text = this.text.replace('Proverbs', 'Provérbios');
this.text = this.text.replace('Job', 'Jó');
this.text = this.text.replace('Song of Songs', 'Cântico dos Cânticos');
this.text = this.text.replace('Ruth', 'Rute');
this.text = this.text.replace('Lamentations', 'Lamentações');
this.text = this.text.replace('Ecclesiastes', 'Eclesiastes');
this.text = this.text.replace('Esther', 'Ester');
this.text = this.text.replace('Ezra', 'Esdras');
this.text = this.text.replace('Nehemiah', 'Neemias');
this.text = this.text.replace('1 Chronicles', '1 Crônicas');
this.text = this.text.replace('2 Chronicles', '2 Crônicas');
this.text = this.text.replace('John', 'João');
this.text = this.text.replace('Matthew', 'Mateus');
this.text = this.text.replace('Mark', 'Marcos');
this.text = this.text.replace('Luke', 'Lucas');
this.text = this.text.replace('Acts', 'Atos');
this.text = this.text.replace('Romans', 'Romanos');
this.text = this.text.replace('1 Corinthians', '1 Coríntios');
this.text = this.text.replace('2 Corinthians', '2 Coríntios');
this.text = this.text.replace('Galatians', 'Gálatas');
this.text = this.text.replace('Ephesians', 'Efésios');
this.text = this.text.replace('Philippians', 'Filipenses');
this.text = this.text.replace('Colossians', 'Colossenses');
this.text = this.text.replace('1 Thessalonians', '1 Tessalonicenses');
this.text = this.text.replace('2 Thessalonians', '2 Tessalonicenses');
this.text = this.text.replace('1 Timothy', '1 Timóteo');
this.text = this.text.replace('2 Timothy', '2 Timóteo');
this.text = this.text.replace('Titus', 'Tito');
this.text = this.text.replace('Philemon', 'Filemon');
this.text = this.text.replace('Hebrews', 'Hebreus');
this.text = this.text.replace('James', 'Tiago');
this.text = this.text.replace('1 Peter', '1 Pedro');
this.text = this.text.replace('2 Peter', '2 Pedro');
this.text = this.text.replace('1 John', '1 João');
this.text = this.text.replace('2 John', '2 João');
this.text = this.text.replace('3 John', '3 João');
this.text = this.text.replace('Jude', 'Judas');
this.text = this.text.replace('Revelation', 'Apocalipse');
});

// rename menu sections
$("body").find(".menu_sec_reg:contains('Teaching')").html("Ensino");
$("body").find(".menu_sec_reg:contains('Former Prophets')").html("Profetas Prévios");
$("body").find(".menu_sec_reg:contains('Latter Prophets')").html("Profetas Posteriores");
$("body").find(".menu_sec_reg:contains('The Twelve')").html("Os Doze");
$("body").find(".menu_sec_reg:contains('Scrolls of Truth')").html("Escrituras da Verdade");
$("body").find(".menu_sec_reg:contains('Five Scrolls')").html("Os Cinco Rolos");
$("body").find(".menu_sec_reg:contains('Other Scrolls')").html("Outros Rolos");
$("body").find(".menu_sec_reg:contains('Messiah')").html("Messias");
$("body").find(".menu_sec_reg:contains('Emissaries')").html("Emissários");
$("body").find(".menu_sec_reg:contains('Assemblies')").html("Assembléias");
$("body").find(".menu_sec_reg:contains('Disciples')").html("Discípulos");
$("body").find(".menu_sec_reg:contains('Vision')").html("Visão");

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
