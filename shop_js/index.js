/* BEGIN Document Ready ****** */
$(document).ready(function() {
/* *************************** */

/* *************************** */
/* *************************** */
/* BEGIN site_title & site_made animation
/* *************************** */
/* *************************** */
$(function () {
  count = 0;
  wordsArray = ['<span class="customize_title">all mugs $10 with shipping included</span>', '<span class="made_title">made with <span class="red_heart">❤</span> at BibleFarm.org</span>'];
  setInterval(function () {
    count++;
    $("#site_title").fadeOut(400, function () {
      $(this).html(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 5000);
});

// '<span class="customize_title bf_links">customize for $10 shipping included</span>',
// '<span class="made_title bf_links">made with <span class="red_heart">❤</span> at BibleFarm.org</span>'
/* *************************** */
/* *************************** */
/* END site_title & site_made animation
/* *************************** */
/* *************************** */


////////////////////////////////////////////////////
////BEGIN Infinite Scroll Random Verses ///////////////////////
////////////////////////////////////////////////////
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
      getWelcome();
/////////////////////////////////////
// BEGIN get random json record
/////////////////////////////////////
function getWelcome() {
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState == 4) {
      //the request is completed, now check its status
      if (ajaxRequest.status == 200) {
        //turn JSON into array
        var messagesArray = JSON.parse(ajaxRequest.responseText);
        //get random object from array
        var randomIndex = Math.floor(Math.random() * messagesArray.length);
        var messageObj = messagesArray[randomIndex];
        //use that object to set content and color
        var welcomeDiv = document.getElementById("hidden_welcome");
        welcomeDiv.innerHTML = messageObj.ref;
        welcomeDiv.style.color = messageObj.color;
        // BEGIN / get these things and put them in the hidden divs
  //      var verse = messageObj.ref;
        var b = messageObj.b;
        var c = messageObj.c;
        var v = messageObj.v;
        var p = messageObj.p;
  //      $('#hidden_div_verse').html(verse);
  //      $('#hidden_div_ref').html(ref);
        $('.gofundme_flex-container').append('<div class="wrap_featured_item"><div class="placeholder_mug_featured-btn">featured-item-image<img class="m" width="296" height="444" src="m/' + b + '-' + c + '-' + v + '.png" alt="" /></div><div class="sharing_sub_panel"><button type="button" class="changeVerse FBpixel_changeVerse flex_item bf_links" book="' + b + '" chapter="' + c + '" verse="' + v + '" picture="' + p + '">change verse</button><button type="button" class="addYourName FBpixel_addYourName flex_item bf_links">add YourName</button><button type="button" class="changePicture FBpixel_changePicture flex_item bf_links">change picture</button></div><button type="button" class="share FBpixel_share"><a class="bf_links" href="https://www.biblefarm.org/share/mugs/' + b + '-' + c + '-' + v + '.html" target="_blank">share</a></div></button>');

        $( ".gofundme_flex-container" ).on( "click", ".changeVerse, .addYourName, .changePicture", function(event) {
          // make sure when user clicks on a featured item, we update the hidden divs BEFORE the other function goes to see what the are
        var neededBookForThisClick = $(this).parent().find(".changeVerse").attr("book");
        $('#hidden_book_desired').text(neededBookForThisClick);
        var neededChapterForThisClick = $(this).parent().find(".changeVerse").attr("chapter");
        $('#hidden_chapter_desired').text(neededChapterForThisClick);
        var neededVerseForThisClick = $(this).parent().find(".changeVerse").attr("verse");
        $('#hidden_verse_desired').text(neededVerseForThisClick);

          // make sure when user clicks on a featured item, they have that picture in the modals
        var neededPictureForThisClick = $(this).parent().find(".changeVerse").attr("picture");
        $('#hidden_picture_desired').html(neededPictureForThisClick);
        var putTogetherSrcUrl = ('p/' + neededPictureForThisClick + '.png');
        $('.container_showing_selected_picture').attr('src', putTogetherSrcUrl);
        $('.container_showing_selected_picture_little_Left').attr('src', putTogetherSrcUrl);



// custom CSS for biblical or flowers displayed in other modals
var IsItBiblical = neededPictureForThisClick;
 if (IsItBiblical.indexOf("B") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_flex');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_item');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforScenery_flex');
$('img.container_showing_selected_picture').removeClass('customCSSforScenery_item');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItFlowers = neededPictureForThisClick;
 if (IsItFlowers.indexOf("F") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_flex');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_item');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforScenery_flex');
$('img.container_showing_selected_picture').removeClass('customCSSforScenery_item');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItScenery = neededPictureForThisClick;
 if (IsItScenery.indexOf("S") > -1) {
      console.log("it's not biblical or flower. Removing custom classes for flowers");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforFlowers_flex');
$('img.container_showing_selected_picture').removeClass('customCSSforFlowers_item');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_item_little_Left');
      console.log("it's not biblical or flower. Adding custom classes for scenery");
$('.wrap_container_showing_selected_picture').addClass('customCSSforScenery_flex');
$('img.container_showing_selected_picture').addClass('customCSSforScenery_item');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforScenery_item_little_Left');
 }



        });


      } else {
        console.log("Status error: " + ajaxRequest.status);
      }
    } else {
      console.log("Ignored readyState: " + ajaxRequest.readyState);
    }
  };
  ajaxRequest.open(
    "GET",
    "data_files/2053_b_c_v_p.json"
  );
  ajaxRequest.send();
}
/////////////////////////////////////
// END get random json record
/////////////////////////////////////

$(window).on("resize scroll", function () {
  var currentscrollHeight = 0;
    const scrollHeight = $(document).height();
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    const isBottom = scrollHeight - 200 < scrollPos;
    if (isBottom && currentscrollHeight < scrollHeight) {
/////////////////////////////////////////////
getWelcome();
getWelcome();
getWelcome();
getWelcome();
getWelcome();
getWelcome();
/////////////////////////////////////////////
    //    currentscrollHeight = scrollHeight;
    }
});
////////////////////////////////////////////////////
////END Infinite Scroll Random Verses ///////////////////////
////////////////////////////////////////////////////







  // ////////////////////////// -->
  // BEGIN Preorder setup for PayPal integration -->
  // ////////////////////////// -->
$( "#donationNo" ).on( "click", function() {
$('#amount').val('');
$('#donationOther').val('');
$('#amount').val('10');
});

$( "#donation5" ).on( "click", function() {
$('#amount').val('');
$('#donationOther').val('');
$('#amount').val('15');
});

$( "#donation10" ).on( "click", function() {
$('#amount').val('');
$('#donationOther').val('');
$('#amount').val('20');
});

$( "#donationOther" ).on( "keyup change", function() {
$('#amount').val('');

var amountEntered = $(this).val();
console.log('amountEntered is: ' + amountEntered);

var addTheTen = $("#standardPrice").val();
console.log('addTheTen is: ' + addTheTen);

var amountTotal = parseInt(amountEntered) + parseInt(addTheTen);
console.log('amountTotal is: ' + amountTotal);

$('#amount').val('');
$('#amount').val(amountTotal);
});

$( "#donationOther" ).on( "focus", function() {
$('#amount').val('');
});

  // ////////////////////////// -->
  // END Preorder setup for PayPal integration -->
  // ////////////////////////// -->



  // ////////////////////////// -->
  // BEGIN Jquery Zoom -->
  // ////////////////////////// -->
/*


  $('a').zoom({on: 'mouseover'});


*/
  // ////////////////////////// -->
  // END Jquery Zoom -->
  // ////////////////////////// -->

  // ////////////////////////// -->
  // BEGIN STEP 1 - VERSE -->
  // ////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
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
////////////////////////// -->
// update class on the select elements and update the hidden divs
$('select#select_book').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_book = $('#select_book').find('.selected').html().split(' ')[0];
$('#hidden_book_desired').text(selected_book);
console.log('Book changed to: ' + selected_book);
});

$('select#select_chapter').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_chapter = $('#select_chapter').find('.selected').html().split(' ')[0];
$('#hidden_chapter_desired').text(selected_chapter);
console.log('Chapter changed to: ' + selected_chapter);
});

$('select#select_verse').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_verse = $('#select_verse').find('.selected').html().split(' ')[0];
		   $('#hidden_verse_desired').text(selected_verse);
console.log('Verse changed to: ' + selected_verse);
});
////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
// BEGIN When coming from the menu Create Your Own ///// -->
////////////////////////// -->
$( ".CreateYourOwnDesign" ).on( "click", function() {
// close the menu_modal
        $(".menu_modal").hide();
// open the modal
        $(".modal_customize_verse").show();
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
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
////////////////////////// -->
////////////////////////// -->
// END render the welcome instructions
////////////////////////// -->
////////////////////////// -->

 } else {
// if statement is to make sure all 3 select elements have been changed to something other than the defaults.
if (($('#hidden_book_desired').text() != 'select') && ($('#hidden_chapter_desired').text() != '0') && ($('#hidden_verse_desired').text() != '0')) {
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
$(".step1_next_step2").css("background", "#292a00").show();
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\[.*?\]/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '').replace(/\(\(.*?\)\)/g , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('.populated_ref_with_ajax, .populated_ref_with_ajax_in_modalReviewOrder').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('.populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");
$('.populated_verse_with_ajax_in_modalReviewOrder').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
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
	$('.populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$('.populated_verse_with_ajax_in_modalReviewOrder').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".step1_next_step2").hide();
	clearTimeout(step1_next_step2TimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
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
 }
});
////////////////////////// -->
// BEGIN say "got it!" when all 3 are selected and bring in the scripture
////////////////////////// -->
$('select#select_book, select#select_chapter, select#select_verse').change(function(){
// if statement is to make sure all 3 select elements have been changed to something other than the defaults.
if (($('#hidden_book_desired').text() != 'select') && ($('#hidden_chapter_desired').text() != '0') && ($('#hidden_verse_desired').text() != '0')) {
	///////////////////////////////////////////////////
	/// BEGIN waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
$('.popup_ok_this_verse_selected').show();
$(".wait_to_load_options").show();
    $('.hidden_1').removeClass('class_hide_show');
    $('.hidden_2').removeClass('class_hide_show');
    $('.hidden_3').removeClass('class_hide_show');
    $('.hidden_4').removeClass('class_hide_show');
	var timer1,
		clock = 3;
	$(startup);
	function startup() {
		$(start).trigger({
			type: "click",
			which: 1
		});
	}
	function start() {
		clock = 3;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		timer1 = setInterval(countdown, 1000);
	}
	function countdown() {
		clock -= 1;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		if (clock == 0) {
			clearInterval(timer1);
			$("#btn_countdown_start").prop("disabled", false);
			$(".wait_to_load_options").hide();
		}
	}
  setTimeout(function() {
$('.popup_ok_this_verse_selected').hide("slow");
    $('.hidden_1').addClass('class_hide_show');
    $('.hidden_2').addClass('class_hide_show');
    $('.hidden_3').addClass('class_hide_show');
    $('.hidden_4').addClass('class_hide_show');
  }, 3500);
	///////////////////////////////////////////////////
	/// END waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
  $(".step1_next_step2").css("background", "#292a00").show();
  $(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\[.*?\]/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '').replace(/\(\(.*?\)\)/g , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('.populated_ref_with_ajax, .populated_ref_with_ajax_in_modalReviewOrder').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('.populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");
$('.populated_verse_with_ajax_in_modalReviewOrder').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);

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
	$('.populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$('.populated_verse_with_ajax_in_modalReviewOrder').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".step1_next_step2").hide();
	clearTimeout(step1_next_step2TimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
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
////////////////////////// -->
// BEGIN When coming from the changeVerse links ///// -->
////////////////////////// -->
$( "body" ).on( "click", ".changeVerse", function(event) {
// event.preventDefault();
	///////////////////////////////////////////////////
	/// BEGIN waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
$('.popup_ok_this_verse_selected').show();
$(".wait_to_load_options").show();
    $('.hidden_1').removeClass('class_hide_show');
    $('.hidden_2').removeClass('class_hide_show');
    $('.hidden_3').removeClass('class_hide_show');
    $('.hidden_4').removeClass('class_hide_show');
	var timer1,
		clock = 3;
	$(startup);
	function startup() {
		$(start).trigger({
			type: "click",
			which: 1
		});
	}
	function start() {
		clock = 3;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		timer1 = setInterval(countdown, 1000);
	}
	function countdown() {
		clock -= 1;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		if (clock == 0) {
			clearInterval(timer1);
			$("#btn_countdown_start").prop("disabled", false);
			$(".wait_to_load_options").hide("slow");
		}
	}
  setTimeout(function() {
$('.popup_ok_this_verse_selected').hide("slow");
    $('.hidden_1').addClass('class_hide_show');
    $('.hidden_2').addClass('class_hide_show');
    $('.hidden_3').addClass('class_hide_show');
    $('.hidden_4').addClass('class_hide_show');
  }, 3500);
	///////////////////////////////////////////////////
	/// END waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
// when customer arrives here by clicking under a particular samle image
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// simulate the clicks and changes on the select boxes
var booktoselect = $('#select_book option').filter(function() {return $(this).text() === bookNeeded;});
$('#select_book option').removeClass('selected');
$(booktoselect).prop('selected', true).addClass('selected').trigger('change');
var chaptertoselect = $('#select_chapter option').filter(function() {return $(this).text() === chapterNeeded;});
$('#select_chapter option').removeClass('selected');
$(chaptertoselect).prop('selected', true).addClass('selected').trigger('change');
var versetoselect = $('#select_verse option').filter(function() {return $(this).text() === verseNeeded;});
$('#select_verse option').removeClass('selected');
$(versetoselect).prop('selected', true).addClass('selected').trigger('change');
// update the hidden divs
$('#hidden_book_desired').text(bookNeeded);
$('#hidden_chapter_desired').text(chapterNeeded);
$('#hidden_verse_desired').text(verseNeeded);
// put verse selected in the modal
$(".selected_verse").text(completeRefNeeded);
     $('.lets_choose').hide();
     $('.lets_change').show();
// open the modal
        $(".modal_customize_verse").show();
        $(".opacity_cover").show();
// customer has selected a verse, so...
     $('.lets_change').show();
     $('.lets_choose').hide();
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
  $(".step1_next_step2").css("background", "#292a00").show();
  $(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\[.*?\]/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '').replace(/\(\(.*?\)\)/g , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('.populated_ref_with_ajax, .populated_ref_with_ajax_in_modalReviewOrder').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('.populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");
$('.populated_verse_with_ajax_in_modalReviewOrder').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
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
	$('.populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$('.populated_verse_with_ajax_in_modalReviewOrder').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".step1_next_step2").hide();
	clearTimeout(step1_next_step2TimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
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
  // ////////////////////////// -->
  // END STEP 1 - VERSE -->
  // ////////////////////////// -->

  // ////////////////////////// -->
  // BEGIN STEP 2 - NAME -->
  // ////////////////////////// -->
$( "body" ).on( "click", ".addYourName", function(event) {
// when customer arrives here by clicking under a particular samle image
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// simulate the clicks and changes on the select boxes
var booktoselect = $('#select_book option').filter(function() {return $(this).text() === bookNeeded;});
$('#select_book option').removeClass('selected');
$(booktoselect).prop('selected', true).addClass('selected').trigger('change');
var chaptertoselect = $('#select_chapter option').filter(function() {return $(this).text() === chapterNeeded;});
$('#select_chapter option').removeClass('selected');
$(chaptertoselect).prop('selected', true).addClass('selected').trigger('change');
var versetoselect = $('#select_verse option').filter(function() {return $(this).text() === verseNeeded;});
$('#select_verse option').removeClass('selected');
$(versetoselect).prop('selected', true).addClass('selected').trigger('change');
// update the hidden divs
$('#hidden_book_desired').text(bookNeeded);
$('#hidden_chapter_desired').text(chapterNeeded);
$('#hidden_verse_desired').text(verseNeeded);
// put verse selected in the modal
$(".selected_verse").text(completeRefNeeded);
     $('.lets_choose').hide();
     $('.lets_change').show();
// open the modal
        $(".modal_customize_name").show();
        $(".opacity_cover").show();
		$('#customize_name').focus();
// re-render just in case, since sometimes it doesn't
setTimeout(function(){
$(".rendered_customerName_in_modalName,.rendered_customerName_in_modalPictures,.rendered_customerName_in_modalBackgrounds,.rendered_customerName_in_modalReviewOrder").textfill({maxFontPixels:200});
}, 500);
});
// first I need to render it in the rendered_customerName_in_modalName
//AND ALSO IN rendered_customerName_in_modalPictures AND ALSO IN rendered_customerName_in_modalBackgrounds AND ALSO IN rendered_customerName_in_modalReviewOrder
	function renderIn_modalName() {
		$('.rendered_customerName_in_modalName,.rendered_customerName_in_modalPictures, .rendered_customerName_in_modalBackgrounds, .rendered_customerName_in_modalReviewOrder').html(
			'<span>' + $('#customize_name').val() + '</span>'
		);
//		$('.rendered_customerName_in_modalName,.rendered_customerName_in_modalPictures, .rendered_customerName_in_modalBackgrounds, .rendered_customerName_in_modalReviewOrder').textfill({ maxFontPixels: 200 });

//textFit(document.querySelector(".rendered_customerName_in_modalName")); textFit(document.querySelector(".rendered_customerName_in_modalPictures")); textFit(document.querySelector(".rendered_customerName_in_modalBackgrounds")); textFit(document.querySelector(".rendered_customerName_in_modalReviewOrder"));

$(".rendered_customerName_in_modalName,.rendered_customerName_in_modalPictures,.rendered_customerName_in_modalBackgrounds,.rendered_customerName_in_modalReviewOrder").textfill({maxFontPixels:200});

	}
	$('#customize_name').keyup(renderIn_modalName);
	renderIn_modalName();

// THEN grab the font-size of .rendered_customerName_in_modalName every time it changes

$( "#customize_name" ).on( "keyup change", function(e) {
  renderIn_modalName();
  // THEN grab the font-size of .rendered_customerName_in_modalName every time it changes
  $('.sample_name').hide();
var newFontSize = $( ".rendered_customerName_in_modalName > span" ).attr("style");
// give it a second to pass along the attr style newFontSize
// AND THEN update it in the modals with picture and backgrounds
setTimeout(function(){
$( ".rendered_customerName_in_modalPictures > span" ).attr("style",newFontSize);
$( ".rendered_customerName_in_modalBackgrounds > span" ).attr("style",newFontSize);
$( ".rendered_customerName_in_modalReviewOrder > span" ).attr("style",newFontSize);
}, 3500);
// AND  it also gets updated in the hidden_name_desired
$('#hidden_name_desired').text($('#customize_name').val());
// continueToPictures
if (($('#hidden_name_desired').text() != 'Your Name') && ($('#hidden_name_desired').text() != '') && ($('#hidden_name_desired').text() != ' ')) {
  console.log ('Name is no longer "Your Name" nor "" nor " ". Removed class: checkIfNameIsEdited. Added class: nameHasBeenEdited-btn');
$('.continueToPictures').text('continue to pictures').removeClass('checkIfNameIsEdited').addClass('nameHasBeenEdited-btn').css('color', '#d5ad6d');
console.log ('Name is no longer "Your Name" nor "" nor " ". Removed class: checkIfNameIsEdited. Added class: nameHasBeenEdited-btn also to reviewOrderCkeck');
$('body').find('.reviewOrderCheck').removeClass('checkIfNameIsEdited').addClass('nameHasBeenEdited-btn').text('review your design').css('color', '#d5ad6d');
} else {
$('.continueToPictures').text('type name up there').removeClass('nameHasBeenEdited-btn').addClass('checkIfNameIsEdited').css('color', '#ff5757');
console.log('Added class: checkIfNameIsEdited. Removed class: nameHasBeenEdited-btn also to reviewOrderCkeck');
$('body').find('.reviewOrderCheck').addClass('checkIfNameIsEdited').removeClass('nameHasBeenEdited-btn').removeClass('reviewOrder').text('review your design').css('color', '#d5ad6d');
}
});
// when click on continue to pictures
$( ".continueToPictures" ).on( "click", function(e) {
  // checkIfNameIsEdited to enable continue to pictures
  if (($('#hidden_name_desired').text() != 'Your Name') && ($('#hidden_name_desired').text() != '') && ($('#hidden_name_desired').text() != ' ')) {
    console.log ('Name is no longer "Your Name" nor "" nor " ". Removed class: checkIfNameIsEdited. Added class: nameHasBeenEdited-btn. Continuing to pictures.');
  $('.reviewOrderCheck').text('review your design').removeClass('checkIfNameIsEdited').addClass('nameHasBeenEdited-btn').css('color', '#d5ad6d');
  $('.modal_customize_name').hide();
  $('.modal_customize_picture').show();
  // when user returns to this modal, just in case they already have a picture selected
  $('.be_sure_to_click_the_one_you_like').hide();

  // if user had already chosen a picture show them what they got and how to change it
  if ($('#hidden_picture_desired').text() != 'nothing') {
    $('.select_a_category_to_load_gallery').hide();
    $('.this_is_your_currently_selected_picture').show();
    $('.modal_customize_picture > .wrap_container_showing_selected_picture').show();
    $('.reviewOrderCheck').removeClass('checkIfPictureIsSelected').addClass('pictureHasBeenSelected-btn');
  }
  // if user doesn't have a picture chosen, show them how to choose one
  else {
    $('.select_a_category_to_load_gallery').show();
    $('.this_is_your_currently_selected_picture').hide();
    $('.modal_customize_picture > .wrap_container_showing_selected_picture').hide();
  }

  } else {
    // prevent the click or enter key
    e.preventDefault();
    $('.checkIfNameIsEdited').text('type name up there').css('color', '#ff5757');
    $('.customize_name').focus();
  }
});



// make use of the enter key on computers, or the GO buttons on cellphones when user finished typing name
$("form.name_input").submit(function(e) {

  if (($('#hidden_name_desired').text() != 'Your Name') && ($('#hidden_name_desired').text() != '') && ($('#hidden_name_desired').text() != ' ')) {
    console.log ('Name is no longer "Your Name" nor "" nor " ". Removed class: checkIfNameIsEdited. Added class: nameHasBeenEdited-btn. Continuing to pictures.');
  $('.reviewOrderCheck').text('review your design').removeClass('checkIfNameIsEdited').addClass('nameHasBeenEdited-btn').css('color', '#d5ad6d');
  $('.modal_customize_name').hide();
  $('.modal_customize_picture').show();
  // when user returns to this modal, just in case they already have a picture selected
  $('.be_sure_to_click_the_one_you_like').hide();

  // if user had already chosen a picture show them what they got and how to change it
  if ($('#hidden_picture_desired').text() != 'nothing') {
    $('.select_a_category_to_load_gallery').hide();
    $('.this_is_your_currently_selected_picture').show();
    $('.modal_customize_picture > .wrap_container_showing_selected_picture').show();
    $('.reviewOrderCheck').removeClass('checkIfPictureIsSelected').addClass('pictureHasBeenSelected-btn');
  }
  // if user doesn't have a picture chosen, show them how to choose one
  else {
    $('.select_a_category_to_load_gallery').show();
    $('.this_is_your_currently_selected_picture').hide();
    $('.modal_customize_picture > .wrap_container_showing_selected_picture').hide();
  }

  } else {
}

});




// adjust position left if characters are problematic
/*
$( ".customize_name form.name_input" ).on( "keyup change submit", function(e) {
var myString = $('.customize_name').val();
var lastChar = myString[myString.length -1];
console.log(lastChar);
var arr = ['d', 'h', 'k', 'l', 'b'];

if ( $.inArray(lastChar, arr) > -1 ) {
$('.rendered_customerName_in_modalName').css('left', '66px');
$('.rendered_customerName_in_modalPictures').css('left', '66px');
$('.rendered_customerName_in_modalReviewOrder-table').css('left', '17px');
} else {
$('.rendered_customerName_in_modalName').css('left', '72px');
$('.rendered_customerName_in_modalPictures').css('left', '72px');
$('.rendered_customerName_in_modalReviewOrder-table').css('left', '22px');
}
});
*/
  // ////////////////////////// -->
  // END STEP 2 - NAME -->
  // ////////////////////////// -->

  // ////////////////////////// -->
  // BEGIN STEP 3 - PICTURE -->
  // ////////////////////////// -->
// when customer arrives here by clicking under a particular sample image
$( "body" ).on( "click", ".changePicture", function(event) {
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// simulate the clicks and changes on the select boxes
var booktoselect = $('#select_book option').filter(function() {return $(this).text() === bookNeeded;});
$('#select_book option').removeClass('selected');
$(booktoselect).prop('selected', true).addClass('selected').trigger('change');
var chaptertoselect = $('#select_chapter option').filter(function() {return $(this).text() === chapterNeeded;});
$('#select_chapter option').removeClass('selected');
$(chaptertoselect).prop('selected', true).addClass('selected').trigger('change');
var versetoselect = $('#select_verse option').filter(function() {return $(this).text() === verseNeeded;});
$('#select_verse option').removeClass('selected');
$(versetoselect).prop('selected', true).addClass('selected').trigger('change');
// update the hidden divs
$('#hidden_book_desired').text(bookNeeded);
$('#hidden_chapter_desired').text(chapterNeeded);
$('#hidden_verse_desired').text(verseNeeded);
// put verse selected in the modal
$(".selected_verse").text(completeRefNeeded);
     $('.lets_choose').hide();
     $('.lets_change').show();
// open the modal
        $(".modal_customize_picture").show();
        $(".opacity_cover").show();
        // when user returns to this modal, just in case they already have a picture selected
        $('.be_sure_to_click_the_one_you_like').hide();

        // if user had already chosen a picture show them what they got and how to change it
        if ($('#hidden_picture_desired').text() != 'nothing') {
          $('.select_a_category_to_load_gallery').hide();
          $('.this_is_your_currently_selected_picture').show();
          $('.modal_customize_picture > .wrap_container_showing_selected_picture').show();
          $('.reviewOrderCheck').removeClass('checkIfPictureIsSelected').addClass('pictureHasBeenSelected-btn');
        }
        // if user doesn't have a picture chosen, show them how to choose one
        else {
          $('.select_a_category_to_load_gallery').show();
          $('.this_is_your_currently_selected_picture').hide();
          $('.modal_customize_picture > .wrap_container_showing_selected_picture').hide();
        }
});
// when user has clicked on one of the categories
$( "#view-biblical, #view-flowers, #view-scenery" ).on( "click", function() {
  $('.modal_customize_picture > .wrap_container_showing_selected_picture').hide();
  $('.this_is_your_currently_selected_picture').hide();
  $('.be_sure_to_click_the_one_you_like').show();
});
// make this clicked picture the selected one and show it in the other modals
$( "img.images_inside_modal_customize_picture_biblical, img.images_inside_modal_customize_picture_flowers, img.images_inside_modal_customize_picture_scenery" ).on( "click", function() {
  $('.you_need_to_click_on_a_picture').hide();
  $('.reviewOrderCheck').css('color', '#d5ad6d').text('review your design');
  $('.popup_ok_this_picture_selected').show('slow');
  setTimeout(function() {
    $('.popup_ok_this_picture_selected').hide();
}, 2000);

  $('.be_sure_to_click_the_one_you_like').hide();
var selectedPicture = $(this).attr("src").replace(/p\\/, '').replace(/\.png/, '');
$( "#hidden_picture_desired" ).text(selectedPicture);
$('.container_showing_selected_picture').attr("src", "p/" + selectedPicture + ".png" );
$('.container_showing_selected_picture_little_Left').attr("src", "p/" + selectedPicture + ".png" );
console.log('Picture has been selected. Removed class "checkIfPictureIsSelected". Added class: "pictureHasBeenSelected-btn"');
$('.reviewOrderCheck').removeClass('checkIfPictureIsSelected').addClass('pictureHasBeenSelected-btn');
// enable reviewOrder as long as we already have a name
if ($('.reviewOrderCheck').hasClass('nameHasBeenEdited-btn')) {
$('.reviewOrderCheck').addClass('reviewOrder');
}
});
// custom CSS for biblical or flowers displayed in other modals
$('.images_inside_modal_customize_picture_biblical, .images_inside_modal_customize_picture_flowers').on("click", function() {
  console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_flex');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_item');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
  console.log("it's biblical or flower. Removing custom classes for scenery");
  $('.wrap_container_showing_selected_picture').removeClass('customCSSforScenery_flex');
  $('img.container_showing_selected_picture').removeClass('customCSSforScenery_item');
  $('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
  $('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
});
$('.images_inside_modal_customize_picture_scenery').on("click", function() {
  console.log("it's not biblical or flower. Removing custom classes for flowers");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforFlowers_flex');
$('img.container_showing_selected_picture').removeClass('customCSSforFlowers_item');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_item_little_Left');
  console.log("it's not biblical or flower. Adding custom classes for scenery");
  $('.wrap_container_showing_selected_picture').addClass('customCSSforScenery_flex');
  $('img.container_showing_selected_picture').addClass('customCSSforScenery_item');
  $('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforScenery_flex_little_Left');
  $('img.container_showing_selected_picture_little_Left').addClass('customCSSforScenery_item_little_Left');
});
// enable reviewOrder as long as we already have a name
$('.reviewOrderCheck').on( "click", function(e) {
  // got everything
    if (($('.reviewOrderCheck').hasClass('nameHasBeenEdited-btn')) && ($('.reviewOrderCheck').hasClass('pictureHasBeenSelected-btn'))) {
      $('.reviewOrderCheck').addClass('reviewOrder');
      console.log('nameHasBeenEdited-btn and pictureHasBeenSelected-btn, so Added class: reviewOrder');
    }
    // still need name
if ((!$('.reviewOrderCheck').hasClass('nameHasBeenEdited-btn')) && ($('.reviewOrderCheck').hasClass('pictureHasBeenSelected-btn'))) {
        console.log('gotta a picture but still need a name');
      $('.reviewOrderCheck').html("let's add YourName").css('color','#ff5757').addClass('stillNeedToaddYourName');
      setTimeout(function(){
        console.log('automatically going back to customize name modal');
        $('.modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery').hide();
        $('.modal_customize_name').show();
        setTimeout(function(){
        $('body').find('#customize_name').focus();
      }, 100);
    }, 3000);
}
// still need a picture
if (($('.reviewOrderCheck').hasClass('nameHasBeenEdited-btn')) && (!$('.reviewOrderCheck').hasClass('pictureHasBeenSelected-btn'))) {
}
});
/*
$('.modal_customize_picture').find('.addYourName').on("click", function() {
  console.log('going back to addYourName');
// if user click back to YourName, re-render textfill
setTimeout(function() {
$(".rendered_customerName_in_modalName,.rendered_customerName_in_modalPictures,.rendered_customerName_in_modalBackgrounds,.rendered_customerName_in_modalReviewOrder").textfill({maxFontPixels:200});
// get focus back
setTimeout(function() {
$("input.customize_name").get(0).focus();
}, 1000);
}, 500);
// stay focused
$('#customize_name').on( "focusout", function() {
$('#customize_name').focus();
});
});
*/
// in case user has already been browsing, so he already has a picture selected
$( "body" ).on( "click", ".CreateYourOwnDesign, .changeVerse, .addYourName, .continueToPictures", function() {
  setTimeout(function() {
    if ($('#hidden_picture_desired').text() != 'nothing') {
      $('.reviewOrderCheck').removeClass('checkIfPictureIsSelected').addClass('pictureHasBeenSelected-btn');
    }
  }, 1000);
});
  // ////////////////////////// -->
  // END STEP 3 - PICTURE -->
  // ////////////////////////// -->
  // ////////////////////////// -->
  // BEGIN STEP 4 - BACKGROUND -->
  // ////////////////////////// -->
// when customer arrives here via the menu
$( ".browseBackgrounds" ).on( "click", function() {
// open the modal
        $(".modal_customize_backgrounds").show();
		$('.wrap_swiper_container_backgrounds_solids').show();
        $(".opacity_cover").show();
});
// when customer arrives here by clicking under a particular sample image
$( "body" ).on( "click", ".changeBackground", function(event) {
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// simulate the clicks and changes on the select boxes
var booktoselect = $('#select_book option').filter(function() {return $(this).text() === bookNeeded;});
$('#select_book option').removeClass('selected');
$(booktoselect).prop('selected', true).addClass('selected').trigger('change');
var chaptertoselect = $('#select_chapter option').filter(function() {return $(this).text() === chapterNeeded;});
$('#select_chapter option').removeClass('selected');
$(chaptertoselect).prop('selected', true).addClass('selected').trigger('change');
var versetoselect = $('#select_verse option').filter(function() {return $(this).text() === verseNeeded;});
$('#select_verse option').removeClass('selected');
$(versetoselect).prop('selected', true).addClass('selected').trigger('change');
// update the hidden divs
$('#hidden_book_desired').text(bookNeeded);
$('#hidden_chapter_desired').text(chapterNeeded);
$('#hidden_verse_desired').text(verseNeeded);
// put verse selected in the modal
$(".selected_verse").text(completeRefNeeded);
     $('.lets_choose').hide();
     $('.lets_change').show();
// open the modal
        $(".modal_customize_backgrounds").show();
		$('.wrap_swiper_container_backgrounds_solids').show();
        $(".opacity_cover").show();
});
// make this clicked background image the selected one and show it in the other modals
$( "img.images_inside_modal_customize_backgrounds" ).on( "click", function() {
var selectedBackground = $(this).attr("src").replace(/bg-bleed\\/, '').replace(/\.png/, '');
$( "#hidden_background_desired" ).text(selectedBackground);
$('.container_showing_selected_background').attr("src", "bg-bleed/" + selectedBackground + ".png" );
});
  // ////////////////////////// -->
  // END STEP 4 - BACKGROUND -->
  // ////////////////////////// -->

  // ////////////////////////// -->
  // BEGIN STEP 5 - REVIEW THE ORDER -->
  // ////////////////////////// -->
  $( "body" ).on( "click", ".reviewOrder", function(event) {
  $(".wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .modal_announce_fundraising").hide();
  $(".modal_review_the_order").show();
        $(".opacity_cover").show();
// re-render the textfill
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 1000);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 1000);
});
  // ////////////////////////// -->
  // END STEP 5 - REVIEW THE ORDER -->
  // ////////////////////////// -->

  // ////////////////////////// -->
  // BEGIN STEP 5b - ANNOUNCE FUNDRAISING -->
  // ////////////////////////// -->
  $( "body" ).on( "click", ".announceFundraising", function(event) {
  $(".modal_review_the_order").hide();
  $(".modal_announce_fundraising").show();
        $(".opacity_cover").show();
});
  // ////////////////////////// -->
  // END STEP 5b - ANNOUNCE FUNDRAISING -->
  // ////////////////////////// -->

  // ////////////////////////// -->
  // BEGIN STEP 6 - PLACE THE ORDER -->
  // ////////////////////////// -->
$( ".placeOrder" ).on( "click", function() {
  $(".modal_announce_fundraising").hide();
        $(".modal_place_the_order").show();
        $(".opacity_cover").show();
		$('.customize_email').focus();
});
// Save email address if customer wants the USPS tracking number
$( ".customize_email" ).on( "keyup change", function() {
  $('#hidden_USPS_Tracking_Email').text($('.customize_email').val());
});
// Save total amount entered
$( ".order-amount" ).on( "keyup change", function() {
  $('#hidden_Total_Amount').text($('.order-amount').val());
});
// make sure we got everything updated just before the click on the PayPal buttons:
$( "#select_book, #select_chapter, #select_verse, .customize_name, .images_inside_modal_customize_picture_flowers, .images_inside_modal_customize_picture_scenery, .customize_email, .order-amount" ).on( "keyup change click", function() {

// grab the hidden text divs and combine them into the complete order details
var customerName = $("#hidden_name_desired").text();
console.log('customerName is: ' + customerName);

var customerVerse = ($('#hidden_book_desired').text() + '-' + $('#hidden_chapter_desired').text() + '-' + $('#hidden_verse_desired').text());
console.log('customerVerse is: ' + customerVerse);

var customerPicture = $("#hidden_picture_desired").text();
console.log('customerPicture is: ' + customerPicture);

var customerBackground = $("#hidden_background_desired").text();
console.log('customerBackground is: ' + customerBackground);

var customerEmail = $("#hidden_USPS_Tracking_Email").text();
console.log('customerEmail is: ' + customerEmail);

var customerTotalAmount = $("#hidden_Total_Amount").text();
console.log('customerTotalAmount is: ' + customerTotalAmount);

var completeDescription = customerVerse + " | Name: " + customerName + " | Picture: " + customerPicture + " | Email: " + customerEmail + " | Amount: $" + customerTotalAmount;
console.log('completeDescription is: ' + completeDescription);

  $('#hidden_Complete_Description').text(completeDescription);
  $('#description').val(completeDescription);
});
  // ////////////////////////// -->
  // END STEP 6 - PLACE THE ORDER -->
  // ////////////////////////// -->

  // hide any and all modals when click on menu, except menu_modal
  $("#menu").click(function() {
  $(".modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal").hide();
  $("#PureChatWidget").attr("style", "z-index: -1 !important");
  });
  // hide any and all modals when click outside
  $(".opacity_cover, .wrap_gofundme_modal_bar").click(function() {
  $(".opacity_cover, .menu_modal, .modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order, .about_modal, .help_modal").hide();
  });

  // ////////////////////////// -->
  // Begin OrderFlow navigation -->
  // ////////////////////////// -->
$('body').find('.changeVerse').on( "click", function() {
$(".menu_modal, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order").hide();
$('.modal_customize_verse').show();
// give it time to update in order to prevent messup while is says undefined - undefined - undefined
$('.selected_verse').hide();
setTimeout(function() {
$('.selected_verse').show();
}, 1000);
});
$('body').find('.addYourName').on( "click", function() {
$(".menu_modal, .modal_customize_verse, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order").hide();
$('.modal_customize_name').show();
if ($('#hidden_name_desired').text() == 'Your Name') {
$('#customize_name').val('');
$('.sample_name').text('Your Name').show();
$('.rendered_customerName_in_modalName').html('');
$('.rendered_customerName_in_modalPictures').html('');
$('.rendered_customerName_in_modalReviewOrder').html('');
}
$('.customize_name').focus();
});
$('body').find('.changePicture').on( "click", function() {
$(".menu_modal, .modal_customize_verse, .modal_customize_name, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order").hide();
$('.modal_customize_picture').show();
});
$('body').find('.changeBackground').on( "click", function() {
$(".menu_modal, .modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .modal_review_the_order, .modal_announce_fundraising, .modal_place_the_order").hide();
$('.modal_customize_backgrounds, .wrap_swiper_container_backgrounds_solids').show();
});
$('body').find('.reviewOrder').on( "click", function() {
$(".menu_modal, .modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_place_the_order").hide();
$('.modal_review_the_order').show();
});
$('body').find('.placeOrder').on( "click", function() {
$(".menu_modal, .modal_customize_verse, .modal_customize_name, .modal_customize_picture, .wrap_swiper_container_biblical, .wrap_swiper_container_flowers, .wrap_swiper_container_scenery, .wrap_swiper_container_backgrounds_solids, .wrap_swiper_container_backgrounds_gradients, .wrap_swiper_container_backgrounds_patterns, .modal_customize_backgrounds, .modal_review_the_order").hide();
$('.modal_place_the_order').show();
});
  // ////////////////////////// -->
  // END OrderFlow navigation -->
  // ////////////////////////// -->

// BEGIN blink.js
(function($) {
    $.fn.blink = function(options) {
        var defaults = { delay: 500 };
        var options = $.extend(defaults, options);
        return $(this).each(function(idx, itm) {
            var handle = setInterval(function() {
                if ($(itm).css("visibility") === "visible") {
                    $(itm).css('visibility', 'hidden');
                } else {
                    $(itm).css('visibility', 'visible');
                }
            }, options.delay);

            $(itm).data('handle', handle);
        });
    }
    $.fn.unblink = function() {
        return $(this).each(function(idx, itm) {
            var handle = $(itm).data('handle');
            if (handle) {
                clearInterval(handle);
                $(itm).data('handle', null);
                $(itm).css('visibility', 'inherit');
            }
        });
    }
}(jQuery))
// END blink.js

////////////////////////////////////////////////////
////BEGIN about modal ///////////////////////
////////////////////////////////////////////////////
$( "#about" ).on( "click", function() {
$( ".about_modal" ).show('slow');
});
////////////////////////////////////////////////////
////END about modal ///////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////BEGIN help modal ///////////////////////
////////////////////////////////////////////////////
$( "#info" ).on( "click", function() {
$( ".help_modal" ).show('slow');
});
////////////////////////////////////////////////////
////END help modal ///////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
////BEGIN Swiper biblical ///////////////////////
////////////////////////////////////////////////////
$( "#view-biblical" ).on( "click", function() {
  $('.select_a_category_to_load_gallery').hide();
  $('.wrap_swiper_container_flowers').hide();
  $('.wrap_swiper_container_scenery').hide();
  $('.wrap_swiper_container_biblical').show();
setTimeout(function(){
      var mySwiper_biblical = new Swiper(".mySwiper_biblical", {
watchActiveIndex: true,
keyboard: {
	enabled: true,
	onlyInViewport: true,
},
on: {
	click: function(){
	console.log(this.clickedIndex);
	$('#hidden_lastClickedPictureIndex_biblical').text(this.clickedIndex);
	}
},
navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
},
});

	  var hidden_lastClickedPictureIndex_biblical = +$('#hidden_lastClickedPictureIndex_biblical').text();
	  mySwiper_biblical.slideTo(hidden_lastClickedPictureIndex_biblical);

    mySwiper_biblical.on('click', function() {
      console.log('*** mySwiper_biblical.realIndex', mySwiper_biblical.realIndex);
      var hidden_picture_desired = $('.mySwiper_biblical > .swiper-wrapper > .swiper-slide-active > div > img').attr('src').replace(/p\\/, '').replace(/\.png/, '');
      $('#hidden_picture_desired').text(hidden_picture_desired);
      $('.container_showing_selected_picture').attr("src", "p/" + hidden_picture_desired + ".png" );
      $('.container_showing_selected_picture_little_Left').attr("src", "p/" + hidden_picture_desired + ".png" );
    });

}, 1000);
});
////////////////////////////////////////////////////
////END Swiper biblical ///////////////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
////BEGIN Swiper flowers ///////////////////////
////////////////////////////////////////////////////
$( "#view-flowers" ).one( "click", function() {
  $('.select_a_category_to_load_gallery').hide();
  $('.wrap_swiper_container_biblical').hide();
  $('.wrap_swiper_container_scenery').hide();
  $('.wrap_swiper_container_flowers').show();
setTimeout(function(){
      var mySwiper_flowers = new Swiper(".mySwiper_flowers", {
watchActiveIndex: true,
keyboard: {
	enabled: true,
	onlyInViewport: true,
},
autoplay: {
  delay: 1500,
  disableOnInteraction: true,
},
on: {
	click: function(){
	console.log(this.clickedIndex);
	$('#hidden_lastClickedPictureIndex_flowers').text(this.clickedIndex);
	}
},
navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
},
});

$(".swiper-container").mouseenter(function() {
  mySwiper_flowers.autoplay.stop();
  console.log('slider stopped');
});
$(".swiper-container").mouseleave(function() {
  mySwiper_flowers.autoplay.start();
  console.log('slider started again');
});
    mySwiper_flowers.on('click', function() {
      console.log('*** mySwiper_flowers.realIndex', mySwiper_flowers.realIndex);
      var hidden_picture_desired = $('.mySwiper_flowers > .swiper-wrapper > .swiper-slide-active > div > img').attr('src').replace(/p\\/, '').replace(/\.png/, '');
      $('#hidden_picture_desired').text(hidden_picture_desired);
      $('.container_showing_selected_picture').attr("src", "p/" + hidden_picture_desired + ".png" );
      $('.container_showing_selected_picture_little_Left').attr("src", "p/" + hidden_picture_desired + ".png" );
    });

}, 1000);
});
$( "#view-flowers" ).on( "click", function() {
  $('.select_a_category_to_load_gallery').hide();
  $('.wrap_swiper_container_biblical').hide();
  $('.wrap_swiper_container_scenery').hide();
  $('.wrap_swiper_container_flowers').show();
});
////////////////////////////////////////////////////
////END Swiper flowers ///////////////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
////BEGIN Swiper scenery ///////////////////////
////////////////////////////////////////////////////
$( "#view-scenery" ).one( "click", function() {
  $('.select_a_category_to_load_gallery').hide();
  $('.wrap_swiper_container_biblical').hide();
  $('.wrap_swiper_container_scenery').show();
  $('.wrap_swiper_container_flowers').hide();
setTimeout(function(){
      var mySwiper_scenery = new Swiper(".mySwiper_scenery", {
watchActiveIndex: true,
keyboard: {
	enabled: true,
	onlyInViewport: true,
},
autoplay: {
  delay: 1500,
  disableOnInteraction: true,
},
on: {
	click: function(){
	console.log(this.clickedIndex);
	$('#hidden_lastClickedPictureIndex_scenery').text(this.clickedIndex);
	}
},
navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
},
});

$(".swiper-container").mouseenter(function() {
  mySwiper_scenery.autoplay.stop();
  console.log('slider stopped');
});
$(".swiper-container").mouseleave(function() {
  mySwiper_scenery.autoplay.start();
  console.log('slider started again');
});
    mySwiper_scenery.on('click', function() {
      console.log('*** mySwiper_scenery.realIndex', mySwiper_scenery.realIndex);
      var hidden_picture_desired = $('.mySwiper_scenery > .swiper-wrapper > .swiper-slide-active > div > img').attr('src').replace(/p\\/, '').replace(/\.png/, '');
      $('#hidden_picture_desired').text(hidden_picture_desired);
      $('.container_showing_selected_picture').attr("src", "p/" + hidden_picture_desired + ".png" );
      $('.container_showing_selected_picture_little_Left').attr("src", "p/" + hidden_picture_desired + ".png" );
    });

}, 1000);
});
$( "#view-scenery" ).on( "click", function() {
  $('.select_a_category_to_load_gallery').hide();
  $('.wrap_swiper_container_biblical').hide();
  $('.wrap_swiper_container_scenery').show();
  $('.wrap_swiper_container_flowers').hide();
});
////////////////////////////////////////////////////
////END Swiper scenery ///////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
////BEGIN Swiper mySwiper_announce_fundraising ///////////////////////
////////////////////////////////////////////////////
$( ".announceFundraising" ).one( "click", function() {
  $('.wrap_swiper_container_announce_fundraising').show();
setTimeout(function(){
      var mySwiper_announce_fundraising = new Swiper(".mySwiper_announce_fundraising", {
keyboard: {
	enabled: true,
	onlyInViewport: true,
},
autoplay: {
  delay: 1500,
  disableOnInteraction: true,
},
navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
},
});

$(".swiper-container").mouseenter(function() {
  mySwiper_announce_fundraising.autoplay.stop();
  console.log('slider stopped');
});
$(".swiper-container").mouseleave(function() {
  mySwiper_announce_fundraising.autoplay.start();
  console.log('slider started again');
});

}, 1000);
});
$( ".announceFundraising" ).on( "click", function() {
  $('.wrap_swiper_container_announce_fundraising').show();
});
////////////////////////////////////////////////////
////END Swiper mySwiper_announce_fundraising ///////////////////////
////////////////////////////////////////////////////














////////////////////////////////////////////////////
////BEGIN swiper thumnails loop lighter gradients ///////////////////////
////////////////////////////////////////////////////
	$( ".browseBackgrounds, .changeBackground" ).on( "click", function() {
setTimeout(function(){




      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
watchActiveIndex: true,
keyboard: {
	enabled: true,
	onlyInViewport: true,
},
on: {
	slideChange: function() {
	console.log(this.realIndex);
//    $('.real-index').html(this.realIndex);
	}
},
on: {
	click: function(){
	console.log(this.clickedIndex);
	$('#hidden_lastClickedBackgroundIndex').text(this.clickedIndex);
	}
},
      });





}, 1000);
});
// The selection is recorded in the #hidden_lastClickedBackgroundIndex when the swiper-slide is clicked, due to the on click function within the new swiper rendering, but we have to do this popup here (outside the swiper rendering)
$( ".images_inside_modal_customize_backgrounds" ).on( "click", function() {
setTimeout(function(){
	$('.popup_ok_this_background_theme_selected').show();
	setTimeout(function(){
	$('.popup_ok_this_background_theme_selected').hide();
	}, 2000);
// render mug background
var backgroundNeeded = $('#hidden_background_desired').text();
// regular size for the design modals
$('.mug_render_cylinder_wrap_578x260_Center > .frame > .strip').html('<div class="h" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="i" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="j" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="k" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="l" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="m" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="n" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="o" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="p" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="q" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="r" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div>');
// little size for review your order modal Left
$('.mug_render_cylinder_wrap_578x260_Center_little_Left > .frame > .strip').html('<div class="h" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="i" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="j" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="k" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="l" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="m" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="n" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="o" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="p" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="q" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="r" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div>');
// little size for review your order modal Right
$('.mug_render_cylinder_wrap_578x260_Center_little_Right > .frame > .strip').html('<div class="h" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="i" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="j" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="k" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="l" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="m" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="n" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="o" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="p" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="q" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div><div class="r" style="background-image: url(bg-bleed/' + backgroundNeeded  + '.png)"></div>');
}, 100);
// change text color & stroke based on background
setTimeout(function(){
// if url has a "D"
if ( $("#hidden_background_desired").text().indexOf('D') > -1 ) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.selected_bible_verse_fixed_on_mug').attr("style", "").css("color", "#d5ad6d");
    $('.selected_bible_ref_fixed_on_mug').attr("style", "").css("color", "#d5ad6d");
    $('.rendered_customerName_in_modalName').attr("style", "").css("color", "#d5ad6d");
    $('.rendered_customerName_in_modalPictures').attr("style", "").css("color", "#d5ad6d");
    $('.rendered_customerName_in_modalBackgrounds').attr("style", "").css("color", "#d5ad6d");
    $('.made_with_love_fixed_on_mug').attr("style", "").css("color", "#d5ad6d");
    $('.heart_fixed_on_mug').attr("style", "").css("color", "red");

    $('.selected_bible_verse_fixed_on_mug').textStroke(0.7,'#000000');
    $('.selected_bible_ref_fixed_on_mug').textStroke(0.5,'#000000');
    $('.rendered_customerName_in_modalName').textStroke(0.7,'#000000');
    $('.rendered_customerName_in_modalPictures').textStroke(0.7,'#000000');
    $('.rendered_customerName_in_modalBackgrounds').textStroke(0.7,'#000000');
    $('.made_with_love_fixed_on_mug').textStroke(0.5,'#000000');
    $('.heart_fixed_on_mug').textStroke(0.5,'#000000');
});
// END textStroke
}
// if url has a "d"
if ( $("#hidden_background_desired").text().indexOf('d') > -1 ) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.selected_bible_verse_fixed_on_mug').attr("style", "").css("color", "#d5ad6d");
    $('.selected_bible_ref_fixed_on_mug').attr("style", "").css("color", "#d5ad6d");
    $('.rendered_customerName_in_modalName').attr("style", "").css("color", "#d5ad6d");
    $('.rendered_customerName_in_modalPictures').attr("style", "").css("color", "#d5ad6d");
    $('.rendered_customerName_in_modalBackgrounds').attr("style", "").css("color", "#d5ad6d");
    $('.made_with_love_fixed_on_mug').attr("style", "").css("color", "#d5ad6d");
    $('.heart_fixed_on_mug').attr("style", "").css("color", "red");

    $('.selected_bible_verse_fixed_on_mug').textStroke(0.7,'#000000');
    $('.selected_bible_ref_fixed_on_mug').textStroke(0.5,'#000000');
    $('.rendered_customerName_in_modalName').textStroke(0.7,'#000000');
    $('.rendered_customerName_in_modalPictures').textStroke(0.7,'#000000');
    $('.rendered_customerName_in_modalBackgrounds').textStroke(0.7,'#000000');
    $('.made_with_love_fixed_on_mug').textStroke(0.5,'#000000');
    $('.heart_fixed_on_mug').textStroke(0.5,'#000000');
});
// END textStroke
}
// if url has a "L"
if ( $("#hidden_background_desired").text().indexOf('L') > -1 ) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.selected_bible_verse_fixed_on_mug').attr("style", "").css("color", "#000000");
    $('.selected_bible_ref_fixed_on_mug').attr("style", "").css("color", "#000000");
    $('.rendered_customerName_in_modalName').attr("style", "").css("color", "#000000");
    $('.rendered_customerName_in_modalPictures').attr("style", "").css("color", "#000000");
    $('.rendered_customerName_in_modalBackgrounds').attr("style", "").css("color", "#000000");
    $('.made_with_love_fixed_on_mug').attr("style", "").css("color", "#000000");
    $('.heart_fixed_on_mug').attr("style", "").css("color", "red");

    $('.selected_bible_verse_fixed_on_mug').textStroke(0.7,'#d5ad6d');
    $('.selected_bible_ref_fixed_on_mug').textStroke(0.5,'#d5ad6d');
    $('.rendered_customerName_in_modalName').textStroke(0.7,'#d5ad6d');
    $('.rendered_customerName_in_modalPictures').textStroke(0.7,'#d5ad6d');
    $('.rendered_customerName_in_modalBackgrounds').textStroke(0.7,'#d5ad6d');
    $('.made_with_love_fixed_on_mug').textStroke(0.5,'#d5ad6d');
    $('.heart_fixed_on_mug').textStroke(0.5,'#d5ad6d');
});
// END textStroke
}
// if url has a "l"
if ( $("#hidden_background_desired").text().indexOf('l') > -1 ) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.selected_bible_verse_fixed_on_mug').attr("style", "").css("color", "#000000");
    $('.selected_bible_ref_fixed_on_mug').attr("style", "").css("color", "#000000");
    $('.rendered_customerName_in_modalName').attr("style", "").css("color", "#000000");
    $('.rendered_customerName_in_modalPictures').attr("style", "").css("color", "#000000");
    $('.rendered_customerName_in_modalBackgrounds').attr("style", "").css("color", "#000000");
    $('.made_with_love_fixed_on_mug').attr("style", "").css("color", "#000000");
    $('.heart_fixed_on_mug').attr("style", "").css("color", "red");

    $('.selected_bible_verse_fixed_on_mug').textStroke(0.7,'#d5ad6d');
    $('.selected_bible_ref_fixed_on_mug').textStroke(0.5,'#d5ad6d');
    $('.rendered_customerName_in_modalName').textStroke(0.7,'#d5ad6d');
    $('.rendered_customerName_in_modalPictures').textStroke(0.7,'#d5ad6d');
    $('.rendered_customerName_in_modalBackgrounds').textStroke(0.7,'#d5ad6d');
    $('.made_with_love_fixed_on_mug').textStroke(0.5,'#d5ad6d');
    $('.heart_fixed_on_mug').textStroke(0.5,'#d5ad6d');
});
// END textStroke
}
}, 500);
});
////////////////////////////////////////////////////
////END swiper thumnails loop lighter gradients ///////////////////////
////////////////////////////////////////////////////
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.heart_fixed_on_mug').textStroke(0.1,'#000000');
});
// END textStroke




/* *************************** */
/* *************************** */
/* *************************** */
/* BEGIN Brought in from index_pages.js
/* *************************** */
/* *************************** */
/* *************************** */

      ////////////////////////////////////////////////////
      // BEGIN simple menu
      ////////////////////////////////////////////////////
$("#menu").on("click", function() {
        setTimeout(function() {
        if($('.menu_modal').is(':visible'))
 {
        $(".opacity_cover").hide();
        $(".menu_modal").hide("slow");
}
}, 100);
    setTimeout(function() {
      if(!$('.menu_modal').is(':visible'))
 {
    $(".opacity_cover").show();
    $(".menu_modal").show("slow");
}
}, 100);
});
      ////////////////////////////////////////////////////
      // END simple menu
      ////////////////////////////////////////////////////



/* *************************** */
/* *************************** */
/* *************************** */
/* END Brought in from index_pages.js
/* *************************** */
/* *************************** */
/* *************************** */

// BEGIN featured items now clickable
$('body').on( "click", "img.m", function(event) {
$(this).parent().parent().find(".sharing_sub_panel > .addYourName").trigger({
			type: "click",
			which: 1
		});
});
// END featured items now clickable


// BEGIN upon arrival, if no scripture is recorded
$(".CreateYourOwnDesign").on("click", function () {
if (($('#hidden_book_desired').text() == 'select') || ($('#hidden_chapter_desired').text() == '0') || ($('#hidden_verse_desired').text() == '0')) {
  $('#select_book').prop('selectedIndex',0);
  $('#select_chapter').prop('selectedIndex',0);
  $('#select_verse').prop('selectedIndex',0);
$(".no_book_nor_chapter_nor_verse_selection_yet").show();
}
});
// END upon arrival, if no scripture is recorded

// BEGIN if no picture is selected
$(".reviewOrderCheck").on("click", function () {
if (!$(this).hasClass('pictureHasBeenSelected-btn')) {
$(this).css('color', 'rgb(255, 87, 87)').text('no picture selected yet');
$('.you_need_to_click_on_a_picture').show();
}
});
// END if no picture is selected

/* END Document Ready ****** */
});
/* *************************** */
