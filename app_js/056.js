// 056.js //
$(document).ready(function() {

  setTimeout(function() {
    console.log("*********************** 1 ");
  }, 1000);
  setTimeout(function() {
    console.log("*********************** 2 ");
  }, 2000);
  setTimeout(function() {
    console.log("*********************** 3 ");
  }, 3000);
  setTimeout(function() {
    console.log("*********************** 4 ");
  }, 4000);
  setTimeout(function() {
    console.log("*********************** 5 ");
  }, 5000);
  setTimeout(function() {
    console.log("*********************** 6 ");
  }, 6000);
  setTimeout(function() {
    console.log("*********************** 7 ");
  }, 7000);
  setTimeout(function() {
    console.log("*********************** 8 ");
  }, 8000);
  setTimeout(function() {
    console.log("*********************** 9 ");
  }, 9000);
  setTimeout(function() {
    console.log("*********************** 10 ");
  }, 10000);

});

///////////////////////////////////////////////
///// BEGIN app intro ////////////////////////
///////////////////////////////////////////////

// when landing in landscape, ask to rotate, let them know we're reloading, then reload automatically
$(document).ready(function() {
  if (($(window).height() < 640) && ($(window).height() < $(window).width())) {
$(".app_please_rotate_your_phone_vertically").show();
$(".app_please_rotate_your_phone_vertically_wrap").show();
$(window).on('resize',function(){
$(".app_hold_on_please_wrap").show();
$(".app_hold_on_please").show();
location.reload();
});
}
});
///////////////////////////////////////////////
// remove splash after intro completed
$(document).ready(function() {
setTimeout(function() {
$(".app_lock_n_load_wrap").css("display", "none");
$(".app_lock_n_load").css("display", "none");
console.log("10 second to hide lock n load");
}, 2000);
setTimeout(function() {
$(".app_intro_splash_bg, .app_intro_splash_text").hide("slow");
console.log("20 seconds to hide intro");
}, 20000);
// automatically move to forced desired page
//       setTimeout(function() {
// $('.move_to_bf_farm').trigger('click', function() {
// });
//       }, 16000);
});
//////////////////////////////////////////


/////////////////////////
///// BEGIN  app textillate
/////////////////////////
$(document).ready(function() {
  setTimeout(function() {

    $(".app_intro_splash_text_wrap").show("slow");


    $('.app_intro_splash_text h1')
      .fitText(0.7, { maxFontSize: 100 })
      .textillate({ in: { effect: 'flipInY' }});

    $('.app_intro_splash_text p.msg1')
      .fitText(3.0, { minFontSize: 25, maxFontSize: 48 })
      .textillate({ initialDelay: 2000, in: { delay: 3, shuffle: true },         callback: function() {
setTimeout(function() {
            $('.app_intro_splash_text p.msg1').textillate('out');
      }, 1500);

        } });

    $('.app_intro_splash_text p.msg2')
      .fitText(3.0, { minFontSize: 25, maxFontSize: 48 })
      .textillate({ initialDelay: 4900, in: { delay: 8, shuffle: true } });

    }, 4000);
  });
/////////////////////////
///// END  app textillate
/////////////////////////

/////////////////////////////////////////////////
/// END app intro
//////////////////////////////////////////////////




$(document).ready(function() {
  $('.toggle-menu').jPushMenu();
});
// BEGIN takien jPushMenu
/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */

(function($) {

  $.fn.jPushMenu = function(customOptions) {
    var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);

    /* add class to the body.*/

    $('body').addClass(o.bodyClass);
    $(this).addClass('jPushMenuBtn');
    $(this).click(function() {
      var target = '',
        push_direction = '';

      if ($(this).is('.' + o.showLeftClass)) {
        target = '.cbp-spmenu-left';
        push_direction = 'toright';
      } else if ($(this).is('.' + o.showRightClass)) {
        target = '.cbp-spmenu-right';
        push_direction = 'toleft';
      } else if ($(this).is('.' + o.showTopClass)) {
        target = '.cbp-spmenu-top';
      } else if ($(this).is('.' + o.showBottomClass)) {
        target = '.cbp-spmenu-bottom';
      }

      $(this).toggleClass(o.activeClass);
      $(target).toggleClass(o.menuOpenClass);

      if ($(this).is('.' + o.pushBodyClass)) {
        $('body').toggleClass('cbp-spmenu-push-' + push_direction);
      }

      /* disable all other button*/
      $('.jPushMenuBtn').not($(this)).toggleClass('disabled');

      return false;
    });
    var jPushMenu = {
      close: function(o) {
        $('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
      }
    }

    if (o.closeOnClickOutside) {
      $(document).click(function() {
        jPushMenu.close();
      });

      $('.cbp-spmenu,.toggle-menu').click(function(e) {
        e.stopPropagation();
      });
    }
  };

  /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
  $.fn.jPushMenu.defaultOptions = {
    bodyClass: 'cbp-spmenu-push',
    activeClass: 'menu-active',
    showLeftClass: 'menu-left',
    showRightClass: 'menu-right',
    showTopClass: 'menu-top',
    showBottomClass: 'menu-bottom',
    menuOpenClass: 'cbp-spmenu-open',
    pushBodyClass: 'push-body',
    closeOnClickOutside: false
  };
})(jQuery);
// END takien jPushMenu

/////////////////////////////////
// BEGIN datatables example-main
/////////////////////////////////

/////////////////////////////////////////////////////////////////////
// throttle - don't forget to implement later: https://datatables.net/reference/api/%24.fn.dataTable.util.throttle()
/////////////////////////////////////////////////////////////////////
// API callback click each word to search - don't forget to implement later: https://datatables.net/examples/api/api_in_init.html
/////////////////////////////////////////////////////////////////////

/* accent neutralise solution by iecwebmast https://jsfiddle.net/lbriquet/xjzuahrt/1/ */

(function() {
  var _div = document.createElement('div');
  jQuery.fn.dataTable.ext.type.search.html = function(data) {
    _div.innerHTML = data;
    return _div.textContent ?
      _div.textContent
      .replace(/[\u0591-\u05C7]/g, '')
      .replace(/[áÁàÀâÂäÄãÃåÅæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[éÉèÈêÊëË]/g, 'e')
      .replace(/[íÍìÌîÎïÏîĩĨĬĭ]/g, 'i')
      .replace(/[ñÑ]/g, 'n')
      .replace(/[óÓòÒôÔöÖœŒ]/g, 'o')
      .replace(/[ß]/g, 's')
      .replace(/[úÚùÙûÛüÜ]/g, 'u')
      .replace(/[ýÝŷŶŸÿ]/g, 'n') :
      _div.innerText.replace(/[üÜ]/g, 'u')
      .replace(/[\u0591-\u05C7]/g, '')
      .replace(/[áÁàÀâÂäÄãÃåÅæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[éÉèÈêÊëË]/g, 'e')
      .replace(/[íÍìÌîÎïÏîĩĨĬĭ]/g, 'i')
      .replace(/[ñÑ]/g, 'n')
      .replace(/[óÓòÒôÔöÖœŒ]/g, 'o')
      .replace(/[ß]/g, 's')
      .replace(/[úÚùÙûÛüÜ]/g, 'u')
      .replace(/[ýÝŷŶŸÿ]/g, 'n');
  };
})();


$(document).ready(function() {
////////////////////////////////////////////
// BEGIN loads only if user wants to search
////////////////////////////////////////////
  $("#to_search_reg_eng").one('click', function(e) {
    // user want to search
    console.log("searching feature is being requested");
    $(".we_are_loading_the_entire_bible").show("slow");




      // BEGIN serve different datatables depending on browser

      var parser = new UAParser();
      var result = parser.getResult();
      $(".get_browser").append(result.browser.name + " " + result.browser.version);
      var browser_detected = $(".browser_detected").text();
      var Firefox = $(".get_browser:contains(Firefox)").text();
      var Chrome = $(".get_browser:contains(Chrome)").text();
      var Safari = $(".get_browser:contains(Safari)").text();
      var Opera = $(".get_browser:contains(WebKit)").text();
      var IE = $(".get_browser:contains(IE)").text();


      if (browser_detected == Safari) { // 70px difference seems to be correct for iPhone 5s
        $("html").css("background", "hotpink");









  var table_main = $('#example-main').DataTable({
    dom: "tip",
    "deferRender": true,
    "order": false,
    "ordering": false,
    "orderClasses": false,
    "info": true,
    "pagingType": "simple",
    "pageLength": 10,
    "ajax": "../search/data_filter_KJV_full.txt",
    "autoWidth": false,
    "scrollX": false,
    "scrollY": true,
    "fnInitComplete": function() {
      console.log( 'DataTables has finished its initialisation.' );
      $(".we_are_loading_the_entire_bible").hide("slow");

      $('.dataTables_scrollBody').perfectScrollbar({
        wheelPropagation: true,
        scrollXMarginOffset: 2
      });



/*
      // BEGIN serve different css depending on browser

      var parser = new UAParser();
      var result = parser.getResult();
      $(".get_browser").append(result.browser.name + " " + result.browser.version);
      var browser_detected = $(".browser_detected").text();
      var Firefox = $(".get_browser:contains(Firefox)").text();
      var Chrome = $(".get_browser:contains(Chrome)").text();
      var Safari = $(".get_browser:contains(Safari)").text();
      var Opera = $(".get_browser:contains(WebKit)").text();
      var IE = $(".get_browser:contains(IE)").text();


      if (browser_detected == Safari) { // 70px difference seems to be correct for iPhone 5s
        $("body").css("background", "hotpink");
        $(".dataTables_scrollBody").css("height", "calc(100% - 205px)").css("background", "");
        // not working
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "135px").css("background", "hotpink");
        $(".sm2-playlist-wrapper ul").css("max-height", "135px").css("background", "hotpink");

      }





      if (browser_detected == Firefox) {
        $("body").css("background", "blue");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "blue");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "blue");
      }
      if (browser_detected == Chrome) {
        $("body").css("background", "lime");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "lime");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "lime");
      }
      if (browser_detected == Safari) { // 70px difference seems to be correct for iPhone 5s
        $("body").css("background", "hotpink");
        $(".dataTables_scrollBody").css("height", "calc(100% - 205px)").css("background", "");
        // not working
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "135px").css("background", "hotpink");
        $(".sm2-playlist-wrapper ul").css("max-height", "135px").css("background", "hotpink");

      }
      if (browser_detected == Opera) {
        $("body").css("background", "red");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "red");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "red");
      }
      if (browser_detected == IE) {
        $("body").css("background", "purple");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "purple");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "purple");
      }


	  */


      // END serve different css depending on browser




    },
    //on paginition page 2,3.. often scroll shown, so reset it and assign it again
    "fnDrawCallback": function(oSettings) {
      $('.dataTables_scrollBody').perfectScrollbar('destroy').perfectScrollbar({
        wheelPropagation: true,
        scrollXMarginOffset: 2
      });

//	  $(".dataTables_scrollBody").css("bottom", "92px");
//	  $(".dataTables_scrollBody").css("padding-bottom", "192px");
//	  $(".dataTables_scrollBody").css("box-sizing", "border-box");





    },
    language: {
      url: '../lang/English.json'
    },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true
    },
    "search": {
      "smart": false
    },
    "columnDefs": [{
      "targets": [0, 1, 2, 3, 4],
      "visible": false
    }, {
      "type": "html",
      "targets": '_all'
    }, {}, {
      "render": function(data, type, row, full, meta) {
        return '<div><span class="hidden_chapter_id">' + row[0] + ' </span><span class="ref_bk_reg">' + row[4] + ' &nbsp</span><span class="ref_ch_reg">' + row[2] + '</span><span class="ref_ch_reg">:</span><span class="ref_vs_reg">' + row[3] + ' </span><span class="output_text_reg">' + row[5] + '</span></div>';
      },
      "targets": 5,
      "visible": true
    }]
  });
      } else {
        $("html").css("background", "black");









  var table_main = $('#example-main').DataTable({
    dom: "tip",
    "deferRender": true,
    "order": false,
    "ordering": false,
    "orderClasses": false,
    "info": true,
    "pagingType": "simple",
    "pageLength": 10,
    "ajax": "../search/data_filter_KJV_full.txt",
    "autoWidth": false,
    "scrollX": false,
    "scrollY": true,
    "fnInitComplete": function() {
      console.log( 'DataTables has finished its initialisation.' );
      $(".we_are_loading_the_entire_bible").hide("slow");

      $('.dataTables_scrollBody').perfectScrollbar({
        wheelPropagation: true,
        scrollXMarginOffset: 2
      });



/*
      // BEGIN serve different css depending on browser

      var parser = new UAParser();
      var result = parser.getResult();
      $(".get_browser").append(result.browser.name + " " + result.browser.version);
      var browser_detected = $(".browser_detected").text();
      var Firefox = $(".get_browser:contains(Firefox)").text();
      var Chrome = $(".get_browser:contains(Chrome)").text();
      var Safari = $(".get_browser:contains(Safari)").text();
      var Opera = $(".get_browser:contains(WebKit)").text();
      var IE = $(".get_browser:contains(IE)").text();


      if (browser_detected == Safari) { // 70px difference seems to be correct for iPhone 5s
        $("body").css("background", "hotpink");
        $(".dataTables_scrollBody").css("height", "calc(100% - 205px)").css("background", "");
        // not working
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "135px").css("background", "hotpink");
        $(".sm2-playlist-wrapper ul").css("max-height", "135px").css("background", "hotpink");

      }





      if (browser_detected == Firefox) {
        $("body").css("background", "blue");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "blue");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "blue");
      }
      if (browser_detected == Chrome) {
        $("body").css("background", "lime");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "lime");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "lime");
      }
      if (browser_detected == Safari) { // 70px difference seems to be correct for iPhone 5s
        $("body").css("background", "hotpink");
        $(".dataTables_scrollBody").css("height", "calc(100% - 205px)").css("background", "");
        // not working
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "135px").css("background", "hotpink");
        $(".sm2-playlist-wrapper ul").css("max-height", "135px").css("background", "hotpink");

      }
      if (browser_detected == Opera) {
        $("body").css("background", "red");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "red");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "red");
      }
      if (browser_detected == IE) {
        $("body").css("background", "purple");
        $(".sm2-bar-ui.playlist-open .bd.sm2-playlist-drawer").css("height", "calc(100vh - 290px)").css("background", "purple");
        $(".sm2-playlist-wrapper ul").css("max-height", "calc(100vh - 290px)").css("background", "purple");
      }


	  */


      // END serve different css depending on browser




    },
    //on paginition page 2,3.. often scroll shown, so reset it and assign it again
    "fnDrawCallback": function(oSettings) {
      $('.dataTables_scrollBody').perfectScrollbar('destroy').perfectScrollbar({
        wheelPropagation: true,
        scrollXMarginOffset: 2
      });




    },
    language: {
      url: '../lang/English.json'
    },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true
    },
    "search": {
      "smart": false
    },
    "columnDefs": [{
      "targets": [0, 1, 2, 3, 4],
      "visible": false
    }, {
      "type": "html",
      "targets": '_all'
    }, {}, {
      "render": function(data, type, row, full, meta) {
        return '<div><span class="hidden_chapter_id">' + row[0] + ' </span><span class="ref_bk_reg">' + row[4] + ' &nbsp</span><span class="ref_ch_reg">' + row[2] + '</span><span class="ref_ch_reg">:</span><span class="ref_vs_reg">' + row[3] + ' </span><span class="output_text_reg">' + row[5] + '</span></div>';
      },
      "targets": 5,
      "visible": true
    }]
  });
  }
















  // scroll to top when paginating
  $('#example-main').on('page.dt', function() {
    $('.dataTables_scrollBody').animate({
      scrollTop: 0
    }, 300);
  });




  /////////////////////////////////////////////
  // BEGIN enter filtering mode
  /////////////////////////////////////////////
  $('.filter_grk, .filter_grk_tra, .filter_reg_esp, .filter_reg_eng, .filter_heb_tra, .filter_heb').on('focus', function(e) {
    $(".wrap_ajaxed").hide("slow", "linear");
    $(".wrap_ajaxed_cloned_status").hide("slow", "linear");
    $(".mode_filter").show("slow", "linear");
    $(".wrap_nav_mode_browse").hide("slow", "linear");
    $(".wrap_nav_mode_filter").show("slow", "linear");



    $(".mode_browse").hide("slow", "linear");

  });

  /////////////////////////////////////////////
  // END enter filtering mode
  /////////////////////////////////////////////




  // solution by http://stackoverflow.com/users/870729/cale-b
  //  search input to do smart searches. Use "" quotes like in google
  $('.filter_grk').on('keyup', function(e) {
    // If the length is 3 or more characters, or the user pressed ENTER, search
    if (this.value.length >= 3 || e.keyCode == 13) {
      table_main.columns(8).search(this.value).draw();
      $(".wrap_ajaxed").hide("slow", "linear");
      $(".search_results").show("slow", "linear");
      $(".wrap_nav_mode_browse").hide("slow", "linear");
      $(".wrap_nav_mode_filter").show("slow", "linear");
    }
    // Ensure we clear the search if they backspace far enough
    if (this.value == "") {
      table_main.columns(8).search(this.value).draw();
      $(".search_results").hide("slow", "linear");
      $(".wrap_nav_mode_browse").show("slow", "linear");
      $(".wrap_nav_mode_filter").hide("slow", "linear");
    }
    return;
  });

  // solution by http://stackoverflow.com/users/870729/cale-b
  //  search input to do smart searches. Use "" quotes like in google
  $('.filter_reg_eng').on('keyup', function(e) {
    // If the length is 3 or more characters, or the user pressed ENTER, search
    if (this.value.length >= 3 || e.keyCode == 13) {
      table_main.columns(5).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
      $(".wrap_ajaxed").hide("slow", "linear");
    $(".wrap_ajaxed_cloned_status").hide("slow", "linear");
      $(".search_results").show("slow", "linear");
      $(".wrap_nav_mode_browse").hide("slow", "linear");
      $(".wrap_nav_mode_filter").show("slow", "linear");
    }
    // Ensure we clear the search if they backspace far enough
    if (this.value == "") {
      table_main.columns(5).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
      $(".search_results").hide("slow", "linear");
    }
    return;
  });


  // solution by http://stackoverflow.com/users/870729/cale-b
  //  search input to do smart searches. Use "" quotes like in google
  $('.filter_heb').on('keyup', function(e) {
    // If the length is 3 or more characters, or the user pressed ENTER, search
    if (this.value.length >= 3 || e.keyCode == 13) {
      table_main.columns(10).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
      $(".wrap_ajaxed").hide("slow", "linear");
    $(".wrap_ajaxed_cloned_status").hide("slow", "linear");
      $(".wrap_nav_mode_browse").hide("slow", "linear");
      $(".wrap_nav_mode_filter").show("slow", "linear");

    }
    // Ensure we clear the search if they backspace far enough
    if (this.value == "") {
      table_main.columns(10).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
      $(".search_results").hide("slow", "linear");
      $(".wrap_nav_mode_browse").show("slow", "linear");
      $(".wrap_nav_mode_filter").hide("slow", "linear");
    }
    return;
  });


  /////////////////////////////////////////////
  // BEGIN
  // create the options and show them
  // click on the options and ajax from url
  // show the chapter in wrap_ajaxed
  // hide filter mode stuff
  // show browser mode and the correct chapter
  /////////////////////////////////////////////

  /* don't remember what this was for... haha!

  <div class="wrap_the_tooltip"><div class="ref_header"><div class="select_analysis analysis_text_align_left link_hover_styling">analysis</div><div class="select_lexicons link_hover_styling">lexicons</div><div class="select_dictionaries link_hover_styling">dictionaries</div><div class="select_encyclopedias link_hover_styling">encyclopedias</div><div class="select_topics topics_text_align_right link_hover_styling">topics</div></div></div>

  */
  // click on the search result in filter mode
  $('#example-main tbody').on('click', 'tr td', function(e) {
    // clear prior search result highlighting and positioning
    $(".menu_book_heb").parent().css("background", "");
    $(".menu_book_tra").parent().css("background", "");
    $(".menu_book_reg").parent().css("background", "");
    $(".menu_chapter_reg").css("background", "");
    $(".menu_verse_reg").css("background", "");
    $("#browsing_mode_scrollTo_nav_left_back_to_top").trigger("click");
    // don't remember what this was for... haha!
    //    $(".wrap_nav_mode_filter").hide("slow", "linear");
    //    $(".wrap_nav_mode_browse").show("slow", "linear");
    //    $(".wrap_ajaxed").show("slow", "linear");
    //    $(".wrap_the_tooltip").toggle("slow", "linear");
    // $( this ).toggleClass( "wrap_the_tooltip" );
    //$( this ).replaceWith( "<div>" + $( this ).html() + "</div>" );


    var filtering_node = $(this).contents().filter(function() {
        return this.nodeType == 1
      }),

      filtering_text = filtering_node.text(),
      filtering_split_them = filtering_text.split(' '),
      filtering_slice_them = filtering_text.slice(0, filtering_text.indexOf(" "));
    // now access them like this
    var filtering_section = filtering_split_them[0];
    var filtering_book = filtering_split_them[1];
    var filtering_chapter = filtering_split_them[2];
    var filtering_verse = filtering_split_them[3];
    var filtering_audio = filtering_split_them[4];

    if (!filtering_node.length)
      return;

    filtering_node[0].nodeValue = filtering_text.slice(length);



// set time out seq // is needed // this one was for opening section panel if needed after a click in the search results
    setTimeout(function() {

      //check if the section panel is already opened
      if ($("#" + filtering_section + " tr td #" + filtering_book).parents().eq(6).find("." + filtering_section).hasClass('active')) {
  console.log("coming from a search result // section panel is already opened // @ 1 sec");
        // otherwise otherwise open it
      } else {
        $("#" + filtering_section + " tr td #" + filtering_book).parents().eq(6).find("." + filtering_section).trigger("click");
  console.log("coming from a search result // we had to open the section panel // @ 1 sec");
      }
    }, 1000);


// set time out seq // is needed to give time to open section panel // triggers clicks in browsing mode after a click in the search results
   setTimeout(function() {

      // trigger the click in the browsing mode
      $("#" + filtering_section + " tr td #" + filtering_book).trigger({type: 'click', which: 1});
  console.log("coming from a search result // we triggered the click on the book // @ 2 sec");
      // trigger the click in the browsing mode
      $("#example-browsing_mode_nav_left_Chapters tr td #" + filtering_chapter).trigger({type: 'click', which: 1});
  console.log("coming from a search result // we triggered the click on the chapter // @ 2 sec");
      // trigger the click in the browsing mode
      $("#example-browsing_mode_nav_left_Verses tr td #" + filtering_verse).trigger("click");
		  console.log("coming from a search result // we triggered the click on the verse // @ 2 sec");

   }, 2000);

// set time out seq // is not needed
//    setTimeout(function() {

      // highlight the book
      $("#" + filtering_section + " tr td #" + filtering_book).css("border", "1px solid green").css("background", "rgba(0, 0, 0, 0.4)").addClass("book_is_selected");
		  console.log("coming from a search result // we highlighted the book with green // @ 3 sec");
      // highlight the chapter
      $("#example-browsing_mode_nav_left_Chapters tr td #" + filtering_chapter).css("border", "1px solid green").css("background", "rgba(0, 0, 0, 0.4)").addClass("chapter_is_selected");
		  console.log("coming from a search result // we highlighted the chapter with green // @ 3 sec");
      // highlight the verse
      $("#example-browsing_mode_nav_left_Verses tr td #" + filtering_verse).css("border", "1px solid green").css("background", "rgba(0, 0, 0, 0.4)");
		  console.log("coming from a search result // we highlighted the verse with green // @ 3 sec");

//    }, 3000);

    // this is how I switch user to land in browsing mode with the selected search result
    $(".wrap_nav_mode_filter").hide();
    $(".wrap_nav_mode_browse").show();
    $(".wrap_ajaxed").show();
    $(".wrap_ajaxed_clone_status").show();

  });
  /////////////////////////////////////////////
  // END
  /////////////////////////////////////////////

















  /////////////////////////////////////////////
  // BEGIN handle the clicks on the playlist items
  /////////////////////////////////////////////
  $('li').on('click', 'a', function(e) {

    var browseToAudio = $(this).attr("class");
    var browseToSection = $(this).attr("data-section");
    var browseToBook = $(this).attr("data-book");
    var browseToChapter = $(this).attr("data-chapter");
    var currentBrowseToAudio = $("#browse_to_audio").text();
    var currentBrowseToSection = $("#browse_to_section").text();
    var currentBrowseToBook = $("#browse_to_book").text();
    var currentBrowseToChapter = $("#browse_to_chapter").text();

      $("#browse_to_audio").text("");
      $("#browse_to_audio").append(browseToAudio);
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("");
      $("#browse_to_chapter").append(browseToChapter);
      $("#browse_to_verse").text("1");

      //check if the section panel is already opened
      if ($("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).hasClass('active')) {
		  console.log("coming from a playlist item click // section panel is already opened //");
        // otherwise otherwise open it
      } else {
        $("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).trigger("click");
		  console.log("coming from a playlist item click // we had to open the section panel //");
      }

  });
  /////////////////////////////////////////////
  // END handle the clicks on the playlist items
  /////////////////////////////////////////////

  /////////////////////////////////////////////
  // BEGIN handle the clicks on the player next item
  /////////////////////////////////////////////
  $('.sm2-button-bd').on('click', 'a.next', function(e) {


setTimeout(function() {

    var browseToAudio = $("ul").find("li.selected").find("a").attr("class");
    var browseToSection = $("ul").find("li.selected").find("a").attr("data-section");
    var browseToBook = $("ul").find("li.selected").find("a").attr("data-book");
    var browseToChapter = $("ul").find("li.selected").find("a").attr("data-chapter");
    var currentBrowseToAudio = $("#browse_to_audio").text();
    var currentBrowseToSection = $("#browse_to_section").text();
    var currentBrowseToBook = $("#browse_to_book").text();
    var currentBrowseToChapter = $("#browse_to_chapter").text();

      $("#browse_to_audio").text("");
      $("#browse_to_audio").append(browseToAudio);
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("");
      $("#browse_to_chapter").append(browseToChapter);
      $("#browse_to_verse").text("1");



      //check if the section panel is already opened
      if ($("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).hasClass('active')) {
		  console.log("coming from a playlist item click // section panel is already opened //");
        // otherwise otherwise open it
      } else {
        $("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).trigger("click");
		  console.log("coming from a playlist item click // we had to open the section panel //");
      }

}, 50);

  });
  /////////////////////////////////////////////
  // END handle the clicks on the player next item
  /////////////////////////////////////////////

  /////////////////////////////////////////////
  // BEGIN handle the clicks on the player previous item
  /////////////////////////////////////////////
  $('.sm2-button-bd').on('click', 'a.previous', function(e) {


setTimeout(function() {

    var browseToAudio = $("ul").find("li.selected").find("a").attr("class");
    var browseToSection = $("ul").find("li.selected").find("a").attr("data-section");
    var browseToBook = $("ul").find("li.selected").find("a").attr("data-book");
    var browseToChapter = $("ul").find("li.selected").find("a").attr("data-chapter");
    var currentBrowseToAudio = $("#browse_to_audio").text();
    var currentBrowseToSection = $("#browse_to_section").text();
    var currentBrowseToBook = $("#browse_to_book").text();
    var currentBrowseToChapter = $("#browse_to_chapter").text();

      $("#browse_to_audio").text("");
      $("#browse_to_audio").append(browseToAudio);
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("");
      $("#browse_to_chapter").append(browseToChapter);
      $("#browse_to_verse").text("1");



      //check if the section panel is already opened
      if ($("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).hasClass('active')) {
		  console.log("coming from a playlist item click // section panel is already opened //");
        // otherwise otherwise open it
      } else {
        $("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).trigger("click");
		  console.log("coming from a playlist item click // we had to open the section panel //");
      }

}, 50);

  });
  /////////////////////////////////////////////
  // END handle the clicks on the player previous item
  /////////////////////////////////////////////






















  //////////////////////////////////////////////
  // working click on a word to search // later will make this will render on the ref right panel
  // good old solution by Aliester @ stackoverflow.com
  $('#example-main tbody').on('click', 'tr td .w', function() {
    var wordToSearch = (this.innerHTML)
    var regExSearch = '^' + wordToSearch + '$';
    var example_main = $('.example_main').DataTable();

    // ... do something with rowData
    // alert('You clicked on the word ' + wordToSearch);
    example_main.columns(5).search(wordToSearch, true, false).draw();
    $("input.filter_reg_eng:text").val(wordToSearch);
  });
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  // working click on a ref to search and load this full chapter
  // good old solution by Aliester @ stackoverflow.com
  /*
    $('#example-main tbody').on('click', 'tr td .load_full_chapter', function() {
  	var wordToSearch = (this.innerHTML)
  // NN to find out how to jquery regExp search innerHTML ignoring tags or ignoring certain strings
  	var regExSearch = '^' + wordToSearch +'$';
      var example_main = $('.example_main').DataTable();

      // ... do something with rowData
      // alert('You clicked on the word ' + wordToSearch);
      example_main.columns(8).search(wordToSearch, true, false).draw();
          $("input.filter_reg:text").val(wordToSearch);
    });
  */
  //////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // BEGIN interlinear / parallel toggle
  /*
  $('#example-main tbody').on('click', '.load_interlinear', function(e) {
      $(".load_interlinear").hide("slow", "linear");
      $(".load_parallel").show("slow", "linear");
    });
  $('#example-main tbody').on('click', '.load_parallel', function(e) {
      $(".load_interlinear").show("slow", "linear");
      $(".load_parallel").hide("slow", "linear");
    });
  */
  // END interlinear / parallel toggle
  //////////////////////////////////////////////////////
  /*
  //////////////////////////////////////////////////////
  // BEGIN interlinear toggle
  $('#example-main tbody').on('click', '.toggle_interlinear', function(e) {
      $(".show_interlinear").slideToggle("slow", "linear");
    });
  // END interlinear toggle
  //////////////////////////////////////////////////////


  //////////////////////////////////////////////////////
  // BEGIN topical toggle
    $('#example-main tbody').on('click', '.toggle_topical', function(e) {
      $(".show_topical").slideToggle("slow", "linear");
    });
  // END topical toggle
  // BEGIN show the modal for posting
    $('#example-main tbody').on('click', '.swiper_main_pagination_next', function(e) {
    });
  //////////////////////////////////////////////////////
  */




  /*
  /// BEGIN ////////// this is how I used to grab the verse to create the posts /////////////////////////////////////////
    $('#example-main tbody').on('click', 'tr td', function() {





  	// swiper main
      var swiper_main = new Swiper('.swiper-container', {
          paginationClickable: true,
          nextButton: '.swiper_main_pagination_next',
          prevButton: '.swiper_main_pagination_back',
          spaceBetween: 30,
          hashnav: true,
          hashnavWatchState: true,
      preventClicks: false,
      onlyExternal: true
      });










  // BEGIN swipers


  // close the modal and return to the Bible
  $('.simulated_modal_close').on('click', function(e){
  swiper_main.slideTo(0, 1000, false);
  });
  // close the modal and return to the Bible
  $('.swiper_main_pagination_next_to_typing').on('click', function(e){
  swiper_main.slideTo(2, 1000, false);
  });

  // swiper for background picker
    var swiper_bg_chooser = new Swiper(".swiper-container_bg_chooser", {
          slidesPerView: 5,
          slidesPerColumn: 2,
      paginationClickable: true,
      grabCursor: true,
      freeMode: true,
      keyboardControl: true,
      mousewheelControl: true,
      preloadImages: false,
      lazyLoading: true,
      lazyLoadingInPrevNext: true,
      lazyLoadingInPrevNextAmount: 5,
      preventClicks: false,
              scrollbar: '.swiper-scrollbar_bg_chooser',
          scrollbarHide: true,
          spaceBetween: 3
    });

  // END swipers
  // BEGIN verse and ref grabbing
  	var verseToGrab = $(this).parent().find('div.output_text_reg').text();
  	var refToGrab = $(this).parent().find('div.ref_reg').text();
  //	var regExSearch = '^' + verseToGrab +'$';
  //    var example_main = $('.example_main').DataTable();

      // ... do something with rowData
  //     alert('You grabbed the verse ' + verseToGrab);
  	 $(".square__content2").find(".textFitted").text( verseToGrab );
  	 $(".square__content3").find(".textFitted").text( refToGrab );
  	 $(".rectangle__content2").find(".textFitted").text( verseToGrab );
  	 $(".rectangle__content3").find(".textFitted").text( refToGrab );
  //    example_main.columns(8).search(verseToGrab, true, false).draw();




  // make the refs clean in order to build the urls
    var clean_url = ( refToGrab )
      .replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, "-")
      .replace(/\s+/g, "-");




  // every time user hits "post" we need to reset to make sure they get the right verse
  $(".swiper_main_pagination_next_to_url").hide();

  $(".link_to_urls").replaceWith('<span class="link_to_urls"></span>');

  $(".rectangle").attr("class", "rectangle");

  $(".make_it_white").on("click", function(e) {
    $(".rectangle").attr("class", "rectangle").addClass("bgc-0000");
    $(".link_to_urls").replaceWith('<a class="link_to_urls" href="http://www.solidarityfarm.org/english/white/' + clean_url + '.html" target="_blank">continue</a>');
    $(".swiper_main_pagination_next_to_url").show();
  });






  // BEGIN rectangle background images
  $( ".bg-00001" ).on( "click", function(e) {$( ".rectangle" ).css({"background-image": "url('http://www.solidarityfarm.org/images/bg/00001.jpg')","background-repeat": "no-repeat"});});
  $( ".bg-00002" ).on( "click", function(e) {$( ".rectangle" ).css({"background-image": "url('http://www.solidarityfarm.org/images/bg/00002.jpg')","background-repeat": "no-repeat"});});
  $( ".bg-00003" ).on( "click", function(e) {$( ".rectangle" ).css({"background-image": "url('http://www.solidarityfarm.org/images/bg/00003.jpg')","background-repeat": "no-repeat"});});
  // END rectangle background images




  // BEGIN rectangle background colors
  $(".bgc-0001").on("click", function(e) {
    $(".rectangle").attr("class", "rectangle").addClass("bgc-0001");
    $(".link_to_urls").replaceWith('<a class="link_to_urls" href="http://www.solidarityfarm.org/english/black/' + clean_url + '.html" target="_blank">continue</a>');
      $(".swiper_main_pagination_next_to_url").show();

  });
  $(".bgc-0002").on("click", function(e) {
    $(".rectangle").attr("class", "rectangle").addClass("bgc-0002");
    $(".link_to_urls").replaceWith('<a class="link_to_urls" href="http://www.solidarityfarm.org/english/gray/' + clean_url + '.html" target="_blank">continue</a>');
      $(".swiper_main_pagination_next_to_url").show();

  });
  $(".bgc-0003").on("click", function(e) {
    $(".rectangle").attr("class", "rectangle").addClass("bgc-0003");
    $(".link_to_urls").replaceWith('<a class="link_to_urls" href="http://www.solidarityfarm.org/english/red/' + clean_url + '.html" target="_blank">continue</a>');
      $(".swiper_main_pagination_next_to_url").show();

  });
  $( ".bgc-0004" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0004")});
  $( ".bgc-0005" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0005")});
  $( ".bgc-0006" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0006")});
  $( ".bgc-0007" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0007")});
  $( ".bgc-0008" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0008")});
  $( ".bgc-0009" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0009")});
  $( ".bgc-0010" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0010")});
  $( ".bgc-0011" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0011")});
  $( ".bgc-0012" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0012")});
  $( ".bgc-0013" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0013")});
  $( ".bgc-0014" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0014")});
  $( ".bgc-0015" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0015")});
  $( ".bgc-0016" ).on( "click", function(e) {$( ".rectangle" ).attr('class', 'rectangle').addClass("bgc-0016")});
  // END rectangle background colors








      ///////// BEGIN textFit customization
      textFit(document.getElementsByClassName("textFit_add_creation_title"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_preview_message"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 60
      });
      textFit(document.getElementsByClassName("textFit_verse"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_ref"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_ad"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_create_button"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });

      window.addEventListener("resize", function(event) {
      textFit(document.getElementsByClassName("textFit_add_creation_title"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_preview_message"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 60
      });
      textFit(document.getElementsByClassName("textFit_verse"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_ref"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_ad"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      textFit(document.getElementsByClassName("textFit_create_button"), {
        multiLine: !0,
        minFontSize: 10,
        maxFontSize: 70
      });
      });
      window.addEventListener("change", function(event) {
        textFit(document.getElementsByClassName("textFit_preview_message"), {
          multiLine: !0,
          minFontSize: 10,
          maxFontSize: 60
        });
      });



  var inputBox = document.getElementById('input_to_edit_message');
  inputBox.onkeyup = function(){
      document.getElementById('edited_result').innerHTML = inputBox.value;
          textFit(document.getElementsByClassName("textFit_preview_message"), {
          multiLine: 0,
          minFontSize: 10,
          maxFontSize: 60
        });
  }






      ///////// END textFit customization























    });

  /// BEGIN ////////// this is how I used to grab the verse to create the posts /////////////////////////////////////////
  */




  // reset all & books & chapters & verses
  $('#reset_all').on('click', function() {
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    var example_nav_left_Chapters_status = $('.example_nav_left_Chapters_status').DataTable();
    var example_nav_left_Verses_status = $('.example_nav_left_Verses_status').DataTable();
    example_main.columns(1).search("").draw();
    example_main.columns(2).search("").draw();
    example_main.columns(3).search("").draw();
    example_nav_left_Books_status.columns(0).search("").draw();
    example_nav_left_Chapters_status.columns(1).search("").draw();
    example_nav_left_Verses_status.columns(1).search("").draw();
  });
  $('#reset_books').on('click', function() {
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    example_main.columns(1).search("").draw();
    example_nav_left_Books_status.columns(0).search("").draw();
  });
  $('#reset_chapters').on('click', function() {
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Chapters_status = $('.example_nav_left_Chapters_status').DataTable();
    example_main.columns(2).search("").draw();
    example_nav_left_Chapters_status.columns(1).search("").draw();
  });
  $('#reset_verses').on('click', function() {
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Verses_status = $('.example_nav_left_Verses_status').DataTable();
    example_main.columns(3).search("").draw();
    example_nav_left_Verses_status.columns(1).search("").draw();
  });




});
////////////////////////////////////////////
// BEGIN loads only if user wants to search
////////////////////////////////////////////

});

/////////////////////////////////
// END datatables example-main
/////////////////////////////////

///////// BEGIN document ready for all nav_left and browsing_mode_nav_left datatables
$(document).ready(function() {
  ///////// BEGIN document ready for all nav_left and browsing_mode_nav_left datatables

  /////////////////////////////////
  // BEGIN datatables example-nav_left_Teaching
  /////////////////////////////////
  var table_nav_left_Teaching = $('#example-nav_left_Teaching').DataTable({
    "dom": "t",
    "ajax": "../nav/_______dt_nav_left_Teaching.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Teaching tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Teaching.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Teaching
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_FormerProphets
  /////////////////////////////////
  var table_nav_left_FormerProphets = $('#example-nav_left_FormerProphets').DataTable({
    "ajax": "../nav/_______dt_nav_left_FormerProphets.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_FormerProphets tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_FormerProphets.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_FormerProphets
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_LatterProphets
  /////////////////////////////////
  var table_nav_left_LatterProphets = $('#example-nav_left_LatterProphets').DataTable({
    "ajax": "../nav/_______dt_nav_left_LatterProphets.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_LatterProphets tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_LatterProphets.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_LatterProphets
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_TheTwelve
  /////////////////////////////////
  var table_nav_left_TheTwelve = $('#example-nav_left_TheTwelve').DataTable({
    "ajax": "../nav/_______dt_nav_left_TheTwelve.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_TheTwelve tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_TheTwelve.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_TheTwelve
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_ScrollsOfTruth
  /////////////////////////////////
  var table_nav_left_ScrollsOfTruth = $('#example-nav_left_ScrollsOfTruth').DataTable({
    "ajax": "../nav/_______dt_nav_left_ScrollsOfTruth.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_ScrollsOfTruth tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_ScrollsOfTruth.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_ScrollsOfTruth
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_FiveScrolls
  /////////////////////////////////
  var table_nav_left_FiveScrolls = $('#example-nav_left_FiveScrolls').DataTable({
    "ajax": "../nav/_______dt_nav_left_FiveScrolls.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_FiveScrolls tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_FiveScrolls.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_FiveScrolls
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_OtherScrolls
  /////////////////////////////////
  var table_nav_left_OtherScrolls = $('#example-nav_left_OtherScrolls').DataTable({
    "ajax": "../nav/_______dt_nav_left_OtherScrolls.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_OtherScrolls tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_OtherScrolls.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_OtherScrolls
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_Messiah
  /////////////////////////////////
  var table_nav_left_Messiah = $('#example-nav_left_Messiah').DataTable({
    "ajax": "../nav/_______dt_nav_left_Messiah.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Messiah tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Messiah.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Messiah
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_Emissaries
  /////////////////////////////////
  var table_nav_left_Emissaries = $('#example-nav_left_Emissaries').DataTable({
    "ajax": "../nav/_______dt_nav_left_Emissaries.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Emissaries tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Emissaries.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Emissaries
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_Assemblies
  /////////////////////////////////
  var table_nav_left_Assemblies = $('#example-nav_left_Assemblies').DataTable({
    "ajax": "../nav/_______dt_nav_left_Assemblies.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Assemblies tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Assemblies.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Assemblies
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_Disciples
  /////////////////////////////////
  var table_nav_left_Disciples = $('#example-nav_left_Disciples').DataTable({
    "ajax": "../nav/_______dt_nav_left_Disciples.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Disciples tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Disciples.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Disciples
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-nav_left_Vision
  /////////////////////////////////
  var table_nav_left_Vision = $('#example-nav_left_Vision').DataTable({
    "ajax": "../nav/_______dt_nav_left_Vision.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Vision tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Vision.row(this).data();
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(1).search(rowData[0]).draw();
    example_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Vision
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-nav_left_Chapters
  /////////////////////////////////
  var table_nav_left_Chapters = $('#example-nav_left_Chapters').DataTable({
    "ajax": "../nav/_______dt_nav_left_Chapters.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="menu_chapter_reg">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Chapters tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Chapters.row(this).data();
    var regExSearch = '^' + rowData + '$';
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Chapters_status = $('.example_nav_left_Chapters_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(2).search(regExSearch, true, false).draw();
    example_nav_left_Chapters_status.columns(1).search(regExSearch, true, false).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Chapters
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-nav_left_Verses
  /////////////////////////////////
  var table_nav_left_Verses = $('#example-nav_left_Verses').DataTable({
    "ajax": "../nav/_______dt_nav_left_Verses.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="menu_verse_reg">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-nav_left_Verses tbody').on('click', 'tr', function() {
    var rowData = table_nav_left_Verses.row(this).data();
    var regExSearch = '^' + rowData + '$';
    var example_main = $('.example_main').DataTable();
    var example_nav_left_Verses_status = $('.example_nav_left_Verses_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(3).search(regExSearch, true, false).draw();
    example_nav_left_Verses_status.columns(1).search(regExSearch, true, false).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-nav_left_Verses
  ////////////////////////////////////////////




  /////////////////////////////////
  // BEGIN datatables example-nav_left_Books_status
  /////////////////////////////////
  var table_nav_left_Books_status = $('#example-nav_left_Books_status').DataTable({
    "ajax": "../nav/_______dt_nav_left_Books_status.txt",
    "dom": "t",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "pageLength": 1,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling looking_inside_text_align_left">filtering ' + row[3] + '</div>';
      },
      "targets": 1,
      "visible": true
    }]
  });
  ////////////////////////////////////////////
  // END datatables example-nav_left_Books_status
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-nav_left_Chapters_status
  /////////////////////////////////
  var table_nav_left_Chapters_status = $('#example-nav_left_Chapters_status').DataTable({
    "ajax": "../nav/_______dt_nav_left_Chapters_status.txt",
    "dom": "t",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "pageLength": 1,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[2] + '</div>';
      },
      "targets": 1,
      "visible": true
    }]
  });
  ////////////////////////////////////////////
  // END datatables example-nav_left_Chapters_status
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-nav_left_Verses_status
  /////////////////////////////////
  var table_nav_left_Verses_status = $('#example-nav_left_Verses_status').DataTable({
    "ajax": "../nav/_______dt_nav_left_Verses_status.txt",
    "dom": "t",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "pageLength": 1,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[3] + '</div>';
      },
      "targets": 1,
      "visible": true
    }]
  });
  ////////////////////////////////////////////
  // END datatables example-nav_left_Verses_status
  ////////////////////////////////////////////




  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Teaching
  /////////////////////////////////
  var table_browsing_mode_nav_left_Teaching = $('#s1').DataTable({
    "dom": "t",
    "ajax": "../nav/_______dt_nav_left_Teaching_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s1 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Teaching.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Teaching
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_FormerProphets
  /////////////////////////////////
  var table_browsing_mode_nav_left_FormerProphets = $('#s2').DataTable({
    "ajax": "../nav/_______dt_nav_left_FormerProphets_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s2 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_FormerProphets.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_FormerProphets
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_LatterProphets
  /////////////////////////////////
  var table_browsing_mode_nav_left_LatterProphets = $('#s3').DataTable({
    "ajax": "../nav/_______dt_nav_left_LatterProphets_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s3 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_LatterProphets.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_LatterProphets
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_TheTwelve
  /////////////////////////////////
  var table_browsing_mode_nav_left_TheTwelve = $('#s4').DataTable({
    "ajax": "../nav/_______dt_nav_left_TheTwelve_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s4 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_TheTwelve.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_TheTwelve
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_ScrollsOfTruth
  /////////////////////////////////
  var table_browsing_mode_nav_left_ScrollsOfTruth = $('#s5').DataTable({
    "ajax": "../nav/_______dt_nav_left_ScrollsOfTruth_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s5 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_ScrollsOfTruth.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_ScrollsOfTruth
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_FiveScrolls
  /////////////////////////////////
  var table_browsing_mode_nav_left_FiveScrolls = $('#s6').DataTable({
    "ajax": "../nav/_______dt_nav_left_FiveScrolls_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s6 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_FiveScrolls.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_FiveScrolls
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_OtherScrolls
  /////////////////////////////////
  var table_browsing_mode_nav_left_OtherScrolls = $('#s7').DataTable({
    "ajax": "../nav/_______dt_nav_left_OtherScrolls_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s7 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_OtherScrolls.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_OtherScrolls
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Messiah
  /////////////////////////////////
  var table_browsing_mode_nav_left_Messiah = $('#s8').DataTable({
    "ajax": "../nav/_______dt_nav_left_Messiah_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s8 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Messiah.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Messiah
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Emissaries
  /////////////////////////////////
  var table_browsing_mode_nav_left_Emissaries = $('#s9').DataTable({
    "ajax": "../nav/_______dt_nav_left_Emissaries_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s9 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Emissaries.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Emissaries
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Assemblies
  /////////////////////////////////
  var table_browsing_mode_nav_left_Assemblies = $('#s10').DataTable({
    "ajax": "../nav/_______dt_nav_left_Assemblies_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s10 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Assemblies.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Assemblies
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Disciples
  /////////////////////////////////
  var table_browsing_mode_nav_left_Disciples = $('#s11').DataTable({
    "ajax": "../nav/_______dt_nav_left_Disciples_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s11 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Disciples.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Disciples
  ////////////////////////////////////////////

  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Vision
  /////////////////////////////////
  var table_browsing_mode_nav_left_Vision = $('#s12').DataTable({
    "ajax": "../nav/_______dt_nav_left_Vision_browse.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_book_wrapped"><div class="menu_book_heb">' + row[1] + '</div>' + '<div class="menu_book_tra">' + row[2] + '</div>' + '<div class="menu_book_reg">' + row[3] + '</div></div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#s12 tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Vision.row(this).data();
    var example_browsing_mode_nav_left_Books_status = $('.example_browsing_mode_nav_left_Books_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Books_status.columns(0).search(rowData[0]).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Vision
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Chapters
  /////////////////////////////////
  var table_browsing_mode_nav_left_Chapters = $('#example-browsing_mode_nav_left_Chapters').DataTable({
    "ajax": "../nav/_______dt_nav_left_Chapters.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_chapter_reg">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-browsing_mode_nav_left_Chapters tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Chapters.row(this).data();
    var regExSearch = '^' + rowData + '$';
    var example_browsing_mode_nav_left_Chapters_status = $('.example_browsing_mode_nav_left_Chapters_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Chapters_status.columns(1).search(regExSearch, true, false).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Chapters
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Verses
  /////////////////////////////////
  var table_browsing_mode_nav_left_Verses = $('#example-browsing_mode_nav_left_Verses').DataTable({
    "ajax": "../nav/_______dt_nav_left_Verses.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "searching": false,
    "paging": false,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div id="' + row[0] + '" class="menu_verse_reg">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": true
    }]
  });
  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-browsing_mode_nav_left_Verses tbody').on('click', 'tr', function() {
    var rowData = table_browsing_mode_nav_left_Verses.row(this).data();
    var regExSearch = '^' + rowData + '$';
    var example_browsing_mode_nav_left_Verses_status = $('.example_browsing_mode_nav_left_Verses_status').DataTable();
    // ... do something with rowData
    //    alert('You clicked on ' + rowData[2] + '\'s row');
    example_browsing_mode_nav_left_Verses_status.columns(1).search(regExSearch, true, false).draw();
  });
  //////////////////////////////////////////////
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Verses
  ////////////////////////////////////////////




  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Books_status
  /////////////////////////////////
  var table_browsing_mode_nav_left_Books_status = $('#example-browsing_mode_nav_left_Books_status').DataTable({
    "ajax": "../nav/_______dt_browsing_mode_nav_left_Books_status.txt",
    "dom": "t",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "pageLength": 1,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling looking_inside_text_align_left">' + row[3] + '</div>';
      },
      "targets": 1,
      "visible": true
    }]
  });
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Books_status
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Chapters_status
  /////////////////////////////////
  var table_browsing_mode_nav_left_Chapters_status = $('#example-browsing_mode_nav_left_Chapters_status').DataTable({
    "ajax": "../nav/_______dt_browsing_mode_nav_left_Chapters_status.txt",
    "dom": "t",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "pageLength": 1,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[2] + '</div>';
      },
      "targets": 1,
      "visible": true
    }]
  });
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Chapters_status
  ////////////////////////////////////////////
  /////////////////////////////////
  // BEGIN datatables example-browsing_mode_nav_left_Verses_status
  /////////////////////////////////
  var table_browsing_mode_nav_left_Verses_status = $('#example-browsing_mode_nav_left_Verses_status').DataTable({
    "ajax": "../nav/_______dt_browsing_mode_nav_left_Verses_status.txt",
    "dom": "t",
    "autoWidth": false,
    "deferRender": true,
    "info": false,
    "pageLength": 1,
    "ordering": false,
    "columnDefs": [{
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[0] + '</div>';
      },
      "targets": 0,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="status_styling">' + row[3] + '</div>';
      },
      "targets": 1,
      "visible": true
    }]
  });
  ////////////////////////////////////////////
  // END datatables example-browsing_mode_nav_left_Verses_status
  ////////////////////////////////////////////




  ///////// END document ready for all nav_left and browsing_mode_nav_left datatables
});
///////// END document ready for all nav_left and browsing_mode_nav_left datatables




$(document).ready(function() {


  //////////////////////////////////////////////
  // solution by Aliester @ stackoverflow.com
  $('#example-main tbody tr').on('click', 'td', function() {
    var rowData = example_main.row(this).data();
    var regExSearch = '^' + rowData + '$';
    var example_main = $('.example_main').DataTable();
    // ... do something with rowData
    alert('You clicked on ' + rowData[2] + '\'s row');
    example_main.columns(2).search(regExSearch, true, false).draw();
  });
  //////////////////////////////////////////////

});




///////////////////////////////////
// BEGIN datatables ref_right
///////////////////////////////////
$(document).ready(function() {

  var table_main_ref_right = $('#example-main_ref_right').DataTable({
    "initComplete": function() {
      var api = this.api();
      api.$('td').click(function() {
        api.search(this.innerHTML).draw();
      });
    },

    "search": {
      "smart": false
    },
    dom: "t",
    language: {
      url: '../lang/English_dictionaries.json'
    },
    mark: {
      "filter": [".mark_ignore"],
      "caseSensitive": true
    },
    "ajax": "../ref/_______o_tE_43_dt_main_ref_right_sampler_small.txt",
    "autoWidth": false,
    "deferRender": true,
    "info": true,
    "pagingType": "simple",
    "pageLength": 10,
    "ordering": false,
    "scrollX": false,
    "scrollY": true,
    // when initialization is completed then apply scroll plugin
    "fnInitComplete": function() {
      $('.dataTables_scrollBody').perfectScrollbar();
    },
    //on paginition page 2,3.. often scroll shown, so reset it and assign it again
    "fnDrawCallback": function(oSettings) {
      $('.dataTables_scrollBody').perfectScrollbar('destroy').perfectScrollbar();
    },
    "initComplete": function() {
      var api = this.api();
      api.$('#example-main_ref_right tbody td').click(function() {
        api.table_main_ref_right.columns(15).search(this.innerHTML).draw();
      });
    },

    "order": false,

    "columnDefs": [{
      "targets": [0, 1, 2, 3, 4, 5, 6, 7],
      "visible": false
    }, {
      "type": "html",
      "targets": '_all'
    }, {}, {
      "render": function(data, type, row, full, meta) {
        return '<div class="line_0_strong_num">' + row[0] + '</div>' + '<div class="line_1_word_orig">' + row[1] + '</div>' + '<div class="line_2_word_trans">' + row[2] + '</div>' + '<div class="line_3_strong_def">' + '<div class="item_colon">Strong\'s Dictionary: </div>' + row[3] + '</div>' + '<div class="line_4_bdbtha_def">' + row[4] + '</div>' + '<div class="line_5_part_of_speech">' + '<span class="item_colon">Part of Speech: </span>' + row[5] + '</div>' + '<div class="line_6_deriv_rel">' + '<span class="item_colon">Derived/Related: </span>' + row[6] + '</div>' + '<div class="line_7_kjb_occ">' + '<span class="item_colon">Occurrences in KJB Pure Cambridge: </span>' + row[7] + '</div>' + '<div class="item_colon">' + row[8] + '</div>' + '<div class="">' + row[9] + '</div>' + '<div class="">' + row[10] + '</div>';
      },
      "targets": 8,
      "visible": true
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="ref_tra"><span class="ref_bk_tra">' + row[4] + '</span></div><div class="output_text_tra">' + row[9] + '</div>';
      },
      "targets": 9,
      "visible": false
    }, {
      "render": function(data, type, row, full, meta) {
        return '<div class="">' + row[0] + '</div>';
      },
      "targets": 10,
      "visible": false
    }]
  });




  // solution by http://stackoverflow.com/users/870729/cale-b
  //  This is my input to do smart searches in English. Use "" quotes like in google
  $('.filter_reg').on('keyup', function(e) {
    // If the length is 3 or more characters, or the user pressed ENTER, search
    if (this.value.length >= 3 || e.keyCode == 13) {
      table_main_ref_right.columns(8).search(this.value).draw();
    }
    // Ensure we clear the search if they backspace far enough
    if (this.value == "") {
      table_main_ref_right.columns(8).search(this.value).draw();
    }
    return;
  });

  // solution by http://stackoverflow.com/users/870729/cale-b
  //  This is my input to do smart searches in English. Use "" quotes like in google
  $('.filter_tra').on('keyup', function(e) {
    // If the length is 3 or more characters, or the user pressed ENTER, search
    if (this.value.length >= 3 || e.keyCode == 13) {
      table_main_ref_right.columns(9).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
    }
    // Ensure we clear the search if they backspace far enough
    if (this.value == "") {
      table_main_ref_right.columns(9).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
    }
    return;
  });

  // solution by http://stackoverflow.com/users/870729/cale-b
  //  This is my input to do smart searches in English. Use "" quotes like in google
  $('.filter_heb').on('keyup', function(e) {
    // If the length is 3 or more characters, or the user pressed ENTER, search
    if (this.value.length >= 3 || e.keyCode == 13) {
      table_main_ref_right.columns(10).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
    }
    // Ensure we clear the search if they backspace far enough
    if (this.value == "") {
      table_main_ref_right.columns(10).search(jQuery.fn.DataTable.ext.type.search.html(this.value)).draw();
    }
    return;
  });




  //////////////////////////////////////////////
  // working click on a word to search // later will make this will render on the ref right panel
  // good old solution by Aliester @ stackoverflow.com
  $('#example-main_ref_right tbody').on('click', 'tr td .word', function() {
    var wordToSearch = (this.innerHTML)
    var regExSearch = '^' + wordToSearch + '$';
    var example_main_ref_right = $('.example_main_ref_right').DataTable();

    // ... do something with rowData
    // alert('You clicked on the word ' + wordToSearch);
    example_main_ref_right.columns(8).search(wordToSearch, true, false).draw();
  });
  //////////////////////////////////////////////




  // reset all & books & chapters & verses
  $('#reset_all').on('click', function() {
    var example_main_ref_right = $('.example_main_ref_right').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    var example_nav_left_Chapters_status = $('.example_nav_left_Chapters_status').DataTable();
    var example_nav_left_Verses_status = $('.example_nav_left_Verses_status').DataTable();
    example_main_ref_right.columns(0).search("").draw();
    example_main_ref_right.columns(2).search("").draw();
    example_main_ref_right.columns(3).search("").draw();
    example_nav_left_Books_status.columns(0).search("").draw();
    example_nav_left_Chapters_status.columns(1).search("").draw();
    example_nav_left_Verses_status.columns(1).search("").draw();
  });
  $('#reset_books').on('click', function() {
    var example_main_ref_right = $('.example_main_ref_right').DataTable();
    var example_nav_left_Books_status = $('.example_nav_left_Books_status').DataTable();
    example_main_ref_right.columns(0).search("").draw();
    example_nav_left_Books_status.columns(0).search("").draw();
  });
  $('#reset_chapters').on('click', function() {
    var example_main_ref_right = $('.example_main_ref_right').DataTable();
    var example_nav_left_Chapters_status = $('.example_nav_left_Chapters_status').DataTable();
    example_main_ref_right.columns(2).search("").draw();
    example_nav_left_Chapters_status.columns(1).search("").draw();
  });
  $('#reset_verses').on('click', function() {
    var example_main_ref_right = $('.example_main_ref_right').DataTable();
    var example_nav_left_Verses_status = $('.example_nav_left_Verses_status').DataTable();
    example_main_ref_right.columns(3).search("").draw();
    example_nav_left_Verses_status.columns(1).search("").draw();
  });




});



///////////////////////////////////
// END datatables ref_right
///////////////////////////////////




/*
// slimScroll
$(document).ready(function() {
  $('.slimscroll-left').slimScroll({
    width: '160px',
    height: 'calc(100vh - 240px)',
    size: '2px',
    position: 'left',
    color: 'red',
    alwaysVisible: true,
    distance: '3px',
    railVisible: true,
    railColor: '#222',
    railOpacity: 0.3,
    wheelStep: 3,
    allowPageScroll: false,
    disableFadeOut: false
  });
  $('.slimscroll-right').slimScroll({
    width: '160px',
    height: 'calc(100vh - 240px)',
    size: '2px',
    position: 'right',
    color: 'red',
    alwaysVisible: true,
    distance: '3px',
    railVisible: true,
    railColor: '#222',
    railOpacity: 0.3,
    wheelStep: 3,
    allowPageScroll: false,
    disableFadeOut: false
  });
});


*/
////////////

///////////////////////////////////

// BEGIN change search input placeholders
$(document).ready(function() {
  // change placeholder in the reg search box
  $(".click_to_change_data_hint").click(function() {
    var reg_placeholder = $(".filter_reg").data('hint_reg')
    var added_hint = $(this).data('hint_reg')
    $(".filter_reg").attr('placeholder', reg_placeholder + ' (' + added_hint + ')')
  });
  // change placeholder in the tra search box
  $(".click_to_change_data_hint").click(function() {
    var tra_placeholder = $(".filter_tra").data('hint_tra')
    var added_hint = $(this).data('hint_tra')
    $(".filter_tra").attr('placeholder', tra_placeholder + ' (' + added_hint + ')')
  });
  // change placeholder in the heb search box
  $(".click_to_change_data_hint").click(function() {
    var heb_placeholder = $(".filter_heb").data('hint_heb')
    var added_hint = $(this).data('hint_heb')
    $(".filter_heb").attr('placeholder', heb_placeholder + ' (' + added_hint + ')')
  });
  // END change search input placeholders

  // BEGIN search input by https://codepen.io/sdaitzman/pen/rmqfB
  document.addEventListener("", function() {}, true);
  // END search input by https://codepen.io/sdaitzman/pen/rmqfB
  // BEGIN #accordion_calibrate / probably the same for all accordions
  // Collapse accordion every time dropdown is shown
  $('.dropdown-accordion').on('show.bs.dropdown', function(event) {
    var accordion = $(this).find($(this).data('accordion'));
    accordion.find('.panel-collapse.in').collapse('hide');
  });
  // Prevent dropdown to be closed when we click on an accordion link
  $('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
  });
});
// END #accordion_calibrate / probably the same for all accordions




/////////////////////////////////////////
// BEGIN all the togglers and close buttons
/////////////////////////////////////////
/////////////////////////////////////////
// BEGIN nav_top togglers
/////////////////////////////////////////
$(document).ready(function() {
  $(".nav_top_console_show").hide();
  $('#nav_top').on('click', '.nav_top_console', function(e) {
    $(".nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_top_console_show").fadeToggle("slow", "linear");
  });
  $(".nav_top_user_show").hide();
  $('#nav_top').on('click', '.nav_top_user', function(e) {
    $(".nav_top_console_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_top_user_show").fadeToggle("slow", "linear");
  });
  $(".nav_top_terminal_show").hide();
  $('#nav_top').on('click', '.nav_top_terminal', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_top_terminal_show").fadeToggle("slow", "linear");
  });
  /////////////////////////////////////////
  // END nav_top togglers
  /////////////////////////////////////////
  // BEGIN nav_bot togglers
  /////////////////////////////////////////
  $(".nav_bot_admin_show").hide();
  $('#nav_bot').on('click', '.nav_bot_admin', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_bot_admin_show").fadeToggle("slow", "linear");
  });
  $(".nav_bot_tools_show").hide();
  $('#nav_bot').on('click', '.nav_bot_tools', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_bot_tools_show").fadeToggle("slow", "linear");
  });
  $(".nav_bot_made_show").hide();
  $('#nav_bot').on('click', '.nav_bot_made', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_bot_made_show").fadeToggle("slow", "linear");
  });
  $(".nav_bot_config_show").hide();
  $('#nav_bot').on('click', '.nav_bot_config', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_bot_config_show").fadeToggle("slow", "linear");
  });
  $(".nav_bot_help_show").hide();
  $('#nav_bot').on('click', '.nav_bot_help', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").hide();
    $(".nav_bot_help_show").fadeToggle("slow", "linear");
  });
  /////////////////////////////////////////
  // END nav_bot togglers
  /////////////////////////////////////////
  // BEGIN nav_inside togglers
  /////////////////////////////////////////
  // inside the console /////////////
  // notes
  $(".toggle_show_hide_notes").click(function() {
    $(".toggle_show_hide_notes").toggle("slow");
  });

  // audio
  $(".toggle_show_hide_audio").click(function() {
    $(".toggle_show_hide_audio").toggle("slow");
  });

  // lists
  $(".toggle_expand_collapse_lists").click(function() {
    $(".toggle_expand_collapse_lists").toggle("slow");
  });

  // prayer
  $(".nav_inner_prayer_show").hide();
  $('#nav_inside_console').on('click', '.nav_inner_prayer', function(e) {
    $(".nav_top_console_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show").hide();
    $(".nav_inner_prayer_show").fadeToggle("slow", "linear");
  });
  // study
  $(".nav_inner_study_show").hide();
  $('#nav_inside_console').on('click', '.nav_inner_study', function(e) {
    $(".nav_top_console_show, .nav_inner_prayer_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show").hide();
    $(".nav_inner_study_show").fadeToggle("slow", "linear");
  });
  // giving
  $(".nav_inner_giving_show").hide();
  $('#nav_inside_console').on('click', '.nav_inner_giving', function(e) {
    $(".nav_top_console_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_followup_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show").hide();
    $(".nav_inner_giving_show").fadeToggle("slow", "linear");
  });
  // followup
  $(".nav_inner_followup_show").hide();
  $('#nav_inside_console').on('click', '.nav_inner_followup', function(e) {
    $(".nav_top_console_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show").hide();
    $(".nav_inner_followup_show").fadeToggle("slow", "linear");
  });
  // inside the user /////////////
  // get my own
  $(".nav_inner_getmyown_show").hide();
  $('#nav_inside_user').on('click', '.nav_inner_getmyown', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show").hide();
    $(".nav_inner_getmyown_show").fadeToggle("slow", "linear");
  });
  // street view
  $(".nav_inner_streetview_show").hide();
  $('#nav_inside_user').on('click', '.nav_inner_streetview', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_mapview_show, .nav_inner_siteview_show").hide();
    $(".nav_inner_streetview_show").fadeToggle("slow", "linear");
  });
  // map view
  $(".nav_inner_mapview_show").hide();
  $('#nav_inside_user').on('click', '.nav_inner_mapview', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_siteview_show").hide();
    $(".nav_inner_mapview_show").fadeToggle("slow", "linear");
  });
  // site view
  $(".nav_inner_siteview_show").hide();
  $('#nav_inside_user').on('click', '.nav_inner_siteview', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show").hide();
    $(".nav_inner_siteview_show").fadeToggle("slow", "linear");
  });
  //////////////////////////////////////////
  // inside the terminal ////////////////
  // full screen
  $(".toggle_enter_exit").click(function() {
    $(".toggle_enter_exit").toggle("slow");
  });
  // layout
  $(".toggle_expand_collapse_layout").click(function() {
    $(".toggle_expand_collapse_layout").toggle("slow");
  });

  // interlinear
  $(".toggle_expand_collapse_interlinear").click(function() {
    $(".toggle_expand_collapse_interlinear").toggle("slow");
  });

  // topical
  $(".toggle_expand_collapse_topical").click(function() {
    $(".toggle_expand_collapse_topical").toggle("slow");
  });

  // audio
  $(".toggle_expand_collapse_audio").click(function() {
    $(".toggle_expand_collapse_audio").toggle("slow");
  });
  // color
  $(".toggle_expand_collapse_color").click(function() {
    $(".toggle_expand_collapse_color").toggle("slow");
  });

  // language
  $(".toggle_expand_collapse_language").click(function() {
    $(".toggle_expand_collapse_language").toggle("slow");
  });

  // learn_the_word
  $(".toggle_expand_collapse_learn_the_word").click(function() {
    $(".toggle_expand_collapse_learn_the_word").toggle("slow");
  });

  // we_do_the_word
  $(".toggle_expand_collapse_we_do_the_word").click(function() {
    $(".toggle_expand_collapse_we_do_the_word").toggle("slow");
  });

  // simple_people
  $(".toggle_expand_collapse_simple_people").click(function() {
    $(".toggle_expand_collapse_simple_people").toggle("slow");
  });

  // professionals
  $(".toggle_expand_collapse_professionals").click(function() {
    $(".toggle_expand_collapse_professionals").toggle("slow");
  });

  // businesses
  $(".toggle_expand_collapse_businesses").click(function() {
    $(".toggle_expand_collapse_businesses").toggle("slow");
  });

  // armed_forces
  $(".toggle_expand_collapse_armed_forces").click(function() {
    $(".toggle_expand_collapse_armed_forces").toggle("slow");
  });

  // public_places
  $(".toggle_expand_collapse_public_places").click(function() {
    $(".toggle_expand_collapse_public_places").toggle("slow");
  });

  // first_time_users
  $(".toggle_expand_collapse_first_time_users").click(function() {
    $(".toggle_expand_collapse_first_time_users").toggle("slow");
  });

  // who_else_is_part
  $(".toggle_expand_collapse_who_else_is_part").click(function() {
    $(".toggle_expand_collapse_who_else_is_part").toggle("slow");
  });

  // admin
  $(".toggle_expand_collapse_admin").click(function() {
    $(".toggle_expand_collapse_admin").toggle("slow");
  });

  // console
  $(".toggle_expand_collapse_console").click(function() {
    $(".toggle_expand_collapse_console").toggle("slow");
  });

  // terminal
  $(".toggle_expand_collapse_terminal").click(function() {
    $(".toggle_expand_collapse_terminal").toggle("slow");
  });

  // language_preferences
  $(".toggle_expand_collapse_language_preferences").click(function() {
    $(".toggle_expand_collapse_language_preferences").toggle("slow");
  });

  // colour_preferences
  $(".toggle_expand_collapse_colour_preferences").click(function() {
    $(".toggle_expand_collapse_colour_preferences").toggle("slow");
  });

  // fullscreen_preferences
  $(".toggle_expand_collapse_fullscreen_preferences").click(function() {
    $(".toggle_expand_collapse_fullscreen_preferences").toggle("slow");
  });

  // configure
  $(".toggle_expand_collapse_configure").click(function() {
    $(".toggle_expand_collapse_configure").toggle("slow");
  });

  // about_us
  $(".toggle_expand_collapse_about_us").click(function() {
    $(".toggle_expand_collapse_about_us").toggle("slow");
  });

  // contact_us
  $(".toggle_expand_collapse_contact_us").click(function() {
    $(".toggle_expand_collapse_contact_us").toggle("slow");
  });

  // fundraise_for_the_farm
  $(".toggle_expand_collapse_fundraise_for_the_farm").click(function() {
    $(".toggle_expand_collapse_fundraise_for_the_farm").toggle("slow");
  });

  // fund_the_farm_yourself
  $(".toggle_expand_collapse_fund_the_farm_yourself").click(function() {
    $(".toggle_expand_collapse_fund_the_farm_yourself").toggle("slow");
  });

  // invite_friends_for_mission_trip
  $(".toggle_expand_collapse_invite_friends_for_mission_trip").click(function() {
    $(".toggle_expand_collapse_invite_friends_for_mission_trip").toggle("slow");
  });

  // signup_for_your_mission_trip
  $(".toggle_expand_collapse_signup_for_your_mission_trip").click(function() {
    $(".toggle_expand_collapse_signup_for_your_mission_trip").toggle("slow");
  });


  // training
  $(".toggle_expand_collapse_training").click(function() {
    $(".toggle_expand_collapse_training").toggle("slow");
  });

  // training
  $(".toggle_expand_collapse_highlighting").click(function() {
    $(".toggle_expand_collapse_highlighting").toggle("slow");
  });

  // arrangement


  // visualization


  // statistics


  // inside the admin ////////////////
  // authenticate
  $(".nav_inner_authenticate_show").hide();
  $('#nav_inside_admin').on('click', '.nav_inner_authenticate', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_authenticate_show").fadeToggle("slow", "linear");
  });
  // edit mode


  // inside the tools ////////////////
  // calibration
  $(".nav_inner_calibrate_show").hide();
  $('#nav_inside_tools').on('click', '.nav_inner_calibrate', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_calibrate_show").fadeToggle("slow", "linear");
  });
  // highlighting


  // highlighting


  // highlighting


  // highlighting



  // inside the config ////////////////
  // language
  $(".nav_inner_language_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_language', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_language_show").fadeToggle("slow", "linear");
  });
  // inside the help ////////////////
  // training
  $(".nav_inner_training_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_training', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_training_show").fadeToggle("slow", "linear");
  });
  // beginner
  $(".nav_inner_beginner_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_beginner', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_beginner_show").fadeToggle("slow", "linear");
  });
  // intermediate
  $(".nav_inner_intermediate_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_intermediate', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_intermediate_show").fadeToggle("slow", "linear");
  });
  // advanced
  $(".nav_inner_advanced_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_advanced', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_advanced_show").fadeToggle("slow", "linear");
  });
  // chat
  $(".nav_inner_chat_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_chat', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_chat_show").fadeToggle("slow", "linear");
  });
  // email
  $(".nav_inner_email_show").hide();
  $('#nav_inside_config').on('click', '.nav_inner_email', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_email_show").fadeToggle("slow", "linear");
  });
  // inside the nav menu ////////////////
  // arrangement
  $(".nav_inner_arrangement_show").hide();
  $('#nav_inside_nav').on('click', '.nav_inner_arrangement', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show").hide();
    $(".nav_inner_arrangement_show").fadeToggle("slow", "linear");
  });
  // section
  // book
  // chapter
  // verse
  // word
  // strong's
  // definition
  // notes

  // inside the layout menu ////////////////

  // greek
  // greek trans
  // english
  // hebrew trans
  // hebrew

  // inside the config menu ////////////////

  // interlinear
  // topical
  // audio
  // language
  // edit mode
  // red
  // blue
  // green
  // brown

  // inside the made menu ////////////////

  // about
  // be a part
  // version

  // inside the help menu ////////////////

  // guided tour
  // training
  // beginner
  // intermediate
  // advanced
  // ask a question
  // requests

  /////////////////////////////////////////
  // END nav_inner togglers
  /////////////////////////////////////////

  /////////////////////////////////////////
  // BEGIN close buttons
  /////////////////////////////////////////
  $('.table_generic_col, #made_title_and_close').on('click', '.close_it', function(e) {
    $(".nav_top_console_show, .nav_top_user_show, .nav_top_terminal_show, .nav_bot_admin_show, .nav_bot_tools_show, .nav_bot_made_show, .nav_bot_config_show, .nav_bot_help_show, .nav_inner_getmyown_show, .nav_inner_streetview_show, .nav_inner_mapview_show, .nav_inner_siteview_show, .nav_inner_authenticate_show, .nav_inner_prayer_show, .nav_inner_study_show, .nav_inner_giving_show, .nav_inner_followup_show, .nav_inner_arrangement_show").fadeOut();
  });
  /////////////////////////////////////////
  // END close buttons
  /////////////////////////////////////////




  /////////////////////////////////////////
  // BEGIN nav/ref panels automatically open depending on screen sizes
  /////////////////////////////////////////
  $(document).ready(function() {

    var current_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //alert(current_width);
    //check if width is enough for left and right panels
    if (current_width >= 1024) {

      setTimeout(function() {

        $('.navbar_bot_item_left').trigger('click', function() {
          if ($('.wrap_resizeable_output').is(".nav_is_disabled") && ($('.wrap_resizeable_output').is(".ref_is_disabled"))) {
            $("#nav_panel").toggleClass("switch_left_panel");
            $("#nav_panel").toggleClass("hover_panel_left");
            $("#nav_panel").toggleClass("cbp-spmenu-left");
            $(".wrap_resizeable_output").removeClass("nav_is_disabled");
            $(".wrap_resizeable_output").addClass("nav_is_enabled");
            $(".wrap_resizeable_output").toggleClass("resize_for_nav");
          } else if ($('.wrap_resizeable_output').is(".nav_is_enabled") && ($('.wrap_resizeable_output').is(".ref_is_disabled"))) {
            $("#nav_panel").toggleClass("switch_left_panel");
            $("#nav_panel").toggleClass("hover_panel_left");
            $("#nav_panel").toggleClass("cbp-spmenu-left");
            $(".wrap_resizeable_output").removeClass("nav_is_enabled");
            $(".wrap_resizeable_output").addClass("nav_is_disabled");
            $(".wrap_resizeable_output").toggleClass("resize_for_nav");
          } else if ($('.wrap_resizeable_output').is(".nav_is_disabled") && ($('.wrap_resizeable_output').is(".ref_is_enabled"))) {
            $("#nav_panel").toggleClass("switch_left_panel");
            $("#nav_panel").toggleClass("hover_panel_left");
            $("#nav_panel").toggleClass("cbp-spmenu-left");
            $(".wrap_resizeable_output").removeClass("nav_is_disabled");
            $(".wrap_resizeable_output").addClass("nav_is_enabled");
            $(".wrap_resizeable_output").removeClass("resize_for_ref");
            $(".wrap_resizeable_output").addClass("resize_for_nav_and_ref");
          } else if ($('.wrap_resizeable_output').is(".nav_is_enabled") && ($('.wrap_resizeable_output').is(".ref_is_enabled")) && ($('.wrap_resizeable_output').is(".resize_for_nav_and_ref"))) {
            $("#nav_panel").toggleClass("switch_left_panel");
            $("#nav_panel").toggleClass("hover_panel_left");
            $("#nav_panel").toggleClass("cbp-spmenu-left");
            $(".wrap_resizeable_output").removeClass("nav_is_enabled");
            $(".wrap_resizeable_output").addClass("nav_is_disabled");
            $(".wrap_resizeable_output").removeClass("resize_for_nav_and_ref");
            $(".wrap_resizeable_output").addClass("resize_for_ref");
          }
        });
        $('.navbar_bot_item_right').trigger('click', function() {
          if ($('.wrap_resizeable_output').is(".ref_is_disabled") && ($('.wrap_resizeable_output').is(".nav_is_disabled"))) {
            $("#nav_panel").toggleClass("switch_right_panel");
            $("#nav_panel").toggleClass("hover_panel_right");
            $("#nav_panel").toggleClass("cbp-spmenu-right");
            $(".wrap_resizeable_output").removeClass("ref_is_disabled");
            $(".wrap_resizeable_output").addClass("ref_is_enabled");
            $(".wrap_resizeable_output").toggleClass("resize_for_ref");
          } else if ($('.wrap_resizeable_output').is(".ref_is_enabled") && ($('.wrap_resizeable_output').is(".nav_is_disabled"))) {
            $("#nav_panel").toggleClass("switch_right_panel");
            $("#nav_panel").toggleClass("hover_panel_right");
            $("#nav_panel").toggleClass("cbp-spmenu-right");
            $(".wrap_resizeable_output").removeClass("ref_is_enabled");
            $(".wrap_resizeable_output").addClass("ref_is_disabled");
            $(".wrap_resizeable_output").toggleClass("resize_for_ref");
          } else if ($('.wrap_resizeable_output').is(".ref_is_disabled") && ($('.wrap_resizeable_output').is(".nav_is_enabled"))) {
            $("#nav_panel").toggleClass("switch_right_panel");
            $("#nav_panel").toggleClass("hover_panel_right");
            $("#nav_panel").toggleClass("cbp-spmenu-right");
            $(".wrap_resizeable_output").removeClass("ref_is_disabled");
            $(".wrap_resizeable_output").addClass("ref_is_enabled");
            $(".wrap_resizeable_output").removeClass("resize_for_nav");
            $(".wrap_resizeable_output").addClass("resize_for_nav_and_ref");
          } else if ($('.wrap_resizeable_output').is(".ref_is_enabled") && ($('.wrap_resizeable_output').is(".nav_is_enabled")) && ($('.wrap_resizeable_output').is(".resize_for_nav_and_ref"))) {
            $("#nav_panel").toggleClass("switch_right_panel");
            $("#nav_panel").toggleClass("hover_panel_right");
            $("#nav_panel").toggleClass("cbp-spmenu-right");
            $(".wrap_resizeable_output").removeClass("ref_is_enabled");
            $(".wrap_resizeable_output").addClass("ref_is_disabled");
            $(".wrap_resizeable_output").removeClass("resize_for_nav_and_ref");
            $(".wrap_resizeable_output").addClass("resize_for_nav");
          }
        });


  $('.select_audio').trigger('click');

    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
    $(".table_chapters_col").scrollTo("table#example-browsing_mode_nav_left_Chapters tbody tr td div#1", 1000, {offset:-8});
    $(".table_verses_col").scrollTo("table#example-browsing_mode_nav_left_Verses tbody tr td div#1", 1000, {offset:-8});
      $(".wrap_ajaxed").scrollTo(0, 500, {offset:-1});
      $(".sm2-playlist-bd").scrollTo(0, 500);


      }, 2000);
    }
  });


  /////////////////////////////////////////
  // END nav/ref panels automatically open depending on screen sizes
  /////////////////////////////////////////




  /////////////////////////////////////////
  // BEGIN nav/ref panels with click
  /////////////////////////////////////////
  $('.navbar_bot_item_left').on('click', function() {
    if ($('.wrap_resizeable_output').is(".nav_is_disabled") && ($('.wrap_resizeable_output').is(".ref_is_disabled"))) {
      $("#nav_panel").toggleClass("switch_left_panel");
      $("#nav_panel").toggleClass("hover_panel_left");
      $("#nav_panel").toggleClass("cbp-spmenu-left");
      $(".wrap_resizeable_output").removeClass("nav_is_disabled");
      $(".wrap_resizeable_output").addClass("nav_is_enabled");
      $(".wrap_resizeable_output").toggleClass("resize_for_nav");
    } else if ($('.wrap_resizeable_output').is(".nav_is_enabled") && ($('.wrap_resizeable_output').is(".ref_is_disabled"))) {
      $("#nav_panel").toggleClass("switch_left_panel");
      $("#nav_panel").toggleClass("hover_panel_left");
      $("#nav_panel").toggleClass("cbp-spmenu-left");
      $(".wrap_resizeable_output").removeClass("nav_is_enabled");
      $(".wrap_resizeable_output").addClass("nav_is_disabled");
      $(".wrap_resizeable_output").toggleClass("resize_for_nav");
    } else if ($('.wrap_resizeable_output').is(".nav_is_disabled") && ($('.wrap_resizeable_output').is(".ref_is_enabled"))) {
      $("#nav_panel").toggleClass("switch_left_panel");
      $("#nav_panel").toggleClass("hover_panel_left");
      $("#nav_panel").toggleClass("cbp-spmenu-left");
      $(".wrap_resizeable_output").removeClass("nav_is_disabled");
      $(".wrap_resizeable_output").addClass("nav_is_enabled");
      $(".wrap_resizeable_output").removeClass("resize_for_ref");
      $(".wrap_resizeable_output").addClass("resize_for_nav_and_ref");
    } else if ($('.wrap_resizeable_output').is(".nav_is_enabled") && ($('.wrap_resizeable_output').is(".ref_is_enabled")) && ($('.wrap_resizeable_output').is(".resize_for_nav_and_ref"))) {
      $("#nav_panel").toggleClass("switch_left_panel");
      $("#nav_panel").toggleClass("hover_panel_left");
      $("#nav_panel").toggleClass("cbp-spmenu-left");
      $(".wrap_resizeable_output").removeClass("nav_is_enabled");
      $(".wrap_resizeable_output").addClass("nav_is_disabled");
      $(".wrap_resizeable_output").removeClass("resize_for_nav_and_ref");
      $(".wrap_resizeable_output").addClass("resize_for_ref");
    }
  });
  $('.navbar_bot_item_right').on('click', function() {
    if ($('.wrap_resizeable_output').is(".ref_is_disabled") && ($('.wrap_resizeable_output').is(".nav_is_disabled"))) {
      $("#nav_panel").toggleClass("switch_right_panel");
      $("#nav_panel").toggleClass("hover_panel_right");
      $("#nav_panel").toggleClass("cbp-spmenu-right");
      $(".wrap_resizeable_output").removeClass("ref_is_disabled");
      $(".wrap_resizeable_output").addClass("ref_is_enabled");
      $(".wrap_resizeable_output").toggleClass("resize_for_ref");
    } else if ($('.wrap_resizeable_output').is(".ref_is_enabled") && ($('.wrap_resizeable_output').is(".nav_is_disabled"))) {
      $("#nav_panel").toggleClass("switch_right_panel");
      $("#nav_panel").toggleClass("hover_panel_right");
      $("#nav_panel").toggleClass("cbp-spmenu-right");
      $(".wrap_resizeable_output").removeClass("ref_is_enabled");
      $(".wrap_resizeable_output").addClass("ref_is_disabled");
      $(".wrap_resizeable_output").toggleClass("resize_for_ref");
    } else if ($('.wrap_resizeable_output').is(".ref_is_disabled") && ($('.wrap_resizeable_output').is(".nav_is_enabled"))) {
      $("#nav_panel").toggleClass("switch_right_panel");
      $("#nav_panel").toggleClass("hover_panel_right");
      $("#nav_panel").toggleClass("cbp-spmenu-right");
      $(".wrap_resizeable_output").removeClass("ref_is_disabled");
      $(".wrap_resizeable_output").addClass("ref_is_enabled");
      $(".wrap_resizeable_output").removeClass("resize_for_nav");
      $(".wrap_resizeable_output").addClass("resize_for_nav_and_ref");
    } else if ($('.wrap_resizeable_output').is(".ref_is_enabled") && ($('.wrap_resizeable_output').is(".nav_is_enabled")) && ($('.wrap_resizeable_output').is(".resize_for_nav_and_ref"))) {
      $("#nav_panel").toggleClass("switch_right_panel");
      $("#nav_panel").toggleClass("hover_panel_right");
      $("#nav_panel").toggleClass("cbp-spmenu-right");
      $(".wrap_resizeable_output").removeClass("ref_is_enabled");
      $(".wrap_resizeable_output").addClass("ref_is_disabled");
      $(".wrap_resizeable_output").removeClass("resize_for_nav_and_ref");
      $(".wrap_resizeable_output").addClass("resize_for_nav");
    }
  });
  /////////////////////////////////////////
  // END nav/ref panels with click
  /////////////////////////////////////////
  /////////////////////////////////////////
  // BEGIN nav/ref panels with hover
  /////////////////////////////////////////
  //$( ".hover_panel_left" ).mouseenter(function() {
  //$( ".switch_left_panel" ).trigger('click');
  //  $( ".switch_left_panel" ).toggle();
  //        $(".wrap_resizeable_output").addClass("resize_for_nav");
  //});
  //$( ".cbp-spmenu-left" ).mouseleave(function() {
  //$( ".switch_left_panel" ).trigger('click');
  //  $( ".switch_left_panel" ).toggle();
  //        $(".wrap_resizeable_output").removeClass("resize_for_nav");
  //});
  //$( ".hover_panel_right" ).mouseenter(function() {
  //$( ".switch_right_panel" ).trigger('click');
  //  $( ".switch_right_panel" ).toggle();
  //        $(".wrap_resizeable_output").addClass("resize_for_ref");
  //});
  //$( ".cbp-spmenu-right" ).mouseleave(function() {
  //$( ".switch_right_panel" ).trigger('click');
  //  $( ".switch_right_panel" ).toggle();
  //        $(".wrap_resizeable_output").removeClass("resize_for_ref");
  //});
  /////////////////////////////////////////
  // END nav/ref panels with hover
  /////////////////////////////////////////

  /////////////////////////////////////////
  // BEGIN inner switches
  /////////////////////////////////////////




  /////////////////////////////////////////
  // END inner switches
  /////////////////////////////////////////

});
/////////////////////////////////////////
// END all the togglers and close buttons
/////////////////////////////////////////


/*

// fullscreen does not work with jquery 2 // NN to fix it or fix firebase feed.js to work with jquery 3

$(document).ready(function() {
/////////////////////////////////////////
// BEGIN full screen
/////////////////////////////////////////
document.getElementById("fullscreen_enter").addEventListener('click', () => {
    if (screenfull.enabled) {
        screenfull.request();
    } else {
        // Ignore or do something else
    }
});
document.getElementById("fullscreen_exit").addEventListener('click', () => {
    if (screenfull.enabled) {
screenfull.exit();
    } else {
        // Ignore or do something else
    }
});
/////////////////////////////////////////
// END full screen
/////////////////////////////////////////
/////////////////////////////////////////
// BEGIN street view & map view & site view
/////////////////////////////////////////
document.getElementById('fullscreen_street_view').addEventListener('click', () => {
    if (screenfull.enabled) {
        screenfull.request();
    } else {
        // Ignore or do something else
    }
// hack to make google map resize and show properly
setTimeout(function(){
screenfull.exit();
}, 20);
});
document.getElementById('fullscreen_map_view').addEventListener('click', () => {
    if (screenfull.enabled) {
        screenfull.request();
    } else {
        // Ignore or do something else
    }
setTimeout(function(){
screenfull.exit();
}, 20);
});
document.getElementById('fullscreen_site_view').addEventListener('click', () => {
    if (screenfull.enabled) {
        screenfull.request();
    } else {
        // Ignore or do something else
    }
setTimeout(function(){
screenfull.exit();
}, 10);
});
/////////////////////////////////////////
// END street view & map view & site view
/////////////////////////////////////////
});
*/




//////////////////////////////////////////////////////
// BEGIN accordion_lists
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_lists");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_lists = this.nextElementSibling;
      if (panel_lists.style.maxHeight) {
        panel_lists.style.maxHeight = null;
      } else {
        panel_lists.style.maxHeight = panel_lists.scrollHeight + "px";
      }
    }
  }
});
// END accordion_lists
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_learn_the_word
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_learn_the_word");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_learn_the_word = this.nextElementSibling;
      if (panel_learn_the_word.style.maxHeight) {
        panel_learn_the_word.style.maxHeight = null;
      } else {
        panel_learn_the_word.style.maxHeight = panel_learn_the_word.scrollHeight + "px";
      }
    }
  }
});
// END accordion_learn_the_word
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_we_do_the_word
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_we_do_the_word");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_we_do_the_word = this.nextElementSibling;
      if (panel_we_do_the_word.style.maxHeight) {
        panel_we_do_the_word.style.maxHeight = null;
      } else {
        panel_we_do_the_word.style.maxHeight = panel_we_do_the_word.scrollHeight + "px";
      }
    }
  }
});
// END accordion_we_do_the_word
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_simple_people
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_simple_people");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_simple_people = this.nextElementSibling;
      if (panel_simple_people.style.maxHeight) {
        panel_simple_people.style.maxHeight = null;
      } else {
        panel_simple_people.style.maxHeight = panel_simple_people.scrollHeight + "px";
      }
    }
  }
});
// END accordion_simple_people
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_professionals
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_professionals");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_professionals = this.nextElementSibling;
      if (panel_professionals.style.maxHeight) {
        panel_professionals.style.maxHeight = null;
      } else {
        panel_professionals.style.maxHeight = panel_professionals.scrollHeight + "px";
      }
    }
  }
});
// END accordion_professionals
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_businesses
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_businesses");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_businesses = this.nextElementSibling;
      if (panel_businesses.style.maxHeight) {
        panel_businesses.style.maxHeight = null;
      } else {
        panel_businesses.style.maxHeight = panel_businesses.scrollHeight + "px";
      }
    }
  }
});
// END accordion_businesses
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_armed_forces
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_armed_forces");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_armed_forces = this.nextElementSibling;
      if (panel_armed_forces.style.maxHeight) {
        panel_armed_forces.style.maxHeight = null;
      } else {
        panel_armed_forces.style.maxHeight = panel_armed_forces.scrollHeight + "px";
      }
    }
  }
});
// END accordion_armed_forces
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_public_places
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_public_places");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_public_places = this.nextElementSibling;
      if (panel_public_places.style.maxHeight) {
        panel_public_places.style.maxHeight = null;
      } else {
        panel_public_places.style.maxHeight = panel_public_places.scrollHeight + "px";
      }
    }
  }
});
// END accordion_public_places
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_first_time_users
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_first_time_users");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_first_time_users = this.nextElementSibling;
      if (panel_first_time_users.style.maxHeight) {
        panel_first_time_users.style.maxHeight = null;
      } else {
        panel_first_time_users.style.maxHeight = panel_first_time_users.scrollHeight + "px";
      }
    }
  }
});
// END accordion_first_time_users
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_who_else_is_part
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_who_else_is_part");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_who_else_is_part = this.nextElementSibling;
      if (panel_who_else_is_part.style.maxHeight) {
        panel_who_else_is_part.style.maxHeight = null;
      } else {
        panel_who_else_is_part.style.maxHeight = panel_who_else_is_part.scrollHeight + "px";
      }
    }
  }
});
// END accordion_who_else_is_part
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_admin
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_admin");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_admin = this.nextElementSibling;
      if (panel_admin.style.maxHeight) {
        panel_admin.style.maxHeight = null;
      } else {
        panel_admin.style.maxHeight = panel_admin.scrollHeight + "px";
      }
    }
  }
});
// END accordion_admin
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_console
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_console");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_console = this.nextElementSibling;
      if (panel_console.style.maxHeight) {
        panel_console.style.maxHeight = null;
      } else {
        panel_console.style.maxHeight = panel_console.scrollHeight + "px";
      }
    }
  }
});
// END accordion_console
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_terminal
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_terminal");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_terminal = this.nextElementSibling;
      if (panel_terminal.style.maxHeight) {
        panel_terminal.style.maxHeight = null;
      } else {
        panel_terminal.style.maxHeight = panel_terminal.scrollHeight + "px";
      }
    }
  }
});
// END accordion_terminal
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_language_preferences
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_language_preferences");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_language_preferences = this.nextElementSibling;
      if (panel_language_preferences.style.maxHeight) {
        panel_language_preferences.style.maxHeight = null;
      } else {
        panel_language_preferences.style.maxHeight = panel_language_preferences.scrollHeight + "px";
      }
    }
  }
});
// END accordion_language_preferences
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_colour_preferences
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_colour_preferences");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_colour_preferences = this.nextElementSibling;
      if (panel_colour_preferences.style.maxHeight) {
        panel_colour_preferences.style.maxHeight = null;
      } else {
        panel_colour_preferences.style.maxHeight = panel_colour_preferences.scrollHeight + "px";
      }
    }
  }
});
// END accordion_colour_preferences
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_fullscreen_preferences
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_fullscreen_preferences");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_fullscreen_preferences = this.nextElementSibling;
      if (panel_fullscreen_preferences.style.maxHeight) {
        panel_fullscreen_preferences.style.maxHeight = null;
      } else {
        panel_fullscreen_preferences.style.maxHeight = panel_fullscreen_preferences.scrollHeight + "px";
      }
    }
  }
});
// END accordion_fullscreen_preferences
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_configure
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_configure");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_configure = this.nextElementSibling;
      if (panel_configure.style.maxHeight) {
        panel_configure.style.maxHeight = null;
      } else {
        panel_configure.style.maxHeight = panel_configure.scrollHeight + "px";
      }
    }
  }
});
// END accordion_configure
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_about_us
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_about_us");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_about_us = this.nextElementSibling;
      if (panel_about_us.style.maxHeight) {
        panel_about_us.style.maxHeight = null;
      } else {
        panel_about_us.style.maxHeight = panel_about_us.scrollHeight + "px";
      }
    }
  }
});
// END accordion_about_us
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_contact_us
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_contact_us");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_contact_us = this.nextElementSibling;
      if (panel_contact_us.style.maxHeight) {
        panel_contact_us.style.maxHeight = null;
      } else {
        panel_contact_us.style.maxHeight = panel_contact_us.scrollHeight + "px";
      }
    }
  }
});
// END accordion_contact_us
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_fundraise_for_the_farm
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_fundraise_for_the_farm");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_fundraise_for_the_farm = this.nextElementSibling;
      if (panel_fundraise_for_the_farm.style.maxHeight) {
        panel_fundraise_for_the_farm.style.maxHeight = null;
      } else {
        panel_fundraise_for_the_farm.style.maxHeight = panel_fundraise_for_the_farm.scrollHeight + "px";
      }
    }
  }
});
// END accordion_fundraise_for_the_farm
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_fund_the_farm_yourself
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_fund_the_farm_yourself");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_fund_the_farm_yourself = this.nextElementSibling;
      if (panel_fund_the_farm_yourself.style.maxHeight) {
        panel_fund_the_farm_yourself.style.maxHeight = null;
      } else {
        panel_fund_the_farm_yourself.style.maxHeight = panel_fund_the_farm_yourself.scrollHeight + "px";
      }
    }
  }
});
// END accordion_fund_the_farm_yourself
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_invite_friends_for_mission_trip
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_invite_friends_for_mission_trip");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_invite_friends_for_mission_trip = this.nextElementSibling;
      if (panel_invite_friends_for_mission_trip.style.maxHeight) {
        panel_invite_friends_for_mission_trip.style.maxHeight = null;
      } else {
        panel_invite_friends_for_mission_trip.style.maxHeight = panel_invite_friends_for_mission_trip.scrollHeight + "px";
      }
    }
  }
});
// END accordion_invite_friends_for_mission_trip
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_signup_for_your_mission_trip
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_signup_for_your_mission_trip");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_signup_for_your_mission_trip = this.nextElementSibling;
      if (panel_signup_for_your_mission_trip.style.maxHeight) {
        panel_signup_for_your_mission_trip.style.maxHeight = null;
      } else {
        panel_signup_for_your_mission_trip.style.maxHeight = panel_signup_for_your_mission_trip.scrollHeight + "px";
      }
    }
  }
});
// END accordion_signup_for_your_mission_trip
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_donate_clothing
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_donate_clothing");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_donate_clothing = this.nextElementSibling;
      if (panel_donate_clothing.style.maxHeight) {
        panel_donate_clothing.style.maxHeight = null;
      } else {
        panel_donate_clothing.style.maxHeight = panel_donate_clothing.scrollHeight + "px";
      }
    }
  }
});
// END accordion_donate_clothing
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_layout
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_layout");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_layout = this.nextElementSibling;
      if (panel_layout.style.maxHeight) {
        panel_layout.style.maxHeight = null;
      } else {
        panel_layout.style.maxHeight = panel_layout.scrollHeight + "px";
      }
    }
  }
});
// END accordion_layout
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_color
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_color");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_color = this.nextElementSibling;
      if (panel_color.style.maxHeight) {
        panel_color.style.maxHeight = null;
      } else {
        panel_color.style.maxHeight = panel_color.scrollHeight + "px";
      }
    }
  }
});
// END accordion_color
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_language
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_language");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_language = this.nextElementSibling;
      if (panel_language.style.maxHeight) {
        panel_language.style.maxHeight = null;
      } else {
        panel_language.style.maxHeight = panel_language.scrollHeight + "px";
      }
    }
  }
});
// END accordion_language
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_training
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_training");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_training = this.nextElementSibling;
      if (panel_training.style.maxHeight) {
        panel_training.style.maxHeight = null;
      } else {
        panel_training.style.maxHeight = panel_training.scrollHeight + "px";
      }
    }
  }
});
// END accordion_training
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_highlighting
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_highlighting");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_highlighting = this.nextElementSibling;
      if (panel_highlighting.style.maxHeight) {
        panel_highlighting.style.maxHeight = null;
      } else {
        panel_highlighting.style.maxHeight = panel_highlighting.scrollHeight + "px";
      }
    }
  }
});
// END accordion_highlighting
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_Teaching
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_Teaching");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_Teaching = this.nextElementSibling;
      if (panel_Teaching.style.maxHeight) {
        panel_Teaching.style.maxHeight = null;
      } else {
        panel_Teaching.style.maxHeight = panel_Teaching.scrollHeight + "px";
      }
    }
  }
});
// END accordion_Teaching
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_FormerProphets
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_FormerProphets");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_FormerProphets = this.nextElementSibling;
      if (panel_FormerProphets.style.maxHeight) {
        panel_FormerProphets.style.maxHeight = null;
      } else {
        panel_FormerProphets.style.maxHeight = panel_FormerProphets.scrollHeight + "px";
      }
    }
  }
});
// END accordion_FormerProphets
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_LatterProphets
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_LatterProphets");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_LatterProphets = this.nextElementSibling;
      if (panel_LatterProphets.style.maxHeight) {
        panel_LatterProphets.style.maxHeight = null;
      } else {
        panel_LatterProphets.style.maxHeight = panel_LatterProphets.scrollHeight + "px";
      }
    }
  }
});
// END accordion_LatterProphets
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_TheTwelve
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_TheTwelve");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_TheTwelve = this.nextElementSibling;
      if (panel_TheTwelve.style.maxHeight) {
        panel_TheTwelve.style.maxHeight = null;
      } else {
        panel_TheTwelve.style.maxHeight = panel_TheTwelve.scrollHeight + "px";
      }
    }
  }
});
// END accordion_TheTwelve
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_ScrollsOfTruth
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_ScrollsOfTruth");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_ScrollsOfTruth = this.nextElementSibling;
      if (panel_ScrollsOfTruth.style.maxHeight) {
        panel_ScrollsOfTruth.style.maxHeight = null;
      } else {
        panel_ScrollsOfTruth.style.maxHeight = panel_ScrollsOfTruth.scrollHeight + "px";
      }
    }
  }
});
// END accordion_ScrollsOfTruth
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_FiveScrolls
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_FiveScrolls");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_FiveScrolls = this.nextElementSibling;
      if (panel_FiveScrolls.style.maxHeight) {
        panel_FiveScrolls.style.maxHeight = null;
      } else {
        panel_FiveScrolls.style.maxHeight = panel_FiveScrolls.scrollHeight + "px";
      }
    }
  }
});
// END accordion_FiveScrolls
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_OtherScrolls
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_OtherScrolls");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_OtherScrolls = this.nextElementSibling;
      if (panel_OtherScrolls.style.maxHeight) {
        panel_OtherScrolls.style.maxHeight = null;
      } else {
        panel_OtherScrolls.style.maxHeight = panel_OtherScrolls.scrollHeight + "px";
      }
    }
  }
});
// END accordion_OtherScrolls
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_Messiah
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_Messiah");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_Messiah = this.nextElementSibling;
      if (panel_Messiah.style.maxHeight) {
        panel_Messiah.style.maxHeight = null;
      } else {
        panel_Messiah.style.maxHeight = panel_Messiah.scrollHeight + "px";
      }
    }
  }
});
// END accordion_Messiah
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_Emissaries
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_Emissaries");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_Emissaries = this.nextElementSibling;
      if (panel_Emissaries.style.maxHeight) {
        panel_Emissaries.style.maxHeight = null;
      } else {
        panel_Emissaries.style.maxHeight = panel_Emissaries.scrollHeight + "px";
      }
    }
  }
});
// END accordion_Emissaries
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_Assemblies
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_Assemblies");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_Assemblies = this.nextElementSibling;
      if (panel_Assemblies.style.maxHeight) {
        panel_Assemblies.style.maxHeight = null;
      } else {
        panel_Assemblies.style.maxHeight = panel_Assemblies.scrollHeight + "px";
      }
    }
  }
});
// END accordion_Assemblies
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_Disciples
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_Disciples");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_Disciples = this.nextElementSibling;
      if (panel_Disciples.style.maxHeight) {
        panel_Disciples.style.maxHeight = null;
      } else {
        panel_Disciples.style.maxHeight = panel_Disciples.scrollHeight + "px";
      }
    }
  }
});
// END accordion_Disciples
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN accordion_Vision
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion_Vision");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel_Vision = this.nextElementSibling;
      if (panel_Vision.style.maxHeight) {
        panel_Vision.style.maxHeight = null;
      } else {
        panel_Vision.style.maxHeight = panel_Vision.scrollHeight + "px";
      }
    }
  }
});
// END accordion_Vision
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_Teaching
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_Teaching");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_Teaching = this.nextElementSibling;
      if (browsing_mode_panel_Teaching.style.maxHeight) {
        browsing_mode_panel_Teaching.style.maxHeight = null;
      } else {
        browsing_mode_panel_Teaching.style.maxHeight = browsing_mode_panel_Teaching.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_Teaching
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_FormerProphets
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_FormerProphets");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_FormerProphets = this.nextElementSibling;
      if (browsing_mode_panel_FormerProphets.style.maxHeight) {
        browsing_mode_panel_FormerProphets.style.maxHeight = null;
      } else {
        browsing_mode_panel_FormerProphets.style.maxHeight = browsing_mode_panel_FormerProphets.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_FormerProphets
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_LatterProphets
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_LatterProphets");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_LatterProphets = this.nextElementSibling;
      if (browsing_mode_panel_LatterProphets.style.maxHeight) {
        browsing_mode_panel_LatterProphets.style.maxHeight = null;
      } else {
        browsing_mode_panel_LatterProphets.style.maxHeight = browsing_mode_panel_LatterProphets.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_LatterProphets
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_TheTwelve
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_TheTwelve");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_TheTwelve = this.nextElementSibling;
      if (browsing_mode_panel_TheTwelve.style.maxHeight) {
        browsing_mode_panel_TheTwelve.style.maxHeight = null;
      } else {
        browsing_mode_panel_TheTwelve.style.maxHeight = browsing_mode_panel_TheTwelve.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_TheTwelve
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_ScrollsOfTruth
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_ScrollsOfTruth");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_ScrollsOfTruth = this.nextElementSibling;
      if (browsing_mode_panel_ScrollsOfTruth.style.maxHeight) {
        browsing_mode_panel_ScrollsOfTruth.style.maxHeight = null;
      } else {
        browsing_mode_panel_ScrollsOfTruth.style.maxHeight = browsing_mode_panel_ScrollsOfTruth.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_ScrollsOfTruth
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_FiveScrolls
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_FiveScrolls");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_FiveScrolls = this.nextElementSibling;
      if (browsing_mode_panel_FiveScrolls.style.maxHeight) {
        browsing_mode_panel_FiveScrolls.style.maxHeight = null;
      } else {
        browsing_mode_panel_FiveScrolls.style.maxHeight = browsing_mode_panel_FiveScrolls.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_FiveScrolls
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_OtherScrolls
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_OtherScrolls");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_OtherScrolls = this.nextElementSibling;
      if (browsing_mode_panel_OtherScrolls.style.maxHeight) {
        browsing_mode_panel_OtherScrolls.style.maxHeight = null;
      } else {
        browsing_mode_panel_OtherScrolls.style.maxHeight = browsing_mode_panel_OtherScrolls.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_OtherScrolls
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_Messiah
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_Messiah");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_Messiah = this.nextElementSibling;
      if (browsing_mode_panel_Messiah.style.maxHeight) {
        browsing_mode_panel_Messiah.style.maxHeight = null;
      } else {
        browsing_mode_panel_Messiah.style.maxHeight = browsing_mode_panel_Messiah.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_Messiah
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_Emissaries
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_Emissaries");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_Emissaries = this.nextElementSibling;
      if (browsing_mode_panel_Emissaries.style.maxHeight) {
        browsing_mode_panel_Emissaries.style.maxHeight = null;
      } else {
        browsing_mode_panel_Emissaries.style.maxHeight = browsing_mode_panel_Emissaries.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_Emissaries
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_Assemblies
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_Assemblies");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_Assemblies = this.nextElementSibling;
      if (browsing_mode_panel_Assemblies.style.maxHeight) {
        browsing_mode_panel_Assemblies.style.maxHeight = null;
      } else {
        browsing_mode_panel_Assemblies.style.maxHeight = browsing_mode_panel_Assemblies.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_Assemblies
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_Disciples
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_Disciples");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_Disciples = this.nextElementSibling;
      if (browsing_mode_panel_Disciples.style.maxHeight) {
        browsing_mode_panel_Disciples.style.maxHeight = null;
      } else {
        browsing_mode_panel_Disciples.style.maxHeight = browsing_mode_panel_Disciples.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_Disciples
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN browsing_mode_accordion_Vision
$(document).ready(function() {
  var acc = document.getElementsByClassName("browsing_mode_accordion_Vision");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var browsing_mode_panel_Vision = this.nextElementSibling;
      if (browsing_mode_panel_Vision.style.maxHeight) {
        browsing_mode_panel_Vision.style.maxHeight = null;
      } else {
        browsing_mode_panel_Vision.style.maxHeight = browsing_mode_panel_Vision.scrollHeight + "px";
      }
    }
  }
});
// END browsing_mode_accordion_Vision
//////////////////////////////////////////////////////



//////////////////////////////////////////////////////
// BEGIN perfectScrollbar for window_body & nav-left stuff
$(document).ready(function() {
  $('.window_body_top_menu_items').perfectScrollbar();
  $('.table_books_col').perfectScrollbar({
    scrollXMarginOffset: 2
  });
  $('.table_chapters_col').perfectScrollbar({
    scrollXMarginOffset: 2
  });
  $('.table_verses_col').perfectScrollbar({
    scrollXMarginOffset: 2
  });
  $('.wrap_ajaxed').perfectScrollbar({
    scrollXMarginOffset: 12,
    suppressScrollX: true
  });
// $('.sm2-playlist-wrapper ul').perfectScrollbar({scrollXMarginOffset: 12, suppressScrollX: true});






});
// END perfectScrollbar for window_body & nav-left
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// BEGIN jquery.scrollTo-min.js //////////////////
$(document).ready(function() {
  //////////////////////////////////////////////////////////////
  // top menu items
  // top menu items // first_time_users
  // top menu items // who_else_is_part // open
  $("#scrollTo_top_menu_items_who_else_is_part_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_who_else_is_part_landing", 1000);
  });
  // top menu items // who_else_is_part // close
  $("#scrollTo_top_menu_items_who_else_is_part_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // admin // open
  $("#scrollTo_top_menu_items_admin_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
  });
  // top menu items // admin // close
  $("#scrollTo_top_menu_items_admin_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // console // open
  $("#scrollTo_top_menu_items_console_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_console_landing", 1000);
  });
  // top menu items // console // close
  $("#scrollTo_top_menu_items_console_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // terminal // open
  $("#scrollTo_top_menu_items_terminal_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_terminal_landing", 1000);
  });
  // top menu items // terminal // close
  $("#scrollTo_top_menu_items_terminal_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // language_preferences // open
  $("#scrollTo_top_menu_items_language_preferences_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_language_preferences_landing", 1000);
  });
  // top menu items // language_preferences // close
  $("#scrollTo_top_menu_items_language_preferences_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // colour_preferences // open
  $("#scrollTo_top_menu_items_colour_preferences_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_colour_preferences_landing", 1000);
  });
  // top menu items // colour_preferences // close
  $("#scrollTo_top_menu_items_colour_preferences_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // fullscreen_preferences // open
  $("#scrollTo_top_menu_items_fullscreen_preferences_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_fullscreen_preferences_landing", 1000);
  });
  // top menu items // fullscreen_preferences // close
  $("#scrollTo_top_menu_items_fullscreen_preferences_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // configure // open
  $("#scrollTo_top_menu_items_configure_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_configure_landing", 1000);
  });
  // top menu items // configure // close
  $("#scrollTo_top_menu_items_configure_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // about_us // open
  $("#scrollTo_top_menu_items_about_us_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_about_us_landing", 1000);
  });
  // top menu items // about_us // close
  $("#scrollTo_top_menu_items_about_us_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // contact_us // open
  $("#scrollTo_top_menu_items_contact_us_trigger_open").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_contact_us_landing", 1000);
  });
  // top menu items // contact_us // close
  $("#scrollTo_top_menu_items_contact_us_trigger_close").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });
  // top menu items // back to top
  $("#scrollTo_top_menu_items_back_to_top").click(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_first_time_users_landing", 1000);
  });

  // config
  // config // layout
  // config // color // open
  $("#scrollTo_config_color_trigger_open").click(function() {
    $("#scrollTo_div_for_config").scrollTo("#scrollTo_config_color_landing", 1000);
  });
  // config // color // close
  $("#scrollTo_config_color_trigger_close").click(function() {
    $("#scrollTo_div_for_config").scrollTo("#scrollTo_config_layout_landing", 1000);
  });
  // config // language // open
  $("#scrollTo_config_language_trigger_open").click(function() {
    $("#scrollTo_div_for_config").scrollTo("#scrollTo_config_language_landing", 1000);
  });
  // config // language // close
  $("#scrollTo_config_language_trigger_close").click(function() {
    $("#scrollTo_div_for_config").scrollTo("#scrollTo_config_layout_landing", 1000);
  });
  // config // back to top
  $("#scrollTo_config_back_to_top").click(function() {
    $("#scrollTo_div_for_config").scrollTo("#scrollTo_config_layout_landing", 1000);
  });




  //////////////////////////////////////////////////
  // BEGIN nav_left in filtering mode
  //////////////////////////////////////////////////
  // nav_left
  // nav_left // Teaching
  // nav_left // FormerProphets // open
  $(".scrollTo_nav_left_FormerProphets_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_FormerProphets_landing", 1000, {offset:-8});
  });
  // nav_left // FormerProphets // close
  $("#scrollTo_nav_left_FormerProphets_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // LatterProphets // open
  $(".scrollTo_nav_left_LatterProphets_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_LatterProphets_landing", 1000, {offset:-8});
  });
  // nav_left // LatterProphets // close
  $("#scrollTo_nav_left_LatterProphets_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // TheTwelve // open
  $(".scrollTo_nav_left_TheTwelve_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_TheTwelve_landing", 1000, {offset:-8});
  });
  // nav_left // TheTwelve // close
  $("#scrollTo_nav_left_TheTwelve_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // ScrollsOfTruth // open
  $(".scrollTo_nav_left_ScrollsOfTruth_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_ScrollsOfTruth_landing", 1000, {offset:-8});
  });
  // nav_left // ScrollsOfTruth // close
  $("#scrollTo_nav_left_ScrollsOfTruth_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // FiveScrolls // open
  $(".scrollTo_nav_left_FiveScrolls_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_FiveScrolls_landing", 1000, {offset:-8});
  });
  // nav_left // FiveScrolls // close
  $("#scrollTo_nav_left_FiveScrolls_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // OtherScrolls // open
  $(".scrollTo_nav_left_OtherScrolls_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_OtherScrolls_landing", 1000, {offset:-8});
  });
  // nav_left // OtherScrolls // close
  $("#scrollTo_nav_left_OtherScrolls_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Messiah // open
  $(".scrollTo_nav_left_Messiah_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Messiah_landing", 1000, {offset:-8});
  });
  // nav_left // Messiah // close
  $("#scrollTo_nav_left_Messiah_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Emissaries // open
  $(".scrollTo_nav_left_Emissaries_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Emissaries_landing", 1000, {offset:-8});
  });
  // nav_left // Emissaries // close
  $("#scrollTo_nav_left_Emissaries_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Assemblies // open
  $(".scrollTo_nav_left_Assemblies_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Assemblies_landing", 1000, {offset:-8});
  });
  // nav_left // Assemblies // close
  $("#scrollTo_nav_left_Assemblies_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Disciples // open
  $(".scrollTo_nav_left_Disciples_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Disciples_landing", 1000, {offset:-8});
  });
  // nav_left // Disciples // close
  $("#scrollTo_nav_left_Disciples_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Vision // open
  $(".scrollTo_nav_left_Vision_trigger_open").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Vision_landing", 1000, {offset:-8});
  });
  // nav_left // Vision // close
  $("#scrollTo_nav_left_Vision_trigger_close").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // back to top
  $("#scrollTo_nav_left_back_to_top").click(function() {
    $("#scrollTo_div_for_nav_left").scrollTo("#scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  //////////////////////////////////////////////////
  // END nav_left in filtering mode
  //////////////////////////////////////////////////


  //////////////////////////////////////////////////
  // BEGIN nav_left in browsing mode
  //////////////////////////////////////////////////
  // nav_left
  // nav_left // Teaching
  $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  // nav_left // FormerProphets // open
  $(".browsing_mode_scrollTo_nav_left_FormerProphets_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_FormerProphets_landing", 1000, {offset:-8});
  });
  // nav_left // FormerProphets // close
  $("#browsing_mode_scrollTo_nav_left_FormerProphets_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // LatterProphets // open
  $(".browsing_mode_scrollTo_nav_left_LatterProphets_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_LatterProphets_landing", 1000, {offset:-8});
  });
  // nav_left // LatterProphets // close
  $("#browsing_mode_scrollTo_nav_left_LatterProphets_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // TheTwelve // open
  $(".browsing_mode_scrollTo_nav_left_TheTwelve_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_TheTwelve_landing", 1000, {offset:-8});
  });
  // nav_left // TheTwelve // close
  $("#browsing_mode_scrollTo_nav_left_TheTwelve_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // ScrollsOfTruth // open
  $(".browsing_mode_scrollTo_nav_left_ScrollsOfTruth_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_ScrollsOfTruth_landing", 1000, {offset:-8});
  });
  // nav_left // ScrollsOfTruth // close
  $("#browsing_mode_scrollTo_nav_left_ScrollsOfTruth_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // FiveScrolls // open
  $(".browsing_mode_scrollTo_nav_left_FiveScrolls_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_FiveScrolls_landing", 1000, {offset:-8});
  });
  // nav_left // FiveScrolls // close
  $("#browsing_mode_scrollTo_nav_left_FiveScrolls_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // OtherScrolls // open
  $(".browsing_mode_scrollTo_nav_left_OtherScrolls_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_OtherScrolls_landing", 1000, {offset:-8});
  });
  // nav_left // OtherScrolls // close
  $("#browsing_mode_scrollTo_nav_left_OtherScrolls_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Messiah // open
  $(".browsing_mode_scrollTo_nav_left_Messiah_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Messiah_landing", 1000, {offset:-8});
  });
  // nav_left // Messiah // close
  $("#browsing_mode_scrollTo_nav_left_Messiah_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Emissaries // open
  $(".browsing_mode_scrollTo_nav_left_Emissaries_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Emissaries_landing", 1000, {offset:-8});
  });
  // nav_left // Emissaries // close
  $("#browsing_mode_scrollTo_nav_left_Emissaries_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Assemblies // open
  $(".browsing_mode_scrollTo_nav_left_Assemblies_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Assemblies_landing", 1000, {offset:-8});
  });
  // nav_left // Assemblies // close
  $("#browsing_mode_scrollTo_nav_left_Assemblies_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Disciples // open
  $(".browsing_mode_scrollTo_nav_left_Disciples_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Disciples_landing", 1000, {offset:-8});
  });
  // nav_left // Disciples // close
  $("#browsing_mode_scrollTo_nav_left_Disciples_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // Vision // open
  $(".browsing_mode_scrollTo_nav_left_Vision_trigger_open").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Vision_landing", 1000, {offset:-8});
  });
  // nav_left // Vision // close
  $("#browsing_mode_scrollTo_nav_left_Vision_trigger_close").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  // nav_left // back to top
  $("#browsing_mode_scrollTo_nav_left_back_to_top").click(function() {
    $("#browsing_mode_scrollTo_div_for_nav_left").scrollTo("#browsing_mode_scrollTo_nav_left_Teaching_landing", 1000, {offset:-8});
  });
  //////////////////////////////////////////////////
  // END nav_left in browsing mode
  //////////////////////////////////////////////////
  // this works!
  // $("#edited_app_name").click(function() {
  // $(".table_chapters_col").scrollTo("table#example-browsing_mode_nav_left_Chapters tbody tr td div#2",1000);
  // });
  /////////////////////////////////////




});
// END jquery.scrollTo-min.js //////////////////
//////////////////////////////////////////////////////



//////////////////////////////////////////////////////
$(document).ready(function() {
  $(".not_clickable").click(false);
});
//////////////////////////////////////////////////////




//////////////////////////////////////////////////////
// fixed datatables pagination to go to top when clicking "more"
$(document).ready(function() {
  $(".window_body_top_menu_items").scroll(function() {
    var y = $(this).scrollTop();
    if (y > 50) {
      $('.back_to_top').fadeIn();
    } else {
      $('.back_to_top').fadeOut();
    }
  });
});
//////////////////////////////////////////////////////



//////////////////////////////////////
// BEGIN ref tabs
//////////////////////////////////////
$(document).ready(function() {

  $('.ref_header').on('click', '.select_analysis', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_analysis").show("slow");
  });

  $('.ref_header').on('click', '.select_lexicons', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_lexicons").show("slow");
  });

  $('.ref_header').on('click', '.select_dictionaries', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_dictionaries").show("slow");
  });

  $('.ref_header').on('click', '.select_encyclopedias', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_encyclopedias").show("slow");
  });

  $('.ref_header').on('click', '.select_topics', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_topics").show("slow");
  });

  $('.ref_footer').on('click', '.select_audio', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_audio").show("slow");
  });

  $('.ref_footer').on('click', '.select_views', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_views").show("slow");
  });

  $('.ref_footer').on('click', '.select_notes', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_notes").show("slow");
  });

  $('.ref_footer').on('click', '.select_highlights', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_highlights").show("slow");
  });

  $('.ref_footer').on('click', '.select_bookmarks', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_post").hide("slow");
    $(".wrap_ref_body_bookmarks").show("slow");
  });

  $('.ref_footer').on('click', '.select_post', function(e) {
    $(".wrap_ref_body_welcome, .wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks").hide("slow");
    $(".wrap_ref_body_post").show("slow");
  });

});
//////////////////////////////////////
// END ref tabs
//////////////////////////////////////

//////// when a chapter is ajaxed, we slice to keep verse count correct in left menu
// var verseCountThisChapter = ($("tr[class*='has_es']").length);
// $( "table#example-browsing_mode_nav_left_Verses tbody tr" ).slice(verseCountThisChapter).css( "display", "none" );




/////////////////////////////////////////
// BEGIN hidden container to build string & syncing chapters/audio & ajax calls & strong's tooltips
////////////////////////////////////////////
$(document).ready(function() {



  $('#s1 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s2 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s3 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s4 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s5 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s6 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s7 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s8 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s9 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s10 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s11 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });
  $('#s12 tbody').on('click', 'tr td', function(e) {
    var browseToSection = $(this).parent().parent().parent().attr("id");
    var browseToBook = $(this).children().first().attr("id");
      $("#browse_to_section").text("");
      $("#browse_to_section").append(browseToSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("1");
      $("#browse_to_verse").text("1");
  });



  ////////// work but very slow

  $('#example-browsing_mode_nav_left_Chapters tbody').on('click', 'tr td', function(e) {

    var chapterToBorderBackground = $(this).children().first();
    console.log("chapterToBorderBackground" + ":" + chapterToBorderBackground);

    var currentBrowseToSection = $("#browse_to_section").text();
    console.log("currentBrowseToSection" + ":" + currentBrowseToSection);

    var currentBrowseToBook = $("#browse_to_book").text();
    console.log("currentBrowseToBook" + ":" + currentBrowseToBook);

    var currentBrowseToChapter = $("#browse_to_chapter").text();
    console.log("currentBrowseToChapter" + ":" + currentBrowseToChapter);

    var browseToChapter = $(this).children().first().attr("id");
    console.log("browseToChapter" + ":" + browseToChapter);
    if (browseToChapter === currentBrowseToChapter) {
      console.log("///////// SAME CHAPTER. NO NEED TO RE-AJAX ////////");
    } else {
      console.log("///////// HAD TO LOAD ANOTHER CHAPTER ////////");
      $("#browse_to_chapter").text("");
      $("#browse_to_chapter").append(browseToChapter);
      $("#browse_to_verse").text("1");
    }
    setTimeout(function() {


      $("#example-browsing_mode_nav_left_Chapters tbody tr td div#1").css("border", "none").css("background", "none").removeClass("chapter_is_selected");
      $("#example-browsing_mode_nav_left_Verses tbody tr td div#1").css("border", "none").css("background", "none");



      $('#' + currentBrowseToSection + ' tbody tr td #' + currentBrowseToBook).css("border", "1px solid red").css("background", "rgba(0, 0, 0, 0.4)").addClass("book_is_selected");
	  console.log("RED section & book");
      $(chapterToBorderBackground).css("border", "1px solid red").css("background", "rgba(0, 0, 0, 0.4)").addClass("chapter_is_selected");
	  console.log("RED chapter");
//      $("#example-browsing_mode_nav_left_Verses tbody tr td div#1").css("border", "1px solid purple").css("background", "rgba(0, 0, 0, 0.4)");
	  console.log("PURPLE verse now commented out");

// var newLiSelected = $('li.selected');
// $("ul").scrollTo(newLiSelected, 0);


    }, 100);
  });





/*
// this needs to be changed to a MutationObserver to comply with DOMSubtreeModified deprecated
  $("body").on('DOMSubtreeModified', "li.selected", function(e) {
	   $("ul").scrollTo(this, 0);

var liSelectedChangeWrapAjaxedClonedStatus = $("li.selected a").text();
$(".wrap_ajaxed_cloned_status").text("browsing inside " + liSelectedChangeWrapAjaxedClonedStatus);


var currentSectionCode = $("li.selected a").attr("data-section");
$("#current_section").text(currentSectionCode);
$("#current_section:contains('s1')").html("your current section is the Torah");
$("#current_section:contains('s2')").html("your current section is the Former Prophets");
$("#current_section:contains('s3')").html("your current section is the Later Prophets");
$("#current_section:contains('s4')").html("your current section is the Twelve");
$("#current_section:contains('s5')").html("your current section is the Scrolls of Truth");
$("#current_section:contains('s6')").html("your current section is the Five Scrolls");
$("#current_section:contains('s7')").html("your current section is the Other Scrolls");
$("#current_section:contains('s8')").html("your current section is the Messiah");
$("#current_section:contains('s9')").html("your current section is the Emissaries");
$("#current_section:contains('s10')").html("your current section is the Assemblies");
$("#current_section:contains('s11')").html("your current section is the Disciples");
$("#current_section:contains('s12')").html("your current section is the Vision");



    var browseToSection = $("ul").find("li.selected").find("a").attr("data-section");
    var browseToAudio = $(this).children().attr("class");
    var browseToBook = $(this).children().attr("data-book");
    var browseToChapter = $(this).children().attr("data-chapter");
    var currentBrowseToAudio = $("#browse_to_audio").text();
    var currentBrowseToBook = $("#browse_to_book").text();
    var currentBrowseToChapter = $("#browse_to_chapter").text();

    if (browseToBook == currentBrowseToBook && browseToChapter == currentBrowseToChapter && browseToAudio == currentBrowseToAudio) {
      console.log("///////// EVERYTHING MATCHES ////////");
    }
    if (browseToBook !== currentBrowseToBook || browseToChapter !== currentBrowseToChapter || browseToAudio !== currentBrowseToAudio) {

      console.log("//////////////////////////////////// SELECTED LI doesn't match  /////////");
      $("#browse_to_audio").text("");
      $("#browse_to_audio").append(browseToAudio);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(browseToBook);
      $("#browse_to_chapter").text("");
      $("#browse_to_chapter").append(browseToChapter);
      $("#browse_to_verse").text("1");
    }


      //check if the section panel is already opened
      if ($("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).hasClass('active')) {
		  console.log("coming from a playlist item click // section panel is already opened //");
        // otherwise otherwise open it
      } else {
        $("#" + browseToSection + " tr td #" + browseToBook).parents().eq(6).find("." + browseToSection).trigger("click");
		  console.log("coming from a playlist item click // we had to open the section panel //");
      }


  });
*/



  //////////////////////////////////////////////////
  //////BEGIN MutationObserver MutationObservingHiddenContBuild ////
  //////////////////////////////////////////////////
  // First create our observer and get our target element
  var observer = new MutationObserver(MutationObservingHiddenContBuild),
    elTarget = document.querySelector("body #hidden_cont_build_string_load_bento"),
    objConfig = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    };
  // Then actually do some observing
  observer.observe(elTarget, objConfig);
  // Finally react when needed
  function MutationObservingHiddenContBuild() {
    console.log("TRIGGERED Mutation Observer MutationObservingHiddenContBuild");


    $(".menu_book_reg").parent().css("border", "none").css("background", "none").removeClass("book_is_selected");
      console.log("MutationObservingHiddenContBuild // cleared prior border menu book");
    $(".menu_chapter_reg").css("border", "none").css("background", "none").removeClass("chapter_is_selected");
      console.log("MutationObservingHiddenContBuild // cleared prior border menu chapter");
    $(".menu_verse_reg").css("border", "none").css("background", "none");
      console.log("MutationObservingHiddenContBuild // cleared prior border menu verse");





    $(".wrap_ajaxed").empty();
      console.log("MutationObservingHiddenContBuild // emptied wrap_ajaxed");

    var selectedBook = $("#browse_to_book").text();
    var selectedChapter = $("#browse_to_chapter").text();
    var selectedVerse = $("#browse_to_verse").text();
    var selectedAudio = $("#browse_to_audio").text();




    $(".wrap_ajaxed").load("../ajax_pages/" + selectedBook + "_" + selectedChapter + ".html", function() {
      console.log("MutationObservingHiddenContBuild // now loading ajax_pages with book: "  + selectedBook + " chapter: " + selectedChapter);

      $(".wrap_ajaxed").scrollTo(0, 500, {offset:-1});



      //// BEGIN /////// brought in from the pages


      // get what book and chapter I'm dealing with to bring in ajax
      var ajax_book_chapter = $(".wrap_ajaxed").find("div#hidden_page_id").text();
      console.log("MutationObservingHiddenContBuild // the book & chapter I'm dealing with is: " + ajax_book_chapter);
      // check if grk or heb is needed and act accordingly
      var is_grk_heb_needed = $(".wrap_ajaxed").find("#tE_ajax_chapters tr td span.audio_book_id").text();
      // console.log(is_grk_heb_needed);
      /*
      // bring in greek text
      if (is_grk_heb_needed > 928) {
      var postData = "";
      $.ajax({
      ///////////////////////////////// change this for each page
      url: '../ajax_modules/TR_TheWord_2015-05-25/module_TR_TheWord_2015-05-25_' +ajax_book_chapter+ '.php',
      dataType: "html",
      type: "post",
      data: postData,
      success: function(response) {
      $("#tE_ajax_chapters tr").each(function() {
      var td_id = $(this).find("td:first-child").attr("id");
      result = $("#" + $.escapeSelector(td_id), response);
      ///////////////////////////////// change this for each page
      if (!$('#tE_ajax_chapters tr').hasClass('has_gr')) {
      $(this).append('<td class="' + td_id + ' gr_txt">' + ($(result).html()) + '</td>');
      }
      });
      $("#tE_ajax_chapters tr").addClass('has_gr');
      }
      });
      }

      // bring in greek transliterated text
      if (is_grk_heb_needed > 928) {
      var postData = "";
      $.ajax({
      ///////////////////////////////// change this for each page
      url: '../ajax_modules/TR_TheWord_2015-05-25/module_TR_TheWord_2015-05-25_' +ajax_book_chapter+ '.php',
      dataType: "html",
      type: "post",
      data: postData,
      success: function(response) {
      $("#tE_ajax_chapters tr").each(function() {
      var td_id = $(this).find("td:first-child").attr("id");
      result = $("#" + $.escapeSelector(td_id), response);
      ///////////////////////////////// change this for each page
      if (!$('#tE_ajax_chapters tr').hasClass('has_gr_tra')) {
      $(this).append('<td class="' + td_id + ' gr_tra_txt">' + ($(result).html()) + '</td>');
      }
      });
      $("#tE_ajax_chapters tr").addClass('has_gr_tra');
      }
      });
      }
      */
      // bring in spanish text

      var data_spanish = "";
      $.ajax({
        ///////////////////////////////// change this for each page
        url: '../ajax_modules/RV1909/module_RV1909_with_strongs_' + ajax_book_chapter + '.php',
        dataType: "html",
        type: "get",
        data: postData,
        success: function(response) {
          $("#tE_ajax_chapters tr").each(function() {
            var td_id = $(this).find("td:first-child").attr("id");
            result = $("#" + $.escapeSelector(td_id), response);
            ///////////////////////////////// change this for each page
            if (!$('#tE_ajax_chapters tr').hasClass('has_es')) {
              $(this).append('<td class="' + td_id + ' es_txt">' + ($(result).html()) + '</td>');
            }
          });
          $("#tE_ajax_chapters tr").addClass('has_es');
          ///// when a spanish chapter is ajaxed, we slice to keep verse count correct in left menu
          $("table#example-browsing_mode_nav_left_Verses tbody tr").show();
          var verseCountThisChapter = ($("#tE_ajax_chapters tbody tr[class*='has_es']").length);
          $("table#example-browsing_mode_nav_left_Verses tbody tr").slice(verseCountThisChapter).hide();
          console.log("**************************changed chapter count ************************");

        }
      });

      // bring in english text
      var postData = "";
      $.ajax({
        ///////////////////////////////// change this for each page
        url: '../ajax_modules/KJV_THE_WORD_2016-12-10/module_KJV_PCEbeta_with_strongs_' + ajax_book_chapter + '.php',
        dataType: "html",
        type: "get",
        data: postData,
        success: function(response) {
          $("#tE_ajax_chapters tr").each(function() {
            var td_id = $(this).find("td:first-child").attr("id");
            result = $("#" + $.escapeSelector(td_id), response);
            ///////////////////////////////// change this for each page
            if (!$('#tE_ajax_chapters tr').hasClass('has_en')) {
              $(this).append('<td class="' + td_id + ' en_txt">' + ($(result).html()) + '</td>');
            }
          });
          $("#tE_ajax_chapters tr").addClass('has_en');
          ////////////////////////////////////////////////
          ////// Now working here BEGIN table tE_ajax_chapters † (untranslated symbol) handling and the KJV notes
          /////////////////////////////////////////////////

          // NN to regex the spanish and english php files to:
          // 1. fix the strongs that remained untagged
          // 2. tag the † (untranslated symbol) both eng and esp


          // this worked ok on codepen, so probably need a settimeout
          //var hideUntranslateWordSymbol = $('.wrap_ajaxed').find("table#tE_ajax_chapters tbody tr td.en_txt");
          //hideUntranslateWordSymbol.html(hideUntranslateWordSymbol.html().replace(/\†/g, '<span class="hideUntranslateWordSymbol">†</span>'));


          //    if ($('#tE_ajax_chapters tbody tr td.en_txt').hasClass('notes')) {
          //    $(this).append("<span>hola<span>").css("color", "red");
          //$(".notes").appendTo( $( ".wrap_ref_body_notes" ) ).show().css("color", "hotpink");
          //    }

          // $this = $(".wrap_ajaxed").find("table#tE_ajax_chapters tbody tr td.en_txt").find(".notes");
          // .append("<span>hola<span>").appendTo( $( ".wrap_ref_body_notes" );
          // $(".wrap_ajaxed").find("table#tE_ajax_chapters tbody tr td.en_txt").find(".notes").appendTo( $( ".wrap_ref_body_notes" ) ).show().// css("color", "hotpink");

          ////////////////////////////////////////////////
          ////// END table tE_ajax_chapters † (untranslated symbol) handling and the KJV notes
          /////////////////////////////////////////////////
        }
      });
      /*
      // bring in hebrew transliterated text
      if (is_grk_heb_needed < 929) {
      var postData = "";
      $.ajax({
      ///////////////////////////////// change this for each page
      url: "../ajax_modules/WLC_4_20/module_WLC_4_20_" +ajax_book_chapter+ ".php",
      dataType: "html",
      type: "post",
      data: postData,
      success: function(response) {
      $("#tE_ajax_chapters tr").each(function() {
      var td_id = $(this).find("td:first-child").attr("id");
      result = $("#" + $.escapeSelector(td_id), response);
      ///////////////////////////////// change this for each page
      if (!$('#tE_ajax_chapters tr').hasClass('has_he_tra')) {
      $(this).append('<td class="' + td_id + ' he_tra_txt">' + ($(result).html()) + '</td>');
      }
      });
      $("#tE_ajax_chapters tr").addClass('has_he_tra');
      }
      });
      }


      // bring in hebrew text
      if (is_grk_heb_needed < 929) {
      var postData = "";
      $.ajax({
      ///////////////////////////////// change this for each page
      url: "../ajax_modules/WLC_4_20/module_WLC_4_20_" +ajax_book_chapter+ ".php",
      dataType: "html",
      type: "post",
      data: postData,
      success: function(response) {
      $("#tE_ajax_chapters tr").each(function() {
      var td_id = $(this).find("td:first-child").attr("id");
      result = $("#" + $.escapeSelector(td_id), response);
      ///////////////////////////////// change this for each page
      if (!$('#tE_ajax_chapters tr').hasClass('has_he')) {
      $(this).append('<td class="' + td_id + ' he_txt">' + ($(result).html()) + '</td>');
      }
      });
      $("#tE_ajax_chapters tr").addClass('has_he');
      }
      });
      }


      // bring in hebrew verse numbers
      if (is_grk_heb_needed < 929) {
      var postData = "";
      $.ajax({
      ///////////////////////////////// change this for each page
      url: '../ajax_modules/HEB_VERSE/module_heb_verse_numbers_' +ajax_book_chapter+ '.php',
      dataType: "html",
      type: "post",
      data: postData,
      success: function(response) {
      $("#tE_ajax_chapters tr").each(function() {
      var td_id = $(this).find("td:first-child").attr("id");
      result = $("#" + $.escapeSelector(td_id), response);
      ///////////////////////////////// change this for each page
      if (!$('#tE_ajax_chapters tr').hasClass('has_heb_verse_numbers')) {
      $(this).append('<td class="' + td_id + ' heb_verse_numbers">' + ($(result).html()) + '</td>');
      }
      });
      $("#tE_ajax_chapters tr").addClass('has_heb_verse_numbers');
      }
      });
      }
      */
      /////////////////////////////////////////////////////
      // let it all load and then:
      /////////////////////////////////////////////////////
      /*
          setTimeout(function(){
      //$( "table#tE_ajax_chapters tbody tr td.en_txt" ).css("color", "red");
      //$( "w[lemma*='b/']" ).css("color", "blue");
      //$( "w[lemma*='c/']" ).css("color", "green");
      //$( "w[lemma*='d/']" ).css("color", "orange");
      //$( "w[lemma*='l/']" ).css("color", "purple");
      // BEGIN remove all cantillation marks
      var contains_cantillations = $( "w:contains('\u0590'), w:contains('\u0591'), w:contains('\u0592'), w:contains('\u0593'), w:contains('\u0594'), w:contains('\u0595'), w:contains('\u0596'), w:contains('\u0597'), w:contains('\u0598'), w:contains('\u0599'), w:contains('\u059A'), w:contains('\u059B'), w:contains('\u059C'), w:contains('\u059D'), w:contains('\u059E'), w:contains('\u059F'), w:contains('\u05A0'), w:contains('\u05A1'), w:contains('\u05A2'), w:contains('\u05A3'), w:contains('\u05A4'), w:contains('\u05A5'), w:contains('\u05A6'), w:contains('\u05A7'), w:contains('\u05A8'), w:contains('\u05A9'), w:contains('\u05AA'), w:contains('\u05AB'), w:contains('\u05AC'), w:contains('\u05AD'), w:contains('\u05AE'), w:contains('\u05AF'), w:contains('\u05BE'), w:contains('\u05BD'), w:contains('\u05C0'), w:contains('\u05C3')" );
      var replace_these = new RegExp( '[\u0590-\u05AF\u05BE\u05BD\u05C0\u05C3]','g' );
      $( contains_cantillations ).html(function(i, text) {
      return text.replace(replace_these, '');
      });
      // END remove all cantillation marks
      // BEGIN he_txt addClass for prefix & strongs & suffix & add attr data-
      $("w[lemma]").each(function() {
      $(this).addClass($(this).attr("lemma"));
      //console.log($(this).attr("class"));
       var the_prefix = $(this).attr("class").match('[a-z]/');
      // console.log(the_prefix);
       var the_strongs = $(this).attr("class").match('[0-9]{1,4}');
      // console.log(the_strongs);
       var the_suffix = $(this).attr("class").match('\ [a-z]');
      // console.log(the_suffix);
      $(this).attr( "data-wprefix", ' ' + the_prefix );
      $(this).attr( "data-wstrong_h", 'H' + the_strongs );
      $(this).attr( "data-wsuffix", ' ' + the_suffix );
      });
      // END he_txt addClass for prefix & strongs & suffix & add attr data-

      // BEGIN grab the wlc word and put it in a data-wlc_word to then compare with bhs
      $("w").each(function() {
      var accents_to_remove = new RegExp( '[\u05B0\u05B1\u05B2\u05B3\u05B4\u05B5\u05B6\u05B7\u05B8\u05B9\u05BA\u05BB\u05BC\u05BD\u05BE\u05BF\u05C0\u05C1\u05C2\u05C3\u05C4\u05C5\u05C6\u05C7\u05C8\u05C9\u05CA\u05CB\u05CC\u05CD\u05CE\u05CF]','g' );
      var wlc_stripped_word = $(this).html().replace(accents_to_remove, "").replace("ב\/", "").replace("ו\/", "").replace("ה\/", "").replace("ל\/", "").replace("מ\/", "").replace("כ\/", "");
      $(this).attr("data-wlc_stripped_word", wlc_stripped_word);
      });
      // END grab the wlc word and put it in a data-wlc_word to then compare with bhs

      // BEGIN en_txt addClass for hebrew strongs numbers
      $("table#tE_ajax_chapters tbody tr td.en_txt span").each(function() {
       var the_strongs_h = $(this).attr("class").match('H[0-9]{1,4}');
      // console.log(the_strongs_h);
      $(this).attr( "data-wstrong_h", the_strongs_h );
      });
      // END en_txt addClass for hebrew strongs numbers

      // BEGIN es_txt addClass for hebrew strongs numbers
      $("table#tE_ajax_chapters tbody tr td.es_txt span").each(function() {
       var the_strongs_h = $(this).attr("class").match('H[0-9]{1,4}');
      // console.log(the_strongs_h);
      $(this).attr( "data-wstrong_h", the_strongs_h );
      });
      // END es_txt addClass for hebrew strongs numbers
      // BEGIN en_txt addClass for greek strongs numbers
      $("table#tE_ajax_chapters tbody tr td.en_txt span").each(function() {
       var the_strongs_g = $(this).attr("class").match('G[0-9]{1,4}');
      // console.log(the_strongs_g);
      $(this).attr( "data-wstrong_g", the_strongs_g );
      });
      // END en_txt addClass for greek strongs numbers

      // BEGIN es_txt addClass for greek strongs numbers
      $("table#tE_ajax_chapters tbody tr td.es_txt span").each(function() {
       var the_strongs_g = $(this).attr("class").match('G[0-9]{1,4}');
      // console.log(the_strongs_g);
      $(this).attr( "data-wstrong_g", the_strongs_g );
      });
      // END es_txt addClass for greek strongs numbers

      // BEGIN mouseovers and mouseouts

      // mouseovers gr
      $( "table#tE_ajax_chapters tbody tr td.gr_txt verse w" ).on('mouseover', function(e) {
      var this_wstrong_g = $(this).data("wstrong_g");
      // this word and same word en
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
      // this word and same word es
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
      // this word and same word he
      $( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
      $( ".click_on_word_to_load" ).show();
      });
      // mouseouts gr
      $( "table#tE_ajax_chapters tbody tr td.gr_txt verse w" ).on('mouseout', function(e) {
      $("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
      });

      // mouseovers gr_tra
      $( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w" ).on('mouseover', function(e) {
      var this_wstrong_g = $(this).data("wstrong_g");
      // this word and same word en
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
      // this word and same word es
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
      // this word and same word he
      $( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
      });
      // mouseouts gr_tra
      $( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w" ).on('mouseout', function(e) {
      $("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
      });

      // mouseovers en
      $( "table#tE_ajax_chapters tbody tr td.en_txt span" ).on('mouseover', function(e) {
      var this_wstrong_h = $(this).data("wstrong_h");
      var this_wstrong_g = $(this).data("wstrong_g");
      // this word and same word gr
      $( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
      // this word and same word en
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
      // this word and same word es
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
      // this word and same word he
      $( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
      });
      // mouseouts en
      $( "table#tE_ajax_chapters tbody tr td.en_txt span" ).on('mouseout', function(e) {
      $("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
      });

      // mouseovers es
      $( "table#tE_ajax_chapters tbody tr td.es_txt span" ).on('mouseover', function(e) {
      var this_wstrong_h = $(this).data("wstrong_h");
      var this_wstrong_g = $(this).data("wstrong_g");
      // this word and same word gr
      $( "table#tE_ajax_chapters tbody tr td.gr_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.gr_tra_txt verse" ).find('w[data-wstrong_g=' + this_wstrong_g + ']').css("background", "hotpink");
      // this word and same word en
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "lightgreen");
      // this word and same word es
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_g=' + this_wstrong_g + ']').css("background", "green");
      // this word and same word he
      $( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
      });
      // mouseouts es
      $( "table#tE_ajax_chapters tbody tr td.es_txt span" ).on('mouseout', function(e) {
      $("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.gr_tra_txt verse w").css("background", "");
      });

      // mouseovers he
      $( "table#tE_ajax_chapters tbody tr td.he_txt verse w" ).on('mouseover', function(e) {
      var this_wstrong_h = $(this).data("wstrong_h");
      var this_wprefix = $(this).data("wprefix").replace("null", "No attached prepositions in this word").replace("b\/", "ב = in, with, by \/ ").replace("c\/", "ו‎ = and, but \/ ").replace("d\/", "ה = the \/ ").replace("l\/", "ל = to, for, toward \/ ").replace("m\/", "מ = from, of, out of \/ ").replace("k\/", "כ = as, like, according to \/ ");
      var this_wsuffix = $(this).data("wsuffix");
      var this_wlc_stripped_word = $(this).data("wlc_stripped_word");
      console.log(this_wlc_stripped_word);
      //b = ב = bet = in - with - by
      //c = ו = vav = and - but
      //d = ה = hei = the
      //l = ל = lamed = to - for - toward
      //m = מ = mem = from - of - out of
      //k = כ = caf = as - like - according to

      // this word and same word en
      var this_en = $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen").html();
      // this word and same word es
      var this_es = $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green").html();
      // this word and same word he
      var this_he = $( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red").html();
      var this_he_tra = $( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink").html();

      // BEGIN populate analysis
      $.get( 'ajax_analysis/' +this_wstrong_h+ '.php', function(data) {
      var this_ancient_heb = ($(data).find('.semitic_early_b').html());
      var this_lexical_entry = ($(data).find('.this_word_heb').html());
      var this_transliteration = ($(data).find('.this_word_tra').html());
      var this_part_of_speech = ($(data).find('.part_of_speech').html());
      var this_type_deriv_rel = ($(data).find('.type_deriv_rel').html());
      var this_kjv_occur = ($(data).find('.kjv_occurr').html());
      var this_strong_def = ($(data).find('.strong_def').html());
      var this_bdb_tha_def = ($(data).find('.bdb_tha_def').html());
      var this_ahlb_lsj = ($(data).find('.ahlb_lsj').html());

      $(".wrap_ref_body_analysis").html(
      "<div class='analysis_title_item'>Ancient Hebrew Root:</div><div class='semitic_early_b'>" + this_ancient_heb + "</div>" +
      "<div class='analysis_title_item'>Hebrew:</div><div>" + this_he + "</div>" +
      "<div class='analysis_title_item'>Pronounciation:</div><div>" + this_he_tra + "</div>" +
      "<div class='analysis_title_item'>Attached preposition(s):</div><div>" + this_wprefix + "</div>" +
      //"<div class='analysis_title_item'>Suffix:</div><div>" + this_wsuffix + "</div>" +
      "<div class='analysis_title_item'>Morphology:</div><div class='my_wlc_morphology'></div>" +
      "<div class='analysis_title_item'>Lexical Entry:</div><div>" + this_lexical_entry + "</div>" +
      "<div class='analysis_title_item'>Transliteration:</div><div>" + this_transliteration + "</div>" +
      "<div class='analysis_title_item'>Part of Speech:</div><div>" + this_part_of_speech + "</div>" +
      "<div class='analysis_title_item'>Type, Derived or Related:</div><div>" + this_type_deriv_rel + "</div>" +
      "<div class='analysis_title_item'>Occurrences in King James Pure Cambridge:</div><div>" + this_kjv_occur + "</div>" +
      "<div class='analysis_title_item'>Strong\'s:</div><div>" + this_wstrong_h + "</div>"
      );


      // temporary to see what I want to markup in strongs and bdb ahlb tha lsj
      $(".wrap_ref_body_lexicons").html(
      "<div class='analysis_title_item'>Strong\'s Definition:</div><div>" + this_strong_def + "</div>" +
      "<div>" + this_bdb_tha_def + "</div>" +
      "<div>" + this_ahlb_lsj + "</div>"
      );



      },'html');
      // END populate analysis




      // BEGIN populate lexicons // which is wrong because I need to strip these files and keep just the Ecode and rename the directory
      $.get( 'ajax_Ecode/' +this_wstrong_h+ '.html', function(data) {
      var bento_strongs = ($(data).find('#dic1').html());
      var bento_bdb = ($(data).find('#dic2').html());
      $(".wrap_ref_body_hidden_for_Ecode").html(
      // just doing this to get the Ecode from it, so it's hidden
      "<div class='analysis_title_item'>bento Strongs:</div><div class=''>" + bento_strongs + "</div>" //+
      //"<div class='analysis_title_item'>bento BDB:</div><div class=''>" + bento_bdb + "</div>"
      ).append();
      var this_Ecode = $(".wrap_ref_body_hidden_for_Ecode").find('a').attr("href").match(/E([0-9]{5,5})/)[0];
      console.log(this_Ecode);

      // BEGIN populate analysis ETCBC section
      $.ajaxSetup({ cache: false });
      $.get( 'ajax_etcbc/' +this_Ecode+ '.html', function(data) {
      var bento_etcbc = ($(data).find('.add_etcbc').html());
      $(".wrap_ref_body_analysis").append(bento_etcbc);


      var wlc_to_match = this_wlc_stripped_word;
      //alert(wlc_to_match);






      // BEGIN grab the wlc word and put it in a data-wlc_word to then compare with bhs
      $("heb").each(function() {
      var accents_and_vowels_to_remove_from_bhs = new RegExp( '[\u0590-\u05AF\u05BE\u05BD\u05C0\u05C3\u05B0\u05B1\u05B2\u05B3\u05B4\u05B5\u05B6\u05B7\u05B8\u05B9\u05BA\u05BB\u05BC\u05BD\u05BE\u05BF\u05C0\u05C1\u05C2\u05C3\u05C4\u05C5\u05C6\u05C7\u05C8\u05C9\u05CA\u05CB\u05CC\u05CD\u05CE\u05CF]','g' );
      var bhs_stripped_word = $(this).html().replace(accents_and_vowels_to_remove_from_bhs, "");
      $(this).attr("data-bhs_stripped_word", bhs_stripped_word);
      });
      // END grab the wlc word and put it in a data-wlc_word to then compare with bhs






      $(".all_morph_forms").find('heb[data-bhs_stripped_word=' + this_wlc_stripped_word + ']').parent().nextAll("almoph").eq(0).css("background", "#2d210f");

      var clone_this_to_morphology = $(".all_morph_forms").find('heb[data-bhs_stripped_word=' + this_wlc_stripped_word + ']').parent().nextAll("almoph").eq(0).css("background", "#2d210f").clone();

      $(".my_wlc_morphology").append(clone_this_to_morphology).css("color", "red");
      $(".my_wlc_morphology").find("almoph").css("background", "black");

      //$("heb")..match(this_wlc_stripped_word).css("color", "orange");

      },'html');
      // END populate analysis ETCBC section

      },'html');
      // END populate lexicons // which is wrong because I need to strip these files and keep just the Ecode and rename the directory











      });
      // mouseouts he
      $( "table#tE_ajax_chapters tbody tr td.he_txt verse w" ).on('mouseout', function(e) {
      $("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");



      });

      // mouseovers he_tra
      $( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse w" ).on('mouseover', function(e) {
      var this_wstrong_h = $(this).data("wstrong_h");
      // this word and same word en
      $( "table#tE_ajax_chapters tbody tr td.en_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "lightgreen");
      // this word and same word es
      $( "table#tE_ajax_chapters tbody tr td.es_txt" ).find('span[data-wstrong_h=' + this_wstrong_h + ']').css("background", "green");
      // this word and same word he
      $( "table#tE_ajax_chapters tbody tr td.he_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "red");
      $( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse" ).find('w[data-wstrong_h=' + this_wstrong_h + ']').css("background", "hotpink");
      });
      // mouseouts he_tra
      $( "table#tE_ajax_chapters tbody tr td.he_tra_txt verse w" ).on('mouseout', function(e) {
      $("table#tE_ajax_chapters tbody tr td.en_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.es_txt span").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_txt verse w").css("background", "");
      $("table#tE_ajax_chapters tbody tr td.he_tra_txt verse w").css("background", "");
      });

      //
      //
      // mouseleave to clear confusions in info panel below
      $( ".wrap_ajaxed" ).find('w').on('mouseleave', function(e) {
      $( ".click_on_word_to_load" ).hide();
      //$(".testing_container_mouse").hide();
      });

      // END mouseovers and mouseouts

          }, 100);

      //return false; this probably needs to be here, but doesn't seem it's necessary


      */
      //// END /////// brought in from the pages




      /*
      //////////////////// swap hebrew to the right
      $('.para1').has('bhs').each(function(i,ele){
          $(ele).insertAfter($(ele).next())
      });
      */

      setTimeout(function() {
        //clear prior search result verse highlighting
        $("#pBible tbody tr td").css("background", "#110d09");


        /////////////////////////////////////////
        // BEGIN show bento tooltips in wrap_ref_body_welcome
        ////////////////////////////////////////////
        // mouseover hebrew or greek
        $(".wrap_ajaxed").find("#tE_ajax_chapters tbody tr td.he_txt verse").find('w').on('mouseover', function(e) {
          /*
          $( ".click_on_word_to_load" ).show();
          */



          var heb_class = $(this).parents().eq(4).find("tr td.para1").find($(this).find("heb")).attr("class");
          var grk_class = $(this).parents().eq(4).find("tr td.para1").find($(this).find("grk")).attr("class");
          var eng_class = $(this).parents().eq(4).find("tr td.para2").find($(this).find("eng")).attr("class");

          var heb_strongs = "eng." + heb_class;
          var grk_strongs = "eng." + grk_class;

        });

        // mouseover english
        $(".wrap_ajaxed").find("tr td.para2").find('.tt1').on('mouseover', function(e) {

          /*
          $( ".click_on_word_to_load" ).show();
          */


          $(".testing_container_mouse")
            .show()
            .html(
              "<div>" +
              $(this)
              .parents()
              .eq(4)
              .find("tr td.para2")
              .find($(this).find(".tt2"))
              .html() +
              "</div>"
            );
        });


        // mouseleave to clear confusions in info panel below
        $(".wrap_ajaxed").find('w').on('mouseleave', function(e) {
          $(".click_on_word_to_load").hide();
          $(".testing_container_mouse").hide();
        });

        // click hebrew or greek to select it and make it ready for dictionaries & lexicons
        $(".wrap_ajaxed").find("tr td.para1").find('.tt1').on('click', function(e) {

          //check if right ref panel is already opened
          if ($(".navbar_bot_item_right ").hasClass('menu-active')) {
            // otherwise otherwise open it
          } else {
            $(".navbar_bot_item_right").trigger("click");
          }

          $(".wrap_ref_body_analysis, .wrap_ref_body_lexicons, .wrap_ref_body_dictionaries, .wrap_ref_body_encyclopedias, .wrap_ref_body_topics, .wrap_ref_body_audio, .wrap_ref_body_views, .wrap_ref_body_notes, .wrap_ref_body_highlights, .wrap_ref_body_bookmarks, .wrap_ref_body_post").hide("slow");

          $(".wrap_ref_body_welcome, .current_word_loaded, .testing_container_click, .click_on_word_to_load").show();

          var heb_class = $(this).parents().eq(4).find("tr td.para1").find($(this).find("heb")).attr("class");
          var grk_class = $(this).parents().eq(4).find("tr td.para1").find($(this).find("grk")).attr("class");
          var eng_class = $(this).parents().eq(4).find("tr td.para2").find($(this).find("eng")).attr("class");

          var heb_strongs = "eng." + heb_class;
          var grk_strongs = "eng." + grk_class;

          $(".testing_container_click")
            .show()
            .html(
              "<div>" +
              $(this)
              .parents()
              .eq(4)
              .find("tr td.para1")
              .find($(this).find(".tt2"))
              .html() +
              "</div>" +
              "<div>strong's</div>" +
              "<div>" +
              $(this)
              .parents()
              .eq(4)
              .find("tr td.para2")
              .find(heb_strongs + ',' + grk_strongs)
              .parents(".tt1")
              .find(".tt2")
              .html() +
              "</div>"
            );
        });
        /////////////////////////////////////////
        // END show bento tooltips in wrap_ref_body_welcome
        ////////////////////////////////////////////




        /////////////////////////////////////////
        // BEGIN working here trying to trigger mouseover on the hebrew corresponding word
        ////////////////////////////////////////////
        //////////// it works but makes everythinf very slow
        $(".wrap_ajaxed").find("tr td.para2").find('.tt1').on('click', function(event) {

          var got_my_code = $(this).children().attr("class");

          // this works but it's very slow
          $(".para1").find("." + got_my_code).filter(function(event) {
            return $(this);

          }).first().trigger("click");
          return false;

        });
        /////////////////////////////////////////
        // END working here trying to trigger mouseover on the hebrew corresponding word
        ////////////////////////////////////////////




      }, 500);

























    });





      console.log("MutationObservingHiddenContBuild // finished bringing in all the data into wrap_ajaxed for this mutation");







  $('#example-browsing_mode_nav_left_Verses tbody').on('click', 'tr td', function(e) {
    var verseToBorderBackground = $(this).children().first();
    console.log("verseToBorderBackground" + ":" + verseToBorderBackground);
    var browseToVerse = $(this).children().first().attr("id");
    console.log("browseToVerse" + ":" + browseToVerse);

    $("#example-browsing_mode_nav_left_Verses tbody tr td div").css("border", "none").css("background", "none");
    $(".wrap_ajaxed table#tE_ajax_chapters tbody tr").css("border", "none").css("background", "none");

    setTimeout(function() {
      var selectedBook = $("#browse_to_book").text();
      var selectedChapter = $("#browse_to_chapter").text();
      $(".wrap_ajaxed").scrollTo("#v" + selectedBook + "\\." + selectedChapter + "\\." + browseToVerse, 500, {offset:-1});
      $("#v" + selectedBook + "\\." + selectedChapter + "\\." + browseToVerse).parent().css("border", "1px solid hotpink").css("border-radius", "4px").css("background", "rgba(0, 0, 0, 0.4)");
    console.log("// highlighted output text in hotpink @ 6 sec");
      $(verseToBorderBackground).css("border", "1px solid hotpink").css("background", "rgba(0, 0, 0, 0.4)");
    console.log("verseToBorderBackground" + ":" + verseToBorderBackground + "// highlighted in hotpink @ 6 sec");
      $(".table_verses_col").scrollTo("table#example-browsing_mode_nav_left_Verses tbody tr td div#" + browseToVerse, 1000, {offset:-8});
    }, 5000);



  });
















    $(".search_results").hide("slow", "linear");
    $(".wrap_ajaxed").show("slow", "linear");
    $(".wrap_ajaxed_cloned_status").show("slow", "linear");




    //////////////////////////////////////////////////
    ////// BEGIN scrollTo nook chapter verse ////
    //////////////////////////////////////////////////
    // get the data
    var selectedSection = $("#browse_to_section").text();
    var selectedBook = $("#browse_to_book").text();
    var selectedChapter = $("#browse_to_chapter").text();
    var selectedVerse = $("#browse_to_verse").text();
    var selectedAudio = $("#browse_to_audio").text();
    // scrollTo
    $(".table_books_col").scrollTo("table#s1 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s2 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s3 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s4 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s5 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s6 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s7 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s8 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s9 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s10 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s11 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_books_col").scrollTo("table#s12 tbody tr td div#" + selectedBook, 1000, {offset:-8});
    $(".table_chapters_col").scrollTo("table#example-browsing_mode_nav_left_Chapters tbody tr td div#" + selectedChapter, 1000, {offset:-8});
    $(".table_verses_col").scrollTo("table#example-browsing_mode_nav_left_Verses tbody tr td div#" + selectedVerse, 1000, {offset:-8});
    //////////////////////////////////////////////////
    ////// END scrollTo nook chapter verse ////
    //////////////////////////////////////////////////


// set time out seq // there's no need for this setTimeout
 //   setTimeout(function() {
    var selectedSection = $("#browse_to_section").text();
    var selectedBook = $("#browse_to_book").text();
    var selectedChapter = $("#browse_to_chapter").text();


//      $("#example-browsing_mode_nav_left_Chapters tbody tr td div#1").css("border", "none").css("background", "none");
//      $("#example-browsing_mode_nav_left_Verses tbody tr td div#1").css("border", "none").css("background", "none");



      $('#' + selectedSection + ' tbody tr td #' + selectedBook).css("border", "1px solid blue").css("background", "rgba(0, 0, 0, 0.4)").addClass("book_is_selected");
	  console.log("blue section & book");
      $('#example-browsing_mode_nav_left_Chapters tbody tr td div#' + selectedChapter).css("border", "1px solid blue").css("background", "rgba(0, 0, 0, 0.4)").addClass("chapter_is_selected");
	  console.log("blue chapter");

//    }, 0);













// set time out seq // there's no need for this setTimeout
    setTimeout(function() {

   var scrollToLiSelected = $("ul").find("li.selected");
      $("ul").scrollTo(scrollToLiSelected, 0);

var liSelectedChangeWrapAjaxedClonedStatus = $("li.selected a").text();
$(".wrap_ajaxed_cloned_status").text("browsing inside " + liSelectedChangeWrapAjaxedClonedStatus);

var currentSectionCode = $("li.selected a").attr("data-section");
$("#current_section").text(currentSectionCode);
$("#current_section:contains('s1')").html("your current section is the Torah");
$("#current_section:contains('s2')").html("your current section is the Former Prophets");
$("#current_section:contains('s3')").html("your current section is the Later Prophets");
$("#current_section:contains('s4')").html("your current section is the Twelve");
$("#current_section:contains('s5')").html("your current section is the Scrolls of Truth");
$("#current_section:contains('s6')").html("your current section is the Five Scrolls");
$("#current_section:contains('s7')").html("your current section is the Other Scrolls");
$("#current_section:contains('s8')").html("your current section is the Messiah");
$("#current_section:contains('s9')").html("your current section is the Emissaries");
$("#current_section:contains('s10')").html("your current section is the Assemblies");
$("#current_section:contains('s11')").html("your current section is the Disciples");
$("#current_section:contains('s12')").html("your current section is the Vision");

    }, 5000);














  };
  //////////////////////////////////////////////////
  //////END MutationObserver MutationObservingHiddenContBuild ////
  //////////////////////////////////////////////////
});
/////////////////////////////////////////
// END hidden container to build string & syncing chapters/audio & ajax calls & strong's tooltips
////////////////////////////////////////////




$(document).ready(function() {
  // audio autoplay switch on off
  $(".audio_autoplay_options").on("click", "#config_audio_autoplay_on", function(e) {
    $("#config_audio_autoplay_off").removeClass("config_audio_autoplay_active");

    if ($("#config_audio_autoplay_on").hasClass("config_audio_autoplay_active")) {} else {
      ($("#config_audio_autoplay_on").addClass("config_audio_autoplay_active"));
    }
  });
  $(".audio_autoplay_options").on("click", "#config_audio_autoplay_off", function(e) {
    ($("#config_audio_autoplay_on").removeClass("config_audio_autoplay_active"));

    if ($("#config_audio_autoplay_off").hasClass("config_audio_autoplay_active")) {} else {
      ($("#config_audio_autoplay_off").addClass("config_audio_autoplay_active"))
    }
  });
  // audio pause for searches switch on off
  $(".audio_autoplay_options").on("click", "#config_audio_pause_for_searches_on", function(e) {
    $("#config_audio_pause_for_searches_off").removeClass("config_audio_pause_for_searches_active");

    if ($("#config_audio_pause_for_searches_on").hasClass("config_audio_pause_for_searches_active")) {} else {
      ($("#config_audio_pause_for_searches_on").addClass("config_audio_pause_for_searches_active"));
    }
  });
  $(".audio_autoplay_options").on("click", "#config_audio_pause_for_searches_off", function(e) {
    ($("#config_audio_pause_for_searches_on").removeClass("config_audio_pause_for_searches_active"));

    if ($("#config_audio_pause_for_searches_off").hasClass("config_audio_pause_for_searches_active")) {} else {
      ($("#config_audio_pause_for_searches_off").addClass("config_audio_pause_for_searches_active"))
    }
  });
  // audio autoplay when loading from search results on off
  $(".audio_autoplay_options").on("click", "#config_audio_autoplay_search_results_on", function(e) {
    $("#config_audio_autoplay_search_results_off").removeClass("config_audio_autoplay_search_results_active");

    if ($("#config_audio_autoplay_search_results_on").hasClass("config_audio_autoplay_search_results_active")) {} else {
      ($("#config_audio_autoplay_search_results_on").addClass("config_audio_autoplay_search_results_active"));
    }
  });
  $(".audio_autoplay_options").on("click", "#config_audio_autoplay_search_results_off", function(e) {
    ($("#config_audio_autoplay_search_results_on").removeClass("config_audio_autoplay_search_results_active"));

    if ($("#config_audio_autoplay_search_results_off").hasClass("config_audio_autoplay_search_results_active")) {} else {
      ($("#config_audio_autoplay_search_results_off").addClass("config_audio_autoplay_search_results_active"))
    }
  });
  // end document ready
});




$(document).ready(function() {
// prepare to handle click on search results
  $('#example-main tbody').on('click', 'tr', function(e) {
$('#example-browsing_mode_nav_left_Chapters tbody tr td div').addClass("coming_from_a_search_result");
  });
// BEGIN ////////////// added in order to get playlist to be ready with chapter 1 & thus, wrap_ajaxed_cloned_status updated too
  $('#s1_wrapper, #s2_wrapper, #s3_wrapper, #s4_wrapper, #s5_wrapper, #s6_wrapper, #s7_wrapper, #s8_wrapper, #s9_wrapper, #s10_wrapper, #s11_wrapper, #s12_wrapper').on('click', function(e) {

  // set time out seq //
    setTimeout(function() {
      var audioBookId = $(".wrap_ajaxed").find('.audio_book_id').text();
      var audioChId = $(".wrap_ajaxed").find('.audio_ch_id').text();
      var audioResultId = parseInt(audioBookId, 10) + parseInt(audioChId, 10) - 1;
      if ($("#config_audio_autoplay_on").hasClass("config_audio_autoplay_active")) {
        //alert(audioResultId);
        window.sm2BarPlayers[0].actions.play(audioResultId);
      }
      if ($("#config_audio_autoplay_off").hasClass("config_audio_autoplay_active")) {
        //alert(audioResultId);
        window.sm2BarPlayers[0].actions.play(audioResultId);
        setTimeout(function() {
        window.sm2BarPlayers[0].actions.pause(audioResultId);
      }, 1000);
      }
    }, 3000);
  });
// END ////////////// added in order to get playlist to be ready with chapter 1 & thus, wrap_ajaxed_cloned_status updated too

  $('#example-browsing_mode_nav_left_Chapters tbody').on('click', 'tr td div', function(e) {

// set time out seq //
    setTimeout(function() {
      var audioBookId = $(".wrap_ajaxed").find('.audio_book_id').text();
      var audioChId = $(".wrap_ajaxed").find('.audio_ch_id').text();
      var audioResultId = parseInt(audioBookId, 10) + parseInt(audioChId, 10) - 1;

      if ($("#config_audio_autoplay_on").hasClass("config_audio_autoplay_active")) {
        //alert(audioResultId);
        window.sm2BarPlayers[0].actions.play(audioResultId);
      }
      if ($("#config_audio_autoplay_off").hasClass("config_audio_autoplay_active")) {
        //alert(audioResultId);
        window.sm2BarPlayers[0].actions.play(audioResultId);
        setTimeout(function() {
        window.sm2BarPlayers[0].actions.pause(audioResultId);
      }, 1000);
      }


      if (($("#config_audio_autoplay_search_results_on").hasClass("config_audio_autoplay_search_results_active")) && ($("#example-browsing_mode_nav_left_Chapters tbody tr td div").hasClass("coming_from_a_search_result"))) {
        //alert(audioResultId);
        window.sm2BarPlayers[0].actions.play(audioResultId);
        $("#example-browsing_mode_nav_left_Chapters tbody tr td div").removeClass("coming_from_a_search_result");
      }
      if (($("#config_audio_autoplay_search_results_off").hasClass("config_audio_autoplay_search_results_active")) && ($("#example-browsing_mode_nav_left_Chapters tbody tr td div").hasClass("coming_from_a_search_result"))) {
        //alert(audioResultId);
        window.sm2BarPlayers[0].actions.play(audioResultId);
        setTimeout(function() {
        window.sm2BarPlayers[0].actions.pause(audioResultId);
      }, 1000);
        $("#example-browsing_mode_nav_left_Chapters tbody tr td div").removeClass("coming_from_a_search_result");
      }



    }, 3000);
  });
  $('.searching_filters').on('click', function() {
    if ($("#config_audio_pause_for_searches_on").hasClass("config_audio_pause_for_searches_active")) {
      window.sm2BarPlayers[0].actions.pause();
    }

  });
});




$(document).ready(function() {


});




/////////////////////////////////////////////////////

//           from here down everything is still esperimental

/////////////////////////////////////////////////////
/*
////////////// disable double clicks //////////////
$(document).ready(function() {
//$("*").unbind("click"); // Removes all click handlers added by javascript from every element
$("[ondblclick]").removeAttr("ondblclick"); // Finds all elements with an 'onclick' attribute, and removes that attribute

// wrap inner eng with span with class eng
$(".tt1 eng").wrapInner(function() {
    return "<span class='wrap_for_edit_mode'></span>";
});
// wrap inner heb with span with class heb
$(".tt1 pdp heb").wrapInner(function() {
    return "<span class='wrap_for_edit_mode h_bento'></span>";
});



});
//////////////////// swap hebrew to the right
$('.para2').each(function(i,ele){
    $(ele).insertBefore($(ele).prev())
});



////////////////////////////////////////////////////
// BEGIN ajax columns added
////////////////////////////////////////////////////
// -----------------
// ajax spanish
//------------------
$(document).ready(function() {
$('.spanish_column_load').on('click', function() {

  var postData = ""; // you can send any data to ajax file.

  $.ajax({
    url: "_ajax_test_wlc.php", // your ajax file
    dataType: "html",
    type: "post",
    data: postData,
    success: function(response) {

$("#pBible tr").each(function() {

var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);

$(this).prepend('<td class="' + td_id + ' dynamic_column_spanish">' + ($(result).html()) + '</td>');

$('.spanish_column_load').hide();
$('.spanish_column_show').show().css("color","orange");;
$('.spanish_column_hide').show();
$('.dynamic_column_spanish').show();

});

    }

  });
  return false;
});
///////////////////////////////////////////////////
$('.spanish_column_hide').on('click', function() {
$('.spanish_column_hide').css("color","orange");
$('.spanish_column_show').css("color","");
$('.dynamic_column_spanish').hide();
});
///////////////////////////////////////////////////
$('.spanish_column_show').on('click', function() {
$('.spanish_column_show').css("color","orange");
$('.spanish_column_hide').css("color","");
$('.dynamic_column_spanish').show();
});
});

////////////////////////////////////////////////////
// -----------------
// ajax hebrew verse numbers
//------------------
$(document).ready(function() {

  var postData = ""; // you can send any data to ajax file.

  $.ajax({
    url: "_ajax_test_heb_verse_numbers.php", // your ajax file
    dataType: "html",
    type: "post",
    data: postData,
    success: function(response) {

$("#pBible tr").each(function() {

var td_id = $(this).find("td:first-child").attr("id");
result = $("#" + $.escapeSelector(td_id), response);

$(this).append('<td class="' + td_id + ' dynamic_column_heb_verse_numbers">' + ($(result).html()) + '</td>');

});

    }

  });
  return false;
});

////////////////////////////////////////////////////
// END ajax columns added
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN spanish module integration
////////////////////////////////////////////////////
$(document).ajaxComplete(function() {

// make spanish hovering trigger english hovering
$("table#pBible tbody tr td").find(".highlight_es_word").on("mouseover", function(e) {
$(this).css("background", "darkgreen");
var this_strong = $(this).find(".strong_es").text();
// it is working okay ..... alert(this_strong);
var find_in_kjv = $("table#pBible tbody tr td").find('dic:contains("'+ this_strong +'")');
//console.log(find_in_kjv);
var heb_and_eng_triggered = $(find_in_kjv).parents().eq(0).siblings("eng");
//console.log(heb_and_eng_triggered);
$(heb_and_eng_triggered).trigger("mouseover");
});
$("table#pBible tbody tr td").find(".highlight_es_word").on("mouseleave", function(e) {
$(this).css("background", "");
var this_strong = $(this).find(".strong_es").text();
// it is working okay ..... alert(this_strong);
var find_in_kjv = $("table#pBible tbody tr td").find('dic:contains("'+ this_strong +'")');
//console.log(find_in_kjv);
var heb_and_eng_triggered = $(find_in_kjv).parents().eq(0).siblings("eng");
//console.log(heb_and_eng_triggered);
$(heb_and_eng_triggered).trigger("mouseout");
});
// make spanish clicks trigger english clicks
$("table#pBible tbody tr td").find(".highlight_es_word").on("click", function(e) {
$(this).css("background", "darkgreen");
var this_strong = $(this).find(".strong_es").text();
// it is working okay ..... alert(this_strong);
var find_in_kjv = $("table#pBible tbody tr td").find('dic:contains("'+ this_strong +'")');
//console.log(find_in_kjv);
var heb_and_eng_triggered = $(find_in_kjv).parents().eq(0).siblings("eng");
//console.log(heb_and_eng_triggered);
$(heb_and_eng_triggered).trigger("click");
});

});
////////////////////////////////////////////////////
// END spanish module integration
////////////////////////////////////////////////////
*/
////////////////////////////////////////////////////
// BEGIN edit mode
////////////////////////////////////////////////////
$(document).ready(function() {
  // loads off by default //
  $('.edit_mode_off').css("color", "hotpink");
  $('table#pBible tbody').attr("contenteditable", "false");
  ///////////////////////////////////////////////////
  $('.edit_mode_on').on('click', function() {
    $('.edit_mode_on').css("color", "hotpink");
    $('.edit_mode_off').css("color", "");
    $('table#pBible tbody').attr("contenteditable", "true");
    // show the buttons //
    $('.undo').show();
    $('.redo').show();
    $('.gold_letter').show();
    $('.highlight_red').show();
    $('.highlight_green').show();
    $('.highlight_blue').show();
    document.designMode = "on";
    // this below doesn't work still NN to hide resize handlebars produced by comtenteditable
    document.execCommand("enableObjectResizing", false, false);
  });
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  $('.edit_mode_off').on('click', function() {
    $('table#pBible tbody').attr("contenteditable", "false");
    $('.edit_mode_off').css("color", "hotpink");
    $('.edit_mode_on').css("color", "");
    // hide the buttons //
    $('.undo').hide();
    $('.redo').hide();
    $('.gold_letter').hide();
    $('.highlight_red').hide();
    $('.highlight_green').hide();
    $('.highlight_blue').hide();
    $('#save_edits_and_download_the_page').hide();

    document.designMode = "off";
  });
  ///////////////////////////////////////////////////
});
////////////////////////////////////////////////////
// END edit mode
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN change to gold letter and the highlights
////////////////////////////////////////////////////
$(function() {

  $(".gold_letter").click(function() {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, "#D5AD6D");
    document.getSelection().removeAllRanges();
    $(".wrap_for_edit_mode").blur();
    $('.undo').show();
    $('.redo').show();
    $('#save_edits_and_download_the_page').show();
  });
  $(".highlight_red").click(function() {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('backColor', false, "red");
    document.getSelection().removeAllRanges();
    $('.undo').show();
    $('.redo').show();
    $('#save_edits_and_download_the_page').show();
  });
  $(".highlight_green").click(function() {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('backColor', false, "green");
    document.getSelection().removeAllRanges();
    $('.undo').show();
    $('.redo').show();
    $('#save_edits_and_download_the_page').show();
  });
  $(".highlight_blue").click(function() {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('backColor', false, "blue");
    document.getSelection().removeAllRanges();
    $('.undo').show();
    $('.redo').show();
    $('#save_edits_and_download_the_page').show();
  });


});
////////////////////////////////////////////////////
// END change to gold letter and the highlights
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// BEGIN button undo and redo un-select the thing!!!
////////////////////////////////////////////////////
$(document).ready(function() {
  $(".undo").click(function() {
    document.execCommand('undo', false, null);
    document.getSelection().removeAllRanges();
  });
  $(".redo").click(function() {
    document.execCommand('redo', false, null);
    document.getSelection().removeAllRanges();
  });
});
////////////////////////////////////////////////////
// END button undo and redo un-select the thing!!!
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN keyboard undo and redo un-select the thing!!!
////////////////////////////////////////////////////
$(document).keydown(function(e) {
  if (e.which === 90 && e.ctrlKey && !e.shiftKey) {
    setTimeout(function() {
      document.getSelection().removeAllRanges();
      console.log('control + z');
    }, 100);
  }
  if (e.which === 90 && e.ctrlKey && e.shiftKey) {
    setTimeout(function() {
      document.getSelection().removeAllRanges();
      console.log('control + shift + z');
    }, 100);
  }
  if (e.which === 89 && e.ctrlKey && !e.shiftKey) {
    setTimeout(function() {
      document.getSelection().removeAllRanges();
      console.log('control + y');
    }, 100);
  }
  if (e.which === 89 && e.ctrlKey && e.shiftKey) {
    setTimeout(function() {
      document.getSelection().removeAllRanges();
      console.log('control + shift + y');
    }, 100);
  }
});
////////////////////////////////////////////////////
// END keyboard undo and redo un-select the thing!!!
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN save to file
////////////////////////////////////////////////////
$(document).ready(function() {
  $("#save_edits_and_download_the_page").click(function() {
    var $filename_to_save_as = $("title").text();
    var blob = new Blob([$("html").html()], {
      type: "text/html;charset=utf-8"
    });
    saveAs(blob, $filename_to_save_as + ".html");
  });
});
////////// still NN to create some kind of auto save
//    setTimeout(function(){
//$("#save_edits_and_download_the_page").trigger("click").focus();
//    }, 3000);

////////////////////////////////////////////////////
// BEGIN save to file
////////////////////////////////////////////////////




$(document).ajaxStart(function() {
  console.log("an ajax request is going on now");
});





////////////////////////////
$(document).ready(function() { // begin the document ready
  ////////////////////////////////////////////////////
  // now working BEGIN show/hide search filter based on reg only (1 col) or full (5 cols) or full bilingual (6 col)
  ////////////////////////////////////////////////////

  // hide searching_filters if width drops below

  //  $(window).resize(function () {
  //         var searching_filters_width = $(".searching_filters").width();
  //         if (searching_filters_width < 250) {
  // $(".searching_filters").show();
  // $(".filter_reg_esp").css("color", "red");
  //         }
  //         if (searching_filters_width > 250) {
  // $(".searching_filters").show();
  // $(".filter_reg_esp").css("color", "blue");
  //         }
  //     });
  $(window).resize(function() {
    var searching_filters_width = $(".searching_filters").width();
    if (searching_filters_width < 311) {
      $(".searching_filters").show();
      // $(".filter_reg_esp").css("color", "red");
    }
    if (searching_filters_width > 311) {
      $(".searching_filters").show();
      // $(".filter_reg_esp").css("color", "blue");
    }
  });
  ////////////////////////////////////////////////////
  // END show/hide search filter based on reg only (1 col) or full (5 cols) or full bilingual (6 col)
  ////////////////////////////////////////////////////




  // $("body").on('DOMSubtreeModified', ".wrap_ajaxed", function(e) {
  //         var wrap_ajaxed_width = $(".wrap_ajaxed").width();
  //         if (wrap_ajaxed_width < 250) {
  // $(".searching_filters").hide();
  // $(".filter_reg_esp").css("color", "red");
  //         }
  //         if (wrap_ajaxed_width > 250) {
  // $(".searching_filters").show();
  // $(".filter_reg_esp").css("color", "blue");
  //         }
  // });




  // hide them first except english is default
  $(".wrap_input input.filter_grk").hide();
  $(".wrap_input input.filter_grk_tra").hide();
  $(".wrap_input input.filter_reg_esp").hide();
  $(".wrap_input input.filter_heb_tra").hide();
  $(".wrap_input input.filter_heb").hide();

  $(".config_reg_eng_only").on('click', function() {
    $(".wrap_input").css("width", "100%");
    $("input.filter_grk").removeClass("active").hide();
    $("input.filter_grk_tra").removeClass("active").hide();
    $("input.filter_reg_esp").removeClass("active").hide();
    $("input.filter_reg_eng").removeClass("active").show().addClass("active");
    $("input.filter_heb_tra").removeClass("active").hide();
    $("input.filter_heb").removeClass("active").hide();
  });
  $(".config_reg_esp_only").on('click', function() {
    $(".wrap_input").css("width", "100%");
    $("input.filter_grk").removeClass("active").hide();
    $("input.filter_grk_tra").removeClass("active").hide();
    $("input.filter_reg_esp").removeClass("active").show().addClass("active");
    $("input.filter_reg_eng").removeClass("active").hide();
    $("input.filter_heb_tra").removeClass("active").hide();
    $("input.filter_heb").removeClass("active").hide();
  });
  ////////////////////////////////////////////////////
  // END show/hide search filter based on reg only (1 col) or full (5 cols) or full bilingual (6 col)
  ////////////////////////////////////////////////////






////////////////////////////////////////////////////
// BEGIN prepare all document elements
////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// handle clicks on top_menu /////////////////////////////////////
$("#nav_top").find(".top_menu").on('click', function(e) {
// if menu is closed, close made with love and show the menu
if ((!$(".wrap_top_menu").hasClass("wrap_top_menu_active")) && ($("#made_with_love").hasClass("made_with_love_is_showing"))) {
  $(".wrap_im_part_of_biblefarm").hide();
  $(".wrap_how_to_be_a_part").hide();
  $(".not_today").hide();
  $(".question_how_to_be_a_part").hide();
  $(".item_center").removeClass("made_with_love_is_showing");
$(".wrap").find(".wrap_top_menu").show().addClass("wrap_top_menu_active");
}
// if menu is open, close made with love and show the menu
else if (($(".wrap_top_menu").hasClass("wrap_top_menu_active")) && ($("#made_with_love").hasClass("made_with_love_is_showing"))) {
  $(".wrap_im_part_of_biblefarm").hide();
  $(".wrap_how_to_be_a_part").hide();
  $(".not_today").hide();
  $(".question_how_to_be_a_part").hide();
  $(".item_center").removeClass("made_with_love_is_showing");
$(".wrap").find(".wrap_top_menu").show().addClass("wrap_top_menu_active");
}
// open menu when it's closed.
else if (!$(".wrap_top_menu").hasClass("wrap_top_menu_active")) {
$(".wrap").find(".wrap_top_menu").show().addClass("wrap_top_menu_active");
}
// close menu when it's open.
else if ($(".wrap_top_menu").hasClass("wrap_top_menu_active")) {
$(".wrap").find(".wrap_top_menu").hide().removeClass("wrap_top_menu_active");
}
});
//////////////////////////////////////////////////////////////////
// handle clicks on top_help /////////////////////////////////////
$("#nav_top").find(".top_help").on('click', function(e) {
// if help is closed, close made with love and show the help
if ((!$(".wrap_top_help").hasClass("wrap_top_help_active")) && ($("#made_with_love").hasClass("made_with_love_is_showing"))) {
  $(".wrap_im_part_of_biblefarm").hide();
  $(".wrap_how_to_be_a_part").hide();
  $(".not_today").hide();
  $(".question_how_to_be_a_part").hide();
  $(".item_center").removeClass("made_with_love_is_showing");
$(".wrap").find(".wrap_top_help").show().addClass("wrap_top_help_active");
}
// if help is open, close made with love and show the help
else if (($(".wrap_top_help").hasClass("wrap_top_help_active")) && ($("#made_with_love").hasClass("made_with_love_is_showing"))) {
  $(".wrap_im_part_of_biblefarm").hide();
  $(".wrap_how_to_be_a_part").hide();
  $(".not_today").hide();
  $(".question_how_to_be_a_part").hide();
  $(".item_center").removeClass("made_with_love_is_showing");
$(".wrap").find(".wrap_top_help").show().addClass("wrap_top_help_active");
}
// open help when it's closed.
else if (!$(".wrap_top_help").hasClass("wrap_top_help_active")) {
$(".wrap").find(".wrap_top_help").show().addClass("wrap_top_help_active");
}
// close help when it's open.
else if ($(".wrap_top_help").hasClass("wrap_top_help_active")) {
$(".wrap").find(".wrap_top_help").hide().removeClass("wrap_top_help_active");
}
});
//////////////////////////////////////////////////////////////////
// handle clicks on  bottom left nav /////////////////////////////////////
$("#nav_bot").find(".navbar_bot_item_left").on('click', function() {
if ($("#made_with_love").hasClass("made_with_love_is_showing")) {
  $(".wrap_im_part_of_biblefarm").hide();
  $(".wrap_how_to_be_a_part").hide();
  $(".not_today").hide();
  $(".question_how_to_be_a_part").hide();
  $(".item_center").removeClass("made_with_love_is_showing");
$("#nav_bot").find(".navbar_bot_item_left").trigger("click");
}
else if ($(".wrap_top_menu").hasClass("wrap_top_menu_active")) {
$(".wrap").find(".wrap_top_menu").hide().removeClass("wrap_top_menu_active");
$("#nav_bot").find(".navbar_bot_item_left").trigger("click");
}
});
//////////////////////////////////////////////////////////////////
// handle clicks on  bottom right ref /////////////////////////////////////
$("#nav_bot").find(".navbar_bot_item_right").on('click', function() {
if ($("#made_with_love").hasClass("made_with_love_is_showing")) {
  $(".wrap_im_part_of_biblefarm").hide();
  $(".wrap_how_to_be_a_part").hide();
  $(".not_today").hide();
  $(".question_how_to_be_a_part").hide();
  $(".item_center").removeClass("made_with_love_is_showing");
$("#nav_bot").find(".navbar_bot_item_right").trigger("click");
}
else if ($(".wrap_top_help").hasClass("wrap_top_help_active")) {
$(".wrap").find(".wrap_top_help").hide().removeClass("wrap_top_help_active");
$("#nav_bot").find(".navbar_bot_item_right").trigger("click");
}
});
//////////////////////////////////////////////////////////////////
// handle clicks on  top center /////////////////////////////////////

// this needs to be dealt with...

/*
var open = false;
  $("#edited_app_name").click(function() {
open = !open;
    $(".wrap_im_part_of_biblefarm").hide();
    $(".wrap_how_to_be_a_part").hide();
    $(".not_today").hide();
    $(".question_how_to_be_a_part").hide();
    $(".item_center").removeClass("made_with_love_is_showing");

if (open) {

if ((!$(".wrap_top_menu").hasClass("active")) && (!$(".accordion_admin").hasClass("active"))) {
$("#nav_top").find(".top_menu").trigger("click");
$(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_landing").trigger({type: 'click', which: 1});
$(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_trigger_open").trigger({type: 'click', which: 1});
}
if (($(".wrap_top_menu").hasClass("active")) && (!$(".accordion_admin").hasClass("active"))) {
$(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_landing").trigger({type: 'click', which: 1});
$(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_trigger_open").trigger({type: 'click', which: 1});
}
if ((!$(".wrap_top_menu").hasClass("active")) && ($(".accordion_admin").hasClass("active"))) {
$("#nav_top").find(".top_menu").trigger("click");
$("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
}
if (($(".wrap_top_menu").hasClass("active")) && ($(".accordion_admin").hasClass("active"))) {
$("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
}
} else {$("#nav_top").find(".top_menu").trigger("click");}
  });
*/





//////////////////////////////////////////////////////////////////
// handle clicks on  bottom center /////////////////////////////////////

// nothing to handle for now...



//////////////////////////////////////////////////////////////////
// handle clicks on  middle /////////////////////////////////////

// not sure I want this...

/*
$(".wrap").find(".wrap_resizeable_output, wrap_ajaxed_and_search_results_are_both_empty").on('click', function() {
if ($(".wrap_top_menu").hasClass("wrap_top_menu_active")) {
$(".wrap").find(".wrap_top_menu").hide().removeClass("wrap_top_menu_active");
}
});
*/


//////////////////////////////////////////////////////////////////
// BEGIN MutationObserver // handle empty situation when we clicked to search or emptied any of the search filters ///
//////////////////////////////////////////////////////////////////
/*  $(document).ready(function() {
  // First create our observer and get our target element
  var observer = new MutationObserver(MutationObserverEmptySituationYesOrNo),
    elTarget = document.querySelector("body"),
    objConfig = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    };
  // Then actually do some observing
  observer.observe(elTarget, objConfig);
  // Finally react when needed
  function MutationObserverEmptySituationYesOrNo() {
  //  console.log("TRIGGERED Mutation Observer MutationObserverEmptySituationYesOrNo");
    if (($(".wrap_ajaxed").css('display') == 'none') && ($(".search_results").css('display') == 'none') && ($(".wrap_nav_mode_browse").css('display') == 'none') && ($(".wrap_nav_mode_filter").css('display') != 'none')) {
    $(".search_results_are_empty").show();
    $(".you_are_in_searching_mode").show();
    $(".you_are_in_browsing_mode").hide();
    console.log("MutationObserverEmptySituationYesOrNo says I'm in searching mode");
    }
    if (($(".wrap_ajaxed").css('display') == 'none') && ($(".search_results").css('display') == 'none') && ($(".wrap_nav_mode_filter").css('display') == 'none') && ($(".wrap_nav_mode_browse").css('display') != 'none')) {
    $(".search_results_are_empty").show();
    $(".you_are_in_searching_mode").hide();
    $(".you_are_in_browsing_mode").show();
    }
    console.log("MutationObserverEmptySituationYesOrNo says I'm in browsing mode");
};  // end mutation observer
}); // end document ready
*/
//////////////////////////////////////////////////////////////////
// END MutationObserver // handle empty situation when we clicked to search or emptied any of the search filters ///
//////////////////////////////////////////////////////////////////

















































  ////////////////////////////////////////////////////
  // END prepare all document elements
  ////////////////////////////////////////////////////





















  $(".accordion_colour_preferences").on('click', function() {
    // BEGIN swiper for app background picker
    var swiper_app_bg_chooser = new Swiper(".swiper-container_app_bg_chooser", {
      slidesPerView: 4,
      slidesPerColumn: 4,
      paginationClickable: true,
      grabCursor: true,
      freeMode: true,
      keyboardControl: true,
      mousewheelControl: true,
      preloadImages: true,
      lazyLoading: true,
      lazyLoadingInPrevNext: true,
      lazyLoadingInPrevNextAmount: 5,
      preventClicks: false,
      scrollbar: ".swiper-scrollbar_app_bg_chooser",
      scrollbarHide: true,
      spaceBetween: 1
    });
    // END swiper for app background picker
  });








  ////////////////////////////////////////////////////
  // END donation process
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // END software request
  ////////////////////////////////////////////////////




  ////////////////////////////////////////////////////
  // BEGIN editing app name
  ////////////////////////////////////////////////////
  // name change on the top
//  var inputBox_config_name_change = document.getElementById('config_name_change');
//  inputBox_config_name_change.onkeyup = function() {
//      document.getElementById('edited_app_name').innerHTML = inputBox_config_name_change.value;
  // now update u_admin_name
//      document.getElementById('u_admin_name').innerHTML = inputBox_config_name_change.value;
//    }


  ////////////////////////////////////////////////////
  // END editing app name
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  // BEGIN editing app background
  ////////////////////////////////////////////////////
// handle default background when page loads is on a separate document ready at the bottom




// handle changes
  $(".wrap_top_menu").find(".bgc-0001").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0001");
	$("#u_background_class").attr("value", "bgc-0001").val("bgc-0001").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0002").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0002");
    $("#u_background_class").attr("value", "bgc-0002").val("bgc-0002").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0003").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0003");
    $("#u_background_class").attr("value", "bgc-0003").val("bgc-0003").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0004").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0004");
    $("#u_background_class").attr("value", "bgc-0004").val("bgc-0004").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0005").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0005");
    $("#u_background_class").attr("value", "bgc-0005").val("bgc-0005").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0006").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0006");
    $("#u_background_class").attr("value", "bgc-0006").val("bgc-0006").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0007").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0007");
    $("#u_background_class").attr("value", "bgc-0007").val("bgc-0007").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0008").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0008");
    $("#u_background_class").attr("value", "bgc-0008").val("bgc-0008").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0009").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0009");
    $("#u_background_class").attr("value", "bgc-0009").val("bgc-0009").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0010").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0010");
    $("#u_background_class").attr("value", "bgc-0010").val("bgc-0010").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0011").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0011");
    $("#u_background_class").attr("value", "bgc-0011").val("bgc-0011").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0012").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0012");
    $("#u_background_class").attr("value", "bgc-0012").val("bgc-0012").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0013").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0013");
    $("#u_background_class").attr("value", "bgc-0013").val("bgc-0013").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0014").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0014");
    $("#u_background_class").attr("value", "bgc-0014").val("bgc-0014").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0015").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0015");
    $("#u_background_class").attr("value", "bgc-0015").val("bgc-0015").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  $(".wrap_top_menu").find(".bgc-0016").on('click', function() {
    $(".wrap_top, .wrap_bot, .accordion_inner_background, .wrap_ajaxed, .wrap_ajaxed_cloned_status, #current_section, .wrap_nav_header, .wrap_nav_footer, .wrap_ref_header, .wrap_ref_footer, #example-nav_left_Books_status tbody td, #example-nav_left_Chapters_status tbody td, #example-nav_left_Verses_status tbody td, input.standard_input_jura, input.standard_input_reg, #example-nav_left_Teaching tbody td, #example-nav_left_FormerProphets tbody td, #example-nav_left_LatterProphets tbody td, #example-nav_left_TheTwelve tbody td, #example-nav_left_ScrollsOfTruth tbody td, #example-nav_left_FiveScrolls tbody td, #example-nav_left_OtherScrolls tbody td, #example-nav_left_Messiah tbody td, #example-nav_left_Emissaries tbody td, #example-nav_left_Assemblies tbody td, #example-nav_left_Disciples tbody td, #example-nav_left_Vision tbody td, #example-nav_left_Chapters tbody td, #example-nav_left_Verses tbody td, #s1 tbody td, #s2 tbody td, #s3 tbody td, #s4 tbody td, #s5 tbody td, #s6 tbody td, #s7 tbody td, #s8 tbody td, #s9 tbody td, #s10 tbody td, #s11 tbody td, #s12 tbody td, #example-browsing_mode_nav_left_Chapters tbody td, #example-browsing_mode_nav_left_Verses tbody td, .swiper_main_pagination, .show_sharing_options, .show_sending_options, .show_saving_options, ul.sm2-playlist-bd, .bd, .sm2-extra-controls, .sm2-inline-status, .sharing_modal_filter_mode, .sharing_modal_browsing_mode").removeClass("bgc-0001 bgc-0002 bgc-0003 bgc-0004 bgc-0005 bgc-0006 bgc-0007 bgc-0008 bgc-0009 bgc-0010 bgc-0011 bgc-0012 bgc-0013 bgc-0014 bgc-0015 bgc-0016").addClass("bgc-0016");
    $("#u_background_class").attr("value", "bgc-0016").val("bgc-0016").trigger("change");
	var colorSelected = $("#u_color_filter_switches_rgb").val();
	$(".swiper-wrapper_app_bg_chooser").find(".swiper-slide").css("border", "none").removeClass("active-bg");
	$(this).css("border", "1px solid " + colorSelected).addClass("active-bg");
  });
  ////////////////////////////////////////////////////
  // END editing app background
  ////////////////////////////////////////////////////




}); // end the document ready
/////////////////////////////////

/////////////////////////////////
//////BEGIN searching input filters for each language///////////////////////////
/////////////////////////////////
$(document).ready(function() {

  // if grk
  $("#to_search_grk").on('click', function() {
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").hide("slow");
    $("#searching_grk").css("display", "block").css("line-height", "45px").css("width", "100%").css("height", "45px");
    $("#filter_grk").show("slow").css("display", "block").focus();
  });
  $("#filter_grk").focusout(function() {
    $("#filter_grk").hide("slow");
    $("#searching_grk").css("display", "none").css("line-height", "0px").css("width", "0%").css("height", "0px");
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").show("slow");
  });
  // if grk_tra
  $("#to_search_grk_tra").on('click', function() {
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").hide("slow");
    $("#searching_grk_tra").css("display", "block").css("line-height", "45px").css("width", "100%").css("height", "45px");
    $("#filter_grk_tra").show("slow").css("display", "block").focus();
  });
  $("#filter_grk_tra").focusout(function() {
    $("#filter_grk_tra").hide("slow");
    $("#searching_grk_tra").css("display", "none").css("line-height", "0px").css("width", "0%").css("height", "0px");
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").show("slow");
  });
  // if reg_esp
  $("#to_search_reg_esp").on('click', function() {
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").hide("slow");
    $("#searching_reg_esp").css("display", "block").css("line-height", "45px").css("width", "100%").css("height", "45px");
    $("#filter_reg_esp").show("slow").css("display", "block").focus();
  });
  $("#filter_reg_esp").focusout(function() {
    $("#filter_reg_esp").hide("slow");
    $("#searching_reg_esp").css("display", "none").css("line-height", "0px").css("width", "0%").css("height", "0px");
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").show("slow");
  });
  // if reg_eng
  $("#to_search_reg_eng").on('click', function() {
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").hide("slow");
    $("#searching_reg_eng").css("display", "block").css("line-height", "45px").css("width", "100%").css("height", "45px");
    $("#filter_reg_eng").show("slow").css("display", "block").focus();
    ////// NN to add this to other languages as the production makes them available
    $(".search_results_are_empty_so_search_or_browse").show("slow");
  });
  $("#filter_reg_eng").focusout(function() {
    $("#filter_reg_eng").hide("slow");
    $("#searching_reg_eng").css("display", "none").css("line-height", "0px").css("width", "0%").css("height", "0px");
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").show("slow");
  });
  // if heb_tra
  $("#to_search_heb_tra").on('click', function() {
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").hide("slow");
    $("#searching_heb_tra").css("display", "block").css("line-height", "45px").css("width", "100%").css("height", "45px");
    $("#filter_heb_tra").show("slow").css("display", "block").focus();
  });
  $("#filter_heb_tra").focusout(function() {
    $("#filter_heb_tra").hide("slow");
    $("#searching_heb_tra").css("display", "none").css("line-height", "0px").css("width", "0%").css("height", "0px");
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").show("slow");
  });
  // if heb
  $("#to_search_heb").on('click', function() {
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").hide("slow");
    $("#searching_heb").css("display", "block").css("line-height", "45px").css("width", "100%").css("height", "45px");
    $("#filter_heb").show("slow").css("display", "block").focus();
  });
  $("#filter_heb").focusout(function() {
    $("#filter_heb").hide("slow");
    $("#searching_heb").css("display", "none").css("line-height", "0px").css("width", "0%").css("height", "0px");
    $("#to_search_grk,#to_search_grk_tra,#to_search_reg_esp,#to_search_reg_eng,#to_search_heb_tra,#to_search_heb").show("slow");
  });

}); // end the document ready
/////////////////////////////////
//////END searching input filters for each language///////////////////////////
/////////////////////////////////




/////////////////////////////////
////// START im part of biblefarm menu shows
/////////////////////////////////
$(document).ready(function() {

  $("#see_what_we_do").on('click', function() {
    $(".wrap_inner_biblefarm_bg").show("slow");
    $(".wrap_inner_biblefarm_see_what_we_do").show("slow");
    $(".wrap_inner_biblefarm_volunteer").hide("slow");
    $(".wrap_inner_biblefarm_accountability").hide("slow");
    $(".wrap_inner_biblefarm_fund_the_farm").hide("slow");

  });
  $("#volunteer").on('click', function() {
    $(".wrap_inner_biblefarm_bg").show("slow");
    $(".wrap_inner_biblefarm_volunteer").show("slow");
    $(".wrap_inner_biblefarm_see_what_we_do").hide("slow");
    $(".wrap_inner_biblefarm_accountability").hide("slow");
    $(".wrap_inner_biblefarm_fund_the_farm").hide("slow");

  });
  $("#accountability").on('click', function() {
    $(".wrap_inner_biblefarm_bg").show("slow");
    $(".wrap_inner_biblefarm_accountability").show("slow");
    $(".wrap_inner_biblefarm_see_what_we_do").hide("slow");
    $(".wrap_inner_biblefarm_volunteer").hide("slow");
    $(".wrap_inner_biblefarm_fund_the_farm").hide("slow");

  });
  $("#fund_the_farm").on('click', function() {
    $(".wrap_inner_biblefarm_bg").show("slow");
    $(".wrap_inner_biblefarm_fund_the_farm").show("slow");
    $(".wrap_inner_biblefarm_see_what_we_do").hide("slow");
    $(".wrap_inner_biblefarm_volunteer").hide("slow");
    $(".wrap_inner_biblefarm_accountability").hide("slow");

  });


}); // end the document ready
/////////////////////////////////
////// END im part of biblefarm menu shows
/////////////////////////////////






/*
/////////////////////////////////////////
// BEGIN default opening triggers
/////////////////////////////////////////
$(document).ready(function() {
  $('#browse_to_section').text("");
  $('#browse_to_book').text("");
  $('#browse_to_chapter').text("");
  $('#browse_to_verse').text("");
  $('#browse_to_audio').text("");

  $('#browse_to_section').text("s1");
  $('#browse_to_book').text("50");
  $('#browse_to_chapter').text("6");
  $('#browse_to_verse').text("4");
  $('#browse_to_audio').text("158");

  // $(".wrap_ref_body_audio").find("li a.158").parent().addClass("selected").trigger({type: 'click', which: 1});


  setTimeout(function() {
    $(".wrap_nav_body").find("#browsing_mode_scrollTo_nav_left_Teaching_landing").trigger({
      type: 'click',
      which: 1
    });
  }, 5000);

  setTimeout(function() {
    $(".wrap_nav_body").find("#s1_wrapper tbody tr td div#50").trigger({
      type: 'click',
      which: 1
    });
    $(".wrap_nav_body").find("#example-browsing_mode_nav_left_Chapters tbody tr td div#6").trigger({
      type: 'click',
      which: 1
    });
    $(".wrap_nav_body").find("#example-browsing_mode_nav_left_Verses tbody tr td div#4").trigger({
      type: 'click',
      which: 1
    });
  }, 10000);



});
/////////////////////////////////////////
// END default opening triggers
/////////////////////////////////////////
*/
/////////////////////////////////////////
// BEGIN screenfull
/////////////////////////////////////////
$(document).ready(function() {
// handle the screenfull functionality
const target = $('.screenfull_the_whole_site')[0]; // Get DOM element from jQuery collection
$('#config_full_screen_on').on('click', () => {
if (screenfull.enabled) {
screenfull.request(target);
// show a message to desktop users to hit escape key to go back to normal
$('.screenfull_message_add_to_homescreen').show();
// show a message to mobile users to add to home screen on iPhone/iPad or Android
$('.screenfull_message_add_to_homescreen').show();
}
});
// handle the on switch
$('#config_full_screen_on').on('click', function(e) {
var colorSelected = $("#u_color_filter_switches_rgb").val();
if ($(this).hasClass("active_switch")) {
$(this).css("color", colorSelected );
$("#config_full_screen_off").removeClass("active_switch").removeAttr("style");
}
else {
$(this).addClass("active_switch").css("color", colorSelected );
$("#config_full_screen_off").removeClass("active_switch").removeAttr("style");
}
});
// handle the off switch
$('#config_full_screen_off').on('click', function(e) {
screenfull.exit();
var colorSelected = $("#u_color_filter_switches_rgb").val();
if ($(this).hasClass("active_switch")) {
$(this).css("color", colorSelected );
$("#config_full_screen_on").removeClass("active_switch").removeAttr("style");
}
else {
$(this).addClass("active_switch").css("color", colorSelected );
$("#config_full_screen_on").removeClass("active_switch").removeAttr("style");
}
});
});
/////////////////////////////////////////
// END screenfull
/////////////////////////////////////////


















/////////////////////////////////////////
// BEGIN sm2 bar ui audio hacked open close playlist to show/hide audio_preferences_wrapper
/////////////////////////////////////////
$(document).ready(function() {
$(".sm2-menu").on('click', function(e) {
$(".audio_preferences_wrapper").toggle("slow");
});
});
/////////////////////////////////////////
// END sm2 bar ui audio hacked open close playlist to show/hide audio_preferences_wrapper
/////////////////////////////////////////





/////////////////////////////////////////
// BEGIN sm2 bar ui audio li selected item scrolls to top
/////////////////////////////////////////
$(document).ready(function() {

  $('li').on('click', function() {
 $("ul").scrollTo(this, 0);
  });

});
/////////////////////////////////////////
// END sm2 bar ui audio li selected item scrolls to top
/////////////////////////////////////////






/*
/////////////////////////////////////////
// BEGIN show the youtube playlist
/////////////////////////////////////////
$(document).ready(function() {
  $("#toggle_youtube_playlist").on("click", function(e) {
    $("#mainVideo").toggle();
    $(".video-list").toggle();
  });
  });
/////////////////////////////////////////
// END show the youtube playlist
/////////////////////////////////////////
/////////////////////////////////////////
// BEGIN hide the youtube playlist when a video is selected
/////////////////////////////////////////
$(document).ready(function() {
  $("#videoWrap").on("click", function(e) {
    $("#mainVideo").show();
    $(".video-list").hide();
  });
  });
/////////////////////////////////////////
// END hide the youtube playlist when a video is selected
/////////////////////////////////////////
*/





/////////////////////////////////////////
// BEGIN temp_jacob
/////////////////////////////////////////
$(document).ready(function() {

  $("#temp_jacob").on("click", function(e) {










    $(".wrap_ajaxed").empty();
    $(".wrap_ajaxed").load("jovi_001.html", function() {
      });













  });


});
/////////////////////////////////////////
// END temp_jacob
/////////////////////////////////////////


/////////////////////////////////////////
// BEGIN text color
/////////////////////////////////////////
$(document).ready(function() {

// handle filtering colors as user changes them
  $(".wrap_top_menu").find("#color_filters_switches_jasper").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_sapphire").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_chalcedony").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_emerald").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_sardonyx").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_sardius").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_chrysolite").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_beryl").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_topaz").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_chrysoprasus").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_jacinth").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
  $(".wrap_top_menu").find("#color_filters_switches_amethyst").on('click', function() {
$(".the_12_colors").css("border-bottom", "none");
$(this).css("border-bottom", "2px solid");
var colorNeeded = $(this).css("color");
var colorId = $(this).attr("id");
$("#u_color_filter_switches_rgb").attr("value", colorNeeded).val(colorNeeded).trigger("change");
$("#u_color_filter_switches_id").attr("value", colorId).val(colorId).trigger("change");
var colorSelected = $("#u_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorSelected + " !important;}</style>" ).appendTo( "head" );
$(".swiper-slide.active-bg").css("border", "1px solid " + colorSelected);
});
/////////////////////////////////////////
// END text color
/////////////////////////////////////////

/////////////////////////////////////////
// BEGIN app switches
/////////////////////////////////////////
///////// app_edit_mode
// handle click on app_edit_mode_on
$("#app_edit_mode_on").on("click", function(e) {
var colorSelected = $("#u_color_filter_switches_rgb").val();

if ($(this).hasClass("active_switch")) {
$(this).css("color", colorSelected );
$("#app_edit_mode_off").removeClass("active_switch").removeAttr("style");
}
else {
$(this).addClass("active_switch").css("color", colorSelected );
$("#app_edit_mode_off").removeClass("active_switch").removeAttr("style");
}
});
// handle click on app_edit_mode_off
$("#app_edit_mode_off").on("click", function(e) {
var colorSelected = $("#u_color_filter_switches_rgb").val();

if ($(this).hasClass("active_switch")) {
$(this).css("color", colorSelected );
$("#app_edit_mode_on").removeClass("active_switch").removeAttr("style");
}
else {
$(this).addClass("active_switch").css("color", colorSelected );
$("#app_edit_mode_on").removeClass("active_switch").removeAttr("style");
}
});
///////// app_terminal_main
// handle click on app_terminal_main_on
$("#app_terminal_main_on").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_terminal_main_status").text("");
$("#u_terminal_main_status").append(clickedStatusOn);

var colorSelected = $("#u_color_filter_switches_rgb").val();

if ($(this).hasClass("active_switch")) {
$(this).css("color", colorSelected );
$("#app_terminal_main_off").removeClass("active_switch").removeAttr("style");
}
else {
$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_main_off").removeClass("active_switch").removeAttr("style");
}
});
// handle click on app_terminal_main_off
$("#app_terminal_main_off").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_terminal_main_status").text("");
$("#u_terminal_main_status").append(clickedStatusOff);

var colorSelected = $("#u_color_filter_switches_rgb").val();

if ($(this).hasClass("active_switch")) {
$(this).css("color", colorSelected );
$("#app_terminal_main_on").removeClass("active_switch").removeAttr("style");
}
else {
$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_main_on").removeClass("active_switch").removeAttr("style");
}
});
///////// app_terminal_para
// handle click on app_terminal_para_on
$("#app_terminal_para_on").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_terminal_para_status").text("");
$("#u_terminal_para_status").append(clickedStatusOn);

var colorSelected = $("#u_color_filter_switches_rgb").val();
$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_para_off").removeClass("active_switch").removeAttr("style");
});
// handle click on app_terminal_para_off
$("#app_terminal_para_off").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_terminal_para_status").text("");
$("#u_terminal_para_status").append(clickedStatusOff);

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_para_on").removeClass("active_switch").removeAttr("style");
});
///////// app_terminal_orig
// handle click on app_terminal_orig_on
$("#app_terminal_orig_on").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_terminal_orig_status").text("");
$("#u_terminal_orig_status").append(clickedStatusOn);

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_orig_off").removeClass("active_switch").removeAttr("style");
});
// handle click on app_terminal_orig_off
$("#app_terminal_orig_off").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_terminal_orig_status").text("");
$("#u_terminal_orig_status").append(clickedStatusOff);

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_orig_on").removeClass("active_switch").removeAttr("style");
});
///////// app_terminal_tran
// handle click on app_terminal_tran_on
$("#app_terminal_tran_on").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_terminal_tran_status").text("");
$("#u_terminal_tran_status").append(clickedStatusOn);

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_tran_off").removeClass("active_switch").removeAttr("style");
});
// handle click on app_terminal_tran_off
$("#app_terminal_tran_off").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_terminal_tran_status").text("");
$("#u_terminal_tran_status").append(clickedStatusOff);

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_terminal_tran_on").removeClass("active_switch").removeAttr("style");
});



/// BEGIN ////// app_lang_en
// handle click on app_lang_en_main
$("#app_lang_en_main").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_lang_en_main").text("");
$("#u_lang_en_main").text(clickedStatusOn);
$("#selected_lang_main").text("main column in english");
$("#selected_lang_orig").text("hebrew & greek original");
$("#selected_lang_tran").text("hebrew & greek transliteration");


var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_main").removeClass("active_switch").removeAttr("style");
});
// handle click on app_lang_en_para
$("#app_lang_en_para").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_lang_en_main").text("");
$("#u_lang_en_main").text(clickedStatusOff);
$("#selected_lang_para").text("parallel column in english");

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_para").removeClass("active_switch").removeAttr("style");
});
/// END ////// app_lang_en
/// BEGIN ////// app_lang_de
// handle click on app_lang_de_main
$("#app_lang_de_main").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_lang_de_main").text("");
$("#u_lang_de_main").text(clickedStatusOn);
$("#selected_lang_main").text("hauptspalte in deutsch");
$("#selected_lang_orig").text("hebräisch & griechisch original");
$("#selected_lang_tran").text("hebräisch & griechisch transliter");


var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_main").removeClass("active_switch").removeAttr("style");
});
// handle click on app_lang_de_para
$("#app_lang_de_para").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_lang_de_main").text("");
$("#u_lang_de_main").text(clickedStatusOff);
$("#selected_lang_para").text("parallele spalte in deutsch");

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_para").removeClass("active_switch").removeAttr("style");
});
/// END ////// app_lang_de
/// BEGIN ////// app_lang_fr
// handle click on app_lang_fr_main
$("#app_lang_fr_main").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_lang_fr_main").text("");
$("#u_lang_fr_main").text(clickedStatusOn);
$("#selected_lang_main").text("colonne principale en français");
$("#selected_lang_orig").text("hébreu et grec original");
$("#selected_lang_tran").text("translittération hébreu et grec");


var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_main").removeClass("active_switch").removeAttr("style");
});
// handle click on app_lang_fr_para
$("#app_lang_fr_para").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_lang_fr_main").text("");
$("#u_lang_fr_main").text(clickedStatusOff);
$("#selected_lang_para").text("colonne parallèle en français");

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_para").removeClass("active_switch").removeAttr("style");
});
/// END ////// app_lang_fr
/// BEGIN ////// app_lang_es
// handle click on app_lang_es_main
$("#app_lang_es_main").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_lang_es_main").text("");
$("#u_lang_es_main").text(clickedStatusOn);
$("#selected_lang_main").text("columna principal en español");
$("#selected_lang_orig").text("hebreo y griego original");
$("#selected_lang_tran").text("transliteración hebrea y griega");


var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_main").removeClass("active_switch").removeAttr("style");
});
// handle click on app_lang_es_para
$("#app_lang_es_para").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_lang_es_main").text("");
$("#u_lang_es_main").text(clickedStatusOff);
$("#selected_lang_para").text("columna paralela en español");

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_para").removeClass("active_switch").removeAttr("style");
});
/// END ////// app_lang_es
/// BEGIN ////// app_lang_pt
// handle click on app_lang_pt_main
$("#app_lang_pt_main").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_lang_pt_main").text("");
$("#u_lang_pt_main").text(clickedStatusOn);
$("#selected_lang_main").text("coluna principal em português");
$("#selected_lang_orig").text("original hebraico e grego");
$("#selected_lang_tran").text("transliteração hebraica e grega");


var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_main").removeClass("active_switch").removeAttr("style");
});
// handle click on app_lang_pt_para
$("#app_lang_pt_para").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_lang_pt_main").text("");
$("#u_lang_pt_main").text(clickedStatusOff);
$("#selected_lang_para").text("coluna paralela em português");

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_para").removeClass("active_switch").removeAttr("style");
});
/// END ////// app_lang_pt
/// BEGIN ////// app_lang_it
// handle click on app_lang_it_main
$("#app_lang_it_main").on("click", function(e) {
	// update user saved data
var clickedStatusOn = $(this).text();
$("#u_lang_it_main").text("");
$("#u_lang_it_main").text(clickedStatusOn);
$("#selected_lang_main").text("colonna principale in italiano");
$("#selected_lang_orig").text("originale ebraico e greco");
$("#selected_lang_tran").text("traslitterazione ebraica e greca");


var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_main").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_para").removeClass("active_switch").removeAttr("style");
});
// handle click on app_lang_it_para
$("#app_lang_it_para").on("click", function(e) {
	// update user saved data
var clickedStatusOff = $(this).text();
$("#u_lang_it_main").text("");
$("#u_lang_it_main").text(clickedStatusOff);
$("#selected_lang_para").text("colonna parallela in italiano");

var colorSelected = $("#u_color_filter_switches_rgb").val();

$(this).addClass("active_switch").css("color", colorSelected );
$("#app_lang_en_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_de_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_fr_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_es_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_pt_para").removeClass("active_switch").removeAttr("style");
$("#app_lang_it_main").removeClass("active_switch").removeAttr("style");
});
/// END ////// app_lang_it
/// BEGIN ////// app_lang defaults
$(".panel_language_preferences").on("click", function(e) {
/////// to english main
if (!$("#app_lang_en_main, #app_lang_de_main, #app_lang_fr_main, #app_lang_es_main, #app_lang_pt_main, #app_lang_it_main, #app_lang_en_para").hasClass("active_switch")) {
$("#app_lang_en_main").trigger("click");
}
/////// to english para
if (!$("#app_lang_en_para, #app_lang_de_para, #app_lang_fr_para, #app_lang_es_para, #app_lang_pt_para, #app_lang_it_para, #app_lang_en_main").hasClass("active_switch")) {
$("#app_lang_en_para").trigger("click");
}
/////// to spanish main
if (!$("#app_lang_en_main, #app_lang_de_main, #app_lang_fr_main, #app_lang_es_main, #app_lang_pt_main, #app_lang_it_main, #app_lang_es_para").hasClass("active_switch")) {
$("#app_lang_es_main").trigger("click");
}
/////// to spanish para
if (!$("#app_lang_en_para, #app_lang_de_para, #app_lang_fr_para, #app_lang_es_para, #app_lang_pt_para, #app_lang_it_para, #app_lang_es_main").hasClass("active_switch")) {
$("#app_lang_es_para").trigger("click");
}
});
/// END ////// app_lang defaults


/////////////////////////////////////////
// END app switches
/////////////////////////////////////////







// handle click on continue as a visitor in first time users
$("#continue_as_a_visitor_first").on("click", function(e) {
$("#nav_top").find(".top_menu").trigger("click");
});
// handle click on clone now in first time users
$("#login_now").on("click", function(e) {
$(".wrap_top_menu").find("#scrollTo_top_menu_items_first_time_users_landing").trigger({
      type: 'click',
      which: 1
    });
$(".wrap_top_menu").find("#scrollTo_top_menu_items_first_time_users_trigger_close").trigger({
      type: 'click',
      which: 1
    });
    setTimeout(function() {
if (!$("#scrollTo_top_menu_items_admin_landing").hasClass("active")) {
$(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_landing").trigger({
      type: 'click',
      which: 1
    });
$(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_trigger_open").trigger({
      type: 'click',
      which: 1
    });
} else {
$("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
}
    }, 2200);
});

/////////////////////// still NN to handle clicks in friends of biblefarm.org

// handle click on continue as a visitor in admin
$("#continue_as_a_visitor_admin").on("click", function(e) {
$("#nav_top").find(".top_menu").trigger("click");
});
///////////////// handle hide #continue_as_a_visitor_admin and show #admin is done in app.js @ lines 115-116
// handle click on sign-out to hide #admin and show #continue_as_a_visitor_admin again
$("#sign-out").on("click", function(e) {
$("#app_edit_mode_off").trigger("click");
      $("#admin").hide("slow", "linear");
      $("#continue_as_a_visitor_admin").show("slow", "linear");
});
/////////////////////////////////////////////////////////////////
/* BEGIN no more need for app edit mode
// handle app_edit_mode on
$("#app_edit_mode_on").on("click", function(e) {
      $("#config_cloning_instructions_wrapper").hide("slow", "linear");
      $("#config_name_change_wrapper").show("slow", "linear");
});
// handle app_edit_mode off
$("#app_edit_mode_off").on("click", function(e) {
      $("#config_name_change_wrapper").hide("slow", "linear");
      $("#config_cloning_instructions_wrapper").show("slow", "linear");
});
 END no more need for app edit mode */
 /////////////////////////////////////////////////////////////////

// handle guided_tour_after_name_change
$("#guided_tour_after_name_change").on("click", function(e) {
// open help
// open guided tour
// start guided tour
});
// handle things when page loads (observer will take care of it if user doesn't have a sharing code in input)
$("#setup_verse_sharing_all_set").show("slow");
$("#setup_verse_sharing_welcome").hide();
$("#I_dont_have_a_sharing_code").hide();
$("#activate_sharing_code").hide();

// handle keyup to update DOM, whether sharing code is already there or input is empty
$("#config_name_change").on("keyup", function(e) {
var config_name_change_has_keyedup = $(this).val();
console.log(config_name_change_has_keyedup);
$(this).attr("value", config_name_change_has_keyedup);
console.log("config_name_change attr value is updated in DOM");
});
// handle I_dont_have_a_sharing_code
$("#I_dont_have_a_sharing_code").on("click", function(e) {
$(".show_pure_chat").trigger("click");
});

// BEGIN activate_sharing_code
$("#activate_sharing_code").on('click', function() {
  if ($("input#config_name_change").val() == '') {
    console.log("sharing code is empty");
    $("#setup_verse_sharing_welcome").show("slow");
    $("#I_dont_have_a_sharing_code").show("slow");
    $("#activate_sharing_code").show("slow");
    $("#setup_verse_sharing_all_set").hide();
  console.log("blinking input");
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 10px red !important");
    }, 500);
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 20px red !important");
    }, 1000);
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 10px red !important");
    }, 1500);
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 20px red !important");
    }, 2000);
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 10px red !important");
    }, 2500);
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 20px red !important");
    }, 3000);
    setTimeout(function() {
      $("#config_name_change").attr("style", "box-shadow: 0px 0px 0px red !important");
    }, 3500);
} else {
sharing_code = $("#config_name_change").val();
console.log(sharing_code);
$("#u_last_sharing_code").val(sharing_code).trigger("change");
console.log("u_last_sharing_code is now: " + sharing_code);
console.log("sharing code is filled");
$("#setup_verse_sharing_all_set").show("slow");
$("#setup_verse_sharing_welcome").hide();
$("#I_dont_have_a_sharing_code").hide();
$("#activate_sharing_code").hide();
}
});
// END activate_sharing_code





}); // end document ready







$(document).ready(function() {
}); // end document ready






$(document).ready(function() {
  //////////////////////////////////////////////////
  ////// BEGIN MutationObserver MutationObserverUserLoggedInOrNot ////
  //////////////////////////////////////////////////
  // First create our observer and get our target element
  var observer = new MutationObserver(MutationObserverUserLoggedInOrNot),
    elTarget = document.querySelector("body #continue_as_a_visitor_admin"),
    objConfig = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    };
  // Then actually do some observing
  observer.observe(elTarget, objConfig);
  // Finally react when needed
  function MutationObserverUserLoggedInOrNot() {
    console.log("TRIGGERED Mutation Observer MutationObserverUserLoggedInOrNot");


if($('#continue_as_a_visitor_admin').css('display') == 'none')
{
  var welcome_user_with_name = $("body").find("#name").text();
  $("#logged_in_user_is_a_part").text("I'm part of BibleFarm.org");
  console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to I'm part of BibleFarm.org");

// give it time upon arrival
  setTimeout(function() {
  $("#edited_app_name").text(welcome_user_with_name);
  console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to current user's name");
}, 8000);
// do it immediately also for a page that's already loaded
$("#edited_app_name").text(welcome_user_with_name);
console.log("-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/-*/ changed bottom to current user's name");

  setTimeout(function() {
  $(".app_wrap").find("p.msg1").text(welcome_user_with_name).fadeOut("5000").fadeIn("7000");
}, 8000);
} else {
  $("#logged_in_user_is_a_part").text("be a part of BibleFarm.org");
  $("#edited_app_name").text("Your Name Goes Here");

  setTimeout(function() {
  $(".app_wrap").find("p.msg1").text("thanks for visiting").fadeOut("5000").fadeIn("7000");
}, 8000);
}

  }; // end mutation observer
  //////////////////////////////////////////////////
  ////// END MutationObserver MutationObserverUserLoggedInOrNot ////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  ////// BEGIN MutationObserver MutationObserverHasSharingCodeOrNot ////
  //////////////////////////////////////////////////
  // First create our observer and get our target element
  var observer = new MutationObserver(MutationObserverHasSharingCodeOrNot),
    elTarget = document.querySelector("input#config_name_change"),
    objConfig = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    };
  // Then actually do some observing
  observer.observe(elTarget, objConfig);
  // Finally react when needed
  function MutationObserverHasSharingCodeOrNot() {
    console.log("TRIGGERED Mutation Observer MutationObserverHasSharingCodeOrNot");

    if ($("input#config_name_change").val() == '') {
    console.log("sharing code is empty");
    $("#setup_verse_sharing_welcome").show("slow");
    $("#I_dont_have_a_sharing_code").show("slow");
    $("#activate_sharing_code").show("slow");
    $("#setup_verse_sharing_all_set").hide();
  }

  }; // end mutation observer
  //////////////////////////////////////////////////
  ////// END MutationObserver MutationObserverHasSharingCodeOrNot ////
  //////////////////////////////////////////////////
}); // end document ready






  //////////////////////////////////////////////////
  ////// BEGIN on page load // gather all defaults and user preferences ////
  //////////////////////////////////////////////////
$(document).ready(function() {

    setTimeout(function() {
//
// make sure menu is visible
$("#nav_top").find(".top_menu").trigger({
      type: 'click',
      which: 1
    });
$("#scrollTo_top_menu_items_back_to_top").trigger({
      type: 'click',
      which: 1
    });
$("#nav_top").find(".top_menu").trigger({
      type: 'click',
      which: 1
    });
////////////////////////////////////////////////////////////////


// get the app's name
var appNameDefault = $("#u_admin_name").text();
$("#edited_app_name").text(appNameDefault);
    }, 7000);

// gather these
var lastSection = $("#u_last_section").text();
var lastBook = $("#u_last_book").text();
var lastChapter = $("#u_last_chapter").text();
var lastVerse = $("#u_last_verse").text();
var lastAudio = $("#u_last_audio").text();

    setTimeout(function() {

      //check if the section panel is already opened
      if ($("#" + lastSection + " tr td #" + lastBook).parents().eq(6).find("." + lastSection).hasClass('active')) {
		  console.log("coming from a playlist item click // section panel is already opened //");
        // otherwise otherwise open it
      } else {
        $("#" + lastSection + " tr td #" + lastBook).parents().eq(6).find("." + lastSection).trigger("click");
		  console.log("coming from a playlist item click // we had to open the section panel //");
      }

      $("#browse_to_section").text("");
      $("#browse_to_section").append(lastSection);
      $("#browse_to_book").text("");
      $("#browse_to_book").append(lastBook);
      $("#browse_to_chapter").text("");
      $("#browse_to_chapter").append(lastChapter);
      $("#browse_to_verse").text(lastVerse);
      $("#browse_to_audio").text("");
      $("#browse_to_audio").append(lastAudio);

        window.sm2BarPlayers[0].actions.play(lastAudio);
        setTimeout(function() {
        window.sm2BarPlayers[0].actions.pause(lastAudio);
      }, 1000);
    }, 10000);
    setTimeout(function() {
      $("#example-browsing_mode_nav_left_Verses tbody tr td div#" + lastVerse).trigger({
      type: 'click',
      which: 1
    });
    }, 12000);

}); // end document ready
  //////////////////////////////////////////////////
  ////// END on page load // gather all defaults and user preferences ////
  //////////////////////////////////////////////////





  //////////////////////////////////////////////////
  ////// BEGIN sharing verses from filter mode & browsing mode ////
  //////////////////////////////////////////////////
  /*
  $(document).ready(function() {


/////////////////////////////
  // I don't need the "from filter mode section" for the app. I just need it for a stand alone example-main sharing site if I ever do it
/////////////////////////////
/*
  // from filter mode // This grabs the verse to share, creates the URL & puts it in #from_filter_mode_url_we_are_going_to
  $("#example-main").find(".ref_bk_reg, .ref_ch_reg, .ref_vs_reg").on("click", function(e) {

  var div_of_verse_to_share = $(this).parent("div");
  var actual_verse_to_share = $(div_of_verse_to_share).find(".ref_bk_reg, .ref_ch_reg, .ref_vs_reg ").css("background", "red").text();
  var replaced_colon_with_dash = actual_verse_to_share.replace(/:/g,'-');
  var cleaned_up_triple_space = replaced_colon_with_dash.replace(/\s\s\s/g,'-');
  var cleaned_up_single_space = cleaned_up_triple_space.replace(/\s/g,'');
  var complete_url = "https://www.BibleFarm.org/" + cleaned_up_single_space + ".html";

  console.log(" // - actual_verse_to_share // " + actual_verse_to_share);
  console.log(" // - replaced_colon_with_dash // " + replaced_colon_with_dash);
  console.log(" // - cleaned_up_triple_space // " + cleaned_up_triple_space);
  console.log(" // - cleaned_up_single_space // " + cleaned_up_single_space);
  console.log(" // - complete_url // " + complete_url);

  $(".wrap_nav_body").find( ".book_is_selected" ).removeClass("book_is_selected");
  $(".wrap_nav_body").find( ".chapter_is_selected" ).removeClass("chapter_is_selected");
    $("#from_filter_mode_url_we_are_going_to").text("");
    $("#from_browsing_mode_url_we_are_going_to").text("");
    $("#from_filter_mode_url_we_are_going_to").text(complete_url);

    $(".wrap_sharing_modal_filter_mode").show("slow");
    $(".wrap_table").hide("slow");

  });
  /////////////////////////////////////////
  /// BEGIN popup a modal asking to share this verse from filter mode //////////
  /////////////////////////////////////////
  // if no, hide the modal
  $("#sharing_modal_no_filter_mode").on("click", function(e) {
  $(".wrap_sharing_modal_filter_mode").hide("slow");
    $(".wrap_table").show("slow");
    $("#from_filter_mode_url_we_are_going_to").text("");
    $("#from_browsing_mode_url_we_are_going_to").text("");
  });

  // if yes, hide the modal
  $("#sharing_modal_yes_filter_mode").on("click", function(e) {
  var link_to_current_verse_to_share = $("#from_filter_mode_url_we_are_going_to").text();
  window.open(link_to_current_verse_to_share, "_blank");
  $("#from_filter_mode_url_we_are_going_to").text("");
  $("#from_browsing_mode_url_we_are_going_to").text("");
  $(".wrap_sharing_modal_filter_mode").hide("slow");
    $(".wrap_table").show("slow");
  // redirecting to
  console.log(" // - redirected to " + link_to_current_verse_to_share);
  });
  /////////////////////////////////////////
  /// END popup a modal asking to share this verse from filter mode //////////
  /////////////////////////////////////////

  // from browsing mode // This grabs the verse to share, creates the URL & puts it in #from_browsing_mode_url_we_are_going_to

$("body").on("click", "#tE_ajax_chapters tbody tr td span", function(e) {

var book_to_share = $(".wrap").find(".book_is_selected").find(".menu_book_reg").text().replace(/\ /g,"-");
console.log("book_to_share " + book_to_share);

var chapter_to_share = $(".wrap").find(".chapter_is_selected").text();
console.log("chapter_to_share " + chapter_to_share);

var verse_to_share = $(this).parent().siblings().eq( 0 )
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
.text();
console.log("verse_to_share " + verse_to_share);

// var complete_url_to_share_from_browsing_mode = "https://www.BibleFarm.org/app/en/edits/" + // book_to_share + "-" + chapter_to_share + "-" + verse_to_share + ".html";
// console.log("complete_url_to_share_from_browsing_mode " + // complete_url_to_share_from_browsing_mode);

// $("#from_filter_mode_url_we_are_going_to").text("");
// $("#from_browsing_mode_url_we_are_going_to").text("");
//     $("#from_browsing_mode_url_we_are_going_to").text(complete_url_to_share_from_browsing_mode);

// store the book-chapter-verse we're wanting to share
$("#book_chapter_verse_we_want_to_share").text(book_to_share + "-" + chapter_to_share + "-" + verse_to_share);

    ///////////////////////////////////////////////////
    /// BEGIN on click a verse, grab image to share and replace img tag src  ///////
    ///////////////////////////////////////////////////
    var complete_url_of_default_image_to_share = "https://biblefarm.github.io/posts-en-jasper/images/" + book_to_share + "-" + chapter_to_share + "-" + verse_to_share + ".png";
   console.log("complete_url_of_default_image_to_share " + complete_url_of_default_image_to_share);

   var complete_url_of_default_link_to_redirect = "https://www.biblefarm.org/app/en/posts/jasper/" + book_to_share + "-" + chapter_to_share + "-" + verse_to_share + ".html";
  console.log("complete_url_of_default_link_to_redirect: " + complete_url_of_default_link_to_redirect);

// load the image
   $("img#post_color_change_by_user").attr("src", complete_url_of_default_image_to_share);
   ///////////////////////////////////////////////////
   /// END on click a verse, grab image to share and replace img tag src  ///////
   ///////////////////////////////////////////////////
// set the default to url to jasper in case no color change is done
$("#link_that_actually_redirects").attr("href", complete_url_of_default_link_to_redirect);
$("#link_that_actually_redirects").attr("onclick", "window.open(\' " + complete_url_of_default_link_to_redirect + "\');return false");


    // show the modal
    $(".wrap_sharing_modal_browsing_mode").show("slow");
    // focus to say yes, so we can press enter on keyboard
    $("#sharing_modal_yes_browsing_mode").focus();

    $(".wrap_table").hide("slow");

});



/////////////////////////////////////////
/// BEGIN background color choosing get decided here //////////
/////////////////////////////////////////
$(".color_picker_item").on('click', function(e) {
var  bg_color_chosen = $(this).text();
console.log(bg_color_chosen);
$("#color_to_share").text(bg_color_chosen);
// grab the stored verse ref
var stored_verse_ref = $("#book_chapter_verse_we_want_to_share").text();
// build the url
var built_page_url_with_bg_and_ref = "https://www.biblefarm.org/app/en/posts/" + bg_color_chosen + "/" + stored_verse_ref + ".html";
// build the url
var built_image_url_with_bg_and_ref = "https://biblefarm.github.io/posts-en-" + bg_color_chosen + "/images/" + stored_verse_ref + ".png";
// change the url
$("#link_that_actually_redirects").attr("href", built_page_url_with_bg_and_ref);
$("#link_that_actually_redirects").attr("onclick", "window.open(\' " + built_page_url_with_bg_and_ref + "\');return false");
console.log("Changed page href to: " + built_page_url_with_bg_and_ref);

// load the image according to color we pick
   $("img#post_color_change_by_user").attr("src", built_image_url_with_bg_and_ref);
   console.log("Changed image src to: " + built_image_url_with_bg_and_ref);
});

/////////////////////////////////////////
/// END background color choosing get decided here //////////
/////////////////////////////////////////





/////////////////////////////////////////
/// BEGIN on click let's go, redirect to sharing page //////////
/////////////////////////////////////////
$("#edited_now_redirect_to_sharing_page").on('click', function(e) {

  console.log("clicked on let's go");
// create the variables
var color_to_share = $("#color_to_share").text();
var book_chapter_verse_we_want_to_share =  $("#book_chapter_verse_we_want_to_share").text();
// test it
console.log("We're wanting to share: " + book_chapter_verse_we_want_to_share);


var complete_url_to_share_with_bg_chosen = "https://www.biblefarm.org/app/en/posts/" + color_to_share + "/" + book_chapter_verse_we_want_to_share + ".html";
console.log("Redirecting to: " + complete_url_to_share_with_bg_chosen);


});

// this is needed in order to make the link work inside the div
$('#link_that_actually_redirects').click(function(event){
    event.stopImmediatePropagation();

    setTimeout(function() {
      // close the editing modal
      $(".wrap_sharing_modal_browsing_mode").hide("slow");
    }, 1000);


});









/////////////////////////////////////////
/// BEGIN popup a modal asking to share this verse from browsing mode //////////
/////////////////////////////////////////
// if click no, hide the modal
$("#sharing_modal_no_browsing_mode").on("click", function(e) {
$(".wrap_sharing_modal_browsing_mode").hide("slow");
  $(".wrap_table").show("slow");
  $("#from_filter_mode_url_we_are_going_to").text("");
  $("#from_browsing_mode_url_we_are_going_to").text("");
});

// if click yes, hide the modal
$("#sharing_modal_yes_browsing_mode").on("click", function(e) {
var link_to_current_verse_to_share = $("#from_browsing_mode_url_we_are_going_to").text();
window.open(link_to_current_verse_to_share, "_blank");
$("#from_filter_mode_url_we_are_going_to").text("");
$("#from_browsing_mode_url_we_are_going_to").text("");
$(".wrap_sharing_modal_browsing_mode").hide("slow");
  $(".wrap_table").show("slow");
// redirecting to
console.log(" // - redirected to " + link_to_current_verse_to_share);
});
/////////////////////////////////////////
/// END popup a modal asking to share this verse from browsing mode //////////
/////////////////////////////////////////

  });
*/
  //////////////////////////////////////////////////
  ////// END sharing verses from filter mode & browsing mode ////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ////// BEGIN still working on this feature ////
  //////////////////////////////////////////////////
// open the modal
$("#app_terminal_orig_on, #app_terminal_tran_on, #app_lang_de_main, #app_lang_fr_main, #app_lang_pt_main, #app_lang_it_main, #app_lang_de_para, #app_lang_fr_para, #app_lang_pt_para, #app_lang_it_para, #to_search_grk, #to_search_grk_tra, #to_search_reg_esp, #to_search_heb_tra, #to_search_heb").one('click', function(event) {
  event.preventDefault();
$(".wrap_modal_still_working_on_this").show("slow");
});
    // close the modal
$("#still_working_on_this_ok").on('click', function(e) {
$(".wrap_modal_still_working_on_this").hide();
});
  //////////////////////////////////////////////////
  ////// END still working on this feature ////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ////// BEGIN if we wanna go back to browsing mode // #return_to_browsing_mode ////
  //////////////////////////////////////////////////
  $("#return_to_browsing_mode").on('click', function(e) {
      $(".wrap_ajaxed").show("slow", "linear");
      $(".wrap_ajaxed_cloned_status").show("slow", "linear");
      $(".mode_filter").hide("slow", "linear");
      $(".wrap_nav_mode_browse").show("slow", "linear");
      $(".wrap_nav_mode_filter").hide("slow", "linear");
      $(".mode_browse").show("slow", "linear");
      $(".search_results_are_empty_so_search_or_browse").hide();
  });
  //////////////////////////////////////////////////
  ////// END if we wanna go back to browsing mode // #return_to_browsing_mode ////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ////// BEGIN hide also if the click on a search result so it doesn't stay back there behind wrap_ajaxed  ////
  //////////////////////////////////////////////////
  $(".search_results").on('click', function(e) {
      $(".search_results_are_empty_so_search_or_browse").hide();
  });
  //////////////////////////////////////////////////
  ////// END hide also if the click on a search result so it doesn't stay back there behind wrap_ajaxed ////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ////// BEGIN youtube iframe playlist only if requested ////
  //////////////////////////////////////////////////
  $(".select_views").one('click', function(e) {
    // inject youtube only when requested
    console.log("youtube is being requested");
    $(".wrap_ref_body_views").html('<div class="test_youtube_sidebar"><iframe width="100%" height="268" frameborder="0" allowfullscreen src="https://www.youtube.com/embed?listType=playlist&list=PL-SXzhnj1OgLUY7MqL-RW1FrJSXTpXltA"></iframe></div>');
  $('.test_youtube_sidebar').perfectScrollbar({
    scrollXMarginOffset: 0,
    suppressScrollX: true
  });
  });
  //////////////////////////////////////////////////
  ////// END youtube iframe playlist only if requested ////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  ////// BEGIN youtube bf website style playlist only if requested ////
  //////////////////////////////////////////////////
  $(".select_views").one('click', function(e) {
    // inject youtube only when requested
    console.log("youtube is being requested");
    $(".wrap_ref_body_views").html('<div class="bf_youtube_container"><div class="bf_loadersmall"></div><div id="rypp-demo-4" class="RYPP r16-9" data-playlist="PL-SXzhnj1OgLUY7MqL-RW1FrJSXTpXltA"><div class="RYPP-video"><div class="RYPP-video-player"></div></div><div class="RYPP-playlist"><header><h2 class="_h1 RYPP-title">Playlist title</h2><p class="RYPP-desc">Playlist subtitle <a href="#" target="_blank">#hashtag</a></p></header><div class="RYPP-items"></div></div></div></div>');
    // inject the script
    $('<script>var RYPP=function(c){"use strict";function t(t,e,i){if(void 0===e)return console.log("Youtube API V3 requires a valid API KEY.\\nFollow the instructions at: https://developers.google.com/youtube/v3/getting-started"),!1;this.DOM={},this.options={},this.data={ytapi:{playlist_info:"https://www.googleapis.com/youtube/v3/playlists?part=snippet&id={{RESOURCES_ID}}&key={{YOUR_API_KEY}}",playlist:"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId={{RESOURCES_ID}}&key={{YOUR_API_KEY}}",pl_ID:"",videolist:"https://www.googleapis.com/youtube/v3/videos?part=snippet,status&maxResults=50&id={{RESOURCES_ID}}&key={{YOUR_API_KEY}}"},temp_vl:[],firsttime:!0,ismobile:void 0!==window.orientation,ispopulated:!1},this.init(t,e,i)}return t.prototype={init:function(t,e,i){if(this.api_key=e,this.options={update_title_desc:!1,autoplay:!0,autonext:!0,loop:!0,mute:!1,debug:!1},void 0!==i&&c.extend(this.options,i),this.DOM={},this.DOM.$el=c(t),this.DOM.$playlc=this.DOM.$el.find(".RYPP-playlist"),this.DOM.$items=this.DOM.$el.find(".RYPP-items"),this.DOM.$videoc=this.DOM.$el.find(".RYPP-video"),this.DOM.$title=this.DOM.$el.find(".RYPP-title"),this.DOM.$desc=this.DOM.$el.find(".RYPP-desc"),this.DOM.$el[0].ytplayer=null,this.data.player_uid=Math.random().toString(16).substr(2,8),this.DOM.$el.attr("data-rypp",this.data.player_uid).find(".RYPP-video-player").attr("id","RYPP-vp-"+this.data.player_uid).attr("name","RYPP-vp-"+this.data.player_uid),this.options.debug&&console.log("Unique ID: RYPP-vp-"+this.data.player_uid),void 0===window.YT){var a=document.createElement("script"),s=document.getElementsByTagName("head")[0];a.src="https://www.youtube.com/iframe_api?version=3",s.appendChild(a)}else this.addAPIPlayer()},onYTIframeAPIReadyCallback:function(){this.addAPIPlayer()},updateTitleDesc:function(){var t=this.DOM.$el.attr("data-playlist"),e=this.data.ytapi.playlist_info.replace("{{RESOURCES_ID}}",t).replace("{{YOUR_API_KEY}}",this.api_key);c.ajaxSetup({cache:!1}),c.ajax(e,{context:this,dataType:"json",crossDomain:!0,error:function(){},success:function(t){this.DOM.$title.html(t.items[0].snippet.title),this.DOM.$desc.html(t.items[0].snippet.description)}})},populatePlaylist:function(){if(this.options.update_title_desc&&(this.options.debug&&console.log(this.data.player_uid+": Updating playlist title / desc"),this.updateTitleDesc()),this.options.debug&&console.log(this.data.player_uid+": Populating playlist"),this.DOM.$items.html("").append(c("<ol>")),this.DOM.$el.attr("data-playlist"))this.data.pl_ID=this.DOM.$el.attr("data-playlist"),this.getVideosFrom("playlist",this.data.pl_ID);else if(this.DOM.$el.attr("data-ids")){var t=this.DOM.$el.attr("data-ids");t=c.map(t.split(","),c.trim).join(","),this.getVideosFrom("videolist",t)}},addAPIPlayer:function(){var e=this;window.YTConfig={host:"https://www.youtube.com"},this.DOM.$el[0].ytplayer=new YT.Player("RYPP-vp-"+e.data.player_uid,{playerVars:{enablejsapi:1,rel:0,modestbranding:1,wmode:"transparent"},events:{onReady:function(){e.options.debug&&console.log(e.data.player_uid+": ytplayer ready"),e.onPlayerReady()},onStateChange:function(t){e.onPlayerStateChange(t)},onError:function(t){console.log(t)}}})},onPlayerReady:function(){this.options.debug&&console.log(this.data.player_uid+": ytplayer ready callback"),this.populatePlaylist()},onPlayerStateChange:function(t){var e=this;if(void 0!==t){-1===t.data&&this.data.firsttime&&(this.options.autoplay||this.data.ismobile||(this.DOM.$el[0].ytplayer.stopVideo(),this.data.firsttime=!1),this.options.mute&&this.DOM.$el[0].ytplayer.mute()),3===t.data&&this.data.ismobile&&this.data.firsttime&&setTimeout(function(){e.DOM.$el[0].ytplayer.stopVideo(),e.data.firsttime=!1},500);var i=null;0===t.data&&!this.data.ismobile&&this.options.autonext&&(0===(i=this.DOM.$items.find("li.selected").next()).length&&this.options.loop&&(i=this.DOM.$items.find("li").first()),i.trigger("click"))}},getVideosFrom:function(t,e,i){var u=this,a=this.data.ytapi[t].replace("{{RESOURCES_ID}}",e).replace("{{YOUR_API_KEY}}",this.api_key);void 0!==i&&(a+="&pageToken="+i),c.ajaxSetup({cache:!1}),c.ajax(a,{context:this,dataType:"json",crossDomain:!0,error:function(){},success:function(t){if("youtube#playlistItemListResponse"===t.kind){var i=[];if(c.map(t.items,function(t,e){void 0!==t.snippet.resourceId.videoId&&i.push(t.snippet.resourceId.videoId)}),u.data.temp_vl.push(i),void 0!==t.nextPageToken&&""!==t.nextPageToken)u.getVideosFrom("playlist",u.data.pl_ID,t.nextPageToken);else for(var e=0,a=u.data.temp_vl.length;e<a;e++)i=u.data.temp_vl.shift(),u.getVideosFrom("videolist",i.join(","))}else if("youtube#videoListResponse"===t.kind)for(var s=0,o=t.items.length;s<o;s++){var l=t.items[s];if(-1===c.inArray(l.status.uploadStatus,["rejected","deleted","failed"])&&void 0!==l.snippet.thumbnails){var n=l.id,d=l.snippet.title,p=l.snippet.channelTitle,r=l.snippet.thumbnails.default.url;u.addVideo2Playlist(n,d,p,r)}c.isEmptyObject(u.data.temp_vl)&&this.startPlayList()}}})},startPlayList:function(){var e=this.DOM,i=null,a=this;e.$items.on("click","li",function(t){t.preventDefault(),e.$items.find("li").removeClass("selected"),c(this).addClass("selected"),i=c(this).data("video-id"),a.DOM.$el[0].ytplayer.loadVideoById(i),a.data.ismobile&&(a.data.firsttime=!0)}),0===e.$items.find("li.selected").length&&this.options.autoplay&&e.$items.find("li").first().click()},addVideo2Playlist:function(t,e,i,a){var s=this.DOM;c(\'<li data-video-id="\'+t+\'"><p class="title">\'+e+\'<small class="author"><br>\'+i+\'</small></p><img src="\'+a+\'" class="thumb"></li>\').appendTo(s.$items.find("ol"))}},t}(jQuery);function onYouTubeIframeAPIReady(){$("[data-rypp]").each(function(t,e){$(e)[0].rypp_data_obj.onYTIframeAPIReadyCallback()})}$.fn.rypp=function(t,e){return this.each(function(){this.rypp_data_obj=new RYPP(this,t,e)})},$(document).ready(function(){window.api_key="AIzaSyCE8bj2-elbAKq6f_2lwIep-7wi2wkvW14",$("#rypp-demo-1").rypp(window.api_key,{update_title_desc:!0,autoplay:!1,autonext:!1,loop:!1,mute:!1,debug:!0}),$("#rypp-demo-2").rypp(window.api_key,{update_title_desc:!0,autoplay:!1,autonext:!1,loop:!1,mute:!1,debug:!0}),$("#rypp-demo-3").rypp(api_key,{update_title_desc:!0,autoplay:!1,autonext:!1,loop:!1,mute:!1,debug:!0}),$("#rypp-demo-4").rypp(window.api_key,{update_title_desc:!0,autoplay:!1,autonext:!0,loop:!0,mute:!1,debug:!0}),$(".RYPP .RYPP-playlist").addClass("bgc-0002")}),$(document).ready(function(){$("").perfectScrollbar({});var t=setInterval(function(){0<$(".RYPP-items ol").children().length&&(console.log("///////////////// waitFor_youTube_completed is completed // now executing perfect scrollbar and clicking on the first video"),clearInterval(t),$(".RYPP .RYPP-playlist .RYPP-items ol").perfectScrollbar({suppressScrollX:!0}),$("body").find(".RYPP-items ol li").eq(0).trigger({type:"click",which:1}).css("color","green"),console.log("/////////////////////////////////////////////////////// first video is ready to play"),$(".bf_youtube_container .bf_loadersmall").css("display","none"))},1e3)});</script>').appendTo("head");

    });

  //////////////////////////////////////////////////
  ////// END youtube bf website style playlist only if requested ////
  //////////////////////////////////////////////////


  //////////////////////////////////////////////////
  ////// BEGIN matrix loading entire Bible NN to change to hebrew ////
  //////////////////////////////////////////////////
  'use strict';

  const COLUMNS    = 100;
  const CHARACTERS = 10;

  function getCharCode() {
    let code = Math.floor(Math.random() * 94 + 33);
    return (code === 64) ? 47 : code;
  }

  function getCharCodes() {
    return Array.from(
      new Array(CHARACTERS), () => {
        return String.fromCharCode(getCharCode());
      }
    );
  }

  function createCharCodes(drop) {
    let codes = getCharCodes(),
        size  = Math.floor(Math.random() * 13);

    if (size < 10) size = 25;
    else if (size < 12) size = 12;
    else size = 60;

    setCharCodes(drop, codes, size);
    return size;
  }

  function setCharCodes(column, codes, size) {
    codes.forEach((code, index) => {
      let char = document.createElement('span');
      char.className = `char-${index} code-size-${size}`;
      char.textContent = code;

      column.appendChild(char);
    });
  }

  function createRain(container) {
    for (let i = 0; i < COLUMNS; i++) {
      let column = document.createElement('p'),
          size   = createCharCodes(column);

      column.className = `code-column column-size-${size} code-${i}`;
      container.appendChild(column);
    }
  }

  createRain(document.getElementById('matrix-code'));
  //////////////////////////////////////////////////
  ////// END matrix loading entire Bible NN to change to hebrew ////
  //////////////////////////////////////////////////


  ///////////////////////////////////////////////////
  /// BEGIN wrap_sponsor_ads_app_only perfectScrollbar ///////
  ///////////////////////////////////////////////////
  $('.wrap_sponsor_ads_app_only').perfectScrollbar({
  wheelPropagation: true,
  scrollXMarginOffset: 2,
  suppressScrollX: true
  });
  ///////////////////////////////////////////////////
  /// END wrap_sponsor_ads_app_only perfectScrollbar ///////
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  /// BEGIN inject team members ///////
  ///////////////////////////////////////////////////
$(".wrap_sponsor_ads_app_only").html("<div class='sponsor_ads'><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Lorenzo_Fragala.png'></div><div class='sponsor_item_desc'>Lorenzo Fragalá<br>Real Estate Developer<br>Azzurra Development Corp<br><a class='bf_links' href='http://azzurracorp.com/' target='_blank'>azzurracorp.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Mindy_Goldstein.png'></div><div class='sponsor_item_desc'>Mindy Viviers<br>Registered Nurse, BSN<br>Charge Nurse - Intake<br><a class='bf_links' href='http://www.fb.com/mindy.viviers.1' target='_blank'>fb.com/mindy.viviers.1</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Artur_Ewelina_Kawa.png'></div><div class='sponsor_item_desc'>Artur & Ewelina Kawa<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/ewelina.kawa.351' target='_blank'>fb.com/ewelina.kawa.351</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Davis_Knight.png'></div><div class='sponsor_item_desc'>Davis Knight<br>Healthy Products Specialist<br>Apple A Day Co-Op<br><a class='bf_links' href='https://appleadayco-op.com/' target='_blank'>appleadayco-op.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Sandy_Beach.png'></div><div class='sponsor_item_desc'>Sandy Beach<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/sandy.almquist1' target='_blank'>fb.com/sandy.almquist1</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/MPD.png'></div><div class='sponsor_item_desc'>Antonio Porter<br>MPD<br>Mounds Pastoring Devotionals<br><a class='bf_links' href='https://www.facebook.com/MoundsPastoringDevotionals/' target='_blank'>Click to Visit Facebook Page</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Nicolle_Marie.png'></div><div class='sponsor_item_desc'>Nicolle Marie<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/nicolle612' target='_blank'>fb.com/nicolle612</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Mike_Newhook.png'></div><div class='sponsor_item_desc'>Mike Newhook<br>Organic Aquaponic Developer<br>Highland Aquaponics<br><a class='bf_links' href='http://highlandaquaponics.com/' target='_blank'>highlandaquaponics.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Jan_Deborah_Imperato.png'></div><div class='sponsor_item_desc'>Jan Deborah Imperato<br>Luxury & Waterfront Realtor<br>Palm Beach Villas Real Estate<br><a class='bf_links' href='https://www.palmbeachvillas.net/' target='_blank'>palmbeachvillas.net</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Angela_Lucambio.png'></div><div class='sponsor_item_desc'>Angela Lucambio<br>Registered Nurse<br>Volunteer & Caretaker<br><a class='bf_links' href='https://www.facebook.com/angela.lucambio' target='_blank'>fb.com/angela.lucambio</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Ignacio_Di_Paola.png'></div><div class='sponsor_item_desc'>Ignacio Di Paola<br>Marketing Professional<br>NoLines Advertising Agency<br><a class='bf_links' href='http://nolines.com.ar/' target='_blank'>nolines.com.ar</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Dennis_Hamilton.png'></div><div class='sponsor_item_desc'>Dennis Hamilton<br>Organic Hydroponic Developer<br>Greenfund, LLC<br><a class='bf_links' href='https://greenfundsolutions.com/' target='_blank'>greenfundsolutions.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Samuel_Sardar.png'></div><div class='sponsor_item_desc'>Samuel Sardar<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/Samuel.sardar.one' target='_blank'>fb.com/Samuel.sardar.one</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Adrian_Varela.png'></div><div class='sponsor_item_desc'>Adrian Varela<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/adrian.varela.35' target='_blank'>fb.com/adrian.varela.35</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Jose_Eugenio_Martinez.png'></div><div class='sponsor_item_desc'>José Eugenio Martínez<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Alex_Smuglovsky.png'></div><div class='sponsor_item_desc'>Alex Smuglovsky<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div></div>");
  ///////////////////////////////////////////////////
  /// BEGIN inject team members ///////
  ///////////////////////////////////////////////////









  ///////////////////////////////////////////////////
  /// BEGIN JS for edit post  ///////
  ///////////////////////////////////////////////////
  $(document).ready(function() {

$("body").on("click", "#tE_ajax_chapters tbody tr td span", function(e) {

// BEGIN if user not logged in
if ($.trim($("#edited_app_name").text()) == "Your Name Goes Here") {
// check if we need to open the menu
if (!$('.wrap_top_menu').hasClass('wrap_top_menu_active')){
setTimeout(function() {
$('.top_menu').trigger({type: 'click', which: 1});
$('.wrap_top_menu').addClass('wrap_top_menu_active').show();
}, 500);
}
// check if we need to open admin
if (( !$("#scrollTo_top_menu_items_admin_trigger_close").css('display') != 'none' )) {
setTimeout(function() {
  if (!$("#scrollTo_top_menu_items_admin_landing").hasClass("active")) {
  $(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_landing").trigger({
        type: 'click',
        which: 1
      });
  $(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_trigger_open").trigger({
        type: 'click',
        which: 1
      });
  } else {
  $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
  }
}, 1000);
} else {
  setTimeout(function() {
$("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
}, 1000);
}

}
// END if user not logged in
else {
// BEGIN if user is logged in
var sharing_code = $("#config_name_change").val();
console.log("sharing_code " + sharing_code);
var book_to_share = $(".wrap").find(".book_is_selected").find(".menu_book_reg").text().replace(/\ /g,"-");
console.log("book_to_share " + book_to_share);

var chapter_to_share = $(".wrap").find(".chapter_is_selected").text();
console.log("chapter_to_share " + chapter_to_share);

var verse_to_share = $(this).parent().siblings().eq( 0 )
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
.text();
console.log("verse_to_share " + verse_to_share);

var complete_url_to_share_from_browsing_mode = "https://test.biblefarm.org/" + sharing_code + "/" + book_to_share + "-" + chapter_to_share + "-" + verse_to_share + ".html";
console.log("complete_url_to_share_from_browsing_mode: " + complete_url_to_share_from_browsing_mode);

// $("#from_filter_mode_url_we_are_going_to").text("");
// $("#from_browsing_mode_url_we_are_going_to").text("");
//     $("#from_browsing_mode_url_we_are_going_to").text(complete_url_to_share_from_browsing_mode);

// store the book-chapter-verse we're wanting to share
// $("#book_chapter_verse_we_want_to_share").text(book_to_share + "-" + chapter_to_share + "-" + verse_to_share);
// disabled the iframe because pinterest won't work
/*
  $(".wrap_sharing_modal_browsing_mode").show();
  $(".sharing_modal_container_browsing_mode").empty();
  $(".sharing_modal_container_browsing_mode").append('<div class="wrap_ajaxed_sharing_page"</div><div class="below_iframe_to_exit bf_links">done sharing</div>');
  $(".wrap_ajaxed_sharing_page").empty();
  $(".wrap_ajaxed_sharing_page").append('<iframe class="iframed_sharing_page" src="' + complete_url_to_share_from_browsing_mode + '"></iframe>');
  $(".wrap_ajaxed_sharing_page").show();
  $("body").append('<div class="below_iframe_to_exit bf_links">done sharing</div>');
  $(".below_iframe_to_exit").show();
  // close modal on cancel
  $('.below_iframe_to_exit').on('click', function(e) {
  $(".wrap_sharing_modal_browsing_mode").hide();
  $(".below_iframe_to_exit").hide();
  $(".wrap_ajaxed_sharing_page").empty();
  });
  // close modal on click anywhere outside
  $(".sharing_modal_container_browsing_mode").click(function(e){
      // Check if click was triggered on or within #menu_content
      if( $(e.target).closest(".wrap_ajaxed_sharing_page").length > 0 ) {
          return false;
      }
      // Otherwise trigger your click function
    $(".below_iframe_to_exit").trigger({
          type: 'click',
          which: 1
        });
  });
*/
// so we're opening a new tab like this
  window.open(complete_url_to_share_from_browsing_mode, "_blank");
}


    });













});
  ///////////////////////////////////////////////////
  /// END JS for edit post  ///////
  ///////////////////////////////////////////////////

///////////////////////////////////////////////////
/// BEGIN handle click on Your Name Goes Here or logged in user  ///////
///////////////////////////////////////////////////
  $("#edited_app_name").on('click', function(e) {
// BEGIN handle the toggle to login
    // check if we need to open the menu
    if (!$('.wrap_top_menu').hasClass('wrap_top_menu_active')){
    setTimeout(function() {
    $('.top_menu').trigger({type: 'click', which: 1});
    $('.wrap_top_menu').addClass('wrap_top_menu_active').show();
    }, 500);
    }
    // check if we need to open admin
    if (( !$("#scrollTo_top_menu_items_admin_trigger_close").css('display') != 'none' )) {
    setTimeout(function() {
      if (!$("#scrollTo_top_menu_items_admin_landing").hasClass("active")) {
      $(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_landing").trigger({
            type: 'click',
            which: 1
          });
      $(".wrap_top_menu").find("#scrollTo_top_menu_items_admin_trigger_open").trigger({
            type: 'click',
            which: 1
          });
      } else {
      $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
      }
    }, 1000);
    } else {
      setTimeout(function() {
    $("#scrollTo_div_for_top_menu_items").scrollTo("#scrollTo_top_menu_items_admin_landing", 1000);
    }, 1000);
    }
  // END handle the toggle to login
  // BEGIN handle the toggle to be able to click again and close after login
    if ( ($('.wrap_top_menu').hasClass('wrap_top_menu_active')) && ($("#scrollTo_top_menu_items_admin_landing").hasClass("active")) ) {
      setTimeout(function() {
      $('.top_menu').trigger({type: 'click', which: 1});
      $('.wrap_top_menu').removeClass('wrap_top_menu_active').hide();
      }, 500);
    }
  // END handle the toggle to be able to click again and close after login
});

///////////////////////////////////////////////////
/// END handle click on Your Name Goes Here or logged in user  ///////
///////////////////////////////////////////////////


////////////////////////////////////////////////////
// BEGIN PureChat on demand
////////////////////////////////////////////////////
// BEGIN PureChat append it to the head
$('.show_pure_chat').one('click', function(e) {
  $('<script>window.purechatApi={l:[],t:[],on:function(){this.l.push(arguments)}},function(){var e=!1,t=document.createElement("script");t.async=!0,t.type="text/javascript",t.src="https://app.purechat.com/VisitorWidget/WidgetScript",document.getElementsByTagName("HEAD").item(0).appendChild(t),t.onreadystatechange=t.onload=function(t){if(!(e||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){new PCWidget({c:"7f1570e3-a978-430a-82a3-fccff55a8707",f:!0});e=!0}}}();</script>').appendTo("head");
  $(".app_lock_n_load_wrap, .app_lock_n_load").show();
  var waitForPureChatScriptThenHideLockNLoad = setInterval(function() {
    if ($("body").find('.purechat-widget-title-link:contains("Contact us")').length > 0) {
      console.log("PureChat script is loaded");
      // clear the setInterval
      clearInterval(waitForPureChatScriptThenHideLockNLoad);
  $(".app_lock_n_load_wrap, .app_lock_n_load").hide();
    }
  }, 1000);
});
// END PureChat append it to the head
$('.show_pure_chat').on('click', function(e) {
// wait for it to load
var stopWaitingForPurechat = setInterval(function() {
  if ($("body").find('.purechat-widget-title-link:contains("Contact us")').length > 0) {
    console.log("found PureChat");
    // clear the setInterval
    clearInterval(stopWaitingForPurechat);
    // show it
    $("#PureChatWidget").attr("style", "z-index: 2147483646 !important");
    // hack colors
    // header
    $("#PureChatWidget").find(".purechat-widget-header").attr("style", "background-color: #0c1400 !important");
    // content-wrapper
    $("#PureChatWidget").find(".purechat-content-wrapper").attr("style", "background-color: #172800 !important");
    // purechat-card
    $("#PureChatWidget").find(".purechat-card").attr("style", "background-color: #203700 !important");
    // purechat-btn
    $("#PureChatWidget").find(".purechat-btn").attr("style", "color: #d5ad6d !important");
    // purechat-widget-title-link
    $("#PureChatWidget").find(".purechat-widget-title-link").attr("style", "font-size: 20px !important;padding-left: 8px !important;font-family: PT_Sans-Narrow-Web-Regular !important;color: #d5ad6d !important;text-shadow: 2px 2px 1px black !important");
    // keep widget expanded
    $("#PureChatWidget").removeClass("purechat-widget-super-collapsed");
    $("#PureChatWidget").addClass("purechat-widget-collapsed");
    console.log("PureChat will keep widget expanded");
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
    }, 1000);
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #b3ff00 !important");
    }, 1500);
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
    }, 2000);
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #b3ff00 !important");
    }, 2500);
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
    }, 3000);
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #b3ff00 !important");
    }, 3500);
    setTimeout(function() {
      $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
    }, 4000);
  }
}, 1000);
});
// hide when click outside
$(window).click(function() {
  // hide it
  $("#PureChatWidget").attr("style", "z-index: -1 !important");
});
// stopPropagation when clicking to show the widget and inside the widget itself
$("#show_pure_chat, #PureChatWidget").click(function(event) {
  event.stopPropagation();
  console.log("PureChat hide when click outside event.stopPropagation");
});
////////////////////////////////////////////////////
// END PureChat on demand
////////////////////////////////////////////////////






////////////////////////////////////////////////////
// BEGIN firebase store user's preferences
////////////////////////////////////////////////////
$(document).ready(function() {
///////////////////////////////////////// cleanup prior user's stuff
// sharing code
$("#u_last_sharing_code").val("").attr("value", "");
$("#s_last_sharing_code").val("").attr("value", "");
// background class
$("#u_background_class").val("").attr("value", "");
$("#s_background_class").val("").attr("value", "");
// color filter switches rgb
$("#u_color_filter_switches_rgb").val("").attr("value", "");
$("#s_color_filter_switches_rgb").val("").attr("value", "");
// color filter switches id
$("#u_color_filter_switches_id").val("").attr("value", "");
$("#s_color_filter_switches_id").val("").attr("value", "");
///////////////////////////////////////// cleanup prior user's stuff after logut
$("#sign-out").on("click", function(e) {
// sharing code
$("#u_last_sharing_code").val("").attr("value", "");
$("#s_last_sharing_code").val("").attr("value", "");
// background class
$("#u_background_class").val("").attr("value", "");
$("#s_background_class").val("").attr("value", "");
// color filter switches rgb
$("#u_color_filter_switches_rgb").val("").attr("value", "");
$("#s_color_filter_switches_rgb").val("").attr("value", "");
// color filter switches id
$("#u_color_filter_switches_id").val("").attr("value", "");
$("#s_color_filter_switches_id").val("").attr("value", "");
});
///////////////////////////////////////// observe
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
// User is signed in.
// console.log(user.uid);
      var thisUser = user.uid;
      var db = firebase.database().ref("bf_app_users");
/////////////////////////////////////////
var user_ProviderData = firebase.auth().currentUser;
  user_ProviderData.providerData.forEach(function (profile) {
    console.log("_1_Sign-in provider: " + profile.providerId);
    db.child(thisUser).update({
    _1_Sign_in_provider: profile.providerId
    });
    console.log("  _2_Provider-specific UID: " + profile.uid);
    db.child(thisUser).update({
    _2_Provider_specific_UID: profile.uid
    });
    console.log("  _3_Display Name: " + profile.displayName);
    db.child(thisUser).update({
    _3_Display_Name: profile.displayName
    });
    console.log("  _4_Email: " + profile.email);
    db.child(thisUser).update({
    _4_Email: profile.email
    });
    console.log("  _5_Photo URL: " + profile.photoURL);
    db.child(thisUser).update({
    _5_Photo_URL: profile.photoURL
    });
    // show latest displayName
    $("#name").text(profile.displayName);
    // show latest photoURL
    $("#photo").attr("src", profile.photoURL);
  });
/////////////////////////////////////////

// user makes a change
$("#u_last_sharing_code").on("change", function(e) {
console.log($("#u_last_sharing_code").val());
var u_last_sharing_code = $("#u_last_sharing_code").val();
db.child(thisUser).update({
u_last_sharing_code: u_last_sharing_code
});
});
// user makes a change
$("#u_background_class").on("change", function(e) {
console.log($("#u_background_class").val());
var u_background_class = $("#u_background_class").val();
db.child(thisUser).update({
u_background_class: u_background_class
});
});
// user makes a change
$("#u_color_filter_switches_rgb").on("change", function(e) {
console.log($("#u_color_filter_switches_rgb").val());
var u_color_filter_switches_rgb = $("#u_color_filter_switches_rgb").val();
db.child(thisUser).update({
u_color_filter_switches_rgb: u_color_filter_switches_rgb
});
});
// user makes a change
$("#u_color_filter_switches_id").on("change", function(e) {
console.log($("#u_color_filter_switches_id").val());
var u_color_filter_switches_id = $("#u_color_filter_switches_id").val();
db.child(thisUser).update({
u_color_filter_switches_id: u_color_filter_switches_id
});
});
/////////////////////////////////////////
// retrieve what's in the server
db
.child(thisUser)
.child("u_last_sharing_code")
.on("value", function(snapshot) {
$("#s_last_sharing_code").val(snapshot.val());
console.log("bringing in u_last_sharing_code");
});
// retrieve what's in the server
db
.child(thisUser)
.child("u_background_class")
.on("value", function(snapshot) {
$("#s_background_class").val(snapshot.val());
console.log("bringing in u_background_class");
});
// retrieve what's in the server
db
.child(thisUser)
.child("u_color_filter_switches_rgb")
.on("value", function(snapshot) {
$("#s_color_filter_switches_rgb").val(snapshot.val());
console.log("bringing in u_color_filter_switches_rgb");
});
// retrieve what's in the server
db
.child(thisUser)
.child("u_color_filter_switches_id")
.on("value", function(snapshot) {
$("#s_color_filter_switches_id").val(snapshot.val());
console.log("bringing in u_color_filter_switches_id");
});
/////////////////////////////////////////
// apply user preferences stored in the server
var waitFor_s_last_sharing_code = setInterval(function() {
if ($("#s_last_sharing_code").val().length > 0) {
console.log("s_last_sharing_code is loaded in the input");
// clear the setInterval
clearInterval(waitFor_s_last_sharing_code);
var s_last_sharing_code = $(
"#s_last_sharing_code"
).val();
$("#config_name_change").val(s_last_sharing_code);
}
}, 1000);
// apply user preferences stored in the server
var waitFor_s_background_class = setInterval(function() {
if ($("#s_background_class").val().length > 0) {
console.log("s_background_class is loaded in the input");
// clear the setInterval
clearInterval(waitFor_s_background_class);
var s_background_class = $(
"#s_background_class"
).val();
// trigger click on background
$("body").find(".panel_colour_preferences").find("." + s_background_class).trigger({
type: 'click',
which: 1
});
}
}, 1000);
// apply user preferences stored in the server
var waitFor_s_color_filter_switches_rgb = setInterval(function() {
if ($("#s_color_filter_switches_rgb").val().length > 0) {
console.log("s_color_filter_switches_rgb is loaded in the input");
// clear the setInterval
clearInterval(waitFor_s_color_filter_switches_rgb);
var s_color_filter_switches_rgb = $(
"#s_color_filter_switches_rgb"
).val();
// add the style tag // not necessary?
var colorUserPref = $("#s_color_filter_switches_rgb").val();
$( "<style>mark, .active_switch, #name, #email {color : " + colorUserPref + " !important;}</style>" ).appendTo( "head" );
}
}, 1000);
// apply user preferences stored in the server
var waitFor_s_color_filter_switches_id = setInterval(function() {
if ($("#s_color_filter_switches_id").val().length > 0) {
console.log("s_color_filter_switches_id is loaded in the input");
// clear the setInterval
clearInterval(waitFor_s_color_filter_switches_id);
var s_color_filter_switches_id = $(
"#s_color_filter_switches_id"
).val();
// trigger click on color
var colorUserPrefId = $("#s_color_filter_switches_id").val();
$(".panel_colour_preferences").find("#" + colorUserPrefId).trigger({
      type: 'click',
      which: 1
    });
}
}, 1000);
/////////////////////////////////////////
      // handle things when user logs in (observer will take care of it if user doesn't have a sharing code in input)
      $("#setup_verse_sharing_all_set").show("slow");
      $("#setup_verse_sharing_welcome").hide();
      $("#I_dont_have_a_sharing_code").hide();
      $("#activate_sharing_code").hide();
    } else {
      // No user is signed in.
            $("#config_name_change").attr("value", "").val("").trigger("change");
            $("#s_last_sharing_code").attr("value", "").val("").trigger("change");
            // No user is signed in.
            // trigger click on background
            var backgroundDefaultClass = $("#d_background_class").text();
            $("body").find(".panel_colour_preferences").find("." + backgroundDefaultClass).trigger({
                  type: 'click',
                  which: 1
                });
                // add the style tag // not necessary?
                var colorDefault = $("#d_color_filter_switches_rgb").text();
                $( "<style>mark, .active_switch, #name, #email {color : " + colorDefault + " !important;}</style>" ).appendTo( "head" );
                // trigger click on color
                var colorDefaultId = $("#d_color_filter_switches_id").text();
                $(".panel_colour_preferences").find("#" + colorDefaultId).trigger({
                      type: 'click',
                      which: 1
                    });

    }
  });

// end document ready
});
// end document ready
////////////////////////////////////////////////////
// END firebase store user's preferences
////////////////////////////////////////////////////


///////////////////////////////////////////////
////BEGIN Temporary switch English and Spanish
///////////////////////////////////////////////
$(document).ready(function() {
// app_lang_en_main // terminal main = on
$('#app_terminal_main_on').on('click', function() {
  // tran = off / orig = off
if (
($("#app_lang_en_main").hasClass("active_switch")) &&
($("#app_terminal_orig_off").hasClass("active_switch")) &&
($("#app_terminal_tran_off").hasClass("active_switch"))
) {
$("#tE_ajax_chapters tr").each(function() {
		var tr = $(this);
		var en = tr.find('td.en_txt');
		var column = tr.find('td:eq(0)');
en.insertAfter(column).show();
});
}
});
// app_lang_en_main // terminal main = off
$('#app_terminal_main_off').on('click', function() {
  // tran = off / orig = off
if (
($("#app_lang_en_main").hasClass("active_switch")) &&
($("#app_terminal_orig_off").hasClass("active_switch")) &&
($("#app_terminal_tran_off").hasClass("active_switch"))
) {
$("#tE_ajax_chapters tr").each(function() {
		var tr = $(this);
		var en = tr.find('td.en_txt');
		var column = tr.find('td:eq(0)');
en.insertAfter(column).hide();
});
}
});
// app_lang_es_para // terminal para = on
$('#app_terminal_para_on').on('click', function() {
  // tran = off / orig = off
if (
($("#app_lang_es_para").hasClass("active_switch")) &&
($("#app_terminal_orig_off").hasClass("active_switch")) &&
($("#app_terminal_tran_off").hasClass("active_switch"))
) {
$("#tE_ajax_chapters tr").each(function() {
		var tr = $(this);
		var es = tr.find('td.es_txt');
		var column = tr.find('td:eq(0)');
es.insertAfter(column).show();
});
}
});
// app_lang_es_para // terminal para = off
$('#app_terminal_para_off').on('click', function() {
  // tran = off / orig = off
if (
($("#app_lang_es_para").hasClass("active_switch")) &&
($("#app_terminal_orig_off").hasClass("active_switch")) &&
($("#app_terminal_tran_off").hasClass("active_switch"))
) {
$("#tE_ajax_chapters tr").each(function() {
		var tr = $(this);
		var es = tr.find('td.es_txt');
		var column = tr.find('td:eq(0)');
es.insertAfter(column).hide();
});
}
});
// temporary trigger these so it load with English only
$('#app_terminal_main_on').trigger('click');
$('#app_terminal_para_on').trigger('click');

// end document ready
});
// end document ready
///////////////////////////////////////////////
////END Temporary switch English and Spanish
///////////////////////////////////////////////


///////////////////////////////////////////////
////BEGIN check if landing from mindy
///////////////////////////////////////////////
$(document).ready(function() {
  setTimeout(function() {

  var pathname = window.location.pathname; // Returns path only (/path/example.html)
  var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
  var origin   = window.location.origin;   // Returns base URL (https://example.com)

  console.log(pathname);
  console.log(url);
  console.log(origin);

    if( (url == "https://www.biblefarm.org/app/#login" ) && ($("#edited_app_name").text() == "Your Name Goes Here") ) {

  $("#edited_app_name").trigger("click");

    }
  }, 21000);

// end document ready
});
// end document ready
///////////////////////////////////////////////
////END check if landing from mindy
///////////////////////////////////////////////

///////////////////////////////////////////////
////BEGIN login services hack
///////////////////////////////////////////////
$(document).ready(function() {
// wait for it to be in DOM
  var waitForFirebaseUIUponArrival = setInterval(function() {
    if ($("body").find('.firebaseui-idp-text').length > 0) {
      console.log("FirebaseUI ready in DOM upon arrival");
      // clear the setInterval
      clearInterval(waitForFirebaseUIUponArrival);
// upon arrival
$("body").find(".firebaseui-card-content").css("padding", "0 10px");
$("body").find("button.firebaseui-idp-button").css("max-width", "312px");
$("body").find(".firebaseui-idp-icon").css("height", "22px").css("width", "22px");
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").css("text-shadow", "0px 0px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").css("text-shadow", "1px 1px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").css("text-shadow", "1px 1px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").css("text-shadow", "1px 1px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
}
}, 1000);
// after we signed out
$("#sign-out").on('click', function() {
  // wait for it to be in DOM
    var waitForFirebaseUIAfterSignOut = setInterval(function() {
      if ($("body").find('.firebaseui-idp-text').length > 0) {
        console.log("FirebaseUI ready in DOM after SignOut");
        // clear the setInterval
        clearInterval(waitForFirebaseUIAfterSignOut);
        $("body").find(".firebaseui-card-content").css("padding", "0 10px");
        $("body").find("button.firebaseui-idp-button").css("max-width", "312px");
        $("body").find(".firebaseui-idp-icon").css("height", "22px").css("width", "22px");
$("body").find("button[data-provider-id='google.com']").find(".firebaseui-idp-text-long").css("text-shadow", "0px 0px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
$("body").find("button[data-provider-id='facebook.com']").find(".firebaseui-idp-text-long").css("text-shadow", "1px 1px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
$("body").find("button[data-provider-id='twitter.com']").find(".firebaseui-idp-text-long").css("text-shadow", "1px 1px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
$("body").find("button[data-provider-id='password']").find(".firebaseui-idp-text-long").css("text-shadow", "1px 1px 1px #000").css("font-family", "PT_Sans-Narrow-Web-Regular").css("font-size", "20px");
}
}, 1000);
});
});
///////////////////////////////////////////////
////END login services hack
///////////////////////////////////////////////
