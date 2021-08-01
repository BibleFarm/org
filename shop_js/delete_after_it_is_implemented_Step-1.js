$( ".CreateYourOwnDesign, .changeVerse" ).on( "click", function() {
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
 } else {
// when customer has already previously selected a verse
     $('.lets_choose').hide();
     $('.lets_change').show();
// get 
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// put verse selected in the modal
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
 }


  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
    // BEGIN render the sample verse
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$('.selected_bible_verse_fixed_on_mug').textfill({
			maxFontPixels: 200
		});
	}
$( "#CreateYourOwnDesign, .changeVerse, #select_book, #select_chapter, #select_verse" ).on( "click change", function() {
var checkIfDivIsVisible = setInterval(function() {
   if (($('.selected_bible_verse_fixed_on_mug').length) && ($('.selected_bible_verse_fixed_on_mug').is(':visible'))) {
      console.log("Initial click on Create Your Own: DIV has stuff & is visible, so we're rendering the textfill");
	  	renderIn_modalVerse();
      clearInterval(checkIfDivIsVisible);
   }
}, 1000); // check every 100ms
});
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->
    // END render the sample verse
  <!-- ////////////////////////// -->
  <!-- ////////////////////////// -->


  <!-- ////////////////////////// -->
// initial book situation
var selected_book = $('#select_book').find('.selected').html().split(' ')[0];
 console.log('Upon landing - Book: ' + selected_book);
// initial chapter situation
var selected_chapter = $('#select_chapter').find('.selected').html().split(' ')[0];
 console.log('Upon landing - Chapter: ' + selected_chapter);
// initial verse situation
var selected_verse = $('#select_verse').find('.selected').html().split(' ')[0];
 console.log('Upon landing - Verse: ' + selected_verse);
// hidden containers holding selections get updated when page visited
$('#hidden_book_desired').text(selected_book);
$('#hidden_chapter_desired').text(selected_chapter);
$('#hidden_verse_desired').text(selected_verse);
  <!-- ////////////////////////// -->
// update class on the select elements and update the hidden divs
$('select#select_book').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_book = $('#select_book').find('.selected').html().split(' ')[0];
$('#hidden_book_desired').text(selected_book);
});
$('select#select_chapter').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_chapter = $('#select_chapter').find('.selected').html().split(' ')[0];
$('#hidden_chapter_desired').text(selected_chapter);
});
$('select#select_verse').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_verse = $('#select_verse').find('.selected').html().split(' ')[0];
		   $('#hidden_verse_desired').text(selected_verse);
});
  <!-- ////////////////////////// -->
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



