///////////////////////////////////////////////////
/// BEGIN JS for ready post modal  ///////
///////////////////////////////////////////////////
$(document).ready(function() {




  var this_page_name = $("title").html().replace(/\ /g,"-").replace(":","-");
  console.log(this_page_name);

  var bg_for_this_page = $("#bg").text();
console.log(bg_for_this_page);

  ///////////////////////////////////////////////////
  /// BEGIN inject everything in the head  ///////
  ///////////////////////////////////////////////////
	$('<!-- Essential -->	<meta charset="utf-8">	<meta content="IE=edge" http-equiv="X-UA-Compatible">	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"><!-- Disable tap highlight on IE -->	<meta content="no" name="msapplication-tap-highlight"><!-- ////////////////////////// -->	<!-- BEGIN Favicons https://realfavicongenerator.net -->	<!-- ////////////////////////// -->	<link href="/apple-touch-icon.png?v=057" rel="apple-touch-icon" sizes="180x180">	<link href="/favicon-32x32.png?v=057" rel="icon" sizes="32x32" type="image/png">	<link href="/favicon-194x194.png?v=057" rel="icon" sizes="194x194" type="image/png">	<link href="/android-chrome-192x192.png?v=057" rel="icon" sizes="192x192" type="image/png">	<link href="/favicon-16x16.png?v=057" rel="icon" sizes="16x16" type="image/png">	<link href="/site.webmanifest?v=057" rel="manifest">	<link href="/safari-pinned-tab.svg?v=057" rel="mask-icon">	<link href="/favicon.ico?v=057" rel="shortcut icon">	<meta content="BibleFarm.org" name="apple-mobile-web-app-title">	<meta content="BibleFarm.org" name="application-name">	<meta content="#000000" name="msapplication-TileColor">	<meta content="/mstile-144x144.png?v=057" name="msapplication-TileImage">	<meta content="#000000" name="theme-color"><!-- ////////////////////////// -->	<!-- END Favicons https://realfavicongenerator.net -->	<!-- ////////////////////////// -->	<!-- ////////////////////////// -->	<!-- BEGIN Favicon-generator.org -->	<!-- ////////////////////////// -->	<link href="/apple-icon-57x57.png?v=057" rel="apple-touch-icon" sizes="57x57">	<link href="/apple-icon-60x60.png?v=057" rel="apple-touch-icon" sizes="60x60">	<link href="/apple-icon-72x72.png?v=057" rel="apple-touch-icon" sizes="72x72">	<link href="/apple-icon-76x76.png?v=057" rel="apple-touch-icon" sizes="76x76">	<link href="/apple-icon-114x114.png?v=057" rel="apple-touch-icon" sizes="114x114">	<link href="/apple-icon-120x120.png?v=057" rel="apple-touch-icon" sizes="120x120">	<link href="/apple-icon-144x144.png?v=057" rel="apple-touch-icon" sizes="144x144">	<link href="/apple-icon-152x152.png?v=057" rel="apple-touch-icon" sizes="152x152">	<link href="/favicon-96x96.png?v=057" rel="icon" sizes="96x96" type="image/png">	<link href="/manifest.json?v=057" rel="manifest"><!-- ////////////////////////// -->	<!-- END Favicon-generator.org -->	<!-- ////////////////////////// -->	<!-- ////////////////////////// -->	<!-- BEGIN http://www.favicomatic.com -->	<!-- ////////////////////////// -->	<link href="/apple-touch-icon-57x57.png?v=057" rel="apple-touch-icon-precomposed" sizes="57x57">	<link href="/apple-touch-icon-114x114.png?v=057" rel="apple-touch-icon-precomposed" sizes="114x114">	<link href="/apple-touch-icon-72x72.png?v=057" rel="apple-touch-icon-precomposed" sizes="72x72">	<link href="/apple-touch-icon-144x144.png?v=057" rel="apple-touch-icon-precomposed" sizes="144x144">	<link href="/apple-touch-icon-60x60.png?v=057" rel="apple-touch-icon-precomposed" sizes="60x60">	<link href="/apple-touch-icon-120x120.png?v=057" rel="apple-touch-icon-precomposed" sizes="120x120">	<link href="/apple-touch-icon-76x76.png?v=057" rel="apple-touch-icon-precomposed" sizes="76x76">	<link href="/apple-touch-icon-152x152.png?v=057" rel="apple-touch-icon-precomposed" sizes="152x152">	<link href="/favicon-196x196.png?v=057" rel="icon" sizes="196x196" type="image/png">	<link href="/favicon-96x96.png?v=057" rel="icon" sizes="96x96" type="image/png">	<link href="/favicon-32x32.png?v=057" rel="icon" sizes="32x32" type="image/png">	<link href="/favicon-16x16.png?v=057" rel="icon" sizes="16x16" type="image/png">	<link href="/favicon-128.png?v=057" rel="icon" sizes="128x128" type="image/png">	<meta content="BibleFarm.org" name="application-name">	<meta content="#000000" name="msapplication-TileColor">	<meta content="/mstile-144x144.png?v=057" name="msapplication-TileImage">	<meta content="/mstile-70x70.png?v=057" name="msapplication-square70x70logo">	<meta content="/mstile-150x150.png?v=057" name="msapplication-square150x150logo">	<meta content="/mstile-310x150.png?v=057" name="msapplication-wide310x150logo">	<meta content="/mstile-310x310.png?v=057" name="msapplication-square310x310logo"><!-- ////////////////////////// -->	<!-- END http://www.favicomatic.com -->	<!-- ////////////////////////// -->	<!--DONE  Twitter card -->	<meta content="summary_large_image" name="twitter:card">	<meta content="be a part of the BibleFarm.org team" name="twitter:title">	<meta content="fulfilling Mat 25:31-40 one visit at a time" name="twitter:description">	<meta content="@biblefarm" name="twitter:site">	<meta content="@biblefarm" name="twitter:creator">	<meta content="https://biblefarm.github.io/posts-en-'+bg_for_this_page+'/images/'+this_page_name+'.png" name="twitter:image:src">	<meta content="be a part of the BibleFarm.org team" name="twitter:image:alt"><!-- DONE Open Graph -->	<meta content="be a part of the BibleFarm.org team" property="og:title">	<meta content="fulfilling Mat 25:31-40 one visit at a time" property="og:description">	<meta content="https://biblefarm.github.io/posts-en-'+bg_for_this_page+'/images/'+this_page_name+'.png" property="og:image">	<meta content="image/jpeg" property="og:image:type">	<meta content="1200" property="og:image:width">	<meta content="630" property="og:image:height">	<meta content="https://www.biblefarm.org/app/en/posts/'+bg_for_this_page+'/'+this_page_name+'.html" property="og:url">	<meta content="BibleFarm.org - fulfilling Mat 25:31-40 one visit at a time" property="og:site_name">	<meta content="en_US" property="og:locale">	<meta content="356077414586259" property="fb:admins">	<meta content="205604789951385" property="fb:app_id">	<meta content="website" property="og:type">	<meta content="e3f86f5a3fa4999b9c17c1605383d4a8" name="p:domain_verify"><!-- Pinterest  -->	<!-- https://css-tricks.com/using-pinterest-data-attributes-and-meta-tags/ -->	<link href="images/torah_farm_launch_screen_640x1136.png" rel="apple-touch-startup-image">	<meta content="#f00" name="theme-color">	<meta content="#f00" name="msapplication-navbutton-color">	<meta content="fulfilling Mat 25:31-40 one visit at a time" name="description">	<meta content="https://biblefarm.github.io/posts-en-'+bg_for_this_page+'/images/'+this_page_name+'.png" name="image">	<meta content="be a part of the BibleFarm.org team" itemprop="name">	<meta content="fulfilling Mat 25:31-40 one visit at a time" itemprop="description">	<meta content="https://biblefarm.github.io/posts-en-'+bg_for_this_page+'/images/'+this_page_name+'.png" itemprop="image"><!-- BEGIN posts css dependencies -->	<link href="../../../../dependencies/_o_v_0_6_14_perfect-scrollbar.min.css" rel="stylesheet" type="text/css">	<!-- END posts css dependencies -->').prependTo("head");
  ///////////////////////////////////////////////////
  /// END inject everything in the head  ///////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  /// BEGIN inject everything in the body  ///////
  ///////////////////////////////////////////////////
	$('  <!-- -------------------------------------- -->  <!-- BEGIN post sharing modal ------------- -->  <!-- -------------------------------------- -->  <div class="wrap_post_sharing_modal">    <!-- BEGIN wrap_top    <div class="wrap_top_post_sharing_modal bgc-0001">      <span class="title_verse_sharing">your post is ready</span>    </div>   -->    <!-- BEGIN wrap_options_bar -->    <div class="wrap_options_bar">      <!-- wait_to_load_options-->      <div class="wait_to_load_options bgc-0001">        loading in <span class="countdown_loading_addthis_options">3</span> <span id="btn_countdown_start">Start countdown</span>      </div><!-- BEGIN options_bar -->      <div class="options_bar">        <!-- edit button-->        <span class="option_menu">team</span> <!-- share button-->         <span class="option_share">share</span> <!-- send button-->         <span class="option_send">send</span> <!-- save button-->         <span class="option_save bgc-0001">save</span> <!-- copy button-->         <span class="option_link"><a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url"><span class="">donate</span></a></span><!-- print button--><span class="option_print show_pure_chat">contact</span>      </div><!-- END options_bar -->    </div><!-- END wrap_options_bar -->    <!-- BEGIN wrap_show_options -->    <div class="wrap_show_options">      <div class="show_menu_options">        <div class="std_title_44_center">          <a class="bf_links" href="https://www.biblefarm.org#app"><span class="">get this app</span></a>        </div>        <div class="std_title_44_center">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url"><span class="">donate via paypal</span></a>        </div>        <div class="std_title_44_center">          <span class="bf_links show_pure_chat">contact us</span>        </div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_sharing_options">        <div class="addthis_inline_share_toolbox_ascx addthis_align"></div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_sending_options">        <div class="addthis_inline_share_toolbox_z8ga addthis_align"></div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_saving_options">        <div class="addthis_inline_share_toolbox_gotw addthis_align"></div>      </div>    </div><!-- END wrap_show_options -->    <!-- BEGIN wrap_image_sharing_ready_to_share -->    <div class="wrap_image_sharing_ready_to_share">      <div><img src="https://biblefarm.github.io/posts-en-'+bg_for_this_page+'/images/'+this_page_name+'.png"></div>    </div><!-- END wrap_image_sharing_ready_to_share -->    <!-- BEGIN wrap_done_with_ready_post_next -->    <div class="wrap_done_with_ready_post_next bgc-0001">      <div class="done_with_ready_post_next">        <div class="done_with_ready_post_next_item_left bf_links" id="go_back_to_change_bg"><a class="bf_links" href="https://www.biblefarm.org">BibleFarm.org</a></div>        <div class="done_with_ready_post_next_item_center" id="">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" id="be_a_part_now">donate now</a>        </div>        <div class="done_with_ready_post_next_item_right bf_links" id="all_done_sharing_post"><a class="bf_links" href="https://www.biblefarm.org#app">get all verses</a></div>      </div>    </div><!-- END wrap_done_with_ready_post_next -->    <!-- BEGIN wrap_ctr_post_sharing_modal -->    <div class="wrap_ctr_post_sharing_modal bgc-0001"></div><!-- END wrap_ctr_post_sharing_modal -->    <!-- BEGIN wrap_sponsors_show_time -->    <div class="wrap_sponsors_show_time bgc-0001">      <div class="sponsors_show_time">        <div class="sponsors_show_time_item_left" id="">          <a class="bf_links" href="https://www.biblefarm.org#intro" id="meet_the_team">meet the team</a>        </div>        <div class="sponsors_show_time_item_center">          <span class="countdown_while_showing_sponsors">10</span> <span id="btn_countdown_start">Start countdown</span>        </div>        <div class="sponsors_show_time_item_right" id="">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" id="be_a_part_now">be a part now</a>        </div>      </div>    </div><!-- END wrap_sponsors_show_time -->    <div class="wrap_sponsor_ads">      <!-- inject team members here -->    </div>    <!-- END wrap_sponsor_ads -->    <div class="paypal_button_donate_now">      <div class="wrap_the_paypal_button">        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">          <input name="cmd" type="hidden" value="_s-xclick"> <input name="hosted_button_id" type="hidden" value="YCUGUZHYX5Y2Q"> <input alt="Donate with PayPal button" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" title="PayPal - The safer, easier way to pay online!" type="image"> <img alt="" border="0" height="1" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1">        </form>      </div>    </div>  </div>  <!-- -------------------------------------- -->  <!-- END post sharing modal   ------------- -->  <!-- -------------------------------------- --><div class="wrap_bot bgc-0001"><!-- BEGIN made_with_love --><a class="bf_links" href="https://www.biblefarm.org"><span class="made_with_love">made with love at biblefarm.org</span></a><!-- END made_with_love --></div><!-- BEGIN post_creation JS  dependencies --><!-- addthis for newly created page in firebase--><script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f4628f4f316c50" type="text/javascript"></script>	<!-- perfect scrollbar js -->	<script src="../../../../dependencies/_o_v_0_6_14_perfect-scrollbar.jquery.min.js" type="text/javascript">	</script>  	 <!-- END post_creation javascript dependencies -->').prependTo("body");
  ///////////////////////////////////////////////////
  /// END inject everything in the body  ///////
  ///////////////////////////////////////////////////




// add to the title tag
$("title").text(document.title + " - BibleFarm.org");









	///////////////////////////////////////////////////
	/// BEGIN wrap_sponsor_ads perfectScrollbar ///////
	///////////////////////////////////////////////////
	$('.wrap_sponsor_ads').perfectScrollbar({
		wheelPropagation: true,
		scrollXMarginOffset: 2,
		suppressScrollX: true
	});
	///////////////////////////////////////////////////
	/// END wrap_sponsor_ads perfectScrollbar ///////
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	/// BEGIN inject team members ///////
	///////////////////////////////////////////////////
	$(".wrap_sponsor_ads").html("<div class='sponsor_ads'><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Lorenzo_Fragala.png'></div><div class='sponsor_item_desc'>Lorenzo Fragalá<br>Real Estate Developer<br>Azzurra Development Corp<br><a class='bf_links' href='http://azzurracorp.com/' target='_blank'>azzurracorp.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Mindy_Goldstein.png'></div><div class='sponsor_item_desc'>Mindy Goldstein<br>Registered Nurse<br>Lee County Sheriff\'s Office<br><a class='bf_links' href='http://www.sheriffleefl.org/' target='_blank'>sheriffleefl.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Davis_Knight.png'></div><div class='sponsor_item_desc'>Davis Knight<br>Healthy Products Specialist<br>Apple A Day Co-Op<br><a class='bf_links' href='https://appleadayco-op.com/' target='_blank'>appleadayco-op.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Mike_Newhook.png'></div><div class='sponsor_item_desc'>Mike Newhook<br>Organic Aquaponic Developer<br>Highland Aquaponics<br><a class='bf_links' href='http://highlandaquaponics.com/' target='_blank'>highlandaquaponics.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Jan_Deborah_Imperato.png'></div><div class='sponsor_item_desc'>Jan Deborah Imperato<br>Luxury & Waterfront Realtor<br>Palm Beach Villas Real Estate<br><a class='bf_links' href='https://www.palmbeachvillas.net/' target='_blank'>palmbeachvillas.net</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Angela_Lucambio.png'></div><div class='sponsor_item_desc'>Angela Lucambio<br>Registered Nurse<br>Volunteer & Caretaker<br><a class='bf_links' href='https://www.facebook.com/angela.lucambio' target='_blank'>facebook.com/angela.lucambio</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Ignacio_Di_Paola.png'></div><div class='sponsor_item_desc'>Ignacio Di Paola<br>Marketing Professional<br>NoLines Advertising Agency<br><a class='bf_links' href='http://nolines.com.ar/' target='_blank'>nolines.com.ar</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Dennis_Hamilton.png'></div><div class='sponsor_item_desc'>Dennis Hamilton<br>Organic Hydroponic Developer<br>Greenfund, LLC<br><a class='bf_links' href='https://greenfundsolutions.com/' target='_blank'>greenfundsolutions.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Alex_Smuglovsky.png'></div><div class='sponsor_item_desc'>Alex Smuglovsky<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='../../../../sponsor_images/Jose_Eugenio_Martinez.png'></div><div class='sponsor_item_desc'>José Eugenio Martínez<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div></div>");
	///////////////////////////////////////////////////
	/// BEGIN inject team members ///////
	///////////////////////////////////////////////////
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
		$("#show_pure_chat, .show_pure_chat").on("click", function() {
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
	});
	////////////////////////////////////////////////////
	// END PureChat hack
	////////////////////////////////////////////////////



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





  $("#go_back_to_change_bg").on('click', function(e) {
  $(".wrap_post_sharing_modal").hide();
  $(".wrap_sharing_modal_browsing_mode").show("slow");
  });

  $("#all_done_sharing_post").on('click', function(e) {
  $(".wrap_post_sharing_modal").hide();
  });






});
///////////////////////////////////////////////////
/// END JS for ready post modal  ///////
///////////////////////////////////////////////////
