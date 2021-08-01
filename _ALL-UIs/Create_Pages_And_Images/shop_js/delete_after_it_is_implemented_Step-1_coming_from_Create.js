////////////////////////// -->
// BEGIN When coming from the menu Create Your Own ///// -->
////////////////////////// -->
$( ".CreateYourOwnDesign" ).on( "click", function() {
// close the menu_modal
        $(".menu_modal").hide("slow");
// open the modal
        $(".modal_customize_verse").show("slow");
        $(".opacity_cover").show();
// display a selected book chapter verse or offer to choose one
	if ($('.selected_verse:contains("Nothing selected yet")').length > 0)
 {
// when customer has not yet selected a verse
     $('.lets_change').hide();
     $('.lets_choose').show();
	 
////////////////////////// -->
////////////////////////// -->
// BEGIN render the welcome instructions
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('#populated_verse_with_ajax').html(
			'<span>' + $('#populated_verse_with_ajax').text() + '</span>'
		);
		$('#populated_verse_with_ajax').textfill({
			maxFontPixels: 200
		});
	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 5000);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 5000);
////////////////////////// -->
////////////////////////// -->
// END render the welcome instructions
////////////////////////// -->
////////////////////////// -->
	 
 } else {
 }
});
////////////////////////// -->
// BEGIN say "got it!" when all 3 are selected and bring in the scripture
////////////////////////// -->
$('select#select_book, select#select_chapter, select#select_verse').change(function(){
// if statement is to make sure all 3 select elements have been changed to something other than the defaults.
if (($('#hidden_book_desired').text() != 'select') && ($('#hidden_chapter_desired').text() != '0') && ($('#hidden_verse_desired').text() != '0')) {
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
$(".verse_selection_complete").css("background", "#042400").show();
var next_stepTimeoutID = setTimeout(function() {
$(".next_step").css("background", "#292a00").show();
  }, 2000);
  setTimeout(function() {
$(".verse_selection_complete").hide();
  }, 4000);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('https://team.biblefarm.org/_yournamehere_/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\(.*?\)/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('#populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('#populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('#populated_verse_with_ajax').html(
			'<span>' + $('#populated_verse_with_ajax').text() + '</span>'
		);
		$('#populated_verse_with_ajax').textfill({
			maxFontPixels: 200
		});
	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 5000);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 5000);
// Update newly selected verse at the top
var newlySelectedBook = $('#hidden_book_desired').text();
var newlySelectedChapter = $('#hidden_chapter_desired').text();
var newlySelectedVerse = $('#hidden_verse_desired').text();
$(".selected_verse").text(newlySelectedBook + '-' + newlySelectedChapter + '-' + newlySelectedVerse);
     $('.lets_choose').hide();
     $('.lets_change').show();
////////////////////////// -->
////////////////////////// -->
// END render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
  })
  .fail(function() {
    console.log( ".fail function: Unable to retrieve that verse" );
	$('#populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".verse_selection_complete").hide();
	$(".next_step").hide();
	clearTimeout(next_stepTimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();
	
////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('#populated_verse_with_ajax').html(
			'<span>' + $('#populated_verse_with_ajax').text() + '</span>'
		);
		$('#populated_verse_with_ajax').textfill({
			maxFontPixels: 200
		});
	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 5000);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 5000);
////////////////////////// -->
////////////////////////// -->
// END render the fail and error verse
////////////////////////// -->
////////////////////////// -->

  })
  .always(function() {
    console.log( ".always function: Finished" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  console.log( "jqxhr.always function: Second finished" );
});
} // this is the end of the if statement
}); // this is the end of the change function
////////////////////////// -->
// END say "got it!" when all 3 are selected and bring in the scripture
////////////////////////// -->
////////////////////////// -->
// END When coming from the menu Create Your Own ///// -->
////////////////////////// -->
