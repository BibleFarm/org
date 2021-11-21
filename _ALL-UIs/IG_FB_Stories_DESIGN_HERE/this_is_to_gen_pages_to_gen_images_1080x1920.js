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
    $('.red').textStroke(7,'black');
    $('.side_l, .side_r, .visit_box, .love_box').textStroke(7,'black');
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


///////////////////////////////////////
// BEGIN drag ///////////
///////////////////////////////////////
/*$(function(){
//样式
$("#drag").css({"position":"absolute","top":"100px","left":"100px","border":"1px solid #789","width":"1150px","height":"600px","background":"#988f82","cursor":"move"})
	var dragging = false;
	var iX, iY;
	$("#drag").mousedown(function(e) {
		dragging = true;
		iX = e.clientX - this.offsetLeft;
		iY = e.clientY - this.offsetTop;
		this.setCapture && this.setCapture();
		return false;
	});
	document.onmousemove = function(e) {
		if (dragging) {
			var e = e || window.event;
			var oX = e.clientX - iX;
			var oY = e.clientY - iY;
			$("#drag").css({"left":oX + "px", "top":oY + "px"});
			return false;
		}
	};
	$(document).mouseup(function(e) {
		dragging = false;
		$("#drag")[0].releaseCapture();
		e.cancelBubble = true;
	})
});
*/
///////////////////////////////////////
// END drag ///////////
///////////////////////////////////////

///////////////////////////////////////
// BEGIN UI to render html pages & images ///////////
///////////////////////////////////////
// clear sides
$(".side_l, .side_r").hide();
// define which post I'm creating 
$(".UI_AD_photo > button").on( "click", function() {
var NeededPostToCreate = $(this).text();
$(".input_photo_post").val(NeededPostToCreate);
$(".input_photo_image").val("00" + NeededPostToCreate);
// clear sides
$(".side_l, .side_r").hide();
// show only the one I clicked
$(".AD_L_" + NeededPostToCreate).show();
$(".AD_R_" + NeededPostToCreate).show();
});
// autofill the fields
$(".UI_AD_photo > button, .input_photo_post, .input_photo_date, .input_photo_visit, .input_photo_image").on("click keyup change", function() {
var NeededPost = $(".input_photo_post").val();
var NeededDate = $(".input_photo_date").val();
var NeededVisit = $(".input_photo_visit").val();
var NeededPhoto = $(".input_photo_image").val();
var NeededGrabLocalImage = $(".input_photo_grab_local_image").val("../../../../local-farm-photos/" + NeededDate + "-" + NeededVisit + "/" + NeededDate + "-" + NeededVisit + "_" + NeededPhoto + ".jpg");
var NeededHtmlPageName = $(".input_photo_html_page").val(NeededVisit + "-" + NeededPost);
var NeededImageUrl = $(".input_photo_image_url").val(NeededVisit + "-" + NeededPost + ".png");
var LocalImageToGrab = $(".input_photo_grab_local_image").val();
$(".image_cntainer > img").attr("src", LocalImageToGrab);
$(".visit_number").text(NeededVisit);
});

///////////////////////////////////////
// END UI to render html pages & images ///////////
///////////////////////////////////////










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
		$('#fname_01_10').val(idNeeded);
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run this image\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_01 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_01
		var DOM_modified_for_AD_01 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_1080x1920.js', '')
		.replace(/\'/g, "\\\'");
		// now proceed to build the code
		var commentBeginAD_01 = "// BEGIN AD_01\n";
		var commentEndAD_01 = "\n// END AD_01\n\n";
		var HtmlFileName_01 = $('#order_id').val();
		var lets_add_the_rest_for_AD_01 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1080, height: 1920}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/IG_FB_Stories_DESIGN_HERE/Pages_to_create_images/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-MY-DATA/org/support/pictures_story/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_01 = (commentBeginAD_01 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_01 + lets_add_the_rest_for_AD_01 + commentEndAD_01).replace("</script>\n", "</script>");
		// AD_01 END




//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//BEGIN command to write the landing page /////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

var beforelandingPageFileName = "fsPromises.writeFile('//media/demo/ALL-MY-DATA/org/support/visits_story/";
// insert file name here when I'm ready to put it all together
var betweenFileNameAndPageContent = ".html', '";
var landingPageContent = '<!DOCTYPE HTML><html lang="en-US" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/DefinedTerm"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport"><meta content="no" name="msapplication-tap-highlight"><link href="/apple-touch-icon.png?v=057" rel="apple-touch-icon" sizes="180x180"><link href="/favicon-32x32.png?v=057" rel="icon" sizes="32x32" type="image/png"><link href="/favicon-194x194.png?v=057" rel="icon" sizes="194x194" type="image/png"><link href="/android-chrome-192x192.png?v=057" rel="icon" sizes="192x192" type="image/png"><link href="/favicon-16x16.png?v=057" rel="icon" sizes="16x16" type="image/png"><link href="/site.webmanifest?v=057" rel="manifest"><link href="/safari-pinned-tab.svg?v=057" rel="mask-icon"><link href="/favicon.ico?v=057" rel="shortcut icon"><meta content="BibleFarm.org" name="apple-mobile-web-app-title"><meta content="BibleFarm.org" name="application-name"><meta content="#000000" name="msapplication-TileColor"><meta content="/mstile-144x144.png?v=057" name="msapplication-TileImage"><meta content="#000000" name="theme-color"><link href="/apple-icon-57x57.png?v=057" rel="apple-touch-icon" sizes="57x57"><link href="/apple-icon-60x60.png?v=057" rel="apple-touch-icon" sizes="60x60"><link href="/apple-icon-72x72.png?v=057" rel="apple-touch-icon" sizes="72x72"><link href="/apple-icon-76x76.png?v=057" rel="apple-touch-icon" sizes="76x76"><link href="/apple-icon-114x114.png?v=057" rel="apple-touch-icon" sizes="114x114"><link href="/apple-icon-120x120.png?v=057" rel="apple-touch-icon" sizes="120x120"><link href="/apple-icon-144x144.png?v=057" rel="apple-touch-icon" sizes="144x144"><link href="/apple-icon-152x152.png?v=057" rel="apple-touch-icon" sizes="152x152"><link href="/favicon-96x96.png?v=057" rel="icon" sizes="96x96" type="image/png"><link href="/manifest.json?v=057" rel="manifest"><link href="/apple-touch-icon-57x57.png?v=057" rel="apple-touch-icon-precomposed" sizes="57x57"><link href="/apple-touch-icon-114x114.png?v=057" rel="apple-touch-icon-precomposed" sizes="114x114"><link href="/apple-touch-icon-72x72.png?v=057" rel="apple-touch-icon-precomposed" sizes="72x72"><link href="/apple-touch-icon-144x144.png?v=057" rel="apple-touch-icon-precomposed" sizes="144x144"><link href="/apple-touch-icon-60x60.png?v=057" rel="apple-touch-icon-precomposed" sizes="60x60"><link href="/apple-touch-icon-120x120.png?v=057" rel="apple-touch-icon-precomposed" sizes="120x120"><link href="/apple-touch-icon-76x76.png?v=057" rel="apple-touch-icon-precomposed" sizes="76x76"><link href="/apple-touch-icon-152x152.png?v=057" rel="apple-touch-icon-precomposed" sizes="152x152"><link href="/favicon-196x196.png?v=057" rel="icon" sizes="196x196" type="image/png"><link href="/favicon-96x96.png?v=057" rel="icon" sizes="96x96" type="image/png"><link href="/favicon-32x32.png?v=057" rel="icon" sizes="32x32" type="image/png"><link href="/favicon-16x16.png?v=057" rel="icon" sizes="16x16" type="image/png"><link href="/favicon-128.png?v=057" rel="icon" sizes="128x128" type="image/png"><meta content="BibleFarm.org" name="application-name"><meta content="#000000" name="msapplication-TileColor"><meta content="/mstile-144x144.png?v=057" name="msapplication-TileImage"><meta content="/mstile-70x70.png?v=057" name="msapplication-square70x70logo"><meta content="/mstile-150x150.png?v=057" name="msapplication-square150x150logo"><meta content="/mstile-310x150.png?v=057" name="msapplication-wide310x150logo"><meta content="/mstile-310x310.png?v=057" name="msapplication-square310x310logo"><meta content="summary_large_image" name="twitter:card"><meta content="Support the next visit ❤ DONATE" name="twitter:title"><meta content="Fulfilling Mat 25:31-40 one visit at a time" name="twitter:description"><meta content="@biblefarm" name="twitter:site"><meta content="@biblefarm" name="twitter:creator"><meta content="https://www.BibleFarm.org/support/pictures_story/' + HtmlFileName_01 + '.png" name="twitter:image:src"><meta content="Fulfilling Mat 25:31-40 one visit at a time" name="twitter:image:alt"><meta content="Support the next visit ❤ DONATE" property="og:title"><meta content="Fulfilling Mat 25:31-40 one visit at a time" property="og:description"><meta content="https://www.BibleFarm.org/support/pictures_story/' + HtmlFileName_01 + '.png" property="og:image"><meta content="image/png" property="og:image:type"><meta content="1080" property="og:image:width"><meta content="1920" property="og:image:height"><meta content="https://BibleFarm.org/support/visits_story/' + HtmlFileName_01 + '.html" property="og:url"><meta content="BibleFarm.org - Fulfilling Mat 25:31-40 one visit at a time" property="og:site_name"><meta content="en_US" property="og:locale"><meta content="356077414586259" property="fb:admins"><meta content="205604789951385" property="fb:app_id"><meta content="website" property="og:type"><meta content="e3f86f5a3fa4999b9c17c1605383d4a8" name="p:domain_verify"><link href="images/torah_farm_launch_screen_640x1136.png" rel="apple-touch-startup-image"><meta content="#f00" name="theme-color"><meta content="#f00" name="msapplication-navbutton-color"><meta content="BibleFarm.org - Fulfilling Mat 25:31-40 one visit at a time - Hear, O Israel: The LORD our God <i>is</i> one LORD: [Deuteronomy 6 : 4]" name="description"><meta content="https://www.BibleFarm.org/support/pictures_story/' + HtmlFileName_01 + '.png" name="image"><title itemprop="name">BibleFarm.org - Fulfilling Mat 25:31-40 one visit at a time</title><script async src="https://www.googletagmanager.com/gtag/js?id=G-WZYYB7E825"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-WZYYB7E825");</script><style>html, body {margin: 0 auto;font-family: sans-serif;font-size: 1px;}.v {width: 100%;text-align: center;}.wrap_image_sharing_ready_to_share {display: flex;width: 100%;text-align: center;flex-direction: row;flex-wrap: nowrap;align-content: center;justify-content: center;align-items: center;}.wrap_image_sharing_ready_to_share > div > img {width: 100%;max-width: 1920px;}</style></head><body><div id="bg">bgc-0009</div><div class="v" itemprop="description">BibleFarm.org - Fulfilling Mat 25:31-40 one visit at a time - Hear, O Israel: The LORD our God <i>is</i> one LORD: [Deuteronomy 6 : 4]</div><div class="wrap_image_sharing_ready_to_share"><div><img data-pin-url="https://BibleFarm.org/support/visits_story/' + HtmlFileName_01 + '.html" data-pin-description="Support the next visit ❤ DONATE - Fulfilling Mat 25:31-40 one visit at a time. #biblefarm" itemprop="image" alt="Deuteronomy-6-4" src="https://www.BibleFarm.org/support/pictures_story/' + HtmlFileName_01 + '.png"></div></div><script>window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url";</script></body></html>';
var afterLandingPageContent = "', function(err) {if (err) throw err;console.log('Saved!');}).then(() => {}).catch(er => {console.log(er);});";
var commentBeginLandingPage = "// BEGIN LandingPage\n";
var commentEndLandingPage = "\n// END LandingPage\n\n";

var completeCommandWriteLandingPage = commentBeginLandingPage + beforelandingPageFileName + HtmlFileName_01 + betweenFileNameAndPageContent + landingPageContent + afterLandingPageContent + commentEndLandingPage;

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//END command to write the landing page /////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////





		// fill textarea with complete code to render all ads
		$('#fcontent_01_10').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_01 +
		completeCommandWriteLandingPage
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
// get & copy the path to clipboard, of where I want to save this node js file that creates the landing page & the picture
var pathToSaveJSfile = "/media/demo/ALL-MY-DATA/org/_ALL-UIs/IG_FB_Stories_DESIGN_HERE/Pages_to_create_images/";
var thisVisitToSave = $(".input_photo_visit").val();
var thisPostToSave = $(".input_photo_post").val();
var theExtensionJS = ".js";
var completeThingToCopyToClipboard = (pathToSaveJSfile + thisVisitToSave + "-" + thisPostToSave);
console.log(completeThingToCopyToClipboard);
    var $tempElement = $("<input>");
        $("body").append($tempElement);
        $tempElement.val(completeThingToCopyToClipboard).select();
        document.execCommand("Copy");
        $tempElement.remove();
// show copied_saving_path_to_clipboard for a sec
$(".copied_saving_path_to_clipboard").show("slow");
setTimeout(function(){
$(".copied_saving_path_to_clipboard").hide();
}, 2000);

});
///////////////////////////////////////
// END doneEditing button
///////////////////////////////////////


///////////////////////////////////////
// BEGIN unwrap the download to reset & create the next picture
///////////////////////////////////////
$('.input_photo_date, .input_photo_visit, .AD-01, .AD-02, .AD-03, .AD-04, .AD-05, .AD-06').on('click', function() {
$("#downloadlink_01_10 > .wrapper_to_move_flowers").unwrap();
});
///////////////////////////////////////
// END unwrap the download to reset & create the next picture
///////////////////////////////////////


///////////////////////////////////////
// BEGIN create & copy node command to clipboard
///////////////////////////////////////
    $(".copy_node_command").click(function(event){

var changeDirectory = "cd /media/demo/ALL-MY-DATA/org/_ALL-UIs/IG_FB_Stories_DESIGN_HERE/Pages_to_create_images/\n";
var theWordNode = "node ";
var theTwoAndSigns = " && ";
var thisVisitToSave = $(".input_photo_visit").val();
var completeNodeCommandToCopyToClipboard = (changeDirectory +
theWordNode + thisVisitToSave + "-01.js" +
theTwoAndSigns +
theWordNode + thisVisitToSave + "-02.js" +
theTwoAndSigns +
theWordNode + thisVisitToSave + "-03.js" +
theTwoAndSigns +
theWordNode + thisVisitToSave + "-04.js" +
theTwoAndSigns +
theWordNode + thisVisitToSave + "-05.js" +
theTwoAndSigns +
theWordNode + thisVisitToSave + "-06.js\n"
);
console.log(completeNodeCommandToCopyToClipboard);
var $tempElementTextArea = $("<textarea>");
        $("body").append($tempElementTextArea);
        $tempElementTextArea.val(completeNodeCommandToCopyToClipboard).select();
        document.execCommand("Copy");
        $tempElementTextArea.remove();
// show copied_saving_path_to_clipboard for a sec
$(".copied_node_command_to_clipboard").show("slow");
setTimeout(function(){
$(".copied_node_command_to_clipboard").hide();
}, 2000);

    });
///////////////////////////////////////
// END create & copy node command to clipboard
///////////////////////////////////////














////////////////////////////////
}); //END the one and only document ready
//////////////////////////////