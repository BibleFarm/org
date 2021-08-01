    $(document).ready(function() {
      ////////////////////////////////////////////////////
      // BEGIN PureChat hack
      ////////////////////////////////////////////////////
      // append gui
      $('body').append('<div id="menu"><i class="fas fa-bars"></i></div><div id="info" class="open_purechat"><i class="fas fa-question"></i></div>');
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
      $(".open_purechat").on("click", function() {
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
        // darken the page to emphasize chat
        $(".opacity_cover").show();
      });
      // hide when click outside
      $(".opacity_cover").click(function() {
        // hide it
        $("#PureChatWidget").attr("style", "z-index: -1 !important");
        // bring back to normal
        $(".opacity_cover").hide();
        // hide the menu
        $(".menu_modal").hide("slow");
      });
      // stopPropagation when clicking to show the widget and inside the widget itself
      $(".open_purechat, #PureChatWidget").click(function(event) {
        event.stopPropagation();
        console.log("PureChat hide when click outside event.stopPropagation");
      });
      ////////////////////////////////////////////////////
      // END PureChat hack
      ////////////////////////////////////////////////////
      ////////////////////////////////////////////////////
      // BEGIN simple menu
      ////////////////////////////////////////////////////
      $("#menu").on("click", function() {
        $(".menu_modal").toggle("slow");
        $(".opacity_cover").show();
      });
      ////////////////////////////////////////////////////
      // END simple menu
      ////////////////////////////////////////////////////
    });
    ////////////////////////////////////////////////////
    // BEGIN PureChat load
    ////////////////////////////////////////////////////
    window.purechatApi = {
      l: [],
      t: [],
      on: function() {
        this.l.push(arguments);
      }
    };
    (function() {
      var done = false;
      var script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';
      document.getElementsByTagName('HEAD').item(0).appendChild(script);
      script.onreadystatechange = script.onload = function(e) {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
          var w = new PCWidget({
            c: '7f1570e3-a978-430a-82a3-fccff55a8707',
            f: true
          });
          done = true;
        }
      };
    })();
    ////////////////////////////////////////////////////
    // END PureChat load
    ////////////////////////////////////////////////////