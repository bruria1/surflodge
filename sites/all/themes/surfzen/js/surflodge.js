/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

/********  hamburger menu  **********/
      $(".menu-wrapper").click(function(){
        if ($("body").hasClass("display-menu")){
          $("body").removeClass("display-menu");
        }
        else {
          $("body").addClass("display-menu");
        }
      });

      $("#page").click(function(){
          $("body").removeClass("display-menu");
      });

/**********  main  **********/
  
  $mainheight = $(window).height()-150;
  $("#main").css("margin-top", $mainheight);
  $(window).resize(function() {
   	$mainheight = $(window).height()-150;
	 $("#main").css("margin-top", $mainheight);
  });

$height = $(window).height();
    if ($height<500) {
      $("body").addClass("small-height");
    }
    else{
      $("body").removeClass("small-height");
    }
  $(window).resize(function() {
    $height = $(window).height();
    if ($height<500) {
      $("body").addClass("small-height");
    }
    else{
      $("body").removeClass("small-height");
    }
  });
/*********   scroll  *******/

$linksheight = $height + $("#header").height() -400;
$(document).ready(function(){       
      $scroll_pos = 0;
      $(document).scroll(function() { 
        $scroll_pos = $(this).scrollTop();
        if($scroll_pos > $linksheight) {
            $("body").addClass('scroll');
        }
        else {
            $("body").removeClass('scroll');
        }
      });
});
$(window).resize(function() {
$linksheight = $height + $("#header").height() -400;
$(document).ready(function(){       
      $scroll_pos = 0;
      $(document).scroll(function() { 
        $scroll_pos = $(this).scrollTop();
        if($scroll_pos > $linksheight) {
            $("body").addClass('scroll');
        }
        else {
            $("body").removeClass('scroll');
        }
      });
});
});

/************* blog page  *********/

  var imageHeight = $(".view-blog-post-view img").height();
  $(".view-blog-post-view .views-field-field-post-date-1").height(imageHeight);
  $(window).resize(function() {
    var imageHeight = $(".view-blog-post-view img").height();
    $(".view-blog-post-view .views-field-field-post-date-1").height(imageHeight);
  });

  }
};


})(jQuery, Drupal, this, this.document);
