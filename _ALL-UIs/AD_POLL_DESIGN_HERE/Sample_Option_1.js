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
		$('.ad_intro, .ad_description, .ad_big_message_2, .ad_big_message_3, .shop').textStroke(4,'black');
		$('.ad_big_message_1').textStroke(5,'black');
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
$('#fname_opt_1').val(idNeeded + '_opt_1');
});
// BEGIN Render the CUSTOMER_NAME_table-cell
$( "#customize_name" ).on( "focus click", function() {
	function renderIn_modalName() {
		$('.name').html(
			'<span>' + $('#customize_name').val() + '</span>'
		);
		$('.name').textfill({
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
		$('.wrap_container_showing_selected_picture_little_Left').html(
			'<img class="container_showing_selected_picture_little_Left customCSSforFlowers_item_little_Left" width="" height="" src="../../p-original-size/' + $('#customize_flower').val() + '.png" alt="" />'
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




		////////////////////////////////////
		// BEGIN node JS file opt_1 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_opt_1').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_opt_1').val(idNeeded + '_opt_1');
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
		.replace('../Sample_Option_1.js', '')
		.replace('bgc-0003', 'bgc-0015')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "so I asked him")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 230px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-115.png');
		// now proceed to build the code
		var commentBeginAD_01 = "// BEGIN AD_01\n";
		var commentEndAD_01 = "\n// END AD_01\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-Option-1";
		var lets_add_the_rest_for_AD_01 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/AD_POLL_DESIGN_HERE/AD_POLL_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/AD_POLL_RENDER_HERE/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_01 = (commentBeginAD_01 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_01 + lets_add_the_rest_for_AD_01 + commentEndAD_01).replace("</script>\n", "</script>");
		// AD_01 END

		// fill textarea with complete code to render all ads
		$('#fcontent_opt_1').val(
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


		    var create = document.getElementById('create_opt_1');
		    var fileContent = document.getElementById("fcontent_opt_1");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_opt_1").value;
		        document.getElementById("downloadlink_opt_1").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_opt_1');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file opt_1 ///////
		////////////////////////////////////
		////////////////////////////////////
		// BEGIN node JS file 11_20 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_11_20').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_11_20').val(idNeeded + '_11_20');
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run these 10 images for this verse\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_11 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_11
		var DOM_modified_for_AD_11 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "so I asked him")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 230px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-107.png');
		// now proceed to build the code
		var commentBeginAD_11 = "// BEGIN AD_11\n";
		var commentEndAD_11 = "\n// END AD_11\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-AD_11-" + "S-107";
		var lets_add_the_rest_for_AD_11 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_11 = (commentBeginAD_11 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_11 + lets_add_the_rest_for_AD_11 + commentEndAD_11).replace("</script>\n", "</script>");
		// AD_11 END
		// AD_12 BEGIN
		// Targeting Women with: I'd like him to... believe this verse every day
		// So, let's modify the DOM for AD_12
		var DOM_modified_for_AD_12 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0006')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "I'd like him to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 245px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-107.png');
		// now proceed to build the code
		var commentBeginAD_12 = "// BEGIN AD_12\n";
		var commentEndAD_12 = "\n// END AD_12\n\n";
		var HtmlFileName_02 = $('#order_id').val() + "-AD_12-" + "S-107";
		var lets_add_the_rest_for_AD_12 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_02 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_02 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_02 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_02 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_12 = (commentBeginAD_12 + beforeHtmlFileName + HtmlFileName_02 + afterHtmlFileName + DOM_modified_for_AD_12 + lets_add_the_rest_for_AD_12 + commentEndAD_12).replace("</script>\n", "</script>");
		// AD_12 END
		// AD_13 BEGIN
		// Targeting Women with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_13
		var DOM_modified_for_AD_13 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0014')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-081.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_13 = "// BEGIN AD_13\n";
		var commentEndAD_13 = "\n// END AD_13\n\n";
		var HtmlFileName_03 = $('#order_id').val() + "-AD_13-" + "F-081";
		var lets_add_the_rest_for_AD_13 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_03 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_03 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_03 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_03 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_13 = (commentBeginAD_13 + beforeHtmlFileName + HtmlFileName_03 + afterHtmlFileName + DOM_modified_for_AD_13 + lets_add_the_rest_for_AD_13 + commentEndAD_13).replace("</script>\n", "</script>");
		// AD_13 END
		// AD_14 BEGIN
		// Targeting Women with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_14
		var DOM_modified_for_AD_14 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0015')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-081.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_14 = "// BEGIN AD_14\n";
		var commentEndAD_14 = "\n// END AD_14\n\n";
		var HtmlFileName_04 = $('#order_id').val() + "-AD_14-" + "F-081";
		var lets_add_the_rest_for_AD_14 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_04 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_04 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_04 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_04 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_14 = (commentBeginAD_14 + beforeHtmlFileName + HtmlFileName_04 + afterHtmlFileName + DOM_modified_for_AD_14 + lets_add_the_rest_for_AD_14 + commentEndAD_14).replace("</script>\n", "</script>");
		// AD_14 END
		// AD_15 BEGIN
		// Targeting Women with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_15
		var DOM_modified_for_AD_15 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0016')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-081.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_15 = "// BEGIN AD_15\n";
		var commentEndAD_15 = "\n// END AD_15\n\n";
		var HtmlFileName_05 = $('#order_id').val() + "-AD_15-" + "F-081";
		var lets_add_the_rest_for_AD_15 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_05 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_05 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_05 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_05 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_15 = (commentBeginAD_15 + beforeHtmlFileName + HtmlFileName_05 + afterHtmlFileName + DOM_modified_for_AD_15 + lets_add_the_rest_for_AD_15 + commentEndAD_15).replace("</script>\n", "</script>");
		// AD_15 END
		// AD_16 BEGIN
		// Targeting Men with: so I asked her... What's your favorite verse?
		// So, let's modify the DOM for AD_16
		var DOM_modified_for_AD_16 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "so I asked her")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 240px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-081.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_16 = "// BEGIN AD_16\n";
		var commentEndAD_16 = "\n// END AD_16\n\n";
		var HtmlFileName_06 = $('#order_id').val() + "-AD_16-" + "F-081";
		var lets_add_the_rest_for_AD_16 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_06 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_06 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_06 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_06 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_16 = (commentBeginAD_16 + beforeHtmlFileName + HtmlFileName_06 + afterHtmlFileName + DOM_modified_for_AD_16 + lets_add_the_rest_for_AD_16 + commentEndAD_16).replace("</script>\n", "</script>");
		// AD_16 END
		// AD_17 BEGIN
		// Targeting Men with: I'd like her to... believe this verse every day
		// So, let's modify the DOM for AD_17
		var DOM_modified_for_AD_17 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "I'd like her to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 257px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-081.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_17 = "// BEGIN AD_17\n";
		var commentEndAD_17 = "\n// END AD_17\n\n";
		var HtmlFileName_07 = $('#order_id').val() + "-AD_17-" + "F-081";
		var lets_add_the_rest_for_AD_17 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_07 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_07 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_07 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_07 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_17 = (commentBeginAD_17 + beforeHtmlFileName + HtmlFileName_07 + afterHtmlFileName + DOM_modified_for_AD_17 + lets_add_the_rest_for_AD_17 + commentEndAD_17).replace("</script>\n", "</script>");
		// AD_17 END
		// AD_18 BEGIN
		// Targeting Men with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_18
		var DOM_modified_for_AD_18 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0009')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-107.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_18 = "// BEGIN AD_18\n";
		var commentEndAD_18 = "\n// END AD_18\n\n";
		var HtmlFileName_08 = $('#order_id').val() + "-AD_18-" + "S-107";
		var lets_add_the_rest_for_AD_18 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_08 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_08 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_08 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_08 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_18 = (commentBeginAD_18 + beforeHtmlFileName + HtmlFileName_08 + afterHtmlFileName + DOM_modified_for_AD_18 + lets_add_the_rest_for_AD_18 + commentEndAD_18).replace("</script>\n", "</script>");
		// AD_18 END
		// AD_19 BEGIN
		// Targeting Men with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_19
		var DOM_modified_for_AD_19 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0011')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-107.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_19 = "// BEGIN AD_19\n";
		var commentEndAD_19 = "\n// END AD_19\n\n";
		var HtmlFileName_09 = $('#order_id').val() + "-AD_19-" + "S-107";
		var lets_add_the_rest_for_AD_19 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_09 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_09 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_09 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_09 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_19 = (commentBeginAD_19 + beforeHtmlFileName + HtmlFileName_09 + afterHtmlFileName + DOM_modified_for_AD_19 + lets_add_the_rest_for_AD_19 + commentEndAD_19).replace("</script>\n", "</script>");
		// AD_19 END
		// AD_20 BEGIN
		// Targeting Men with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_20
		var DOM_modified_for_AD_20 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-107.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_20 = "// BEGIN AD_20\n";
		var commentEndAD_20 = "\n// END AD_20\n\n";
		var HtmlFileName_10 = $('#order_id').val() + "-AD_20-" + "S-107";
		var lets_add_the_rest_for_AD_20 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_10 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_10 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_10 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_10 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_20 = (commentBeginAD_20 + beforeHtmlFileName + HtmlFileName_10 + afterHtmlFileName + DOM_modified_for_AD_20 + lets_add_the_rest_for_AD_20 + commentEndAD_20).replace("</script>\n", "</script>");
		// AD_20 END


		// fill textarea with complete code to render all ads
		$('#fcontent_11_20').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_11 +
		finishedWithAD_12 +
		finishedWithAD_13 +
		finishedWithAD_14 +
		finishedWithAD_15 +
		finishedWithAD_16 +
		finishedWithAD_17 +
		finishedWithAD_18 +
		finishedWithAD_19 +
		finishedWithAD_20
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


		    var create = document.getElementById('create_11_20');
		    var fileContent = document.getElementById("fcontent_11_20");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_11_20").value;
		        document.getElementById("downloadlink_11_20").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_11_20');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file 11_20 ///////
		////////////////////////////////////
		////////////////////////////////////
		// BEGIN node JS file 21_30 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_21_30').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_21_30').val(idNeeded + '_21_30');
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run these 10 images for this verse\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_21 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_21
		var DOM_modified_for_AD_21 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "so I asked him")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 230px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-100.png');
		// now proceed to build the code
		var commentBeginAD_21 = "// BEGIN AD_21\n";
		var commentEndAD_21 = "\n// END AD_21\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-AD_21-" + "S-100";
		var lets_add_the_rest_for_AD_21 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_21 = (commentBeginAD_21 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_21 + lets_add_the_rest_for_AD_21 + commentEndAD_21).replace("</script>\n", "</script>");
		// AD_21 END
		// AD_22 BEGIN
		// Targeting Women with: I'd like him to... believe this verse every day
		// So, let's modify the DOM for AD_22
		var DOM_modified_for_AD_22 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0006')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "I'd like him to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 245px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-100.png');
		// now proceed to build the code
		var commentBeginAD_22 = "// BEGIN AD_22\n";
		var commentEndAD_22 = "\n// END AD_22\n\n";
		var HtmlFileName_02 = $('#order_id').val() + "-AD_22-" + "S-100";
		var lets_add_the_rest_for_AD_22 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_02 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_02 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_02 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_02 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_22 = (commentBeginAD_22 + beforeHtmlFileName + HtmlFileName_02 + afterHtmlFileName + DOM_modified_for_AD_22 + lets_add_the_rest_for_AD_22 + commentEndAD_22).replace("</script>\n", "</script>");
		// AD_22 END
		// AD_23 BEGIN
		// Targeting Women with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_23
		var DOM_modified_for_AD_23 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0014')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-139.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_23 = "// BEGIN AD_23\n";
		var commentEndAD_23 = "\n// END AD_23\n\n";
		var HtmlFileName_03 = $('#order_id').val() + "-AD_23-" + "F-139";
		var lets_add_the_rest_for_AD_23 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_03 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_03 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_03 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_03 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_23 = (commentBeginAD_23 + beforeHtmlFileName + HtmlFileName_03 + afterHtmlFileName + DOM_modified_for_AD_23 + lets_add_the_rest_for_AD_23 + commentEndAD_23).replace("</script>\n", "</script>");
		// AD_23 END
		// AD_24 BEGIN
		// Targeting Women with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_24
		var DOM_modified_for_AD_24 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0015')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-139.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_24 = "// BEGIN AD_24\n";
		var commentEndAD_24 = "\n// END AD_24\n\n";
		var HtmlFileName_04 = $('#order_id').val() + "-AD_24-" + "F-139";
		var lets_add_the_rest_for_AD_24 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_04 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_04 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_04 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_04 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_24 = (commentBeginAD_24 + beforeHtmlFileName + HtmlFileName_04 + afterHtmlFileName + DOM_modified_for_AD_24 + lets_add_the_rest_for_AD_24 + commentEndAD_24).replace("</script>\n", "</script>");
		// AD_24 END
		// AD_25 BEGIN
		// Targeting Women with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_25
		var DOM_modified_for_AD_25 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0016')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-139.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_25 = "// BEGIN AD_25\n";
		var commentEndAD_25 = "\n// END AD_25\n\n";
		var HtmlFileName_05 = $('#order_id').val() + "-AD_25-" + "F-139";
		var lets_add_the_rest_for_AD_25 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_05 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_05 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_05 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_05 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_25 = (commentBeginAD_25 + beforeHtmlFileName + HtmlFileName_05 + afterHtmlFileName + DOM_modified_for_AD_25 + lets_add_the_rest_for_AD_25 + commentEndAD_25).replace("</script>\n", "</script>");
		// AD_25 END
		// AD_26 BEGIN
		// Targeting Men with: so I asked her... What's your favorite verse?
		// So, let's modify the DOM for AD_26
		var DOM_modified_for_AD_26 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "so I asked her")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 240px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-139.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_26 = "// BEGIN AD_26\n";
		var commentEndAD_26 = "\n// END AD_26\n\n";
		var HtmlFileName_06 = $('#order_id').val() + "-AD_26-" + "F-139";
		var lets_add_the_rest_for_AD_26 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_06 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_06 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_06 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_06 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_26 = (commentBeginAD_26 + beforeHtmlFileName + HtmlFileName_06 + afterHtmlFileName + DOM_modified_for_AD_26 + lets_add_the_rest_for_AD_26 + commentEndAD_26).replace("</script>\n", "</script>");
		// AD_26 END
		// AD_27 BEGIN
		// Targeting Men with: I'd like her to... believe this verse every day
		// So, let's modify the DOM for AD_27
		var DOM_modified_for_AD_27 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "I'd like her to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 257px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-139.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_27 = "// BEGIN AD_27\n";
		var commentEndAD_27 = "\n// END AD_27\n\n";
		var HtmlFileName_07 = $('#order_id').val() + "-AD_27-" + "F-139";
		var lets_add_the_rest_for_AD_27 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_07 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_07 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_07 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_07 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_27 = (commentBeginAD_27 + beforeHtmlFileName + HtmlFileName_07 + afterHtmlFileName + DOM_modified_for_AD_27 + lets_add_the_rest_for_AD_27 + commentEndAD_27).replace("</script>\n", "</script>");
		// AD_27 END
		// AD_28 BEGIN
		// Targeting Men with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_28
		var DOM_modified_for_AD_28 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0009')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-100.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_28 = "// BEGIN AD_28\n";
		var commentEndAD_28 = "\n// END AD_28\n\n";
		var HtmlFileName_08 = $('#order_id').val() + "-AD_28-" + "S-100";
		var lets_add_the_rest_for_AD_28 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_08 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_08 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_08 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_08 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_28 = (commentBeginAD_28 + beforeHtmlFileName + HtmlFileName_08 + afterHtmlFileName + DOM_modified_for_AD_28 + lets_add_the_rest_for_AD_28 + commentEndAD_28).replace("</script>\n", "</script>");
		// AD_28 END
		// AD_29 BEGIN
		// Targeting Men with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_29
		var DOM_modified_for_AD_29 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0011')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-100.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_29 = "// BEGIN AD_29\n";
		var commentEndAD_29 = "\n// END AD_29\n\n";
		var HtmlFileName_09 = $('#order_id').val() + "-AD_29-" + "S-100";
		var lets_add_the_rest_for_AD_29 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_09 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_09 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_09 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_09 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_29 = (commentBeginAD_29 + beforeHtmlFileName + HtmlFileName_09 + afterHtmlFileName + DOM_modified_for_AD_29 + lets_add_the_rest_for_AD_29 + commentEndAD_29).replace("</script>\n", "</script>");
		// AD_29 END
		// AD_30 BEGIN
		// Targeting Men with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_30
		var DOM_modified_for_AD_30 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-100.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_30 = "// BEGIN AD_30\n";
		var commentEndAD_30 = "\n// END AD_30\n\n";
		var HtmlFileName_10 = $('#order_id').val() + "-AD_30-" + "S-100";
		var lets_add_the_rest_for_AD_30 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_10 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_10 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_10 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_10 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_30 = (commentBeginAD_30 + beforeHtmlFileName + HtmlFileName_10 + afterHtmlFileName + DOM_modified_for_AD_30 + lets_add_the_rest_for_AD_30 + commentEndAD_30).replace("</script>\n", "</script>");
		// AD_30 END


		// fill textarea with complete code to render all ads
		$('#fcontent_21_30').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_21 +
		finishedWithAD_22 +
		finishedWithAD_23 +
		finishedWithAD_24 +
		finishedWithAD_25 +
		finishedWithAD_26 +
		finishedWithAD_27 +
		finishedWithAD_28 +
		finishedWithAD_29 +
		finishedWithAD_30
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


		    var create = document.getElementById('create_21_30');
		    var fileContent = document.getElementById("fcontent_21_30");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_21_30").value;
		        document.getElementById("downloadlink_21_30").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_21_30');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file 21_30 ///////
		////////////////////////////////////
		////////////////////////////////////
		// BEGIN node JS file 31_40 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_31_40').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_31_40').val(idNeeded + '_31_40');
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run these 10 images for this verse\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_31 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_31
		var DOM_modified_for_AD_31 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "so I asked him")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 230px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-021.png');
		// now proceed to build the code
		var commentBeginAD_31 = "// BEGIN AD_31\n";
		var commentEndAD_31 = "\n// END AD_31\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-AD_31-" + "S-021";
		var lets_add_the_rest_for_AD_31 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_31 = (commentBeginAD_31 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_31 + lets_add_the_rest_for_AD_31 + commentEndAD_31).replace("</script>\n", "</script>");
		// AD_31 END
		// AD_32 BEGIN
		// Targeting Women with: I'd like him to... believe this verse every day
		// So, let's modify the DOM for AD_32
		var DOM_modified_for_AD_32 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0006')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "I'd like him to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 245px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-021.png');
		// now proceed to build the code
		var commentBeginAD_32 = "// BEGIN AD_32\n";
		var commentEndAD_32 = "\n// END AD_32\n\n";
		var HtmlFileName_02 = $('#order_id').val() + "-AD_32-" + "S-021";
		var lets_add_the_rest_for_AD_32 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_02 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_02 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_02 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_02 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_32 = (commentBeginAD_32 + beforeHtmlFileName + HtmlFileName_02 + afterHtmlFileName + DOM_modified_for_AD_32 + lets_add_the_rest_for_AD_32 + commentEndAD_32).replace("</script>\n", "</script>");
		// AD_32 END
		// AD_33 BEGIN
		// Targeting Women with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_33
		var DOM_modified_for_AD_33 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0014')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-141.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_33 = "// BEGIN AD_33\n";
		var commentEndAD_33 = "\n// END AD_33\n\n";
		var HtmlFileName_03 = $('#order_id').val() + "-AD_33-" + "F-141";
		var lets_add_the_rest_for_AD_33 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_03 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_03 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_03 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_03 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_33 = (commentBeginAD_33 + beforeHtmlFileName + HtmlFileName_03 + afterHtmlFileName + DOM_modified_for_AD_33 + lets_add_the_rest_for_AD_33 + commentEndAD_33).replace("</script>\n", "</script>");
		// AD_33 END
		// AD_34 BEGIN
		// Targeting Women with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_34
		var DOM_modified_for_AD_34 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0015')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-141.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_34 = "// BEGIN AD_34\n";
		var commentEndAD_34 = "\n// END AD_34\n\n";
		var HtmlFileName_04 = $('#order_id').val() + "-AD_34-" + "F-141";
		var lets_add_the_rest_for_AD_34 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_04 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_04 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_04 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_04 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_34 = (commentBeginAD_34 + beforeHtmlFileName + HtmlFileName_04 + afterHtmlFileName + DOM_modified_for_AD_34 + lets_add_the_rest_for_AD_34 + commentEndAD_34).replace("</script>\n", "</script>");
		// AD_34 END
		// AD_35 BEGIN
		// Targeting Women with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_35
		var DOM_modified_for_AD_35 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0016')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-141.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_35 = "// BEGIN AD_35\n";
		var commentEndAD_35 = "\n// END AD_35\n\n";
		var HtmlFileName_05 = $('#order_id').val() + "-AD_35-" + "F-141";
		var lets_add_the_rest_for_AD_35 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_05 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_05 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_05 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_05 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_35 = (commentBeginAD_35 + beforeHtmlFileName + HtmlFileName_05 + afterHtmlFileName + DOM_modified_for_AD_35 + lets_add_the_rest_for_AD_35 + commentEndAD_35).replace("</script>\n", "</script>");
		// AD_35 END
		// AD_36 BEGIN
		// Targeting Men with: so I asked her... What's your favorite verse?
		// So, let's modify the DOM for AD_36
		var DOM_modified_for_AD_36 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "so I asked her")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 240px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-141.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_36 = "// BEGIN AD_36\n";
		var commentEndAD_36 = "\n// END AD_36\n\n";
		var HtmlFileName_06 = $('#order_id').val() + "-AD_36-" + "F-141";
		var lets_add_the_rest_for_AD_36 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_06 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_06 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_06 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_06 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_36 = (commentBeginAD_36 + beforeHtmlFileName + HtmlFileName_06 + afterHtmlFileName + DOM_modified_for_AD_36 + lets_add_the_rest_for_AD_36 + commentEndAD_36).replace("</script>\n", "</script>");
		// AD_36 END
		// AD_37 BEGIN
		// Targeting Men with: I'd like her to... believe this verse every day
		// So, let's modify the DOM for AD_37
		var DOM_modified_for_AD_37 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "I'd like her to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 257px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-141.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_37 = "// BEGIN AD_37\n";
		var commentEndAD_37 = "\n// END AD_37\n\n";
		var HtmlFileName_07 = $('#order_id').val() + "-AD_37-" + "F-141";
		var lets_add_the_rest_for_AD_37 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_07 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_07 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_07 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_07 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_37 = (commentBeginAD_37 + beforeHtmlFileName + HtmlFileName_07 + afterHtmlFileName + DOM_modified_for_AD_37 + lets_add_the_rest_for_AD_37 + commentEndAD_37).replace("</script>\n", "</script>");
		// AD_37 END
		// AD_38 BEGIN
		// Targeting Men with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_38
		var DOM_modified_for_AD_38 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0009')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-021.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_38 = "// BEGIN AD_38\n";
		var commentEndAD_38 = "\n// END AD_38\n\n";
		var HtmlFileName_08 = $('#order_id').val() + "-AD_38-" + "S-021";
		var lets_add_the_rest_for_AD_38 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_08 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_08 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_08 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_08 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_38 = (commentBeginAD_38 + beforeHtmlFileName + HtmlFileName_08 + afterHtmlFileName + DOM_modified_for_AD_38 + lets_add_the_rest_for_AD_38 + commentEndAD_38).replace("</script>\n", "</script>");
		// AD_38 END
		// AD_39 BEGIN
		// Targeting Men with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_39
		var DOM_modified_for_AD_39 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0011')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-021.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_39 = "// BEGIN AD_39\n";
		var commentEndAD_39 = "\n// END AD_39\n\n";
		var HtmlFileName_09 = $('#order_id').val() + "-AD_39-" + "S-021";
		var lets_add_the_rest_for_AD_39 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_09 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_09 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_09 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_09 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_39 = (commentBeginAD_39 + beforeHtmlFileName + HtmlFileName_09 + afterHtmlFileName + DOM_modified_for_AD_39 + lets_add_the_rest_for_AD_39 + commentEndAD_39).replace("</script>\n", "</script>");
		// AD_39 END
		// AD_40 BEGIN
		// Targeting Men with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_40
		var DOM_modified_for_AD_40 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-021.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_40 = "// BEGIN AD_40\n";
		var commentEndAD_40 = "\n// END AD_40\n\n";
		var HtmlFileName_10 = $('#order_id').val() + "-AD_40-" + "S-021";
		var lets_add_the_rest_for_AD_40 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_10 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_10 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_10 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_10 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_40 = (commentBeginAD_40 + beforeHtmlFileName + HtmlFileName_10 + afterHtmlFileName + DOM_modified_for_AD_40 + lets_add_the_rest_for_AD_40 + commentEndAD_40).replace("</script>\n", "</script>");
		// AD_40 END


		// fill textarea with complete code to render all ads
		$('#fcontent_31_40').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_31 +
		finishedWithAD_32 +
		finishedWithAD_33 +
		finishedWithAD_34 +
		finishedWithAD_35 +
		finishedWithAD_36 +
		finishedWithAD_37 +
		finishedWithAD_38 +
		finishedWithAD_39 +
		finishedWithAD_40
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


		    var create = document.getElementById('create_31_40');
		    var fileContent = document.getElementById("fcontent_31_40");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_31_40").value;
		        document.getElementById("downloadlink_31_40").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_31_40');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file 31_40 ///////
		////////////////////////////////////
		////////////////////////////////////
		// BEGIN node JS file 41_50 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_41_50').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_41_50').val(idNeeded + '_41_50');
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run these 10 images for this verse\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_41 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_41
		var DOM_modified_for_AD_41 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "so I asked him")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 230px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-031.png');
		// now proceed to build the code
		var commentBeginAD_41 = "// BEGIN AD_41\n";
		var commentEndAD_41 = "\n// END AD_41\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-AD_41-" + "S-031";
		var lets_add_the_rest_for_AD_41 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_41 = (commentBeginAD_41 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_41 + lets_add_the_rest_for_AD_41 + commentEndAD_41).replace("</script>\n", "</script>");
		// AD_41 END
		// AD_42 BEGIN
		// Targeting Women with: I'd like him to... believe this verse every day
		// So, let's modify the DOM for AD_42
		var DOM_modified_for_AD_42 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0006')
		.replace("My Name", "His Name")
		.replace("s_ad_big_message_1", "I'd like him to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add his Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 245px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-031.png');
		// now proceed to build the code
		var commentBeginAD_42 = "// BEGIN AD_42\n";
		var commentEndAD_42 = "\n// END AD_42\n\n";
		var HtmlFileName_02 = $('#order_id').val() + "-AD_42-" + "S-031";
		var lets_add_the_rest_for_AD_42 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_02 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_02 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_02 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_02 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_42 = (commentBeginAD_42 + beforeHtmlFileName + HtmlFileName_02 + afterHtmlFileName + DOM_modified_for_AD_42 + lets_add_the_rest_for_AD_42 + commentEndAD_42).replace("</script>\n", "</script>");
		// AD_42 END
		// AD_43 BEGIN
		// Targeting Women with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_43
		var DOM_modified_for_AD_43 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0014')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-142.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_43 = "// BEGIN AD_43\n";
		var commentEndAD_43 = "\n// END AD_43\n\n";
		var HtmlFileName_03 = $('#order_id').val() + "-AD_43-" + "F-142";
		var lets_add_the_rest_for_AD_43 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_03 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_03 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_03 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_03 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_43 = (commentBeginAD_43 + beforeHtmlFileName + HtmlFileName_03 + afterHtmlFileName + DOM_modified_for_AD_43 + lets_add_the_rest_for_AD_43 + commentEndAD_43).replace("</script>\n", "</script>");
		// AD_43 END
		// AD_44 BEGIN
		// Targeting Women with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_44
		var DOM_modified_for_AD_44 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0015')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-142.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_44 = "// BEGIN AD_44\n";
		var commentEndAD_44 = "\n// END AD_44\n\n";
		var HtmlFileName_04 = $('#order_id').val() + "-AD_44-" + "F-142";
		var lets_add_the_rest_for_AD_44 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_04 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_04 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_04 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_04 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_44 = (commentBeginAD_44 + beforeHtmlFileName + HtmlFileName_04 + afterHtmlFileName + DOM_modified_for_AD_44 + lets_add_the_rest_for_AD_44 + commentEndAD_44).replace("</script>\n", "</script>");
		// AD_44 END
		// AD_45 BEGIN
		// Targeting Women with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_45
		var DOM_modified_for_AD_45 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0016')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-142.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_45 = "// BEGIN AD_45\n";
		var commentEndAD_45 = "\n// END AD_45\n\n";
		var HtmlFileName_05 = $('#order_id').val() + "-AD_45-" + "F-142";
		var lets_add_the_rest_for_AD_45 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_05 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_05 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_05 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_05 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_45 = (commentBeginAD_45 + beforeHtmlFileName + HtmlFileName_05 + afterHtmlFileName + DOM_modified_for_AD_45 + lets_add_the_rest_for_AD_45 + commentEndAD_45).replace("</script>\n", "</script>");
		// AD_45 END
		// AD_46 BEGIN
		// Targeting Men with: so I asked her... What's your favorite verse?
		// So, let's modify the DOM for AD_46
		var DOM_modified_for_AD_46 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "so I asked her")
		.replace("s_ad_big_message_2", "What's your favorite verse?")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 240px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-142.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_46 = "// BEGIN AD_46\n";
		var commentEndAD_46 = "\n// END AD_46\n\n";
		var HtmlFileName_06 = $('#order_id').val() + "-AD_46-" + "F-142";
		var lets_add_the_rest_for_AD_46 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_06 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_06 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_06 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_06 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_46 = (commentBeginAD_46 + beforeHtmlFileName + HtmlFileName_06 + afterHtmlFileName + DOM_modified_for_AD_46 + lets_add_the_rest_for_AD_46 + commentEndAD_46).replace("</script>\n", "</script>");
		// AD_46 END
		// AD_47 BEGIN
		// Targeting Men with: I'd like her to... believe this verse every day
		// So, let's modify the DOM for AD_47
		var DOM_modified_for_AD_47 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0003')
		.replace("My Name", "Her Name")
		.replace("s_ad_big_message_1", "I'd like her to")
		.replace("s_ad_big_message_2", "believe this verse every day")
		.replace("Add my Name", "Add her Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 257px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/F-142.png')
		.replace('customCSSforScenery_flex_little_Left', 'customCSSforFlowers_flex_little_Left')
		.replace('customCSSforScenery_item_little_Left', 'customCSSforFlowers_item_little_Left');
		// now proceed to build the code
		var commentBeginAD_47 = "// BEGIN AD_47\n";
		var commentEndAD_47 = "\n// END AD_47\n\n";
		var HtmlFileName_07 = $('#order_id').val() + "-AD_47-" + "F-142";
		var lets_add_the_rest_for_AD_47 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_07 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_07 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_07 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_07 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_47 = (commentBeginAD_47 + beforeHtmlFileName + HtmlFileName_07 + afterHtmlFileName + DOM_modified_for_AD_47 + lets_add_the_rest_for_AD_47 + commentEndAD_47).replace("</script>\n", "</script>");
		// AD_47 END
		// AD_48 BEGIN
		// Targeting Men with: there's a verse... I want to keep in mind
		// So, let's modify the DOM for AD_48
		var DOM_modified_for_AD_48 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0009')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "there's a verse")
		.replace("s_ad_big_message_2", "I want to keep in mind")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-031.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_48 = "// BEGIN AD_48\n";
		var commentEndAD_48 = "\n// END AD_48\n\n";
		var HtmlFileName_08 = $('#order_id').val() + "-AD_48-" + "S-031";
		var lets_add_the_rest_for_AD_48 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_08 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_08 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_08 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_08 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_48 = (commentBeginAD_48 + beforeHtmlFileName + HtmlFileName_08 + afterHtmlFileName + DOM_modified_for_AD_48 + lets_add_the_rest_for_AD_48 + commentEndAD_48).replace("</script>\n", "</script>");
		// AD_48 END
		// AD_49 BEGIN
		// Targeting Men with: I will believe... this verse every morning
		// So, let's modify the DOM for AD_49
		var DOM_modified_for_AD_49 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0011')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I will believe")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-031.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_49 = "// BEGIN AD_49\n";
		var commentEndAD_49 = "\n// END AD_49\n\n";
		var HtmlFileName_09 = $('#order_id').val() + "-AD_49-" + "S-031";
		var lets_add_the_rest_for_AD_49 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_09 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_09 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_09 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_09 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_49 = (commentBeginAD_49 + beforeHtmlFileName + HtmlFileName_09 + afterHtmlFileName + DOM_modified_for_AD_49 + lets_add_the_rest_for_AD_49 + commentEndAD_49).replace("</script>\n", "</script>");
		// AD_49 END
		// AD_50 BEGIN
		// Targeting Men with: I want to remember... this verse every morning
		// So, let's modify the DOM for AD_50
		var DOM_modified_for_AD_50 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
		.replace('bgc-0003', 'bgc-0012')
		.replace("My Name", "My Name")
		.replace("s_ad_big_message_1", "I want to remember")
		.replace("s_ad_big_message_2", "this verse every morning")
		.replace("Add my Name", "Add my Name")
		.replace(/\'/g, "\\\'")
		.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
		.replace('p-original-size/S-001.png', 'p-original-size/S-031.png')
		.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
		// now proceed to build the code
		var commentBeginAD_50 = "// BEGIN AD_50\n";
		var commentEndAD_50 = "\n// END AD_50\n\n";
		var HtmlFileName_10 = $('#order_id').val() + "-AD_50-" + "S-031";
		var lets_add_the_rest_for_AD_50 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_10 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_10 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_10 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_10 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_50 = (commentBeginAD_50 + beforeHtmlFileName + HtmlFileName_10 + afterHtmlFileName + DOM_modified_for_AD_50 + lets_add_the_rest_for_AD_50 + commentEndAD_50).replace("</script>\n", "</script>");
		// AD_50 END


		// fill textarea with complete code to render all ads
		$('#fcontent_41_50').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_41 +
		finishedWithAD_42 +
		finishedWithAD_43 +
		finishedWithAD_44 +
		finishedWithAD_45 +
		finishedWithAD_46 +
		finishedWithAD_47 +
		finishedWithAD_48 +
		finishedWithAD_49 +
		finishedWithAD_50
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


		    var create = document.getElementById('create_41_50');
		    var fileContent = document.getElementById("fcontent_41_50");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_41_50").value;
		        document.getElementById("downloadlink_41_50").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_41_50');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file 41_50 ///////
		////////////////////////////////////



		////////////////////////////////////
		// BEGIN increase flower height ///////
		////////////////////////////////////
		$('#increaseFlowerHeight').on('change', function() {
		var increaseFlowerHeightThisMuch = $(this).val();
		$('.customCSSforFlowers_item_little_Left').css('max-height', increaseFlowerHeightThisMuch);
		});
		////////////////////////////////////
		// EBD increase flower height ///////
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
$('.name > span').css('font-size', increaseThisMuch + 'px');
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
var completeVerseURLtoGrab = ('../../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
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
var completeVerseURLtoGrab = ('../../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
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
var completeVerseURLtoGrab = ('../../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
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

// BEGIN update order ID & node JS file name
$('#select_book, #select_chapter, #select_verse').on('change', function() {
var getHiddenBook = $('#hidden_book_desired').text();
var getHiddenChapter = $('#hidden_chapter_desired').text();
var getHiddenVerse = $('#hidden_verse_desired').text();
$('#order_id, #fname').val(getHiddenBook + '-' + getHiddenChapter + '-' + getHiddenVerse);
});
// END update order ID & node JS file name







});
