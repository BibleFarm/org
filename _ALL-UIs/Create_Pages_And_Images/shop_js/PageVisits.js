/////////////////////////////////////
$(document).ready(function() {
// BEGIN the first get script
  $.getScript ("https://www.gstatic.com/firebasejs/4.9.0/firebase.js", function (){

      console.log ("1 Running firebase");

  $.getScript ("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js", function (){

      console.log ("2 Running mpment");

// append to HEAD tag
$("head").append('<script>	  var config = {	   apiKey: "AIzaSyCLVyj7ZZKfcbMLmpcDT0Zws_07yPVJWRU",	   authDomain: "main-b6d09.firebaseapp.com",	   databaseURL: "https://main-b6d09.firebaseio.com",	   projectId: "main-b6d09",	   storageBucket: "main-b6d09.appspot.com",	   messagingSenderId: "255095690629",	   appId: "1:255095690629:web:ad6527ee23253615b320ec"	  };		  firebase.initializeApp(config);	</script>	   <style>	#page_visit_recorder_table {display:none; visibility:hidden;}	</style>			');
console.log("3 Appended firebase config & style to head");
// append to BODY tag
$("body").append('		<table id="page_visit_recorder_table">	 <tr>	  <td>Record_ID</td>	  <td><input type="text" name="Record_ID" id="Record_ID" /></td>	 </tr>	 <tr>	  <td>Timestamp_JS</td>	  <td><input type="text" name="Timestamp_JS" id="Timestamp_JS" /></td>	 </tr>	 <tr>	  <td>Timestamp_Readable</td>	  <td><input type="text" name="Timestamp_Readable" id="Timestamp_Readable" /></td>	 </tr>	 <tr>	  <td>Page_Visited</td>	  <td><input type="text" name="Page_Visited" id="Page_Visited" /></td>	 </tr>	 <tr>	  <td colspan="2">	   <input id="page_visit_save"type="button" value="Save" />	   <input id="page_visit_update"type="button" value="Update" />	   <input id="page_visit_delete"type="button" value="Delete" />	  </td>	 </tr>	</table>');
console.log("4 Appended recorder table to body");


// set date & time of landing
var currentdate = new Date();
var datetime = $.now();
// Timestamp_JS
  $("#Timestamp_JS").val("");
  $("#Timestamp_JS").val(datetime);
  // Timestamp_Readable
    $("#Timestamp_Readable").val("");
    $("#Timestamp_Readable").val(((moment(datetime).format('YYYY/MM/DD HH:mm', {trim: false}))));
// set page where landed
var page_name = $("title").text();
$("#Page_Visited").val("");
$("#Page_Visited").val(page_name);

/////////////////////////////////////
var databaseRef = firebase.database().ref('_pages_visited/');
//////////// BEGIN save
$("#page_visit_save").on('click', function(e) {
  var Timestamp_JS = document.getElementById('Timestamp_JS').value;
  var Timestamp_Readable = document.getElementById('Timestamp_Readable').value;
  var Page_Visited = document.getElementById('Page_Visited').value;
var Record_ID = firebase.database().ref().child('_pages_visited').push().key;
var data = {
Record_ID: Record_ID,
Timestamp_JS: Timestamp_JS,
Timestamp_Readable: Timestamp_Readable,
Page_Visited: Page_Visited
}
var updates = {};
updates['/_pages_visited/' + Record_ID] = data;
firebase.database().ref().update(updates);
console.log('The record is created successfully!');
});
//////////// BEGIN update
$("#page_visit_update").on('click', function(e) {
  var Timestamp_JS = document.getElementById('Timestamp_JS').value;
  var Timestamp_Readable = document.getElementById('Timestamp_Readable').value;
  var Page_Visited = document.getElementById('Page_Visited').value;
var Record_ID = document.getElementById('Record_ID').value;
var data = {
Record_ID: Record_ID,
Timestamp_JS: Timestamp_JS,
Timestamp_Readable: Timestamp_Readable,
Page_Visited: Page_Visited
}
var updates = {};
updates['/_pages_visited/' + Record_ID] = data;
firebase.database().ref().update(updates);
console.log('The record is updated successfully!');
});
//////////// BEGIN delete
$("#page_visit_delete").on('click', function(e) {
var Record_ID = document.getElementById('Record_ID').value;
firebase.database().ref().child('/_pages_visited/' + Record_ID).remove();
console.log('The record is deleted successfully!');
});

// trigger click on Save to store the landing in firebase
$("#page_visit_save").trigger({
			type: "click",
			which: 1
		});

    /////////////////////////////////////
  }); // END the second get script
    /////////////////////////////////////
    /////////////////////////////////////
  }); // END the first get script
    /////////////////////////////////////
    /////////////////////////////////////
    }); // end document ready
    /////////////////////////////////////