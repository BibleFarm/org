/* *************************** */
/* *************************** */
/* *************************** */
/* BEGIN Brought in from index_pages.js
/* *************************** */
/* *************************** */
/* *************************** */
    $(document).ready(function() {
      ////////////////////////////////////////////////////
      // BEGIN PureChat hack
      ////////////////////////////////////////////////////
      // append gui
      $('body').append('<div id="menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#d5ad6d"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></div><div id="info" class="open_purechat"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#d5ad6d"><g><rect fill="none" height="24" width="24"/><path d="M13.25,16.74c0,0.69-0.53,1.26-1.25,1.26c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25 C12.71,15.49,13.25,16.04,13.25,16.74z M11.99,6c-1.77,0-2.98,1.15-3.43,2.49l1.64,0.69c0.22-0.67,0.74-1.48,1.8-1.48 c1.62,0,1.94,1.52,1.37,2.33c-0.54,0.77-1.47,1.29-1.96,2.16c-0.39,0.69-0.31,1.49-0.31,1.98h1.82c0-0.93,0.07-1.12,0.22-1.41 c0.39-0.72,1.11-1.06,1.87-2.17c0.68-1,0.42-2.36-0.02-3.08C14.48,6.67,13.47,6,11.99,6z M19,5H5v14h14V5 M19,3c1.1,0,2,0.9,2,2v14 c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19L19,3z"/></g></svg></div>');
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
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 1000);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #d5ad6d !important");
        }, 1500);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 2000);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #d5ad6d !important");
        }, 2500);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 3000);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #d5ad6d !important");
        }, 3500);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
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
/* *************************** */
/* *************************** */
/* *************************** */
/* BEGIN Brought in from index_pages.js
/* *************************** */
/* *************************** */
/* *************************** */
