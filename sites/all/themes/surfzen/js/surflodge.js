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

/********  temperature footer f|c  **********/

      $(".temperature .scales .celsius").click(function(){
        $(".temperature .scales .celsius").addClass("active");
        $(".temperature .scales .fahrenheit").removeClass("active");
        $(".temperature").addClass("celsius").removeClass("fahrenheit");
      });

      $(".temperature .scales .fahrenheit").click(function(){
        $(".temperature .scales .fahrenheit").addClass("active");
        $(".temperature .scales .celsius").removeClass("active");
        $(".temperature").addClass("fahrenheit").removeClass("celsius");
      });

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

  $width = ($(window).width()-1200)/2+187;
  $("#navigation").css("width", $width);
  $(window).resize(function() {
    $width = ($(window).width()-1200)/2+187;
    $("#navigation").css("width", $width);
  });

  $(".menu-wrapper").click(function(){
        if ($width<301){$width=300};
        if ($("body").hasClass("display-menu")){
          $("#page").css("right", $width);
          $("#logo").css("margin-right", $width);
          //$(".field-name-field-background-image img").css("margin-right", $width);
          $(".region-links").css("margin-right", $width);
        }
        else {
          $("#page").css("right", '0');
          $("#logo").css("margin-right", '0');
          //$(".field-name-field-background-image img").css("margin-right", '0');
          $(".region-links").css("margin-right", 0);
        }
   });


/**********  main  **********/
  
  $mainheight = $(window).height()-150;
  $("#main").css("margin-top", $mainheight);
  $(".region-links").css("top", $mainheight);
  $(window).resize(function() {
   	$mainheight = $(window).height()-150;
	 $("#main").css("margin-top", $mainheight);
  $(".region-links").css("top", $mainheight);
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

$linksheight = $height + $("#header").height() -350;
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
$linksheight = $height + $("#header").height() -350;
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

/***** book now scroll  ******/

$booknowheight = $("#main").height();
$(document).ready(function(){       
      $scroll_pos = 0;
      $(document).scroll(function() { 
        $scroll_pos = $(this).scrollTop();
        if($scroll_pos > $booknowheight) {
            $("body").addClass('scroll-book-now');
        }
        else {
            $("body").removeClass('scroll-book-now');
        }
      });
});

$(window).resize(function() {
  $booknowheight = $("#main").height();
  $(document).ready(function(){       
        $scroll_pos = 0;
        $(document).scroll(function() { 
          $scroll_pos = $(this).scrollTop();
          if($scroll_pos > $booknowheight) {
              $("body").addClass('scroll-book-now');
          }
          else {
              $("body").removeClass('scroll-book-now');
          }
        });
  });
});
/************* blog page  *********/

  var imageHeight = $(".not-front .view-blog-post-view img").height();
  $(".not-front .view-blog-post-view .views-field-field-post-date-1").height(imageHeight);
  $(window).resize(function() {
    var imageHeight = $(".not-front .view-blog-post-view img").height();
    $(".not-front .view-blog-post-view .views-field-field-post-date-1").height(imageHeight);
  });

/************* welness page   *********/

  var Heightcontent = ($(".bean-plan-your-event- .field-name-field-image").height()-$(".bean-plan-your-event- .entity-field-collection-item .content").height())/2;
    $(".bean-plan-your-event- .field-name-field-title-for-block").css("padding-top", Heightcontent);
  $(window).resize(function() {
    $(".bean-plan-your-event- .field-name-field-title-for-block").css("padding-top", '0');
    var Heightcontent = ($(".bean-plan-your-event- .field-name-field-image").height()-$(".bean-plan-your-event- .entity-field-collection-item .content").height())/2;
    $(".bean-plan-your-event- .field-name-field-title-for-block").css("padding-top", Heightcontent);
  });

/***********   resturant  ********/

if ($("body").hasClass("page-node-84")) {
  $mainheight = $(window).height()-150-$(".region-highlighted").height()-220;
  if ($mainheight<200){$mainheight=200};
  $("#main").css("margin-top", $mainheight);
  $(window).resize(function() {
  $mainheight = $(window).height()-150-$(".region-highlighted").height()-220;
    if ($mainheight<200){$mainheight=200};
   $("#main").css("margin-top", $mainheight);
  });
}

  var Heightcontent = ($(".bean-resturannt-block .field-name-field-image").height()-$(".bean-resturannt-block .entity-field-collection-item .content").height())/2;
    $(".bean-resturannt-block .field-name-field-title-for-block").css("padding-top", Heightcontent);
  $(window).resize(function() {
    $(".bean-plan-your-event- .field-name-field-title-for-block").css("padding-top", '0');
    var Heightcontent = ($(".bean-plan-your-event- .field-name-field-image").height()-$(".bean-plan-your-event- .entity-field-collection-item .content").height())/2;
    $(".bean-plan-your-event- .field-name-field-title-for-block").css("padding-top", Heightcontent);
  });


  $(window).load(function(){
    $('#splash').fadeOut();
  });



  }
};


})(jQuery, Drupal, this, this.document);
