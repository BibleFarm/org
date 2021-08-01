$(document).ready(function (){


// BEGIN TextFill
$('.verse').textfill({
			debug            : false,
			maxFontPixels    : 80,
			innerTag         : 'span',
			widthOnly        : false,
			success          : null, // callback when a resizing is done
			fail             : null, // callback when a resizing is failed
			complete         : null, // callback when all is done
			explicitWidth    : 600,
			explicitHeight   : 195,
			changeLineHeight : false,
			truncateOnFail   : false,
			allowOverflow    : false // If true, text will stay at minFontPixels but overflow container w/out failing 
});
// END TextFill


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
    $('.top_left,.top_right,.bot_left,.bot_right,.verse,.stroked').textStroke(2,'black');
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
