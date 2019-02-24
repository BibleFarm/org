///////////////////////////////////////////////////
/// BEGIN JS for edit page  ///////
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
$(".wrap_sponsor_ads").html("<div class='sponsor_ads'><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Lorenzo_Fragala.png'></div><div class='sponsor_item_desc'>Lorenzo Fragalá<br>Real Estate Developer<br>Azzurra Development Corp<br><a class='bf_links' href='http://azzurracorp.com/' target='_blank'>azzurracorp.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Mindy_Goldstein.png'></div><div class='sponsor_item_desc'>Mindy Goldstein<br>Registered Nurse<br>Lee County Sheriff\'s Office<br><a class='bf_links' href='http://www.sheriffleefl.org/' target='_blank'>sheriffleefl.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Davis_Knight.png'></div><div class='sponsor_item_desc'>Davis Knight<br>Healthy Products Specialist<br>Apple A Day Co-Op<br><a class='bf_links' href='https://appleadayco-op.com/' target='_blank'>appleadayco-op.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Mike_Newhook.png'></div><div class='sponsor_item_desc'>Mike Newhook<br>Organic Aquaponic Developer<br>Highland Aquaponics<br><a class='bf_links' href='http://highlandaquaponics.com/' target='_blank'>highlandaquaponics.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Jan_Deborah_Imperato.png'></div><div class='sponsor_item_desc'>Jan Deborah Imperato<br>Luxury & Waterfront Realtor<br>Palm Beach Villas Real Estate<br><a class='bf_links' href='https://www.palmbeachvillas.net/' target='_blank'>palmbeachvillas.net</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Angela_Lucambio.png'></div><div class='sponsor_item_desc'>Angela Lucambio<br>Registered Nurse<br>Volunteer & Caretaker<br><a class='bf_links' href='https://www.facebook.com/angela.lucambio' target='_blank'>facebook.com/angela.lucambio</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Ignacio_Di_Paola.png'></div><div class='sponsor_item_desc'>Ignacio Di Paola<br>Marketing Professional<br>NoLines Advertising Agency<br><a class='bf_links' href='http://nolines.com.ar/' target='_blank'>nolines.com.ar</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Dennis_Hamilton.png'></div><div class='sponsor_item_desc'>Dennis Hamilton<br>Organic Hydroponic Developer<br>Greenfund, LLC<br><a class='bf_links' href='https://greenfundsolutions.com/' target='_blank'>greenfundsolutions.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Alex_Smuglovsky.png'></div><div class='sponsor_item_desc'>Alex Smuglovsky<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../sponsor_images/Jose_Eugenio_Martinez.png'></div><div class='sponsor_item_desc'>José Eugenio Martínez<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div></div>");
  ///////////////////////////////////////////////////
  /// BEGIN inject team members ///////
  ///////////////////////////////////////////////////








// init show slow
$(".wrap_sponsors_show_time").show("slow");
$(".wrap_sponsor_ads").show("slow");


///////////////////////////////////////////////////
/// BEGIN countdown_while_showing_sponsors ///////
///////////////////////////////////////////////////
var timer_meet_the_team_edit,
clock_meet_the_team_edit = 10;
$(startup);
function startup() {
$(start).trigger({ type: "click", which: 1 });
}
function start() {
clock_meet_the_team_edit = 10;
$(".countdown_while_showing_sponsors").html("" + clock_meet_the_team_edit + "");
timer_meet_the_team_edit = setInterval(countdown_meet_the_team_edit, 1000);
$("#btnstart").prop("disabled", true);
}
function countdown_meet_the_team_edit() {
clock_meet_the_team_edit -= 1;
$(".countdown_while_showing_sponsors").html("" + clock_meet_the_team_edit + "");

if (clock_meet_the_team_edit == 0) {
clearInterval(timer_meet_the_team_edit);
$("#btn_countdown_start").prop("disabled", false);
}
}

setTimeout(function() {
$(".wrap_sponsors_show_time").hide("slow");
$(".wrap_sponsor_ads").hide("slow");
$(".wrap_edit_background_chooser").show("slow");
$(".wrap_image_sharing").show("slow");
$(".wrap_done_editing_redirect_to_next").show("slow");
$(".app_bg_color_picker_go_bottom").show("slow");
}, 11000);
///////////////////////////////////////////////////
/// END countdown_while_showing_sponsors ///////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/// BEGIN random order for sponsors ///////
///////////////////////////////////////////////////
//  var random_sponsor_order = $(".sponsor_item");
//  for(var i = 0; i < random_sponsor_order.length; i++){
//      var target = Math.floor(Math.random() * random_sponsor_order.length -1) + 1;
//      var target2 = Math.floor(Math.random() * random_sponsor_order.length -1) +1;
//      random_sponsor_order.eq(target).before(random_sponsor_order.eq(target2));
//  }
///////////////////////////////////////////////////
/// END random order for sponsors ///////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/// BEGIN meet the team ///////
///////////////////////////////////////////////////
$("#meet_the_team").on('click', function(e) {
$(".wrap_edit_background_chooser").hide("slow");
$(".wrap_image_sharing").hide("slow");
$(".wrap_done_editing_redirect_to_next").show("slow");
$(".wrap_sponsor_ads").show("slow");
});

$("#meet_the_team_close").on('click', function(e) {
$(".wrap_done_editing_redirect_to_next").hide("slow");
$(".wrap_sponsor_ads").hide("slow");
$(".wrap_edit_background_chooser").show("slow");
$(".wrap_image_sharing").show("slow");
});
///////////////////////////////////////////////////
/// END meet the team ///////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/// BEGIN ve a part now ///////
///////////////////////////////////////////////////
$("#be_a_part_now").on('click', function(e) {
$("").show("slow");
});

$("#be_a_part_now_close").on('click', function(e) {
$("").hide("slow");
});
///////////////////////////////////////////////////
/// END ve a part now ///////
///////////////////////////////////////////////////


///////////////////////////////////////////////////
/// BEGIN edit colorpicker change image url ///////
///////////////////////////////////////////////////
$(".edit_background_chooser > .color_picker_item").on('click', function(e) {
var bg_chosen_to_share = $(this).text();
console.log("picked: " + bg_chosen_to_share);
$(".wrap_image_sharing div img").attr("src", "../posts/" + bg_chosen_to_share + "/Deuteronomy-6-4.png");
$("#edited_now_redirect_to_sharing_page").attr("href", "../posts/" + bg_chosen_to_share + "/Deuteronomy-6-4.html");
});
///////////////////////////////////////////////////
/// END edit colorpicker change image url ///////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/// BEGIN redirect to sharing page ///////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/// END redirect to sharing page ///////
///////////////////////////////////////////////////


// BEGIN done_with_edit_post_close_tab
$("#done_with_edit_post_close_tab").on("click", function(e) {
function doneEditingCloseTab() {
window.top.close();
}
setTimeout(function(){
doneEditingCloseTab()
}, 1000);
});
// END done_with_edit_post_close_tab




});
///////////////////////////////////////////////////
/// END JS for edit page  ///////
///////////////////////////////////////////////////
