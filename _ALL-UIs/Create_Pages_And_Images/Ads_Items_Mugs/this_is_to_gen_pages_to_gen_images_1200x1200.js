$(document).ready(function (){
	
/*
//Get first five words of of the verse
function getWords(string){
    return string.split(/\s+/).slice(0,5).join(" ");
}

//provide string for getWords function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first 5 words back to the DOM
$('<span>' + getWords(str) + '...' + '</span>').appendTo('.top_verse');
*/	

// get the first phrase up to any of these: , ; : . ? ! ( )

function getFirstPhrase(string){

return string.split(/[.\,\;\:\.\?\!\(]/).slice(0,1);

}

//provide string for getFirstPhrase function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first phrase back to the DOM
$('<span>' + getFirstPhrase(str) + '… </span>').appendTo('.top_verse');

// setTimeout(function(){

	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug").textfill({maxFontPixels:2000});
	}
	function renderIn_modalReviewOrder() {
		$('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2000});
	}
renderIn_modalVerse();
renderIn_modalReviewOrder();

// }, 50);


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
    $('.red').textStroke(1,'black');
    $('.shop > span').textStroke(4,'black');
    $('.ad_intro, .ad_description, .ad_big_message_1, .ad_big_message_2, .ad_big_message_3, .shop').textStroke(4,'black');
})
// END textStroke


/*
    var len = $('span').text().length;    
    if(len > 60){
        $('.verse').addClass("justify");
console.log("JUSTIFIED // because // character count is: " + len);
    }
else {
console.log("NOT JUSTIFIED // because // character count is: " + len);
}
*/

// custom CSS for biblical or flowers displayed in other modals
var IsItBiblical = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItBiblical.indexOf("B") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItFlowers = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItFlowers.indexOf("F") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItScenery = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItScenery.indexOf("S") > -1) {
      console.log("it's not a flower. Removing custom classes for flowers");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').removeClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_item_little_Left');
      console.log("it's not a flower. Adding custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforScenery_item_little_Left');
 }

});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

$(document).ready(function (){
// BEGIN Order ID
$('#order_id').on('keyup', function() {
var idNeeded = $(this).val();
$('#show_order_id').text(idNeeded);
$('#fname').val(idNeeded);
});
// BEGIN Render the CUSTOMER_NAME_table-cell
$( "#customize_name" ).on( "focus click", function() {
	function renderIn_modalName() {
		$('.CUSTOMER_NAME_table-cell').html(
			'<span>' + $('#customize_name').val() + '</span>'
		);
		$('.CUSTOMER_NAME_table-cell').textfill({
			maxFontPixels: 2500
		});
	}
	$('#customize_name').keyup(renderIn_modalName);
	renderIn_modalName();
});
// END Render the CUSTOMER_NAME_table-cell

// BEGIN Render the CUSTOMER_FLOWER_table-cell
$( "#customize_flower" ).on( "focus click", function() {
	function renderIn_modalFlower() {
		$('.CUSTOMER_FLOWER_table-cell').html(
			'<img class="CUSTOMER_FLOWER_img" width="" height="" src="../p-original-size/' + $('#customize_flower').val() + '.png" alt="" />'
		);
	}
	$('#customize_flower').keyup(renderIn_modalFlower);
	renderIn_modalFlower();
});
// END Render the CUSTOMER_FLOWER_table-cell

// BEGIN Render the CUSTOMER_VERSE_table-cell
$( "#customize_verse" ).on( "focus click", function() {
	function renderIn_modalVerse() {
		$('.CUSTOMER_VERSE_table-cell').html(
			'<span>' + $('#customize_verse').val() + '</span>'
		);
		$('.CUSTOMER_VERSE_table-cell').textfill({
			maxFontPixels: 2000
		});
	}
	$('#customize_verse').keyup(renderIn_modalVerse);
	renderIn_modalVerse();
});
// END Render the CUSTOMER_VERSE_table-cell

// BEGIN Render the CUSTOMER_REF_table-cell
$( "#customize_ref" ).on( "keyup change", function() {
	function renderIn_modalRef() {
		$('.CUSTOMER_REF_table-cell').html(
			'<span>' + $('#customize_ref').val() + '</span>'
		);
	}
	$('#customize_ref').keyup(renderIn_modalRef);
	renderIn_modalRef();
});
// END Render the CUSTOMER_REF_table-cell

// BEGIN Render the CUSTOMER_BACKGROUND
$( "#customize_bg" ).on( "focus click", function() {
	function renderTheBackground() {
	/*
	// commented out until I decide to use backgrounds

		$('.CUSTOMER_BACKGROUND').html(
			'<img id="bg" class="" width="2717" height="1146" src="../bg-bleed/' + $('#customize_bg').val() + '.png" alt="" />'
		);
	*/
	}
	$('#customize_bg').keyup(renderTheBackground);
	renderTheBackground();
});
	// in the meantime, we do not have a background
	$( "#bg" ).css('display', 'none');

// END Render the CUSTOMER_BACKGROUND

// BEGIN red heart stroke
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
    $('.heart').textStroke(1,'#000000');
});
// END textStroke
// END red heart stroke









/*
	// BEGIN and change font colors & shadows accordingly
	$( "#customize_bg" ).on( "keyup", function() {
// if url has a "D"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/D') > -1) {
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
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#d5ad6d");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#000000');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#000000');
});
// END textStroke
}
// if url has a "d"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/d') > -1) {
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
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#d5ad6d");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#000000');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#000000');
});
// END textStroke
}
// if url has a "L"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/L') > -1) {
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
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#000000");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#000000");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#d5ad6d');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#d5ad6d');
});
// END textStroke
}
// if url has a "l"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/l') > -1) {
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
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#000000");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#000000");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#d5ad6d');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#d5ad6d');
});
// END textStroke
}
});
	// END and change font colors & shadows accordingly
*/
// BEGIN button to remove guidelines
$( "#removeGuidelines" ).on( "click", function() {
	$( ".CustomCat11ozMugTemplate, .MugMockupL, .MugMockupR" ).toggle('slow');
});
// END button to remove guidelines

    $('#SaveHTMLpage').click(function(){
var order_id = $('#order_id').val();
      // fill the show_order_id div
      $('#show_order_id').text(order_id);

        // Save the page's HTML to a file that is automatically downloaded.

        // We make a Blob that contains the data to download.
        var file = new window.Blob([document.documentElement.innerHTML], { type: "text/html" });
        var URL = window.webkitURL || window.URL;

        // This is the URL that will download the data.
        var downloadUrl = URL.createObjectURL(file);

        var a = document.createElement("a");
        // This sets the file name.
        a.download = order_id + ".html";
        a.href = downloadUrl;

        // Actually perform the download.
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });


// fill the input that will contain the content of the js file to create
$('#order_id').on('keyup', function() {
var idNeeded = $(this).val();
$('#fname').val(idNeeded);
$('#fcontent').val("const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 2717, height: 1146}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/CUSTOM_CAT_RENDER_HERE/" + idNeeded + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/CUSTOM_CAT_RENDER_HERE/" + idNeeded + ".png' }); await browser.close(); })();");
});


// BEGIN save js file to later run puppeteer
(function() {
    var textFile = null,
        makeTextFile = function(js) {
            var data = new Blob([js], {
                type: 'text/javascript'
            });

            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };


    var create = document.getElementById('create');
    var fileContent = document.getElementById("fcontent");

    create.addEventListener('click', function() {
        const fileName = document.getElementById("fname").value;
        document.getElementById("downloadlink").setAttribute("download", fileName);
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(fileContent.value);
        link.style.display = 'block';
    }, false);
})();



///////////////////////////////////
/*
const puppeteer = require('/home/demo/node_modules/puppeteer');
(async () => {
const browser = await puppeteer.launch({      defaultViewport: {width: 2717, height: 1146}  });
const page = await browser.newPage();
// BEGIN paste here:
await page.goto('file:///media/demo/ALL-DATA/Github/shop/CUSTOM_CAT_DESIGN_HERE/CustomCat_Complete_11oz_Mug_ArtTemplate_Working.html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/shop/CUSTOM_CAT_RENDER_HERE/Lorenzo.png' });
// END paste here:
await browser.close();
})();
*/
////////////////////////////////////


////////////////////////////////////
// BEGIN move flower up/down ///////
////////////////////////////////////
$('#moveFlowerUpDown').on('change', function() {
var moveThisMuch = $(this).val();
$('.wrap_container_showing_selected_picture_little_Left').css('top', moveThisMuch);
});
////////////////////////////////////
// EBD move flower up/down ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN increase font size ///////
////////////////////////////////////
$('#increaseFontSize').on('change', function() {
var increaseThisMuch = $(this).val();
$('.selected_bible_verse_fixed_on_mug > span').css('font-size', increaseThisMuch + 'px');
});
////////////////////////////////////
// EBD increase font size ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN decrease line height ///////
////////////////////////////////////
$('#decreaseLineHeight').on('change', function() {
var decreaseThisMuch = $(this).val();
$('.selected_bible_verse_fixed_on_mug > span').css('line-height', decreaseThisMuch + 'px');
});
////////////////////////////////////
// EBD decrease line height ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN automatically select current font-size & line-height in select boxes ///////
////////////////////////////////////
$(document).on("focusin",".DesignCustomerOrdersUI_select_increaseFontSize",function(){
var fontSizeNeededForSelectIncreaseFontSize = $(".selected_bible_verse_fixed_on_mug > span").css('font-size').replace('px', '');
console.log("Current font-size is: " + fontSizeNeededForSelectIncreaseFontSize);
$('#increaseFontSize').val(fontSizeNeededForSelectIncreaseFontSize);
$('#increaseFontSize').change();
$('#decreaseLineHeight').val(fontSizeNeededForSelectIncreaseFontSize);
$('#decreaseLineHeight').change();
});
////////////////////////////////////
// END automatically select current font-size & line-height in select boxes ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN move ref sideways ///////
////////////////////////////////////
$('#moveRefSideways').on('change', function() {
var moveThisMuch = $(this).val();
$('.bot_left').css('left', moveThisMuch + 'px');
});
////////////////////////////////////
// END move ref sideways ///////
////////////////////////////////////




///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//BEGIN integrate select book chapter verse and bring it in with ajax lie the website does/////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

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
var completeVerseURLtoGrab = ('../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
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
$('.populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
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
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
  $(".step1_next_step2").css("background", "#292a00").show();
  $(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
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
$('.populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
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
var completeVerseURLtoGrab = ('../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
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
$('.populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
$('.populated_ref_with_ajax_in_modalReviewOrder').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
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
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//END integrate select book chapter verse and bring it in with ajax lie the website does/////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//////////
// focus on Order ID upon landing
$(".DesignCustomerOrdersUI_imput_ORDER").focus();
//////////








});
