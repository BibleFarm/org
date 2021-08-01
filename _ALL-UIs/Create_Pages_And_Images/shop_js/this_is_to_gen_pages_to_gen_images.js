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

// BEGIN TextFill
$('.verse').textfill({
			debug            : false,
			maxFontPixels    : 1000,
			innerTag         : 'span',
			widthOnly        : false,
			success          : null, // callback when a resizing is done
			fail             : null, // callback when a resizing is failed
			complete         : null, // callback when all is done
			explicitWidth    : 250,
			explicitHeight   : 280,
			changeLineHeight : false,
			truncateOnFail   : false,
			allowOverflow    : false // If true, text will stay at minFontPixels but overflow container w/out failing 
});
// END TextFill

// BEGIN TextFill
$('.top_verse').textfill({
	
			debug            : false,
			maxFontPixels    : 2000,
			innerTag         : 'span',
			widthOnly        : false,
			success          : null, // callback when a resizing is done
			fail             : null, // callback when a resizing is failed
			complete         : null, // callback when all is done
			explicitWidth    : 1140,
			explicitHeight   : 200,
			changeLineHeight : false,
			truncateOnFail   : false,
			allowOverflow    : false // If true, text will stay at minFontPixels but overflow container w/out failing 
			
});
// END TextFill

}, 1000);


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














});

