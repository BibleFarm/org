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

setTimeout(function(){

	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug-above').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug-above').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug-above").textfill({maxFontPixels:2500});
	}
	function renderIn_modalReviewOrder() {
		$('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2500});
	}
renderIn_modalVerse();
renderIn_modalReviewOrder();

}, 100);
setTimeout(function(){

	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug-below').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug-below').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug-below").textfill({maxFontPixels:2500});
	}
	function renderIn_modalReviewOrder() {
		$('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2500});
	}
renderIn_modalVerse();
renderIn_modalReviewOrder();

}, 100);


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
    $('.stroked').textStroke(2,'black');
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

///////////////////////////////////////////
// BEGIN update above and below bible text as I type
///////////////////////////////////////////
$( ".above_bible_text" ).on( "keyup", function() {
var editedAboveBibleText = $(this).val();
      // fill the show_order_id div
      $('.selected_bible_verse_fixed_on_mug-above > span').text(editedAboveBibleText);
setTimeout(function(){
	function renderIn_modalVerseAbove() {
		$('.selected_bible_verse_fixed_on_mug-above').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug-above').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug-above").textfill({maxFontPixels:2500});
	}

renderIn_modalVerseAbove();
}, 3000);
});

$( ".below_bible_text" ).on( "keyup", function() {
var editedBelowBibleText = $(this).val();
      // fill the show_order_id div
      $('.selected_bible_verse_fixed_on_mug-below > span').text(editedBelowBibleText);
setTimeout(function(){
	function renderIn_modalVerseBelow() {
		$('.selected_bible_verse_fixed_on_mug-below').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug-below').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug-below").textfill({maxFontPixels:2500});
	}

renderIn_modalVerseBelow();
}, 3000);
});
///////////////////////////////////////////
// END update above and below bible text as I type
///////////////////////////////////////////








///////////////////////////////////////////
// BEGIN move up - down - left - right
///////////////////////////////////////////
$( ".movableDiv" ).on( "click", function() {
$(".movableDiv").removeClass("active");
$(this).addClass("active");
if ($(".movableDiv").hasClass("active")) {
$(document).keydown(function(e) {
    switch (e.which) {     case 37:
        $(".movableDiv.active").css('left', $(".movableDiv.active").offset().left - 1); break;  case 38:
        $(".movableDiv.active").css('top', $(".movableDiv.active").offset().top - 1); break;  case 39:
        $(".movableDiv.active").css('left', $(".movableDiv.active").offset().left + 1); break;  case 40:
        $(".movableDiv.active").css('top', $(".movableDiv.active").offset().top + 1); break;  } return false;
});
}
});
///////////////////////////////////////////
// END move up - down - left - right
///////////////////////////////////////////

///////////////////////////////////////
// BEGIN above_font_size
///////////////////////////////////////
setTimeout(function(){

var above_font_size = $(".selected_bible_verse_fixed_on_mug-above > span").css("font-size").toString().replace("px", "");
console.log(above_font_size);
var above_font_size_parseInt = parseInt(above_font_size);
console.log(above_font_size_parseInt);
  $(".above_font_size_icrease").click(function() {
    $(".selected_bible_verse_fixed_on_mug-above > span").css("font-size", above_font_size + 1 + "px");
    above_font_size++;
  });
  $(".above_font_size_decrease").click(function() {
    $(".selected_bible_verse_fixed_on_mug-above > span").css("font-size", above_font_size - 1 + "px");
    above_font_size--;
  });
}, 2000);
///////////////////////////////////////
// END above_font_size
///////////////////////////////////////

///////////////////////////////////////
// BEGIN below_font_size
///////////////////////////////////////
setTimeout(function(){

var below_font_size = $(".selected_bible_verse_fixed_on_mug-below > span").css("font-size").toString().replace("px", "");
console.log(below_font_size);
var below_font_size_parseInt = parseInt(below_font_size);
console.log(below_font_size_parseInt);
  $(".below_font_size_icrease").click(function() {
    $(".selected_bible_verse_fixed_on_mug-below > span").css("font-size", below_font_size + 1 + "px");
    below_font_size++;
  });
  $(".below_font_size_decrease").click(function() {
    $(".selected_bible_verse_fixed_on_mug-below > span").css("font-size", below_font_size - 1 + "px");
    below_font_size--;
  });
}, 2000);
///////////////////////////////////////
// END below_font_size
///////////////////////////////////////

///////////////////////////////////////
// BEGIN image_resize
///////////////////////////////////////
setTimeout(function(){

var image_resize_flexW = $(".customCSSforFlowers_flex_little_Left").css("min-width").toString().replace("px", "");
console.log(image_resize_flexW);
var image_resize_flexW_parseInt = parseInt(image_resize_flexW);
console.log(image_resize_flexW_parseInt);

var image_resize_itemW = $(".customCSSforFlowers_item_little_Left").css("min-width").toString().replace("px", "");
console.log(image_resize_itemW);
var image_resize_itemW_parseInt = parseInt(image_resize_itemW);
console.log(image_resize_itemW_parseInt);

var image_resize_flexH = $(".customCSSforFlowers_flex_little_Left").css("min-height").toString().replace("px", "");
console.log(image_resize_flexH);
var image_resize_flexH_parseInt = parseInt(image_resize_flexH);
console.log(image_resize_flexH_parseInt);

var image_resize_itemH = $(".customCSSforFlowers_item_little_Left").css("min-height").toString().replace("px", "");
console.log(image_resize_itemH);
var image_resize_itemH_parseInt = parseInt(image_resize_itemH);
console.log(image_resize_itemH_parseInt);

  $(".image_resize_icrease").click(function() {
    $(".customCSSforFlowers_flex_little_Left").css("min-width", image_resize_flexW + 100 + "px");
    image_resize_flexW+=100;
    $(".customCSSforFlowers_item_little_Left").css("min-width", image_resize_itemW + 100 + "px");
    image_resize_itemW+=100;
  });
  $(".image_resize_decrease").click(function() {
    $(".customCSSforFlowers_flex_little_Left").css("min-width", image_resize_flexW - 100 + "px");
    image_resize_flexW-=100;
    $(".customCSSforFlowers_item_little_Left").css("min-width", image_resize_itemW - 100 + "px");
    image_resize_itemW-=100;
  });
  
  $(".image_resize_icrease").click(function() {
    $(".customCSSforFlowers_flex_little_Left").css("min-height", image_resize_flexH + 100 + "px");
    image_resize_flexH+=100;
    $(".customCSSforFlowers_item_little_Left").css("min-height", image_resize_itemH + 100 + "px");
    image_resize_itemH+=100;
  });
  $(".image_resize_decrease").click(function() {
    $(".customCSSforFlowers_flex_little_Left").css("min-height", image_resize_flexH - 100 + "px");
    image_resize_flexH-=100;
    $(".customCSSforFlowers_item_little_Left").css("min-height", image_resize_itemH - 100 + "px");
    image_resize_itemH-=100;
  });
  
}, 2000);
///////////////////////////////////////
// END image_resize
///////////////////////////////////////


// show UI
$( ".show_UI" ).on( "click", function() {
$(".above_font_size_icrease, .above_font_size_decrease, .below_font_size_icrease, .below_font_size_decrease, .above_bible_text, .below_bible_text, .margins").show();
});
// hide UI
$( ".hide_UI" ).on( "click", function() {
$(".above_font_size_icrease, .above_font_size_decrease, .below_font_size_icrease, .below_font_size_decrease, .above_bible_text, .below_bible_text, .margins").hide();
$(".movableDiv").css("background", "none").removeClass("active");
});

///////////////////////////////////////
// BEGIN populate & create JS for node
///////////////////////////////////////
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

		////////////////////////////////////
		// BEGIN node JS file 01_10 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_01_10').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_01_10').val(idNeeded + '_01_10');
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run these 10 images for this verse\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_01 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_01
		var DOM_modified_for_AD_01 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_5000x5000.js', '')
		.replace(/\'/g, "\\\'");
		// now proceed to build the code
		var commentBeginAD_01 = "// BEGIN AD_01\n";
		var commentEndAD_01 = "\n// END AD_01\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-AD_01-" + "S-115";
		var lets_add_the_rest_for_AD_01 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 7632, height: 7632}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/RedBubble_Square/Pages/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/RedBubble_Square/Images/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_01 = (commentBeginAD_01 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_01 + lets_add_the_rest_for_AD_01 + commentEndAD_01).replace("</script>\n", "</script>");
		// AD_01 END

		// fill textarea with complete code to render all ads
		$('#fcontent_01_10').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_01
		);
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


		    var create = document.getElementById('create_01_10');
		    var fileContent = document.getElementById("fcontent_01_10");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_01_10").value;
		        document.getElementById("downloadlink_01_10").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_01_10');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file 01_10 ///////
		////////////////////////////////////

///////////////////////////////////////
// END populate & create JS for node
///////////////////////////////////////

///////////////////////////////////////
// BEGIN doneEditing button
///////////////////////////////////////
$( ".doneEditing" ).on( "click", function() {
// cleanup
$(".design_ui").hide();
$(".movableDiv").css("background", "none").removeClass("active");
console.log("cleaning up");
// wrap the wrapper_to_move_flowers with a tag link, so I can click on it to download
$(".wrapper_to_move_flowers").wrap( "<a download='info.js' id='downloadlink_01_10'></a>" );
console.log("wrap the wrapper_to_move_flowers with a tag link, so I can click on it to download");
// populate
setTimeout(function(){
$("#populate_01_10").trigger({
			type: "click",
			which: 1
		});
console.log("populating");
}, 2000);
// create JS file
setTimeout(function(){
$("#create_01_10").trigger({
			type: "click",
			which: 1
		});
console.log("creating JS file");
}, 4000);
});
///////////////////////////////////////
// END doneEditing button
///////////////////////////////////////
