///////////////////////////////////////////////////
/// BEGIN JS for posting pages  ///////
///////////////////////////////////////////////////

$(document).ready(function() {


  ///////////////////////////////////////////////////
  /// BEGIN wrap_sponsor_ads perfectScrollbar ///////
  ///////////////////////////////////////////////////
  $('.wrap_sponsor_ads').perfectScrollbar({
    wheelPropagation: true,
    scrollXMarginOffset: 2,
    suppressScrollX: true
  });
  ///////////////////////////////////////////////////
  /// END wrap_sponsor_ads perfectScrollbar ///////
  ///////////////////////////////////////////////////


  ///////////////////////////////////////////////////
  /// BEGIN inject team members ///////
  ///////////////////////////////////////////////////
$(".wrap_sponsor_ads").html("<div class='sponsor_ads'><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Lorenzo_Fragala.png'></div><div class='sponsor_item_desc'>Lorenzo Fragalá<br>Real Estate Developer<br>Azzurra Development Corp<br><a class='bf_links' href='http://azzurracorp.com/' target='_blank'>azzurracorp.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Mindy_Goldstein.png'></div><div class='sponsor_item_desc'>Mindy Goldstein<br>Registered Nurse<br>Lee County Sheriff\'s Office<br><a class='bf_links' href='http://www.sheriffleefl.org/' target='_blank'>sheriffleefl.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Davis_Knight.png'></div><div class='sponsor_item_desc'>Davis Knight<br>Healthy Products Specialist<br>Apple A Day Co-Op<br><a class='bf_links' href='https://appleadayco-op.com/' target='_blank'>appleadayco-op.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Mike_Newhook.png'></div><div class='sponsor_item_desc'>Mike Newhook<br>Organic Aquaponic Developer<br>Highland Aquaponics<br><a class='bf_links' href='http://highlandaquaponics.com/' target='_blank'>highlandaquaponics.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Jan_Deborah_Imperato.png'></div><div class='sponsor_item_desc'>Jan Deborah Imperato<br>Luxury & Waterfront Realtor<br>Palm Beach Villas Real Estate<br><a class='bf_links' href='https://www.palmbeachvillas.net/' target='_blank'>palmbeachvillas.net</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Angela_Lucambio.png'></div><div class='sponsor_item_desc'>Angela Lucambio<br>Registered Nurse<br>Volunteer & Caretaker<br><a class='bf_links' href='https://www.facebook.com/angela.lucambio' target='_blank'>facebook.com/angela.lucambio</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Ignacio_Di_Paola.png'></div><div class='sponsor_item_desc'>Ignacio Di Paola<br>Marketing Professional<br>NoLines Advertising Agency<br><a class='bf_links' href='http://nolines.com.ar/' target='_blank'>nolines.com.ar</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Dennis_Hamilton.png'></div><div class='sponsor_item_desc'>Dennis Hamilton<br>Organic Hydroponic Developer<br>Greenfund, LLC<br><a class='bf_links' href='https://greenfundsolutions.com/' target='_blank'>greenfundsolutions.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Alex_Smuglovsky.png'></div><div class='sponsor_item_desc'>Alex Smuglovsky<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Jose_Eugenio_Martinez.png'></div><div class='sponsor_item_desc'>José Eugenio Martínez<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div></div>");
  ///////////////////////////////////////////////////
  /// BEGIN inject team members ///////
  ///////////////////////////////////////////////////



  ///////////////////////////////////////////////////
  /// BEGIN countdown_loading_addthis_options ///////
  ///////////////////////////////////////////////////

var timer1,
  clock = 3;
$(startup);
function startup() {
  $(start).trigger({ type: "click", which: 1 });
}
function start() {
  clock = 3;
  $(".countdown_loading_addthis_options").html("" + clock + "");
  timer1 = setInterval(countdown, 1000);
  $("#btnstart").prop("disabled", true);
}
function countdown() {
  clock -= 1;
  $(".countdown_loading_addthis_options").html("" + clock + "");

  if (clock == 0) {
    clearInterval(timer1);
    $("#btn_countdown_start").prop("disabled", false);
    $(".wait_to_load_options").hide("slow");
    $(".wrap_sponsor_ads").hide("slow");
  }
}

  ///////////////////////////////////////////////////
  /// END countdown_loading_addthis_options ///////
  ///////////////////////////////////////////////////

  // BEGIN options toggle

  // lands with show_sharing_options displayed
 $(".show_sharing_options").show();

  $(".options_bar").on("click", ".option_menu", function(e) {
    $(
      ".show_sharing_options, .show_sending_options, .show_saving_options"
    ).hide("slow");
    $(".show_menu_options").show("slow");
  });

  $(".options_bar").on("click", ".option_share", function(e) {
    $(
      ".show_menu_options, .show_sending_options, .show_saving_options"
    ).hide("slow");
    $(".show_sharing_options").show("slow");
  });

  $(".options_bar").on("click", ".option_send", function(e) {
    $(
      ".show_menu_options, .show_sharing_options, .show_saving_options"
    ).hide("slow");
    $(".show_sending_options").show("slow");
  });

  $(".options_bar").on("click", ".option_save", function(e) {
    $(
      ".show_menu_options, .show_sharing_options, .show_sending_options"
    ).hide("slow");
    $(".show_saving_options").show("slow");
  });

  $(".options_bar").on("click", ".option_link", function(e) {
    $(
      ".show_menu_options, .show_sending_options, .show_saving_options"
    ).hide("slow");
    $(".show_sharing_options").show("slow");
  });

  $(".options_bar").on("click", ".option_print", function(e) {
    $(
      ".show_menu_options, .show_sending_options, .show_saving_options"
    ).hide("slow");
    $(".show_sharing_options").show("slow");
  });


  // END options toggle



  // BEGIN done_with_ready_post_close_tab
  $("#done_with_ready_post_close_tab").on("click", function(e) {
  function donePostingCloseTab() {
    window.top.close();
}
setTimeout(function(){
    donePostingCloseTab()
}, 1000);
});
  // END done_with_ready_post_close_tab

});
