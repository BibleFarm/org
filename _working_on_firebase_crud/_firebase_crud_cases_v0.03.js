//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//// TO CUSTOMIZE: change email address of admin     /////
////  from smuglovsky@gmail.com to the new admin     /////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


// _firebase_crud_cases_v0.02.js
$(document).ready(function() {

// on load we welcome visitor
  $(".cover_while_dt_firebase_is_working_welcome").show();
  $(".cover_while_dt_firebase_is_working_updating").hide();

  $("#create_or_update_case_1_a").on("click",function(e){
$(".cover_while_dt_firebase_is_working_updating").show();
});

//*************************************************************/
//* BEGIN firebase login and condition based display of data  */
//*************************************************************/
// show login_or_not
$("#authentication").on("click",function(e){
$(".wrap_login_or_not").toggle("slow");
});
// BEGIN handle clicks at the login panel
$("#continue_as_a_visitor_or_ok").on("click",function(e){
$(".wrap_login_or_not").toggle("slow");
});
// END handle clicks at the login panel
// BEGIN if logged-in replace text from "continue as a visitor" to "hide this"

// BEGIN if logged-in replace text from "continue as a visitor" to "hide this"

// land on page with
$(".wrap_case_1").show("slow");
$(".wrap_case_2").hide("slow");
$(".wrap_case_3").hide("slow");
$(".wrap_case_4").hide("slow");
$(".wrap_case_5").hide("slow");
// BEGIN handle clicks to toggle cases
$(".toggle_case_1").on("click",function(e){
$(".wrap_case_1").show("slow");
$(".wrap_case_2").hide("slow");
$(".wrap_case_3").hide("slow");
$(".wrap_case_4").hide("slow");
$(".wrap_case_5").hide("slow");
});
$(".toggle_case_2").on("click",function(e){
$(".wrap_case_2").show("slow");
$(".wrap_case_1").hide("slow");
$(".wrap_case_3").hide("slow");
$(".wrap_case_4").hide("slow");
$(".wrap_case_5").hide("slow");
});
$(".toggle_case_3").on("click",function(e){
$(".wrap_case_3").show("slow");
$(".wrap_case_1").hide("slow");
$(".wrap_case_2").hide("slow");
$(".wrap_case_4").hide("slow");
$(".wrap_case_5").hide("slow");
});
$(".toggle_case_4").on("click",function(e){
$(".wrap_case_4").show("slow");
$(".wrap_case_1").hide("slow");
$(".wrap_case_2").hide("slow");
$(".wrap_case_3").hide("slow");
$(".wrap_case_5").hide("slow");
});
$(".toggle_case_5").on("click",function(e){
$(".wrap_case_5").show("slow");
$(".wrap_case_1").hide("slow");
$(".wrap_case_2").hide("slow");
$(".wrap_case_3").hide("slow");
$(".wrap_case_4").hide("slow");
});
// END handle clicks to toggle cases











//*************************************************************/
//* END firebase login and condition based display of data  */
//*************************************************************/
















//////////////////////////////////
//// BEGIN chorro _case_1_a
//////////////////////////////////
// CRUD variables
  var form_case_1_a;
  var ref_case_1_a;
  var tbody_case_1_a;
  var CREATE_case_1_a = "create";
  var UPDATE_case_1_a = "edit";
  var mode_case_1_a = CREATE_case_1_a;
  var refEdit_case_1_a;
// CRUD reset for a clean start
    form_case_1_a = document.getElementById("form_case_1_a");
    form_case_1_a.reset();
    form_case_1_a.addEventListener(
      "submit",
      submitToFirebase_case_1_a,
      false
    );
tbody_case_1_a = document.getElementById("tbody_case_1_a");
this.auth = firebase.auth();
/////////////////////////////////////////
/////////////////////////////////////////
// CRUD usage case_1_a
ref_case_1_a = firebase.database().ref().child("_case_1_a");
/////////////////////////////////////////
/////////////////////////////////////////
var user = firebase.auth().currentUser;
if (user) {
  // User is signed in.
  console.log("//////////////////////////////// UPON ARRIVAL // there is a USER signed in");
  $("#continue_as_a_visitor_or_ok").text("ok");
  console.log("//////////////////////////////// #continue_as_a_visitor_or_ok // changed to OK");
  $("#authentication").text("logout");
} else {
  // No user is signed in.
  console.log("//////////////////////////////// UPON ARRIVAL // NOBODY signed in");
  $('#email').text("");
  console.log("//////////////////////////////// email field is clear now");
  $("#continue_as_a_visitor_or_ok").text("continue as a visitor");
  console.log("//////////////////////////////// #continue_as_a_visitor_or_ok // changed continue as a visitor");
  $("#authentication").text("login");
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
}
/////////////////////////////////////////
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  console.log("/////////////////////////////// STATE CHANGED // there is a USER signed in");
  $("#continue_as_a_visitor_or_ok").text("ok");
  console.log("//////////////////////////////// #continue_as_a_visitor_or_ok // changed to OK");
  $("#authentication").text("logout");
////////////////////////////////////////////////////////
if(!$('#email').text().match('smuglovsky@gmail.com')) {
  $(".logged_in_message_users_case_1_a").show("slow");
  $(".logged_in_message_admin_case_1_a").hide();
// hide create new record // and edit & delete columns
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
  $(".logged_in_message_users_case_1_a").hide();
  $(".logged_in_message_admin_case_1_a").show("slow");
// show create new record // and edit & delete columns
$("body").find(".create_case_1_a").show();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").show();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").show();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").show();
$(this).find("td:nth-last-child(1)").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}
////////////////////////////////////////////////////////
// someone clicked #lock_and_unlock
$(".cover_while_dt_firebase_is_working_welcome").hide();
console.log("we're hiding welcone because a user just came in");

} else {
  // No user is signed in.
  console.log("/////////////////////////////// UPON ARRIVAL // NOBODY signed in");
  $('#email').text("");
  console.log("/////////////////////////////// email field is clear now");
  $(".logged_in_message_users_case_1_a").hide();
  $(".logged_in_message_admin_case_1_a").hide();
  $("#continue_as_a_visitor_or_ok").text("continue as a visitor");
  console.log("//////////////////////////////// #continue_as_a_visitor_or_ok // changed continue as a visitor");
  $("#authentication").text("login");
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
}
});
/////////////////////////////////////////
  read_case_1_a();
// CRUD READ // bring in the data
 function read_case_1_a() {
  ref_case_1_a.on("value", function(snap) {
    var data_case_1_a = snap.val();
    var tr_case_1_a = "";
   for(var key in data_case_1_a){
  tr_case_1_a += '<tr>' +
'<td><div class="background_test"><span class="wrap_svg"><i data-fa-symbol="folder_opened" class="fas fa-folder-open fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#folder_opened"></use></svg></span></div></td>' +
'<td class="column_0_case_1_a"><div class="dt_inner_cell"><img id="retrieved_image" src="' + data_case_1_a[key].column_0_case_1_a + '" alt=""></div></td>' +
'<td class="column_1_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_1_case_1_a + '</div></td>' +
'<td class="column_2_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_2_case_1_a + '</div></td>' +
'<td class="column_3_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_3_case_1_a + '</div></td>' +
'<td class="column_4_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_4_case_1_a + '</div></td>' +
'<td class="column_5_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_5_case_1_a + '</div></td>' +
'<td class="column_edit">' +
'<span class="edit" data-item="' + key + '">' +'<div class="background_test"><span class="wrap_svg"><i data-fa-symbol="edit_pencil" class="fas fa-pencil-alt fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#edit_pencil"></use></svg></span></div></span>' +
'</td>' +
'<td class="column_delete">' +
'<span class="delete" data-item="' + key + '">' +'<div class="background_test"><span class="wrap_svg"><i data-fa-symbol="trash_can" class="fas fa-trash-alt fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#trash_can"></use></svg></span></div></span>' +
'</td>' +
'</tr>';
  }
  tbody_case_1_a.innerHTML = tr_case_1_a;
  if(tr_case_1_a != ""){
var editableElements_case_1_a = document.getElementsByClassName("edit");
for (var i = 0; i < editableElements_case_1_a.length; i++){
	editableElements_case_1_a[i].addEventListener("click", edit_case_1_a, false);
}
var deletableElements_case_1_a = document.getElementsByClassName("delete");
for (var i = 0; i < deletableElements_case_1_a.length; i++){
	deletableElements_case_1_a[i].addEventListener("click", delete_case_1_a, false);
}
  }
  });
  console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////// just ran function read_case_1_a()");
}

///////////////////////////////////////////////////////
// CRUD UPDATE // edit the data
///////////////////////////////////////////////////////
function edit_case_1_a(){
	var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap){
		var data_case_1_a = snap.val();
	document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
  document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
	document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
	document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
	document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
	document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
	});
document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
mode_case_1_a = UPDATE_case_1_a;
///////////////////////////////////////////////////////
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
$("#create_or_update_case_1_a").on("click", function() {
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
$(".cancel_editing").show();
$(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function(){
console.log("cancel_editing was clicked");
	form_case_1_a.reset();
document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
mode_case_1_a = CREATE_case_1_a;
$(".cancel_editing").hide();
    }, 100);
});
///////////////////////////////////////////////////////
  console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////// just ran function edit_case_1_a()");

}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// CRUD DELETE // delete the data
function delete_case_1_a(){
	var firebase_key_to_delete_case_1_a = this.getAttribute("data-item");
	var refDelete_case_1_a = ref_case_1_a.child(firebase_key_to_delete_case_1_a);
	refDelete_case_1_a.remove();












// datatable clear
table_case_1_a.clear();
console.log("table_case_1_a.clear");
// datatable destroy
table_case_1_a.destroy();
console.log("table_case_1_a.destroy was done");
// BEGIN get it all back from firebase
  ref_case_1_a.on("value", function(snap) {
    var data_case_1_a = snap.val();
	var tr_case_1_a = "";
   for(var key in data_case_1_a){
  tr_case_1_a += '<tr>' +
'<td><div class="background_test"><span class="wrap_svg"><i data-fa-symbol="folder_opened" class="fas fa-folder-open fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#folder_opened"></use></svg></span></div></td>' +
'<td class="column_0_case_1_a"><div class="dt_inner_cell"><img id="retrieved_image" src="' + data_case_1_a[key].column_0_case_1_a + '" alt=""></div></td>' +
'<td class="column_1_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_1_case_1_a + '</div></td>' +
'<td class="column_2_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_2_case_1_a + '</div></td>' +
'<td class="column_3_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_3_case_1_a + '</div></td>' +
'<td class="column_4_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_4_case_1_a + '</div></td>' +
'<td class="column_5_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_5_case_1_a + '</div></td>' +
'<td class="column_edit">' +
'<span class="edit" data-item="' + key + '">' +'<div class="background_test"><span class="wrap_svg"><i data-fa-symbol="edit_pencil" class="fas fa-pencil-alt fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#edit_pencil"></use></svg></span></div></span>' +
'</td>' +
'<td class="column_delete">' +
'<span class="delete" data-item="' + key + '">' +'<div class="background_test"><span class="wrap_svg"><i data-fa-symbol="trash_can" class="fas fa-trash-alt fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#trash_can"></use></svg></span></div></span>' +
'</td>' +
'</tr>';

  }
  tbody_case_1_a.innerHTML = tr_case_1_a;
  if(tr_case_1_a != ""){
var editableElements_case_1_a = document.getElementsByClassName("edit");
for (var i = 0; i < editableElements_case_1_a.length; i++){
	editableElements_case_1_a[i].addEventListener("click", edit_case_1_a, false);
}
var deletableElements_case_1_a = document.getElementsByClassName("delete");
for (var i = 0; i < deletableElements_case_1_a.length; i++){
	deletableElements_case_1_a[i].addEventListener("click", delete_case_1_a, false);
}
  }
  });
// END get it all back from firebase
// check for firebase data to come in and convert to datatables again
  var waitFor_table_to_be_repopulated_after_delete = setInterval(function() {
// make sure table recieved firebase data
if ($('#table_case_1_a tbody tr td').length > 0) {
console.log("// waitFor_table_to_be_repopulated_after_delete // table has stuff in the td's // now executing datatables");

////////////////////////////////////////////////////////

if(!$('#email').text().match('smuglovsky@gmail.com')) {
// hide create new record // and edit & delete columns
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
// show create new record // and edit & delete columns
$("body").find(".create_case_1_a").show();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").show();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").show();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").show();
$(this).find("td:nth-last-child(1)").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}
// convert table to datatable again
////////////////////////////////////////////////////////
// BEGIN DataTable table_case_1_a //////////////////////
////////////////////////////////////////////////////////
table_case_1_a = $("#table_case_1_a").DataTable({

    "dom": '<"toolbar_case_1_a">frtip',
    "scrollCollapse": true,
    "paging":         false,
    "deferRender": true,
    "info": true,
    "pagingType": "simple",
     //"autoWidth": false,
    "scrollX": false,
    "scrollY": "calc(100vh - 88px - 60px)",
    language: {
      url: 'https://www.biblefarm.org/lang/Escuela_Jose.json'
    },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: '',
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<table class="resp_ch_row_table"><tr class="resp_ch_row_tr" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                                '<td><div class="responsive_col_title">'+col.title+'</div></td> '+
                                '<td><div class="responsive_editing">'+col.data+'</div></td>'+
                            '</tr></table>' :
                            '';
                    } ).join('');

                    return data ?
                        $('<div/>').append( data ) :
                        false;
                }
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            width: "44px",
            targets:   [0]
            }
            ],
        order: [ 2, 'desc' ],
        fnInitComplete: function(){
//////////////////////////////////////////
//////////////////////////////////////////
// BEGIN user interface to create or edit
$("body").find(".create_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
$("#column_1_case_1_a").css("background", "yellow").val(((moment().format('YYYY/MM/DD HH:mm', {trim: false}))));
$("#column_2_case_1_a").focus().select();
});
$("#create_or_update_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
$(".cancel_new_or_edit_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
// END user interface to create or edit
//////////////////////////////////
// BEGIN remove "Search:" in label
$('#table_case_1_a_filter label').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Search:','');
});
// END remove "Search:" in label
//////////////////////////////////
// BEGIN add text inside the placeholder
$("#table_case_1_a_filter label input").attr("placeholder", "filtrar");
// END add text inside the placeholder
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_0_case_1_a").css("width", "16.66%");
$(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
//// BEGIN again adjust columns on resize
$(window).on("resize",function(e){
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
});
//// END again adjust columns on resize
//////////////////////////////////
//////////////////////////////////
// BEGIN when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////
$("#table_case_1_a_filter label input").on("keyup",function(e){
$("#table_case_1_a_filter label input").css("background", "#333333");
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
});
//////////////////////////////////
// END when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////

//// BEGIN hide edit & delete columns
// the thead th's
$("body").find("table.table_case_1_a thead tr th:eq(6), table.table_case_1_a thead tr th:eq(7)").css("display", "none");
// and the tbody td's
$("body").find("table.table_case_1_a tbody tr").each(function() {
$(this).find("td:eq(6), td:eq(7)").css("display", "none");
});
//// END hide edit & delete columns
//////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///// BEGIN toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$("table.table_case_1_a tbody tr td.control").on("click",function(e){
if ($(this).parent().hasClass('parent')) {
$(this).find("i").removeClass("fa-folder-open").addClass("fa-folder");
} else {
$(this).find("i").removeClass("fa-folder").addClass("fa-folder-open");
}
});
/////////////////////////////////////////////////////////////////////////
///// END toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$('.dataTables_scrollBody').perfectScrollbar({
  wheelPropagation: true,
  scrollXMarginOffset: 2
});
$(".cover_while_dt_firebase_is_working_updating").hide();
console.log("that's 3");
         },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true,
	  "diacritics": false,
	  "acrossElements": true,
	  className: "highlight"
    },
    stateSave: false
  });
////////////////////////////////////////////////////////
// END DataTable table_case_1_a ////////////////////////
////////////////////////////////////////////////////////

console.log("// waitFor_table_to_be_repopulated_after_delete // table_case_1_a is recreated");
// delete these colors onceI know it all works fine
$("#table_case_1_a tbody tr td").css("color", "blue");
$("#table_case_1_a tbody tr td .delete").css("color", "red");
$(".table_empty").hide();
}
// clear the setInterval
clearInterval(waitFor_table_to_be_repopulated_after_delete);
console.log("// waitFor_table_to_be_repopulated_after_delete // setInterval is cleared");
var checkIf_all_records_deleted_during_session_we_have_an_empty_table = setInterval(function() {
if ($('#table_case_1_a tbody tr td').length < 1) {
$(".table_empty").show();
console.log("// table is empty // suggest creating a new record");
// clear the setInterval
clearInterval(checkIf_all_records_deleted_during_session_we_have_an_empty_table);
}
}, 100);

// all done
console.log("// waitFor_table_to_be_repopulated_after_delete // we're all done!");
}, 100);

















  console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////// just ran function delete_case_1_a()");

}
// CRUD CREATE or UPDATE and RESET when all is done
  function submitToFirebase_case_1_a(event) {
    event.preventDefault();
switch(mode_case_1_a){
case CREATE_case_1_a:
    ref_case_1_a.push({
      column_0_case_1_a: event.target.column_0_case_1_a.value,
      column_1_case_1_a: event.target.column_1_case_1_a.value,
      column_2_case_1_a: event.target.column_2_case_1_a.value,
      column_3_case_1_a: event.target.column_3_case_1_a.value,
      column_4_case_1_a: event.target.column_4_case_1_a.value,
      column_5_case_1_a: event.target.column_5_case_1_a.value
    });
	break;
case UPDATE_case_1_a:
    refEdit_case_1_a.update({
      column_0_case_1_a: event.target.column_0_case_1_a.value,
      column_1_case_1_a: event.target.column_1_case_1_a.value,
      column_2_case_1_a: event.target.column_2_case_1_a.value,
      column_3_case_1_a: event.target.column_3_case_1_a.value,
      column_4_case_1_a: event.target.column_4_case_1_a.value,
      column_5_case_1_a: event.target.column_5_case_1_a.value
    });
	mode_case_1_a = CREATE_case_1_a;
document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
	break;
	}
	form_case_1_a.reset();

  console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////// just ran function submitToFirebase_case_1_a(event)");


  }

//////////////////////////////////////////


///////// NN to implement jquery-confirm

//////////////////////////////////////////
//// BEGIN init datatables ///////////////
//////////////////////////////////////////
//// BEGIN when page is loaded
// BEGIN wait for firebase to populate the td's and convert to datatables
  var waitFor_table_to_be_populated_on_page_load_from_firebase = setInterval(function() {
if ($('#table_case_1_a tbody tr td').length > 0) {
      console.log("// waitFor_table_to_be_populated_on_page_load_from_firebase // page is loaded // table has stuff in the td's // now executing datatables"
      );
clearInterval(waitFor_table_to_be_populated_on_page_load_from_firebase);


////////////////////////////////////////////////////////

if(!$('#email').text().match('smuglovsky@gmail.com')) {
// hide create new record // and edit & delete columns
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
// show create new record // and edit & delete columns
$("body").find(".create_case_1_a").show();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").show();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").show();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").show();
$(this).find("td:nth-last-child(1)").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}

////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
// BEGIN DataTable table_case_1_a //////////////////////
////////////////////////////////////////////////////////
table_case_1_a = $("#table_case_1_a").DataTable({

    "dom": '<"toolbar_case_1_a">frtip',
    "scrollCollapse": true,
    "paging":         false,
    "deferRender": true,
    "info": true,
    "pagingType": "simple",
     //"autoWidth": false,
    "scrollX": false,
    "scrollY": "calc(100vh - 88px - 60px)",
    language: {
      url: 'https://www.biblefarm.org/lang/Escuela_Jose.json'
    },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: '',
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<table class="resp_ch_row_table"><tr class="resp_ch_row_tr" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                                '<td><div class="responsive_col_title">'+col.title+'</div></td> '+
                                '<td><div class="responsive_editing">'+col.data+'</div></td>'+
                            '</tr></table>' :
                            '';
                    } ).join('');

                    return data ?
                        $('<div/>').append( data ) :
                        false;
                }
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            width: "44px",
            targets:   [0]
            }
            ],
        order: [ 2, 'desc' ],
        fnInitComplete: function(){
//////////////////////////////////////////
//////////////////////////////////////////
// BEGIN user interface to create or edit
$("body").find(".create_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
$("#column_1_case_1_a").css("background", "yellow").val(((moment().format('YYYY/MM/DD HH:mm', {trim: false}))));
$("#column_2_case_1_a").focus().select();
});
$("#create_or_update_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
$(".cancel_new_or_edit_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
// END user interface to create or edit
//////////////////////////////////
// BEGIN remove "Search:" in label
$('#table_case_1_a_filter label').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Search:','');
});
// END remove "Search:" in label
//////////////////////////////////
// BEGIN add text inside the placeholder
$("#table_case_1_a_filter label input").attr("placeholder", "filtrar");
// END add text inside the placeholder
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
//// BEGIN again adjust columns on resize
$(window).on("resize",function(e){
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
});
//// END again adjust columns on resize
//////////////////////////////////
//////////////////////////////////
// BEGIN when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////
$("#table_case_1_a_filter label input").on("keyup",function(e){
$("#table_case_1_a_filter label input").css("background", "#333333");
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
});
//////////////////////////////////
// END when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////

//// BEGIN hide edit & delete columns
// the thead th's
$("body").find("table.table_case_1_a thead tr th:eq(6), table.table_case_1_a thead tr th:eq(7)").css("display", "none");
// and the tbody td's
$("body").find("table.table_case_1_a tbody tr").each(function() {
$(this).find("td:eq(6), td:eq(7)").css("display", "none");
});
//// END hide edit & delete columns
//////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///// BEGIN toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$("table.table_case_1_a tbody tr td.control").on("click",function(e){
if ($(this).parent().hasClass('parent')) {
$(this).find("i").removeClass("fa-folder-open").addClass("fa-folder");
} else {
$(this).find("i").removeClass("fa-folder").addClass("fa-folder-open");
}
});
/////////////////////////////////////////////////////////////////////////
///// END toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$('.dataTables_scrollBody').perfectScrollbar({
  wheelPropagation: true,
  scrollXMarginOffset: 2
});
$(".cover_while_dt_firebase_is_working_welcome").hide();
console.log("Initial welcome hide");
         },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true,
	  "diacritics": false,
	  "acrossElements": true,
	  className: "highlight"
    },
    stateSave: false
  });
////////////////////////////////////////////////////////
// END DataTable table_case_1_a ////////////////////////
////////////////////////////////////////////////////////




$(".table_empty").hide();

}



}, 100);
// END wait for firebase to populate the td's and convert to datatables
//// END when page is loaded
//// BEGIN when creating or editing a record
$("#create_or_update_case_1_a").click(function(){
// cleanup
if ( $.fn.DataTable.isDataTable( '#table_case_1_a' ) ) {
table_case_1_a.destroy();
}
// wait for firebase and convert to datatables again
  var waitFor_table_to_be_populated_after_create_or_edit_from_firebase = setInterval(function() {
if ($('#table_case_1_a tbody tr td').length > 0) {
      console.log("// waitFor_table_to_be_populated_after_create_or_edit_from_firebase // create or update has happened // table has stuff in the td's // now executing datatables");
clearInterval(waitFor_table_to_be_populated_after_create_or_edit_from_firebase);



////////////////////////////////////////////////////////

if(!$('#email').text().match('smuglovsky@gmail.com')) {
// hide create new record // and edit & delete columns
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
// show create new record // and edit & delete columns
$("body").find(".create_case_1_a").show();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").show();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").show();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").show();
$(this).find("td:nth-last-child(1)").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}

////////////////////////////////////////////////////////


if ( ! $.fn.DataTable.isDataTable( '#table_case_1_a' ) ) {



////////////////////////////////////////////////////////
// BEGIN DataTable table_case_1_a //////////////////////
////////////////////////////////////////////////////////
table_case_1_a = $("#table_case_1_a").DataTable({

    "dom": '<"toolbar_case_1_a">frtip',
    "scrollCollapse": true,
    "paging":         false,
    "deferRender": true,
    "info": true,
    "pagingType": "simple",
     //"autoWidth": false,
    "scrollX": false,
    "scrollY": "calc(100vh - 88px - 60px)",
    language: {
      url: 'https://www.biblefarm.org/lang/Escuela_Jose.json'
    },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: '',
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<table class="resp_ch_row_table"><tr class="resp_ch_row_tr" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                                '<td><div class="responsive_col_title">'+col.title+'</div></td> '+
                                '<td><div class="responsive_editing">'+col.data+'</div></td>'+
                            '</tr></table>' :
                            '';
                    } ).join('');

                    return data ?
                        $('<div/>').append( data ) :
                        false;
                }
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            width: "44px",
            targets:   [0]
            }
            ],
        order: [ 2, 'desc' ],
        fnInitComplete: function(){
//////////////////////////////////////////
//////////////////////////////////////////
// BEGIN user interface to create or edit
$("body").find(".create_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
$("#column_1_case_1_a").css("background", "yellow").val(((moment().format('YYYY/MM/DD HH:mm', {trim: false}))));
$("#column_2_case_1_a").focus().select();
});
$("#create_or_update_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
$(".cancel_new_or_edit_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
// END user interface to create or edit
//////////////////////////////////
// BEGIN remove "Search:" in label
$('#table_case_1_a_filter label').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Search:','');
});
// END remove "Search:" in label
//////////////////////////////////
// BEGIN add text inside the placeholder
$("#table_case_1_a_filter label input").attr("placeholder", "filtrar");
// END add text inside the placeholder
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
//// BEGIN again adjust columns on resize
$(window).on("resize",function(e){
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
});
//// END again adjust columns on resize
//////////////////////////////////
//////////////////////////////////
// BEGIN when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////
$("#table_case_1_a_filter label input").on("keyup",function(e){
$("#table_case_1_a_filter label input").css("background", "#333333");
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
});
//////////////////////////////////
// END when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////

//// BEGIN hide edit & delete columns
// the thead th's
$("body").find("table.table_case_1_a thead tr th:eq(6), table.table_case_1_a thead tr th:eq(7)").css("display", "none");
// and the tbody td's
$("body").find("table.table_case_1_a tbody tr").each(function() {
$(this).find("td:eq(6), td:eq(7)").css("display", "none");
});
//// END hide edit & delete columns
//////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///// BEGIN toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$("table.table_case_1_a tbody tr td.control").on("click",function(e){
if ($(this).parent().hasClass('parent')) {
$(this).find("i").removeClass("fa-folder-open").addClass("fa-folder");
} else {
$(this).find("i").removeClass("fa-folder").addClass("fa-folder-open");
}
});
/////////////////////////////////////////////////////////////////////////
///// END toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$('.dataTables_scrollBody').perfectScrollbar({
  wheelPropagation: true,
  scrollXMarginOffset: 2
});
$(".cover_while_dt_firebase_is_working_updating").hide();
console.log("it was hide while creating or editing");
         },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true,
	  "diacritics": false,
	  "acrossElements": true,
	  className: "highlight"
    },
    stateSave: false
  });
////////////////////////////////////////////////////////
// END DataTable table_case_1_a ////////////////////////
////////////////////////////////////////////////////////



}




$(".table_empty").hide();
}
}, 100);
});
//// END when creating or editing a record
//// BEGIN when during the session, user #sign-out or #delete-account
$("#sign-out, #delete-account").click(function(){
  // someone clicked #lock_and_unlock
  $(".cover_while_dt_firebase_is_working_welcome").show();

// datatable clear
if ( $.fn.DataTable.isDataTable( '#table_case_1_a' ) ) {
table_case_1_a.clear();
console.log("table_case_1_a.clear");
// datatable destroy
table_case_1_a.destroy();
console.log("table_case_1_a.destroy was done");
}
// BEGIN get it all back from firebase
  ref_case_1_a.on("value", function(snap) {
    var data_case_1_a = snap.val();
	var tr_case_1_a = "";
   for(var key in data_case_1_a){
  tr_case_1_a += '<tr>' +
'<td><div class="background_test"><span class="wrap_svg"><i data-fa-symbol="folder_opened" class="fas fa-folder-open fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#folder_opened"></use></svg></span></div></td>' +
'<td class="column_0_case_1_a"><div class="dt_inner_cell"><img id="retrieved_image" src="' + data_case_1_a[key].column_0_case_1_a + '" alt=""></div></td>' +
'<td class="column_1_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_1_case_1_a + '</div></td>' +
'<td class="column_2_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_2_case_1_a + '</div></td>' +
'<td class="column_3_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_3_case_1_a + '</div></td>' +
'<td class="column_4_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_4_case_1_a + '</div></td>' +
'<td class="column_5_case_1_a"><div class="dt_inner_cell">' + data_case_1_a[key].column_5_case_1_a + '</div></td>' +
'<td class="column_edit">' +
'<span class="edit" data-item="' + key + '">' +'<div class="background_test"><span class="wrap_svg"><i data-fa-symbol="edit_pencil" class="fas fa-pencil-alt fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#edit_pencil"></use></svg></span></div></span>' +
'</td>' +
'<td class="column_delete">' +
'<span class="delete" data-item="' + key + '">' +'<div class="background_test"><span class="wrap_svg"><i data-fa-symbol="trash_can" class="fas fa-trash-alt fa-fw"></i><svg class="icon pa2 br2 pointer"><use xlink:href="#trash_can"></use></svg></span></div></span>' +
'</td>' +
'</tr>';

  }
  tbody_case_1_a.innerHTML = tr_case_1_a;
  if(tr_case_1_a != ""){
var editableElements_case_1_a = document.getElementsByClassName("edit");
for (var i = 0; i < editableElements_case_1_a.length; i++){
	editableElements_case_1_a[i].addEventListener("click", edit_case_1_a, false);
}
var deletableElements_case_1_a = document.getElementsByClassName("delete");
for (var i = 0; i < deletableElements_case_1_a.length; i++){
	deletableElements_case_1_a[i].addEventListener("click", delete_case_1_a, false);
}
  }
  });
// END get it all back from firebase
// check for firebase data to come in and convert to datatables again
  var waitFor_table_to_be_repopulated_after_signout_or_delete_account = setInterval(function() {
// make sure table recieved firebase data
if ($('#table_case_1_a tbody tr td').length > 0) {
console.log("// waitFor_table_to_be_repopulated_after_signout_or_delete_account // table has stuff in the td's // now executing datatables");



////////////////////////////////////////////////////////

if(!$('#email').text().match('smuglovsky@gmail.com')) {
// hide create new record // and edit & delete columns
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
// show create new record // and edit & delete columns
$("body").find(".create_case_1_a").show();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").show();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").show();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").show();
$(this).find("td:nth-last-child(1)").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}

////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
// BEGIN DataTable table_case_1_a //////////////////////
////////////////////////////////////////////////////////
table_case_1_a = $("#table_case_1_a").DataTable({

    "dom": '<"toolbar_case_1_a">frtip',
    "scrollCollapse": true,
    "paging":         false,
    "deferRender": true,
    "info": true,
    "pagingType": "simple",
     //"autoWidth": false,
    "scrollX": false,
    "scrollY": "calc(100vh - 88px - 60px)",
    language: {
      url: 'https://www.biblefarm.org/lang/Escuela_Jose.json'
    },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: '',
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<table class="resp_ch_row_table"><tr class="resp_ch_row_tr" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                                '<td><div class="responsive_col_title">'+col.title+'</div></td> '+
                                '<td><div class="responsive_editing">'+col.data+'</div></td>'+
                            '</tr></table>' :
                            '';
                    } ).join('');

                    return data ?
                        $('<div/>').append( data ) :
                        false;
                }
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            width: "44px",
            targets:   [0]
            }
            ],
        order: [ 2, 'desc' ],
        fnInitComplete: function(){
//////////////////////////////////////////
//////////////////////////////////////////
// BEGIN user interface to create or edit
$("body").find(".create_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
$("#column_1_case_1_a").css("background", "yellow").val(((moment().format('YYYY/MM/DD HH:mm', {trim: false}))));
$("#column_2_case_1_a").focus().select();
});
$("#create_or_update_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
$(".cancel_new_or_edit_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
// END user interface to create or edit
//////////////////////////////////
// BEGIN remove "Search:" in label
$('#table_case_1_a_filter label').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Search:','');
});
// END remove "Search:" in label
//////////////////////////////////
// BEGIN add text inside the placeholder
$("#table_case_1_a_filter label input").attr("placeholder", "filtrar");
// END add text inside the placeholder
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
//// BEGIN again adjust columns on resize
$(window).on("resize",function(e){
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
});
//// END again adjust columns on resize
//////////////////////////////////
//////////////////////////////////
// BEGIN when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////
$("#table_case_1_a_filter label input").on("keyup",function(e){
$("#table_case_1_a_filter label input").css("background", "#333333");
//////////////////////////////////
// BEGIN resize columns according to what fits or not
////////////////////////////////////////
    setTimeout(function(){
// this works for responsive col 1 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(2)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "yellow").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "yellow").css("width", "100%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "yellow").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("width", "100%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(3)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "orange").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "orange").css("width", "50%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "orange").css("width", "50%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "orange").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "orange").css("width", "50%");
$(this).find("td.column_2_case_1_a").css("color", "orange").css("width", "50%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(4)').css('display') == 'none') && ($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "33.33%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "33.33%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "33.33%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "33.33%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') == 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("color", "hotpink").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(2)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(3)").css("color", "hotpink").css("width", "25%");
$("table.table_case_1_a thead tr th:eq(4)").css("color", "hotpink").css("width", "25%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("color", "hotpink").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
$(this).find("td.column_1_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_2_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_3_case_1_a").css("color", "hotpink").css("width", "25%");
$(this).find("td.column_4_case_1_a").css("color", "hotpink").css("width", "25%");
});
    }, 110);
} else
////////////////////////////////////////
////////////////////////////////////////
// this works for responsive col 1 & 2 & 3 & 4 & 5 only
////////////////////////////////////////
if(($('table.table_case_1_a thead tr th:eq(5)').css('display') !== 'none')) {
    setTimeout(function(){
$("table.table_case_1_a thead tr th.control").css("width", "44px");
$("table.table_case_1_a thead tr th:eq(1)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(2)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(3)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(4)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(5)").css("width", "16.66%");
$("table.table_case_1_a thead tr th:eq(6)").css("width", "16.66%");
$("#table_case_1_a tbody tr").each(function() {
$(this).find("td.control").css("width", "44px");
});
$("#table_case_1_a tbody#tbody_case_1_a tr").each(function() {
  $(this).find("td.column_0_case_1_a").css("width", "16.66%");
  $(this).find("td.column_1_case_1_a").css("width", "16.66%");
$(this).find("td.column_2_case_1_a").css("width", "16.66%");
$(this).find("td.column_3_case_1_a").css("width", "16.66%");
$(this).find("td.column_4_case_1_a").css("width", "16.66%");
$(this).find("td.column_5_case_1_a").css("width", "16.66%");
});
    }, 110);
}
table_case_1_a.draw();
    }, 110);
////////////////////////////////////////
// END resize columns according to what fits or not
//////////////////////////////////
});
//////////////////////////////////
// END when seaching, on keyup, resize columns according to what fits or not
//////////////////////////////////

//// BEGIN hide edit & delete columns
// the thead th's
$("body").find("table.table_case_1_a thead tr th:eq(6), table.table_case_1_a thead tr th:eq(7)").css("display", "none");
// and the tbody td's
$("body").find("table.table_case_1_a tbody tr").each(function() {
$(this).find("td:eq(6), td:eq(7)").css("display", "none");
});
//// END hide edit & delete columns
//////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///// BEGIN toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$("table.table_case_1_a tbody tr td.control").on("click",function(e){
if ($(this).parent().hasClass('parent')) {
$(this).find("i").removeClass("fa-folder-open").addClass("fa-folder");
} else {
$(this).find("i").removeClass("fa-folder").addClass("fa-folder-open");
}
});
/////////////////////////////////////////////////////////////////////////
///// END toggle opened and closed folder icons in responsive /////////
/////////////////////////////////////////////////////////////////////////
$('.dataTables_scrollBody').perfectScrollbar({
  wheelPropagation: true,
  scrollXMarginOffset: 2
});
$(".cover_while_dt_firebase_is_working_updating").hide();
console.log("this one is for after we've logged out");
         },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true,
	  "diacritics": false,
	  "acrossElements": true,
	  className: "highlight"
    },
    stateSave: false
  });
////////////////////////////////////////////////////////
// END DataTable table_case_1_a ////////////////////////
////////////////////////////////////////////////////////




console.log("// waitFor_table_to_be_repopulated_after_signout_or_delete_account // table_case_1_a is recreated");
// delete these colors onceI know it all works fine
$("#table_case_1_a tbody tr td").css("color", "orange");
$("#table_case_1_a tbody tr td .delete").css("color", "orange");
$(".table_empty").hide();
}
// clear the setInterval
clearInterval(waitFor_table_to_be_repopulated_after_signout_or_delete_account);
console.log("// waitFor_table_to_be_repopulated_after_signout_or_delete_account // setInterval is cleared");
// all done
console.log("// waitFor_table_to_be_repopulated_after_signout_or_delete_account // we're all done!");
}, 100);




});
//// END when during the session, user #sign-out or #delete-account
//////////////////////////////////////////
//// END init datatables ///////////////















/////////////////////////////////////////////////////////////////////////////////////
// BEGIN first time admin/user, or all records were deleted // table is empty ///////
/////////////////////////////////////////////////////////////////////////////////////
var checkIf_we_have_an_empty_table = setInterval(function() {
if ($('#table_case_1_a tbody tr td').length < 1) {
$(".table_empty").show();
console.log("// table is empty // suggest creating a new record");
// clear the setInterval
clearInterval(checkIf_we_have_an_empty_table);
////////////////////////////////////////////////////////
if(!$('#email').text().match('smuglovsky@gmail.com')) {
// hide create new record // and edit & delete columns
$("body").find(".create_case_1_a").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").hide();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").hide();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").hide();
$(this).find("td:nth-last-child(1)").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
// show create new record // and edit & delete columns
$("body").find(".create_case_1_a").show();
$("body").find(".table_case_1_a thead th:nth-last-child(2)").show();
$("body").find(".table_case_1_a thead th:nth-last-child(1)").show();
$("body").find('.table_case_1_a tr').each(function() {
$(this).find("td:nth-last-child(2)").show();
$(this).find("td:nth-last-child(1)").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}
}
}, 100);
/////////////////////////////////////////////////////////////////////////////////////
// END first time admin/user, or all records were deleted // table is empty ///////
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////
// BEGIN user interface to create or edit
$("body").find(".create_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
$("#column_1_case_1_a").css("background", "yellow").val(((moment().format('YYYY/MM/DD HH:mm', {trim: false}))));
$("#column_2_case_1_a").focus().select();
});
$("#create_or_update_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
$(".cancel_new_or_edit_case_1_a").on("click",function(e){
$("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
});
// END user interface to create or edit
//////////////////////////////////
// BEGIN focus when creating
$("#table_case_1_a").on('click', 'tbody tr td.column_edit', function(e){
$("#column_2_case_1_a").focus().select();
console.log("//////////////////////////////// focusing as we edit");
});
// END focus when creating
//////////////////////////////////
// BEGIN focus when editing
//////////////////////////////////
// BEGIN column_1_case_1_a
$("#table_case_1_a").on('click', 'tbody tr td.column_1_case_1_a', function(e){
$(this).css("color", "orange");
$(this).siblings().eq(6).find(".edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_1_case_1_a").focus().select();
});
// END column_1_case_1_a
// BEGIN column_2_case_1_a
$("#table_case_1_a").on('click', 'tbody tr td.column_2_case_1_a', function(e){
$(this).css("color", "orange");
$(this).siblings().eq(6).find(".edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_2_case_1_a").focus().select();
});
// END column_2_case_1_a
// BEGIN column_3_case_1_a
$("#table_case_1_a").on('click', 'tbody tr td.column_3_case_1_a', function(e){
$(this).css("color", "orange");
$(this).siblings().eq(6).find(".edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_3_case_1_a").focus().select();
});
// END column_3_case_1_a
// BEGIN column_4_case_1_a
$("#table_case_1_a").on('click', 'tbody tr td.column_4_case_1_a', function(e){
$(this).css("color", "orange");
$(this).siblings().eq(6).find(".edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_4_case_1_a").focus().select();
});
// END column_4_case_1_a
// BEGIN column_5_case_1_a
$("#table_case_1_a").on('click', 'tbody tr td.column_5_case_1_a', function(e){
$(this).css("color", "orange");
$(this).siblings().eq(6).find(".edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_5_case_1_a").focus().select();
});
// END column_5_case_1_a
//////////////////////////////////
// END focus when editing
//////////////////////////////////

//////////////////////////////////
// BEGIN focus when editing in responsive mode
//////////////////////////////////
// BEGIN column_1_case_1_a
$("#table_case_1_a").on('click', 'tbody tr.child td.child div table tbody tr[data-dt-column="1"] td div.responsive_editing', function(e){
$(this).css("color", "black");
$(this).parents().eq(7).prev().find("td.column_edit span.edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_1_case_1_a").focus().select();
});
// END column_1_case_1_a
// BEGIN column_2_case_1_a
$("#table_case_1_a").on('click', 'tbody tr.child td.child div table tbody tr[data-dt-column="2"] td div.responsive_editing', function(e){
$(this).css("color", "black");
$(this).parents().eq(7).prev().find("td.column_edit span.edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_2_case_1_a").focus().select();
});
// END column_2_case_1_a
// BEGIN column_3_case_1_a
$("#table_case_1_a").on('click', 'tbody tr.child td.child div table tbody tr[data-dt-column="3"] td div.responsive_editing', function(e){
$(this).css("color", "black");
$(this).parents().eq(7).prev().find("td.column_edit span.edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_3_case_1_a").focus().select();
});
// END column_3_case_1_a
// BEGIN column_4_case_1_a
$("#table_case_1_a").on('click', 'tbody tr.child td.child div table tbody tr[data-dt-column="4"] td div.responsive_editing', function(e){
$(this).css("color", "black");
$(this).parents().eq(7).prev().find("td.column_edit span.edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_4_case_1_a").focus().select();
});
// END column_4_case_1_a
// BEGIN column_5_case_1_a
$("#table_case_1_a").on('click', 'tbody tr.child td.child div table tbody tr[data-dt-column="5"] td div.responsive_editing', function(e){
$(this).css("color", "black");
$(this).parents().eq(7).prev().find("td.column_edit span.edit").trigger({ type: "click", which: 1 });
function edit_case_1_a() {
  var firebase_key_to_edit_case_1_a = this.getAttribute("data-item");
  refEdit_case_1_a = ref_case_1_a.child(firebase_key_to_edit_case_1_a);
  refEdit_case_1_a.once("value", function(snap) {
    var data_case_1_a = snap.val();
    document.getElementById("column_0_case_1_a").value = data_case_1_a.column_0_case_1_a;
    document.getElementById("column_1_case_1_a").value = data_case_1_a.column_1_case_1_a;
    document.getElementById("column_2_case_1_a").value = data_case_1_a.column_2_case_1_a;
    document.getElementById("column_3_case_1_a").value = data_case_1_a.column_3_case_1_a;
    document.getElementById("column_4_case_1_a").value = data_case_1_a.column_4_case_1_a;
    document.getElementById("column_5_case_1_a").value = data_case_1_a.column_5_case_1_a;
  });
  document.getElementById("create_or_update_case_1_a").value = UPDATE_case_1_a;
  mode_case_1_a = UPDATE_case_1_a;
  ///////////////////////////////////////////////////////
  $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").show("slow");
  $("#create_or_update_case_1_a").on("click", function() {
    $("body div.wrap div.wrap_case_1_a #wrap_form_case_1_a").hide("slow");
  });
  $(".cancel_editing").show();
  $(".cancel_editing, .cancel_new_or_edit_case_1_a").on("click", function() {
    setTimeout(function() {
      console.log("cancel_editing was clicked");
      form_case_1_a.reset();
      document.getElementById("create_or_update_case_1_a").value = CREATE_case_1_a;
      mode_case_1_a = CREATE_case_1_a;
      $(".cancel_editing").hide();
    }, 100);
  });
  ///////////////////////////////////////////////////////
}
$("#column_5_case_1_a").focus().select();
});
// END column_5_case_1_a

//////////////////////////////////
// END focus when editing in responsive mode
//////////////////////////////////

//////////////////////////////////
  // scroll to top when paginating
  $('#table_case_1_a').on('page.dt', function() {
    $('.dataTables_scrollBody').animate({
      scrollTop: 0
    }, 110);
  });
//////////////////////////////////


//starts open, so we hide #child_rows_close
$("#child_rows_close").css("display", "none");
    // Handle click to "Collapse All"
    $('#child_rows_open').on('click', function(){
$("#child_rows_open").hide("slow");
$("#child_rows_close").show("slow");
        // Collapse row details
table_case_1_a.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
    });

    // Handle click to "Expand All"
    $('#child_rows_close').on('click', function(){
$("#child_rows_open").show("slow");
$("#child_rows_close").hide("slow");
        // Expand row details
table_case_1_a.rows(':not(.parent)').nodes().to$().find('td:first-child').trigger('click');
    });

//////////////////////////////////
// BEGIN bump up to moment right now
//////////////////////////////////
$( "#bump_it" ).on( "click", function() {
$( "#form_case_1_a" ).find("#column_1_case_1_a").val("");
$( "#form_case_1_a" ).find("#column_1_case_1_a").val(((moment().format('YYYY/MM/DD HH:mm', {trim: false}))));
$("#column_1_case_1_a").focus().select();
});
//////////////////////////////////
// END bump up to moment right now
//////////////////////////////////














///////////////////////////////////////////////////////////////////////
// BEGIN when changes are made in another device ////////////////////////////
///////////////////////////////////////////////////////////////////////
// update the helper divs
$("input#column_2_case_1_a, input#column_3_case_1_a, input#column_4_case_1_a, input#column_5_case_1_a").keyup(function(){
 var last_change = $(this).val();
console.log(last_change);
$("#create_or_update_case_1_a").on("click",function(e){
$('#last_change').html(last_change);
});
});


// mutation observer
function mutate(mutations) {
//  mutations.forEach(function(mutation) {
    console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// updated last_change");
////////////////////////////////////////////////////////////////////////////////////////////
// now in order to get this thing to mutate, I need to store the last change in firebase,
// and then get it to come back to the DOM inside #last_change so it appears in other devices
////////////////////////////////////////////////////////////////////////////////////////////
}

  var target = document.querySelector('#last_change')
  var observer = new MutationObserver( mutate );
  var config = { characterData: true, attributes: true, childList: true, subtree: true };

  observer.observe(target, config);

///////////////////////////////////////////////////////////////////////
// END when changes are made in another device ////////////////////////////
///////////////////////////////////////////////////////////////////////

















//////////////////////////////////
//// END chorro _case_1_a
//////////////////////////////////
//////////////////////////////////
//// BEGIN backup to _case_1_b
//////////////////////////////////

//////////////////////////////////
//// END backup to _case_1_b
//////////////////////////////////








/*
///////////////////////////////////////////////////////////////////////
  // BEGIN example datatable non-editable is working fine //
$(document).ready(function() {
  var table = $("#example1").DataTable({
  "order": [[ 0, "desc" ]]
  });
table.clear();
  var rootRef = firebase.database().ref().child("convalidaciones/");
  rootRef.on("child_added", snap => {
    var dataSet = [snap.child("column_1_case_1").val(), snap.child("column_2_case_1").val(), snap.child("column_3_case_1").val(), snap.child("column_4_case_1").val()];
    table.rows.add([dataSet]).draw();
  });
  rootRef.on("child_changed", snap => {
table.clear();
    var dataSet = [snap.child("column_1_case_1").val(), snap.child("column_2_case_1").val(), snap.child("column_3_case_1").val(), snap.child("column_4_case_1").val()];
    table.rows.add([dataSet]).draw();
  });
  // END example datatable non-editable is working fine //
});
///////////////////////////////////////////////////////////////////////




$(document).ready(function() {

$( "#create_or_update_case_1, .delete" ).on( "click", function() {

$( ".wrap_datatables_output" ).empty();


$( ".wrap_datatables_output" ).append('<table id="example1" class="list"><thead><th>Ciclo a Convalidar</th><th>Modulo a Convalidar</th><th>Ciclo a Aportar</th><th>Modulo a Aportar</th></thead><tbody id="tbody_case_1"></tbody></table>');

    setTimeout(function(){
///////////////////////////////////////////////////////////////////////
  // BEGIN example datatable non-editable is working fine //
  var table = $("#example1").DataTable({
  "order": [[ 0, "desc" ]]
  });
table.clear();
  var rootRef = firebase.database().ref().child("convalidaciones/");
  rootRef.on("child_added", snap => {
    var dataSet = [snap.child("column_1_case_1").val(), snap.child("column_2_case_1").val(), snap.child("column_3_case_1").val(), snap.child("column_4_case_1").val()];
    table.rows.add([dataSet]).draw();
  });
  rootRef.on("child_changed", snap => {
table.clear();
    var dataSet = [snap.child("column_1_case_1").val(), snap.child("column_2_case_1").val(), snap.child("column_3_case_1").val(), snap.child("column_4_case_1").val()];
    table.rows.add([dataSet]).draw();
  });
  // END example datatable non-editable is working fine //
///////////////////////////////////////////////////////////////////////
    }, 100);





});


$( "#send_question" ).on( "click", function() {

$("#column_1_case_1").val(moment().format('YYYY-MM-DD @ HH:mm:ss'));
$("#column_2_case_1").val($("#name").text());
$("#column_3_case_1").val($(".textarea_for_ps").text());
$("#column_4_case_1").val("not answered yet");
    setTimeout(function(){
$( "#create_or_update_case_1" ).trigger({
      type: 'click',
      which: 1
    });
    }, 1000);
$(".textarea_for_ps").html("type another question if you need to...");

//alert(moment().format('YYYY-MM-DD @ h:mm a'));
});


});
////////////////////////////////////////
////// END questions & answers display for users and edit delete for admin //////////
////////////////////////////////////////
*/






/*
  //////////////////////////////////////////////////
  ////// BEGIN MutationObserver MutationObservingUserEmail ////
  //////////////////////////////////////////////////
$(document).ready(function() {
// setTimeout(function(){
  // First create our observer and get our target element
  var observer = new MutationObserver(MutationObservingUserEmail),
    elTarget = document.querySelector(".wrap_login_or_not"),
    objConfig = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    };
  // Then actually do some observing
  observer.observe(elTarget, objConfig);
  // Finally react when needed
  function MutationObservingUserEmail() {

if(!$('#email').text().match('smuglovsky@gmail.com')) {
// hide create new record // and edit & delete columns
$(".create_case_1").hide();
$("#convalidaciones thead th").eq(4).hide();
$("#convalidaciones thead th").eq(5).hide();
$('#convalidaciones tr').each(function() {
$(this).find("td").eq(4).find(".edit").hide();
$(this).find("td").eq(5).find(".delete").hide();
});
console.log("/////////////////////////////// there will be no CREATE UPDATE DELETE");
} else {
// show create new record // and edit & delete columns
$(".create_case_1").show();
$("#convalidaciones thead th").eq(4).show();
$("#convalidaciones thead th").eq(5).show();
$('#convalidaciones tr').each(function() {
$(this).find("td").eq(4).find(".edit").show();
$(this).find("td").eq(5).find(".delete").show();
});
console.log("/////////////////////////////// ADMIN allowed to fully CRUD");
}

  }
//     }, 100);
});
  //////////////////////////////////////////////////
  ////// END MutationObserver MutationObservingUserEmail ////
  //////////////////////////////////////////////////
*/




/////////////////////////////////////////////////////////////////////////
///// BEGIN trigger click on the fontawesome lock /////////
/////////////////////////////////////////////////////////////////////////
$("#lock_and_unlock").on("click",function(e){
$("#authentication").trigger({ type: "click", which: 1 });
});

/////////////////////////////////////////////////////////////////////////
///// END trigger click on the fontawesome lock /////////
/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
///// BEGIN an admin must be logged in for cells to be editable /////////
/////////////////////////////////////////////////////////////////////////
// check if an admin is logged in
  var check_if_an_admin_is_logged_in = setInterval(function() {

    if ($("#email").text() == 'smuglovsky@gmail.com') {
      // editing will work, so we change text color for public user & change cursor & show form
      $("#table_case_1_a_wrapper").find(".dt_inner_cell").css("cursor", "pointer");
      $("#wrap_form_case_1_a").css("visibility", "visible");
      $("#lock_is_closed").hide();
      $("#lock_is_open").show();

} else {
  // editing won't work, so we change text color for public user & change cursor & hide form
  $("#table_case_1_a_wrapper").find(".dt_inner_cell").css("color", "white").css("cursor", "default");
  $("#wrap_form_case_1_a").css("visibility", "hidden");
  $("#lock_is_closed").show();
  $("#lock_is_open").hide();

}

}, 1000);
/////////////////////////////////////////////////////////////////////////
///// END an admin must be logged in for cells to be editable /////////
/////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
//function to save file
function previewFile(){
/////////////////////////////////////////////////////////////////////////////
// Create a root reference
var storageRef = firebase.storage().ref();
// File or Blob named mountains.jpg
var file = document.getElementById("files").files[0];
    console.log(file);
// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};
// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('crud_images/' + Date.now() + file.name + '.png').put(file, metadata);
uploadTask.then(function(snapshot) {
  console.log('Uploaded a base64 string!');
});


// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;
    case 'storage/canceled':
      // User canceled the upload
      break;
    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    // put it in the input
    $("#column_0_case_1_a").val(downloadURL);
  });
});
/////////////////////////////////////////////////////////////////////////////
  }
    });
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////





}); // end of the top document ready
