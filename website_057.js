// website v0.57 57 //

// when landing in landscape, ask to rotate, let them know we're reloading, then reload automatically
$(document).ready(function() {
  if ($(window).height() < 480 && $(window).height() < $(window).width()) {
    console.log("arrived in landscape");
    $(".bf_please_rotate_your_phone_vertically").show();
    $(".bf_please_rotate_your_phone_vertically_wrap").show();
    $(window).on("resize", function() {
      $(".bf_hold_on_please_wrap").show();
      $(".bf_hold_on_please").show();
      location.reload();
    });
  }
});
///////////////////////////////////////////////
//BEGIN website welcome splash ////////////////
///////////////////////////////////////////////
//////////////////////
///// BEGIN textillate
//////////////////////
$(document).ready(function() {
  $(".bf_intro_splash_text h1")
    .fitText(0.7, { maxFontSize: 100 })
    .textillate({ in: { effect: "flipInY" } });

  $(".bf_intro_splash_text p.msg1")
    .fitText(3.0, { minFontSize: 25, maxFontSize: 48 })
    .textillate({
      initialDelay: 2000,
      in: { delay: 3, shuffle: true },
      callback: function() {
        setTimeout(function() {
          $(".bf_intro_splash_text p.msg1").textillate("out");
        }, 1500);
      }
    });

  $(".bf_intro_splash_text p.msg2")
    .fitText(3.0, { minFontSize: 25, maxFontSize: 48 })
    .textillate({ initialDelay: 4900, in: { delay: 8, shuffle: true } });
  //////////////////////
  ///// END textillate /
  //////////////////////
  // remove splash after intro completed
  setTimeout(function() {
    $(".bf_lock_n_load_wrap").css("display", "none");
    $(".bf_lock_n_load").css("display", "none");
  }, 1000);
  setTimeout(function() {
    $(".bf_intro_splash_bg, .bf_intro_splash_text").hide("slow");
  }, 15000);
  // automatically move to forced desired page
  //       setTimeout(function() {
  // $('.move_to_bf_farm').trigger('click', function() {
  // });
  //       }, 16000);
});
///////////////////////////////////////////////
// END website welcome splash ////////////////
///////////////////////////////////////////////

//////////////////////////////////
///// BEGIN swiper bf navigation /
//////////////////////////////////
$(document).ready(function() {
  var swiper_jovi = new Swiper(".swiper-container-main", {
    initialSlide: 1,
    preventClicks: true,
    //    scrollbar: ".swiper-scrollbar",
    //    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: false,
    effect: "coverflow",
    grabCursor: true,
    shortSwipes: false,
    centeredSlides: true,
    slidesPerView: "auto",
    hashnav: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar"
    },
    hashNavigation: {
      watchState: true
    },
    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev"
  });
  // navigation menu clicks
  $(".move_to_bf_farm").click(swiper_jovi, function() {
    swiper_jovi.slideTo(1);
  });
  $(".move_to_bf_youtube").click(swiper_jovi, function() {
    swiper_jovi.slideTo(2);
  });
  $(".move_to_bf_facebook").click(swiper_jovi, function() {
    swiper_jovi.slideTo(3);
  });
  $(".move_to_bf_app").click(swiper_jovi, function() {
    swiper_jovi.slideTo(4);
  });
  $(".move_to_bf_donate").click(swiper_jovi, function() {
    swiper_jovi.slideTo(5);
  });
  $(".move_to_bf_made_with_love").click(swiper_jovi, function() {
    swiper_jovi.slideTo(6);
  });
  ////////////////////////////////////////////////////////
  //////////// BEGIN populating facebook feed with slick /
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //////////// BEGIN fbFetch Facebook first image of each post
  ////////////////////////////////////////////////

  function fbFetch() {
    var access_token = "1336118583068310|JdlPe-nIXwAS4QrP1ZAP-HPgMrQ";
    var url =
      "https://graph.facebook.com/?ids=granjasolidaria&fields=posts.limit(10){message,created_time,permalink_url,full_picture}&access_token=" +
      access_token;

    $.getJSON(url, function(response) {
      var messages = [];

      Object.getOwnPropertyNames(response).forEach(function(page, idx, array) {
        response[page].posts.data.forEach(function(post, idx, array) {
          messages.push(post);
        });
      });

      function compare(a, b) {
        if (a.created_time < b.created_time) return 1;
        if (a.created_time > b.created_time) return -1;
        return 0;
      }

      //Use jQuery getJSON method to fetch the data from the url and then create our unordered list with the relevant data.
      var html = '<div class="lazy_farm">';
      //loop through and within data array's retrieve the message variable.
      $.each(messages.sort(compare), function(i, fb) {
        if (typeof fb.full_picture != "undefined") {
          html +=
            //          "<li>" +
            //          fb.created_time +
            //          "</br>" +
            //          fb.permalink_url +
            //          "</br>" +
            '<div><img data-lazy="' + fb.full_picture + '"></div>';
          //          +
          //          "</br>" +
          //          fb.message +
          //          "</li></br>"
        } else {
          //        html +=
          //          "<li>" +
          //          fb.created_time +
          //          "</br>" +
          //          fb.permalink_url +
          //          "</br>" +
          //          fb.message +
          //          "</li></br>";
        }
      });

      html += "</div>";

      //A little animation once fetched
      //    $(".lazy_farm").animate({ opacity: 0 }, 500, function() {
      //      $(".lazy_farm").slick('slickAdd', html);
      //    });
      //    $(".lazy_farm").animate({ opacity: 1 }, 500);

      $(".bf_farm_container").html(html);
    });
  }

  fbFetch();
  ////////////////////////////////////////////////
  //////////// END fbFetch Facebook first image of each post
  ////////////////////////////////////////////////
  var waitFor_fbFetch_completed = setInterval(function() {
    if ($(".lazy_farm").children().length > 3) {
      console.log(
        "///////////////// fbFetch is completed // now executing slick"
      );
      clearInterval(waitFor_fbFetch_completed);
      ////////////////////////////////////////////////
      //////////// BEGIN slick.js lazy_farm
      ////////////////////////////////////////////////
      var slick_slider_lazy_farm = $(".lazy_farm").slick({
        lazyLoad: "progressive",
        dots: false,
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        verticalSwiping: true,
        adaptiveHeight: false,
        //  arrows: true,
        speed: 1000,
        touchThreshold: 30,
        waitForAnimate: false,
        autoplay: false,
        autoplaySpeed: 4000
        //  mobileFirst: true,
        //  respondTo: 'window'
      });

      slick_slider_lazy_farm.on("wheel", function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
          $(this).slick("slickPrev");
        } else {
          $(this).slick("slickNext");
        }
      });
      setTimeout(function() {
        $(".lazy_farm").slick("slickGoTo", 2);
      }, 100);
        setTimeout(function() {
        $(".lazy_farm").slick("slickGoTo", 1);
      }, 200);
        setTimeout(function() {
        $(".lazy_farm").slick("slickGoTo", 0);
      }, 300);
    }
  }, 1000);

  ////////////////////////////////////////////////
  //////////// END slick.js lazy_farm
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  //////////// END populating facebook feed with slick /
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  //////////// BEGIN populating thank_you feed with slick /
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //////////// BEGIN slick.js lazy_responsive
  ////////////////////////////////////////////////
  var slick_slider_lazy_responsive = $(".lazy_responsive").slick({
    lazyLoad: "progressive",
    dots: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    adaptiveHeight: false,
    //  arrows: true,
    speed: 1000,
    touchThreshold: 30,
    waitForAnimate: false,
    autoplay: false,
    autoplaySpeed: 4000
    //  mobileFirst: true,
    //  respondTo: 'window'
  });

  slick_slider_lazy_responsive.on("wheel", function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickPrev");
    } else {
      $(this).slick("slickNext");
    }
  });

  ////////////////////////////////////////////////
  //////////// END slick.js lazy_responsive
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  //////////// END populating thank_you feed with slick /
  ////////////////////////////////////////////////////////

  // when landing in portrait, user rotates, tell them to go back to portrait
  $(window).on("resize", function(e) {
    if ($(window).height() < 480 && $(window).height() < $(window).width()) {
//      $(".bf_please_rotate_your_phone_vertically_wrap").show();
//      $(".bf_please_rotate_your_phone_vertically").show();
    } else if ($(window).height() > $(window).width()) {
      $(".bf_please_rotate_your_phone_vertically_wrap").hide();
      $(".bf_please_rotate_your_phone_vertically").hide();
      setTimeout(function() {
        swiper_jovi.prependSlide(
          '<div class="swiper-slide">prepended slide"</div>'
        );
      }, 200);
      setTimeout(function() {
        swiper_jovi.removeSlide(0);
      }, 300);
    }

    $("#made_with_love").on("click", function(e) {
      console.log("///////// returning from app to site");
      setTimeout(function() {
        $(".lazy_responsive").slick("reinit");
        console.log("///////// waited 500 millisecs and slick reinit");
      }, 500);
      setTimeout(function() {
        $(".lazy_farm").slick("reinit");
        console.log("///////// waited 5500 millisecs and slick reinit");
      }, 5500);
    });
  });
  // when returning from the app, just in case they've rotated
  $("#made_with_love").on("click", function(e) {
    $(".app_wrap").hide();
    $(".bf_wrap").show("slow");
    if ($(window).height() < 480 && $(window).height() < $(window).width()) {
      $(".bf_please_rotate_your_phone_vertically_wrap").show();
      $(".bf_please_rotate_your_phone_vertically").show();
    } else if ($(window).height() > $(window).width()) {
      $(".bf_please_rotate_your_phone_vertically_wrap").hide();
      $(".bf_please_rotate_your_phone_vertically").hide();
      // prepend and remove slide to fix swiper discrepancy
      setTimeout(function() {
        swiper_jovi.prependSlide(
          '<div class="swiper-slide">prepended slide"</div>'
        );
      }, 200);
      setTimeout(function() {
        swiper_jovi.removeSlide(0);
      }, 300);
      // move to #donate
      setTimeout(function() {
        swiper_jovi.slideTo(5);
      }, 400);
    }
    // prepend and remove slide anyways for possible desktop/notebook resize
    setTimeout(function() {
      swiper_jovi.prependSlide(
        '<div class="swiper-slide">prepended slide"</div>'
      );
    }, 200);
    setTimeout(function() {
      swiper_jovi.removeSlide(0);
    }, 300);
    // move to #donate
    setTimeout(function() {
      swiper_jovi.slideTo(5);
    }, 400);
  });

  ////////////////////////////////////////////////////
  // BEGIN gofundme modal show hide
  ////////////////////////////////////////////////////
  $("body").find(".wrap_visit_GoFundMe_campaigns").on("click", function() {
    $(".wrap_gofundme_modal_bar").show("slow");
    $(".wrap_gofundme_modal_body").show("slow");
    setTimeout(function() {
      $( "body" ).scrollLeft( 60 );
    }, 1500);
  $(".bf_wrap").hide();
  });
  $("body").find(".close_gofundme_modal").on("click", function() {
    setTimeout(function() {
      $( "body" ).scrollLeft( 0 );
    }, 1500);
    $(".wrap_gofundme_modal_bar").hide();
    $(".wrap_gofundme_modal_body").hide();
  $(".bf_wrap").show("slow");
  setTimeout(function() {
    swiper_jovi.prependSlide(
      '<div class="swiper-slide">prepended slide"</div>'
    );
  }, 200);
  setTimeout(function() {
    swiper_jovi.removeSlide(0);
  }, 300);
  // move to #donate
  setTimeout(function() {
    swiper_jovi.slideTo(5);
  }, 400);
  setTimeout(function() {
    $(".lazy_responsive").slick("reinit");
    setTimeout(function() {
      $(".lazy_farm").slick("slickGoTo", 2);
    }, 100);
      setTimeout(function() {
      $(".lazy_farm").slick("slickGoTo", 1);
    }, 200);
      setTimeout(function() {
      $(".lazy_farm").slick("slickGoTo", 0);
    }, 300);

    console.log("///////// waited 500 millisecs to slick reinit lazy_responsive");
  }, 500);
  setTimeout(function() {
    $(".lazy_farm").slick("reinit");
    setTimeout(function() {
      $(".lazy_farm").slick("slickGoTo", 2);
    }, 100);
      setTimeout(function() {
      $(".lazy_farm").slick("slickGoTo", 1);
    }, 200);
      setTimeout(function() {
      $(".lazy_farm").slick("slickGoTo", 0);
    }, 300);

    console.log("///////// waited 600 millisecs to slick reinit lazy_farm");
  }, 600);

  });
  ////////////////////////////////////////////////////
  // END gofundme modal show hide
  ////////////////////////////////////////////////////


});
//////////////////////////////////////////////////////////////////////////
/////////////////////////
///// END swiper bf navigation
/////////////////////////

/////////////////////////////////////////////////////
// BEGIN youtube api
/////////////////////////////////////////////////////

/* youtube working on it now */
/*
  Youtube Player with Playlist (v2.22)
  https://github.com/carloscabo/responsive-youtube-player-with-playlist
  by Carlos Cabo (@putuko)
*/

var RYPP = (function($, undefined) {
  "use strict";

  function Rypp(el, api_key, options) {
    if (typeof api_key === "undefined") {
      console.log(
        "Youtube API V3 requires a valid API KEY.\nFollow the instructions at: https://developers.google.com/youtube/v3/getting-started"
      );
      return false;
    }

    // DOM Elements container
    this.DOM = {};

    // Default settings container
    this.options = {};

    // Data / urls
    this.data = {
      // Playlist url
      ytapi: {
        playlist_info:
          "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id={{RESOURCES_ID}}&key={{YOUR_API_KEY}}",
        playlist:
          "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId={{RESOURCES_ID}}&key={{YOUR_API_KEY}}",
        pl_ID: "",
        videolist:
          "https://www.googleapis.com/youtube/v3/videos?part=snippet,status&maxResults=50&id={{RESOURCES_ID}}&key={{YOUR_API_KEY}}"
      },
      temp_vl: [], // Temporary videolist
      firsttime: true,
      ismobile: typeof window.orientation !== "undefined",
      ispopulated: false
    };

    // Initialize
    this.init(el, api_key, options);
  }

  // Prototype for the instance
  Rypp.prototype = {
    init: function(el, api_key, options) {
      // Api key
      this.api_key = api_key;

      // Default options
      this.options = {
        update_title_desc: false,
        autoplay: true,
        autonext: true,
        loop: true,
        mute: false,
        debug: false
      };

      // Merge initial options
      if (typeof options !== "undefined") {
        $.extend(this.options, options);
      }

      // DOM elements
      this.DOM = {};
      this.DOM.$el = $(el);
      this.DOM.$playlc = this.DOM.$el.find(".RYPP-playlist");
      this.DOM.$items = this.DOM.$el.find(".RYPP-items");
      this.DOM.$videoc = this.DOM.$el.find(".RYPP-video");
      this.DOM.$title = this.DOM.$el.find(".RYPP-title");
      this.DOM.$desc = this.DOM.$el.find(".RYPP-desc");

      // YT Player object
      this.DOM.$el[0].ytplayer = null;

      // Unique player ID
      this.data.player_uid = Math.random()
        .toString(16)
        .substr(2, 8);
      this.DOM.$el
        .attr("data-rypp", this.data.player_uid)
        .find(".RYPP-video-player")
        .attr("id", "RYPP-vp-" + this.data.player_uid)
        .attr("name", "RYPP-vp-" + this.data.player_uid);
      if (this.options.debug)
        console.log("Unique ID: RYPP-vp-" + this.data.player_uid);

      // Link JS only once
      if (typeof window.YT === "undefined") {
        var tag = document.createElement("script"),
          hID = document.getElementsByTagName("head")[0];
        // Add youtube API in HEAD
        // tag.src = "https://www.youtube.com/iframe_api";
        tag.src = "https://www.youtube.com/iframe_api?version=3";
        hID.appendChild(tag);
      } else {
        this.addAPIPlayer();
      }
    },

    onYTIframeAPIReadyCallback: function() {
      this.addAPIPlayer();
    },

    updateTitleDesc: function() {
      var that = this,
        resources_id = this.DOM.$el.attr("data-playlist"),
        url = this.data.ytapi.playlist_info
          .replace("{{RESOURCES_ID}}", resources_id)
          .replace("{{YOUR_API_KEY}}", this.api_key);

      $.ajaxSetup({ cache: false });
      $.ajax(url, {
        context: this,
        dataType: "json",
        crossDomain: true,
        error: function() {
          // Not successful
        },
        success: function(data) {
          // console.log(data);
          this.DOM.$title.html(data.items[0].snippet.title);
          this.DOM.$desc.html(data.items[0].snippet.description);
        }
      });
    },

    populatePlaylist: function() {
      if (this.options.update_title_desc) {
        if (this.options.debug)
          console.log(
            this.data.player_uid + ": Updating playlist title / desc"
          );
        this.updateTitleDesc();
      }

      // Empty playlist
      if (this.options.debug)
        console.log(this.data.player_uid + ": Populating playlist");
      this.DOM.$items.html("").append($("<ol>"));

      // Now we read the video list from playlist data or from IDs...
      if (this.DOM.$el.attr("data-playlist")) {
        this.data.pl_ID = this.DOM.$el.attr("data-playlist");
        this.getVideosFrom("playlist", this.data.pl_ID);
      } else if (this.DOM.$el.attr("data-ids")) {
        var vl = this.DOM.$el.attr("data-ids");
        // Clean spaces
        vl = $.map(vl.split(","), $.trim).join(",");
        this.getVideosFrom("videolist", vl);
      }
    },

    addAPIPlayer: function() {
      var that = this;

      window.YTConfig = { host: "https://www.youtube.com" };
      this.DOM.$el[0].ytplayer = new YT.Player(
        "RYPP-vp-" + that.data.player_uid,
        {
          // height: '390',
          // width: '640',
          playerVars: {
            // controls: 0,
            // showinfo: 0 ,
            // autoplay: 0,
            // html5: 1,
            enablejsapi: 1,
            rel: 0,
            modestbranding: 1,
            wmode: "transparent"
          },
          events: {
            onReady: function() {
              if (that.options.debug)
                console.log(that.data.player_uid + ": ytplayer ready");
              that.onPlayerReady();
            },
            onStateChange: function(e) {
              that.onPlayerStateChange(e);
            },
            onError: function(e) {
              console.log(e);
            }
          }
        }
      );
    },

    // Ready to play
    onPlayerReady: function() {
      if (this.options.debug)
        console.log(this.data.player_uid + ": ytplayer ready callback");
      this.populatePlaylist();
      // this.startPlayList();
    },

    // When video finish
    onPlayerStateChange: function(e) {
      var that = this;

      if (typeof e !== "undefined") {
        // On video loaded?
        if (e.data === -1 && this.data.firsttime) {
          if (!this.options.autoplay && !this.data.ismobile) {
            // Is desktop
            this.DOM.$el[0].ytplayer.stopVideo();
            this.data.firsttime = false;
          }
          if (this.options.mute) {
            this.DOM.$el[0].ytplayer.mute();
          }
        }

        // If mobile and stored in buffer we STOP the video in mobile devices
        if (e.data === 3 && this.data.ismobile && this.data.firsttime) {
          setTimeout(function() {
            that.DOM.$el[0].ytplayer.stopVideo();
            that.data.firsttime = false;
          }, 500);
        }

        // Play next only if not mobile
        var next = null;
        if (e.data === 0 && !this.data.ismobile && this.options.autonext) {
          next = this.DOM.$items.find("li.selected").next();
          if (next.length === 0 && this.options.loop) {
            next = this.DOM.$items.find("li").first();
          }
          next.trigger("click");
        }
      }
    },

    // Get video from data-ids or playlist
    // It's impossible to know if a video in a playlist its available or currently deleted. So we do 2 request, first we get all the video IDs an then we ask for info about them.
    getVideosFrom: function(kind, resources_id, page_token) {
      var that = this,
        url = this.data.ytapi[kind]
          .replace("{{RESOURCES_ID}}", resources_id)
          .replace("{{YOUR_API_KEY}}", this.api_key);

      if (typeof page_token !== "undefined") {
        url += "&pageToken=" + page_token;
      }

      $.ajaxSetup({ cache: false });
      $.ajax(url, {
        context: this,
        dataType: "json",
        crossDomain: true,
        error: function() {
          // Not successful
        },
        success: function(data) {
          // We queried for a playlist
          if (data.kind === "youtube#playlistItemListResponse") {
            var video_set = [];

            // We get the video IDs and query gain, its the only way to be sure that all the videos are available, and not were deleted :(
            $.map(data.items, function(val, idx) {
              if (typeof val.snippet.resourceId.videoId !== "undefined") {
                // Add video to temporary list
                video_set.push(val.snippet.resourceId.videoId);
                // return val.snippet.resourceId.videoId;
              }
            });
            that.data.temp_vl.push(video_set);

            // If there are several pages we ask for next
            if (
              typeof data.nextPageToken !== "undefined" &&
              data.nextPageToken !== ""
            ) {
              that.getVideosFrom(
                "playlist",
                that.data.pl_ID,
                data.nextPageToken
              );
            } else {
              // No more pages... we process the videos
              for (
                var j = 0, len_pl = that.data.temp_vl.length;
                j < len_pl;
                j++
              ) {
                video_set = that.data.temp_vl.shift();
                that.getVideosFrom("videolist", video_set.join(","));
              }
            }
          } else if (data.kind === "youtube#videoListResponse") {
            // Videos froma  Videolist
            for (var i = 0, len = data.items.length; i < len; i++) {
              var item = data.items[i];

              // Videos without thumbnail, deleted or rejected are not included in the player!
              if (
                $.inArray(item.status.uploadStatus, [
                  "rejected",
                  "deleted",
                  "failed"
                ]) === -1 &&
                typeof item.snippet.thumbnails !== "undefined"
              ) {
                var vid = item.id,
                  tit = item.snippet.title,
                  aut = item.snippet.channelTitle,
                  thu = item.snippet.thumbnails.default.url;
                that.addVideo2Playlist(vid, tit, aut, thu);
              }
              if ($.isEmptyObject(that.data.temp_vl)) {
                this.startPlayList();
              }
            }
          }
        }
      });
    },

    // All videos are supossed to be loaded
    // lets start the playlist
    startPlayList: function() {
      var D = this.DOM,
        vid = null,
        that = this;

      // Click on playlist elemnts
      D.$items.on("click", "li", function(e) {
        e.preventDefault();
        D.$items.find("li").removeClass("selected");
        $(this).addClass("selected");
        vid = $(this).data("video-id");
        // Call YT API function
        that.DOM.$el[0].ytplayer.loadVideoById(vid);
        // If we are in mobile we must stop
        if (that.data.ismobile) {
          that.data.firsttime = true;
        }
      });

      // Select first if none
      if (D.$items.find("li.selected").length === 0) {
        if (this.options.autoplay) {
          D.$items
            .find("li")
            .first()
            .click();
        }
      }
    },

    // Add video block to playlist
    addVideo2Playlist: function(vid, tit, aut, thu) {
      var D = this.DOM;
      $(
        '<li data-video-id="' +
          vid +
          '"><p class="title">' +
          tit +
          '<small class="author"><br>' +
          aut +
          '</small></p><img src="' +
          thu +
          '" class="thumb"></li>'
      ).appendTo(D.$items.find("ol"));
    }
  }; // prototypes

  return Rypp;
})(jQuery);

// YOUTUBE API CALLBACK
function onYouTubeIframeAPIReady() {
  // console.log( 'Youtube API script loaded. Start players.' );
  $("[data-rypp]").each(function(idx, el) {
    $(el)[0].rypp_data_obj.onYTIframeAPIReadyCallback();
  });
}

// JQuery hook
$.fn.rypp = function(api_key, options) {
  return this.each(function() {
    // Store object in DOM element
    this.rypp_data_obj = new RYPP(this, api_key, options);
  });
};

////////////////////////////////////////////////////

$(document).ready(function() {
  // This key only works for this demo on GitHub
  // You must create your own at:
  // https://developers.google.com/youtube/v3/getting-started
  window.api_key = "AIzaSyCE8bj2-elbAKq6f_2lwIep-7wi2wkvW14";
  // Start all players on the page with default options
  // $('.RYPP').rypp('AIzaSyA1rpTMrNjth1R6-LfLe0UG8v1946nj3Xw');
  // Start two players by ID, with default settings
  $("#rypp-demo-1").rypp(window.api_key, {
    update_title_desc: true, // Default false
    autoplay: false,
    autonext: false,
    loop: false,
    mute: false,
    debug: true
  });
  $("#rypp-demo-2").rypp(window.api_key, {
    update_title_desc: true, // Default false
    autoplay: false,
    autonext: false,
    loop: false,
    mute: false,
    debug: true
  });
  // Start two players by ID, with default settings
  $("#rypp-demo-3").rypp(api_key, {
    update_title_desc: true, // Default false
    autoplay: false,
    autonext: false,
    loop: false,
    mute: false,
    debug: true
  });
  // all videos in playlist
  $("#rypp-demo-4").rypp(window.api_key, {
    update_title_desc: true, // Default false
    autoplay: false,
    autonext: true,
    loop: true,
    mute: false,
    debug: true
  });

  $(".RYPP .RYPP-playlist").addClass("bgc-0007");
});
////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// END youtube api
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/// BEGIN perfect scrollbar
/////////////////////////////////////////////////////
$(document).ready(function() {
  $("").perfectScrollbar({});

  // perfect scrollbar wait for video ol to be populated
  var waitFor_youTube_completed = setInterval(function() {
    if ($(".RYPP-items ol").children().length > 0) {
      console.log(
        "///////////////// waitFor_youTube_completed is completed // now executing perfect scrollbar and clicking on the first video"
      );
      clearInterval(waitFor_youTube_completed);
      // $('ol li p').css("color", "red");
      $(".RYPP .RYPP-playlist .RYPP-items ol").perfectScrollbar({
        suppressScrollX: true
      });
      ////////////////// let's load and make ready to play the first video
      $(".bf_wrap")
        .find(".RYPP-items ol li")
        .eq(0)
        .trigger({ type: "click", which: 1 })
        .css("color", "green");
      console.log(
        "/////////////////////////////////////////////////////// first video is ready to play"
      );
      $(".bf_youtube_container .bf_loadersmall").css("display", "none");
    }
  }, 1000);
});
/////////////////////////////////////////////////////
/// END perfect scrollbar
/////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN donation process
////////////////////////////////////////////////////
$(document).ready(function() {
  $(".area_veggies_fruits").on("click", function() {
    $(".redirect_to_paypal_decide").hide("slow");
    $(".redirect_to_paypal_confirm").show("slow");
    $(".decided_task")
      .append()
      .html('<span class="task_veggies_fruits">build more grow beds</span>');
    $(".decided_purpose")
      .append()
      .html(
        '<span><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H2V4LGEQ65S7C" class="color_veggies">veggies </a></span><span><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H2V4LGEQ65S7C" class="color_and">& </a></span><span><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H2V4LGEQ65S7C" class="color_fruits">fruits </a></span>'
      );
    $(".area_veggies_fruits").addClass("decided_veggies_fruits");
    $(".box_back, #paypal_redirect_veggies_and_fruits").show("slow");
  });
  $(".area_fish").on("click", function() {
    $(".redirect_to_paypal_decide").hide("slow");
    $(".redirect_to_paypal_confirm").show("slow");
    $(".decided_task")
      .append()
      .html(
        '<span class="task_fish">build more live Tilapia fish tanks</span>'
      );
    $(".decided_purpose")
      .append()
      .html(
        '<span><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XPE4ENHCVLZCA" class="color_fish">fish </a></span>'
      );
    $(".area_fish").addClass("decided_fish");
    $(".box_back, #paypal_redirect_fish").show("slow");
  });
  $(".area_protein_brownies").on("click", function() {
    $(".redirect_to_paypal_decide").hide("slow");
    $(".redirect_to_paypal_confirm").show("slow");
    $(".decided_task")
      .append()
      .html(
        '<span class="task_protein_brownies">bake protein brownies for next visit</span>'
      );
    $(".decided_purpose")
      .append()
      .html(
        '<span><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PXMKFLX8QVZFG" class="color_protein_brownies">protein brownies </a></span>'
      );
    $(".area_protein_brownies").addClass("decided_protein_brownies");
    $(".box_back, #paypal_redirect_protein_brownies").show("slow");
  });
  $(".area_eggs").on("click", function() {
    $(".redirect_to_paypal_decide").hide("slow");
    $(".redirect_to_paypal_confirm").show("slow");
    $(".decided_task")
      .append()
      .html('<span class="task_eggs">build more space for egg hens</span>');
    $(".decided_purpose")
      .append()
      .html(
        '<span><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EVSNWV3JQ76F4" class="color_eggs">eggs </a></span>'
      );
    $(".area_eggs").addClass("decided_eggs");
    $(".box_back, #paypal_redirect_eggs").show("slow");
  });
  $(".redirect_to_paypal_decision_back").on("click", function() {
    $(".redirect_to_paypal_confirm").hide("slow");
    $(".area_veggies_fruits").removeClass("decided_veggies_fruits");
    $(".area_fish").removeClass("decided_fish");
    $(".area_protein_brownies").removeClass("decided_protein_brownies");
    $(".area_eggs").removeClass("decided_eggs");
    $(".redirect_to_paypal_decide").show("slow");
    $(
      ".box_back, #paypal_redirect_veggies_and_fruits, #paypal_redirect_fish, #paypal_redirect_protein_brownies, #paypal_redirect_eggs"
    ).hide("slow");
  });
});
////////////////////////////////////////////////////
// END donation process
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN addthis
////////////////////////////////////////////////////

$(document).ready(function() {
  var stopWhenCompleted = setInterval(function() {
  if ($(".facebook_patience").find('.at-icon-messenger title:contains("Messenger")').length > 0) {
console.log("addthis is loaded. Let's hack");
// addthis shadow hack to SHARING AND FOLLOW
      $(".wrap_sharing_panel").find("svg.at-icon").css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))");
console.log("/////// applied addthis shadow SHARING hack");
// addthis FOLLOW margin hack
$(".facebook_patience").find(".addthis_toolbox a").css("margin-left", "5px").css("margin-right", "5px");
console.log("/////// applied addthis margin FOLLOW hack");
// addthis FOLLOW size hack
setTimeout(function() {
  $(".facebook_patience").find(".at-icon-wrapper, svg.at-icon").css("width", "49px").css("height", "49px").css("line-height", "49px").css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))");
console.log("/////// applied addthis shadow FOLLOW hack");
}, 1500);



      clearInterval(stopWhenCompleted);
  }
}, 500);
});
////////////////////////////////////////////////////
// END addthis
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// BEGIN request access to app & share before you go
////////////////////////////////////////////////////
// modal loads hidden
$(".wrap_sharing_modal_for_requested_access, .wrap_sharing_panel, .modal_multi_item_share_bf_yes_or_no, .modal_multi_item_share_bf_again_or_done, .maybe_next_time_redirect, .that_was_awesome_redirect, .show_appreciation_for_sharing_again").hide("slow");
// show the modal
$(".requeest_bf_app_access").on("click", function() {
$(".wrap_sharing_modal_for_requested_access, .wrap_sharing_panel, .nope_im_not_sharing").show("slow");
$(".wrap_inner_app_container").hide("slow");
  });
// offer to share again
  $(".addthis_inline_share_toolbox_ascx").on("click", function() {
    $(".modal_multi_item_share_bf_yes_or_no, .nope_im_not_sharing").hide("slow");
    $(".show_appreciation_for_sharing_again").hide("slow");
    $(".modal_multi_item_share_bf_again_or_done").show("slow");
    });

    // if they're sharing on another platform
    $(".share_on_another_platform").on("click", function() {
      $(".modal_multi_item_share_bf_again_or_done").hide("slow");
      $(".show_appreciation_for_sharing_again").show("slow");
      });



// if they don't wanna share
$(".nope_im_not_sharing").on("click", function() {
$(".wrap_sharing_modal_for_requested_access, .wrap_sharing_panel, .modal_multi_item_share_bf_yes_or_no, .modal_multi_item_share_bf_again_or_done, .requeest_bf_app_access").hide("slow");
$(".wrap_inner_app_container").show("slow");
$(".maybe_next_time_redirect").show("slow");
  });

// if they're done sharing
$(".done_sharing_for_now").on("click", function() {
$(".wrap_sharing_modal_for_requested_access, .wrap_sharing_panel, .modal_multi_item_share_bf_yes_or_no, .modal_multi_item_share_bf_again_or_done, .requeest_bf_app_access").hide("slow");
$(".wrap_inner_app_container").show("slow");
$(".show_appreciation_for_sharing_again").hide("slow");
$(".that_was_awesome_redirect").show("slow");
  });

// back to requesting access & redirect to app on another tab
$(".maybe_next_time_redirect, .that_was_awesome_redirect").on("click", function() {
$(".maybe_next_time_redirect, .that_was_awesome_redirect").hide("slow");
$(".requeest_bf_app_access").show("slow");
  });

  ////////////////////////////////////////////////////
  // END request access to app & share before you go
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  // BEGIN addthis hack
  ////////////////////////////////////////////////////
$(document).ready(function() {
  var stopWhenCompleted = setInterval(function() {
  if ($(".facebook_patience").find('.at-icon-messenger title:contains("Messenger")').length > 0) {
console.log("addthis is loaded. Let's hack");
// adthis shadow hack to SHARING AND FLLOW
      $(".wrap_sharing_panel").find("svg.at-icon").css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))");
console.log("/////// applied addthis shadow SHARING hack");
// adthis FOLLOW size hack
      $(".facebook_patience").find(".at-icon-wrapper, svg.at-icon").css("width", "68px").css("height", "68px").css("line-height", "68px").css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))");
console.log("/////// applied addthis shadow FOLLOW hack");
      clearInterval(stopWhenCompleted);
  }
  }, 100);
});
////////////////////////////////////////////////////
// END addthis hack
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN PureChat hack
////////////////////////////////////////////////////

$(document).ready(function() {
// initial hide
var stopWaitingForPurechat = setInterval(function() {
if ($("body").find('.purechat-widget-title-link:contains("Contact us")').length > 0) {
  console.log("found PureChat");
// hide it
$("#PureChatWidget").attr("style", "z-index: -1 !important");
clearInterval(stopWaitingForPurechat);
}
}, 1000);
////////////////////
// show when needed
$("#show_pure_chat").on("click", function() {
  // show it
  $("#PureChatWidget").attr("style", "z-index: 2147483646 !important");
// hack colors
// header
$("#PureChatWidget").find('.purechat-widget-header').attr("style", "background-color: #0c1400 !important");
// content-wrapper
$("#PureChatWidget").find('.purechat-content-wrapper').attr("style", "background-color: #172800 !important");
// purechat-card
$("#PureChatWidget").find('.purechat-card').attr("style", "background-color: #203700 !important");
// purechat-btn
$("#PureChatWidget").find('.purechat-btn').attr("style", "color: #d5ad6d !important");
// purechat-widget-title-link
$("#PureChatWidget").find('.purechat-widget-title-link').attr("style", "font-size: 20px !important;padding-left: 8px !important;font-family: PT_Sans-Narrow-Web-Regular !important;color: #d5ad6d !important;text-shadow: 2px 2px 1px black !important");
// keep widget expanded
$("#PureChatWidget").removeClass("purechat-widget-super-collapsed");
$("#PureChatWidget").addClass("purechat-widget-collapsed");
console.log("PureChat will keep widget expanded");
});

// hide when click outside
$(window).click(function() {
  // hide it
  $("#PureChatWidget").attr("style", "z-index: -1 !important");
});
// stopPropagation when clicking to show the widget and inside the widget itself
$('#show_pure_chat, #PureChatWidget').click(function(event){
    event.stopPropagation();
console.log("PureChat hide when click outside event.stopPropagation");
});


});

////////////////////////////////////////////////////
// END PureChat hack
////////////////////////////////////////////////////
