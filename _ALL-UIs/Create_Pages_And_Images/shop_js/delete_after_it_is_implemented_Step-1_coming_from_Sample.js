////////////////////////// -->
// BEGIN When coming from the changeVerse links ///// -->
////////////////////////// -->
$( ".changeVerse" ).on( "click", function() {
// open the modal
        $(".modal_customize_verse").show("slow");
        $(".opacity_cover").show();
// customer has selected a verse, so...
     $('.lets_change').show();
     $('.lets_choose').hide();
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
});
////////////////////////// -->
// END When coming from the changeVerse links ///// -->
////////////////////////// -->













$( ".changeVerse" ).on( "click", function() {
// close the menu_modal
        $(".menu_modal").hide("slow");
// open the modal
        $(".modal_customize_verse").show("slow");
        $(".opacity_cover").show();
// get the verse of the sample image that the customer clicked on 
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// put it in the modal
$(".selected_verse").text(completeRefNeeded);
     $('.lets_choose').hide();
     $('.lets_change').show();
// simulate the clicks and changes on the select boxes
var booktoselect = $('#select_book option:contains("bookNeeded")').filter(function() {return $(this).text() === 'bookNeeded';});
$('#select_book option').removeClass('selected');
//$('#select_book').trigger({type: 'click', which: 1});
booktoselect.prop('selected', true).addClass('selected').trigger('change');
var chaptertoselect = $('#select_chapter option:contains("chapterNeeded")').filter(function() {return $(this).text() === 'chapterNeeded';});
$('#select_chapter option').removeClass('selected');
//$('#select_chapter').trigger({type: 'click', which: 1});
chaptertoselect.prop('selected', true).addClass('selected').trigger('change');
var versetoselect = $('#select_verse option:contains("verseNeeded")').filter(function() {return $(this).text() === 'verseNeeded';});
$('#select_verse option').removeClass('selected');
//$('#select_verse').trigger({type: 'click', which: 1});
versetoselect.prop('selected', true).addClass('selected').trigger('change');

    ////////////////////////// -->
    ////////////////////////// -->
    // BEGIN render the sample verse
    ////////////////////////// -->
    ////////////////////////// -->
	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$('.selected_bible_verse_fixed_on_mug').textfill({
			maxFontPixels: 200
		});
	}
$( "#CreateYourOwnDesign, .changeVerse, #select_book, #select_chapter, #select_verse" ).on( "click change", function() {
setTimeout(function() {
renderIn_modalVerse();
}, 2000);
});
    ////////////////////////// -->
    ////////////////////////// -->
    // END render the sample verse
    ////////////////////////// -->
    ////////////////////////// -->






<!-- ////////////////////////// -->
// BEGIN say "got it!" when all 3 are selected and brign in the scripture
<!-- ////////////////////////// -->
$('select#select_book, select#select_chapter, select#select_verse').change(function(){

if (($('#hidden_book_desired').text() != 'select') && ($('#hidden_chapter_desired').text() != '0') && ($('#hidden_verse_desired').text() != '0')) {
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
$(".verse_selection_complete").css("background", "#042400").show();
  var next_stepTimeoutID = setTimeout(function() {
$(".next_step").css("background", "#292a00").show();
  }, 2000);
  setTimeout(function() {
$(".verse_selection_complete").hide();
  }, 4000);

// BEGIN Grab selected verse, show it on the mug, update the order, and texfill
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('https://team.biblefarm.org/_yournamehere_/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log(completeVerseURLtoGrab);

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "success" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\(.*?\)/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '');   console.log(removedItalicsAndRef);
$('#populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
$('#populated_verse_with_ajax').html(removedItalicsAndRef);

/*  setTimeout(function() {
$('#populated_verse_with_ajax').textfill({maxFontPixels: 200});
  }, 2000);*/
  
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
    // BEGIN render the sample verse
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
	function renderIn_modalVerse() {
		$('#populated_verse_with_ajax').html(
			'<span>' + $('#populated_verse_with_ajax').text() + '</span>'
		);
		$('#populated_verse_with_ajax').textfill({
			maxFontPixels: 200
		});
	}
$( "#CreateYourOwnDesign, .changeVerse, #select_book, #select_chapter, #select_verse" ).on( "click change", function() {
var checkIfDivIsVisible = setInterval(function() {
   if (($('#populated_verse_with_ajax').length) && ($('#populated_verse_with_ajax').is(':visible'))) {
      console.log("Upon Ajax .done populated_verse_with_ajax DIV has stuff & is visible, so we're rendering the textfill");
	  	renderIn_modalVerse();
      clearInterval(checkIfDivIsVisible);
   }
}, 100); // check every 100ms
});
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
    // END render the sample verse
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
  
  
  
  
  
  
  
  
  
  
  
  
  
  setTimeout(function() {
  $('#populated_verse_with_ajax');
  }, 2000);
  setTimeout(function() {
$('#populated_verse_with_ajax');
  }, 4000);
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "unable to retrieve htat verse" );
	$('#populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$(".verse_selection_complete").hide();
	$(".next_step").hide();
	clearTimeout(next_stepTimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();


/*  setTimeout(function() {
$('#populated_verse_with_ajax').textfill({maxFontPixels: 200});
  }, 2000);*/
  
  
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
    // BEGIN render the sample verse
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
	function renderIn_modalVerse() {
		$('#populated_verse_with_ajax').html(
			'<span>' + $('#populated_verse_with_ajax').text() + '</span>'
		);
		$('#populated_verse_with_ajax').textfill({
			maxFontPixels: 200
		});
	}
$( "#CreateYourOwnDesign, .changeVerse, #select_book, #select_chapter, #select_verse" ).on( "click change", function() {
var checkIfDivIsVisible = setInterval(function() {
   if (($('#populated_verse_with_ajax').length) && ($('#populated_verse_with_ajax').is(':visible'))) {
      console.log("Upon Ajax .fail populated_verse_with_ajax DIV has stuff & is visible, so we're rendering the textfill");
	  	renderIn_modalVerse();
      clearInterval(checkIfDivIsVisible);
   }
}, 100); // check every 100ms
});
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
    // END render the sample verse
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->

  
  
  
  
  
  setTimeout(function() {
  $('#populated_verse_with_ajax');
  }, 2000);
  setTimeout(function() {
$('#populated_verse_with_ajax');
  }, 4000);
	
  })
  .always(function() {
    console.log( "finished" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  console.log( "second finished" );
});


// END Grab selected verse, show it on the mug, update the order, and texfill
}
});
<!-- ////////////////////////// -->
// END say "got it!" when all 3 are selected and brign in the scripture
<!-- ////////////////////////// -->



