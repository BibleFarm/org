$(document).ready( function() {
//////////////////////////////////
////// BEGIN editing /////////
//////////////////////////////////
$("body").dblclick((e)=>{
  if (e.ctrlKey) {
//////////////////////////////////
////// BEGIN Ctrl + DoubleClick for TheLordWords /////////
//////////////////////////////////
    console.log("Control + Click and did Red Letter Edition!");
   var range = window.getSelection().getRangeAt(0);
var selectionContents = range.extractContents();
var isolated_word = document.createElement("span");
$(isolated_word).addClass("TheLordWords");
isolated_word.appendChild(selectionContents);
range.insertNode(isolated_word);
//////////////////////////////////
////// END Ctrl + DoubleClick for TheLordWords /////////
//////////////////////////////////
  }
  else {
//////////////////////////////////
////// BEGIN DoubleClick for TheLordTitles /////////
//////////////////////////////////
	    console.log("DoubleClicked and did The Lord's Title!");
   var range = window.getSelection().getRangeAt(0);
var selectionContents = range.extractContents();
var isolated_word = document.createElement("span");
$(isolated_word).addClass("TheLordTitles");
isolated_word.appendChild(selectionContents);
range.insertNode(isolated_word);
//////////////////////////////////
////// END DoubleClick for TheLordTitles /////////
//////////////////////////////////
  }
});
//////////////////////////////////
////// END editing /////////
//////////////////////////////////




//////////////////////////////////
////// BEGIN change puntuation back to normal /////////
//////////////////////////////////
$('span').html(function() {
      return $(this).html()
.replace(/\./g, '<span class="punctuation">.</span>')
.replace(/\,/g, '<span class="punctuation">,</span>')
.replace(/\:/g, '<span class="punctuation">:</span>')
.replace(/\;/g, '<span class="punctuation">;</span>')
.replace(/\!/g, '<span class="punctuation">!</span>')
.replace(/\?/g, '<span class="punctuation">?</span>')
.replace(/\(/g, '<span class="punctuation">(</span>')
.replace(/\)/g, '<span class="punctuation">)</span>');
});
//////////////////////////////////
////// END change puntuation back to normal /////////
//////////////////////////////////






//////////////////////////////////
////// BEGIN save changes /////////
//////////////////////////////////
    $('#adding_titles_RL_save_changes').click(function(){

    //    $('#receiver').append('<h1>Hi,</h1>','<p>How are you?</p>');

        // Save the page's HTML to a file that is automatically downloaded.

        // We make a Blob that contains the data to download.
        var file = new window.Blob([document.documentElement.innerHTML], { type: "text/html" });
        var URL = window.webkitURL || window.URL;

        // This is the URL that will download the data.
        var downloadUrl = URL.createObjectURL(file);

        var a = document.createElement("a");
		var book_and_chapter = $("body div").eq(0).attr('class').replace('c', '');
        // This sets the file name.
        a.download = "module_KJV_PCEbeta_with_strongs_"+ book_and_chapter + ".html";
        a.href = downloadUrl;

        // Actually perform the download.
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
//////////////////////////////////
////// END save changes /////////
//////////////////////////////////
});