///////////////////////////////////////////////////
/// BEGIN JS for ready post modal  ///////
///////////////////////////////////////////////////
$(document).ready(function() {

// restrain image
$(".wrap_image_sharing_ready_to_share div img").attr("width", "312px").attr("height", "164px");

  // BEGIN the get perfectScrollbar
    $.getScript ("https://team.biblefarm.org/_js/_o_v_0_6_14_perfect-scrollbar.jquery.min.js", function (){

        console.log ("0 Running perfectScrollbar");

  // BEGIN the get script to log visits
    $.getScript ("https://team.biblefarm.org/_js/PageVisits.js", function (){

        console.log ("0 Running PageVisits.js");

  // create dynamically the element
  $("body").one().append('<div class="opacity_cover"></div>');
  console.log("create dynamically opacity_cover element");

  var this_page_name = $("title").html().replace(/\ /g,"-").replace(":","-");
  console.log("title tag: " + this_page_name);

  var ref_for_this_page = $("title").text();
  console.log(ref_for_this_page);

  var v_for_this_page = $(".v").text();
  console.log(v_for_this_page);

  ///////////////////////////////////////////////////
  /// BEGIN inject everything in the head  ///////
  ///////////////////////////////////////////////////

	$('		<script>		/* get them and implement them here: https://developers.google.com/search/docs/data-types/article // test them here: https://search.google.com/structured-data/testing-tool // monitor them here: https://search.google.com/search-console/welcome */ (function() {		  var jsonData = [		    {		      "@context": "http://www.schema.org",		      "@type": "Organization",		      name: "BibleFarm.org",		      url: "https://www.biblefarm.org/",		      sameAs: [		        "https://www.instagram.com/biblefarm/",		        "https://www.facebook.com/BibleFarm.org/",		        "https://www.facebook.com/granjasolidaria/",		        "https://www.facebook.com/groups/BiblieFarm/",		        "https://twitter.com/biblefarm/",		        "https://www.youtube.com/channel/UCqu0sNEEhviHFa8VUd12HnA",		        "https://www.youtube.com/playlist?list=PL-SXzhnj1OgLUY7MqL-RW1FrJSXTpXltA",		        "https://www.pinterest.com/BibleFarm/",		        "https://www.linkedin.com/company/biblefarm-org",		        "https://www.paypal.me/biblefarm"		      ],		      logo:		        "https://www.biblefarm.org/BibleFarm_Facebook_Profile_Picture_tumblr.png",		      image:		        "https://biblefarm.github.io/posts-en/images/'+this_page_name+'.png",		      description:		        "Bible doers let\'s https://www.BibleFarm.org/donate & provide better nutrition for these kids. Fulfilling Mat 25:31-40 one visit at a time: The team delivers clothes, shoes & we teach these children to put all their trust in Jesus (John 1:12), share (1John 3:17), apologize (Mat. 5:24) & forgive (Mark 11:26). #biblefarm @biblefarm",		      address: {		        "@type": "PostalAddress",		        streetAddress: "Calle 132 # 777",		        addressLocality: "Posadas",		        addressRegion: "Misiones",		        postalCode: "3300",		        addressCountry: "Argentina"		      }		    },		    {		      "@context": "https://schema.org/",		      "@type": "WebPage",		      name: "Share every verse @ BiblFarm.org",		      speakable: {		        "@type": "SpeakableSpecification",		        xpath: [		          "/html/head/title",		          "/html/head/meta[@name=\'description\']/@content"		        ]		      },		      url: "https://www.biblefarm.org/"		    },		    {		      "@context": "https://schema.org",		      "@type": "SoftwareApplication",		      name: "Share every verse @ BibleFarm.org/app",		      applicationCategory: "Bible Software",		      downloadUrl: "https://www.biblefarm.org/app",		      thumbnailUrl:		        "https://www.biblefarm.org/BibleFarm_Facebook_Profile_Picture_tumblr.png",		      operatingSystem: "ALL",		      aggregateRating: {		        "@type": "AggregateRating",		        ratingValue: "5.0",		        ratingCount: "10"		      },		      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" }		    },				    {		      "@context": "https://schema.org",		      "@type": "DefinedTerm",		      name: "'+ref_for_this_page+'",		      description: "'+v_for_this_page+'",		      image:		        "https://biblefarm.github.io/posts-en/images/'+this_page_name+'.png",		      url: "https://team.biblefarm.org/demo/'+this_page_name+'.html"		    }		  ];		  var el = document.createElement("script");		  el.type = "application/ld+json";		  el.innerHTML = JSON.stringify(jsonData);		  document.head.appendChild(el);		})();						</script>		<link href="https://team.biblefarm.org/_css/_o_v_0_6_14_perfect-scrollbar.min.css" rel="stylesheet" type="text/css">').prependTo("head");

  ///////////////////////////////////////////////////
  /// END inject everything in the head  ///////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  /// BEGIN inject everything in the body  ///////
  ///////////////////////////////////////////////////

	$('  <!-- -------------------------------------- -->  <!-- BEGIN post sharing modal ------------- -->  <!-- -------------------------------------- -->    <!-- BEGIN wrap_top    <div class="wrap_top_post_sharing_modal bgc-0001">      <span class="title_verse_sharing">your post is ready</span>    </div>   -->    <!-- BEGIN wrap_options_bar -->    <div class="wrap_options_bar">      <!-- wait_to_load_options-->      <div class="wait_to_load_options bgc-0001">        loading in <span class="countdown_loading_addthis_options">5</span> <span id="btn_countdown_start">Start countdown</span>      </div><!-- BEGIN options_bar --><div class="options_bar"><span class="option_menu bgc-0001"><a class="bf_links" href="https://www.biblefarm.org">thank you for sharing at BibleFarm.org</a></span></div><!-- END options_bar -->    </div><!-- END wrap_options_bar -->    <!-- BEGIN wrap_show_options -->    <div class="wrap_show_options">      <div class="show_menu_options">        <div class="std_title_44_center">          <a class="bf_links" href="https://www.biblefarm.org#app"><span class="">get this app</span></a>        </div>        <div class="std_title_44_center">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url"><span class="">donate via paypal</span></a>        </div>        <div class="std_title_44_center">          <span class="bf_links open_purechat">contact us</span>        </div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_sharing_options">        <div class="addthis_inline_share_toolbox_ascx addthis_align"></div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_sending_options">        <div class="addthis_inline_share_toolbox_z8ga addthis_align"></div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_saving_options">        <div class="addthis_inline_share_toolbox_gotw addthis_align"></div>      </div>    </div><!-- END wrap_show_options -->').prependTo("body");

// image is static in the pages here in the middle

  $('<!-- BEGIN wrap_done_with_ready_post_next --><div class="wrap_done_with_ready_post_next bgc-0001"><a class="bf_links" href="https://www.biblefarm.org">shop now</a></div><!-- END wrap_done_with_ready_post_next -->    <!-- BEGIN wrap_ctr_post_sharing_modal -->    <div class="wrap_ctr_post_sharing_modal bgc-0001"></div><!-- END wrap_ctr_post_sharing_modal -->    <!-- BEGIN wrap_sponsors_show_time -->    <div class="wrap_sponsors_show_time bgc-0001">      <div class="sponsors_show_time">        <div class="sponsors_show_time_item_left" id="">          <a class="bf_links" href="https://www.biblefarm.org#intro" id="meet_the_team">meet the team</a>        </div>        <div class="sponsors_show_time_item_center">          <span class="countdown_while_showing_sponsors">10</span> <span id="btn_countdown_start">Start countdown</span>        </div>        <div class="sponsors_show_time_item_right" id="">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" id="be_a_part_now">be a part now</a>        </div>      </div>    </div><!-- END wrap_sponsors_show_time -->    <div class="wrap_sponsor_ads">      <!-- inject team members here -->    </div>    <!-- END wrap_sponsor_ads -->      <!-- -------------------------------------- -->  <!-- END post sharing modal   ------------- -->  <!-- -------------------------------------- --><div class="wrap_bot bgc-0001"><!-- BEGIN made_with_love --><a class="bf_links" href="https://www.biblefarm.org"><span class="made_with_love bf_links">made with <span class="love">❤</span> at BibleFarm.org</span></a><!-- END made_with_love --></div><!-- BEGIN post_creation JS  dependencies --><!-- addthis for newly created page in firebase--><script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f4628f4f316c50" type="text/javascript"></script>	<!-- END post_creation javascript dependencies -->').appendTo("body");

  ///////////////////////////////////////////////////
  /// END inject everything in the body  ///////
  ///////////////////////////////////////////////////




// add to the title tag
var thisPerson = $("meta[property='og:title']").attr("content");
console.log(thisPerson);
var thisPersonNameOnly = thisPerson.replace('shared with â¤ by ','');
console.log(thisPersonNameOnly);   //prints: 123
$("title").text(document.title + " - " + thisPerson);







	///////////////////////////////////////////////////
	/// BEGIN countdown_loading_addthis_options ///////
	///////////////////////////////////////////////////

	var timer1,
		clock = 5;
	$(startup);

	function startup() {
		$(start).trigger({
			type: "click",
			which: 1
		});
	}

	function start() {
		clock = 5;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		timer1 = setInterval(countdown, 1000);
		$("#btnstart").prop("disabled", true);
	}

	function countdown() {
		clock -= 1;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		if (clock == 0) {
			clearInterval(timer1);
			$("#btn_countdown_start").prop("disabled", false);
			$(".wait_to_load_options").hide("slow");
			$(".wrap_sponsor_ads").hide("slow");
		}
	}

	///////////////////////////////////////////////////
	/// END countdown_loading_addthis_options ///////
	///////////////////////////////////////////////////
	// BEGIN options toggle
	// lands with show_sharing_options displayed
	$(".show_sharing_options").show();

	$(".options_bar").on("click", ".option_menu", function(e) {
		// $(".show_sharing_options, .show_sending_options, .show_saving_options").hide("slow");
    // $(".show_menu_options").show("slow");
    $(".wrap_sponsor_ads").toggle("slow");
	});
	$(".options_bar").on("click", ".option_share", function(e) {
		$(".show_menu_options, .show_sending_options, .show_saving_options").hide("slow");
    $(".wrap_sponsor_ads").hide("slow");
		$(".show_sharing_options").show("slow");
	});
	$(".options_bar").on("click", ".option_send", function(e) {
		$(".show_menu_options, .show_sharing_options, .show_saving_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_sending_options").show("slow");
	});
	$(".options_bar").on("click", ".option_save", function(e) {
		$(".show_menu_options, .show_sharing_options, .show_sending_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_saving_options").show("slow");
	});
	$(".options_bar").on("click", ".option_link", function(e) {
		$(".show_menu_options, .show_sending_options, .show_saving_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_sharing_options").show("slow");
	});
	$(".options_bar").on("click", ".option_print", function(e) {
		$(".show_menu_options, .show_sending_options, .show_saving_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_sharing_options").show("slow");
	});
	// END options toggle
	// BEGIN done_with_ready_post_close_tab
	$("#done_with_ready_post_close_tab").on("click", function(e) {
			window.history.back();
	});
	// END done_with_ready_post_close_tab






  $("#go_back_to_change_bg").on('click', function(e) {
  $(".wrap_post_sharing_modal").hide();
  $(".wrap_sharing_modal_browsing_mode").show("slow");
  });

  $("#all_done_sharing_post").on('click', function(e) {
  $(".wrap_post_sharing_modal").hide();
  });



  // addthis shadow hack to SHARING AND FOLLOW
  setTimeout(function() {
    $("body")
      .find(".at-icon-wrapper")
      .css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))")
      .css("filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))");
    $("body")
      .find(".at-icon-wrapper")
      .css("border-radius", "10px");
    console.log("/////// applied addthis shadow SHARING hack @ + 1000");
  }, 6000);
  // addthis shadow hack to SHARING AND FOLLOW
  setTimeout(function() {
    $("body")
      .find(".at-icon-wrapper")
      .css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))")
      .css("filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))");
    $("body")
      .find(".at-icon-wrapper")
      .css("border-radius", "70px");
    console.log("/////// applied addthis shadow SHARING hack @ + 1000");
  }, 7000);

  // addthis shadow hack to SHARING AND FOLLOW
  setTimeout(function() {
    $("body")
      .find(".at-icon-wrapper")
      .css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))")
      .css("filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))");
    $("body")
      .find(".at-icon-wrapper")
      .css("border-radius", "4px");
    console.log("/////// applied addthis shadow SHARING hack @ + 1000");
  }, 8000);


  setTimeout(function() {
    $(".v").fadeOut("slow");
  }, 7000);


});
///////////////////////////////////////////////////
/// END the get script to log visits  ///////
///////////////////////////////////////////////////
});
///////////////////////////////////////////////////
/// END the get perfectScrollbar  ///////
///////////////////////////////////////////////////
});
///////////////////////////////////////////////////
/// END JS for ready post modal  ///////
///////////////////////////////////////////////////