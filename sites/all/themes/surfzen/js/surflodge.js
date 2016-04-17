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

 /*     $(".menu-wrapper").click(function() {
          $("body").toggleClass( "display-menu" );
      });*/

 /*     $(".menu-wrapper").click(function(){
        if ($("body").hasClass("hide-menu")) {
          $("body").removeClass("hide-menu");
          $("body").addClass("display-menu");
        } 
        if ($("body").hasClass("display-menu")) {
          $("body").addClass("hide-menu");
          $("body").removeClass("display-menu");
        }
      });
*/
      $(".menu-wrapper").unbind('click').bind('click', function (e) {
        if ($("body").hasClass("display-menu")){
          $("body").removeClass("display-menu");
        }
        else {
          $("body").addClass("display-menu");
        }
      });


      $("#wrapper-site").click(function(){
        if ($("body").hasClass("display-menu")){
          $("body").removeClass("display-menu");
        }
      });

/*

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
          $(".logo-wrapper").css("right", $width);
          //$(".field-name-field-background-image img").css("margin-right", $width);
          $(".region-links").css("margin-right", $width);
        }
        else {
          $("#page").css("right", '0');
          $(".logo-wrapper").css("right", '0');
          //$(".field-name-field-background-image img").css("margin-right", '0');
          $(".region-links").css("margin-right", 0);
        }
   });

  $("#wrapper-site").click(function(){
          $("#page").css("right", '0');
          $(".logo-wrapper").css("right", '0');
          //$(".field-name-field-background-image img").css("margin-right", '0');
          $(".region-links").css("margin-right", 0);
   });
*/
/**********  main  **********/
  
    $mainheight = $(window).height()-150;
   $(".not-front #main").css("margin-top", $mainheight);
  $(".region-links").css("top", $mainheight);
  $(window).resize(function() {
   	$mainheight = $(window).height()-150;
	 $(".not-front #main").css("margin-top", $mainheight);
  $(".region-links").css("top", $mainheight);
  });

  $frontmainheight = $(window).height()+30;
 // $mousescroll = $(window).height()-100;
  $(".front #main").css("margin-top", $frontmainheight);
//  $(".front .mouse-scroll").css("margin-top", $mousescroll);
  $(window).resize(function() {
  //  $mousescroll = $(window).height()-100;
    $frontmainheight = $(window).height()+30;
    $(".front #main").css("margin-top", $frontmainheight);
  //  $(".front .mouse-scroll").css("margin-top", $mousescroll);
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

  $logoheight = ($(window).height()-95)/2;
  $(".front .logo-wrapper").css("margin-top", $logoheight);
  $(window).resize(function() {
    $logoheight = ($(window).height()-95)/2;
   $(".front .logo-wrapper").css("margin-top", $logoheight);
  });
  
/*********   scroll  *******/

$linksheight = $logoheight;
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
$linksheight = $logoheight;
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
/*
$booknowheight = $("#page").height()-$mainheight;
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
*/
$booknowheight = $(window).height()+550;

$(window).scroll(function() {
   if($(window).scrollTop() + $booknowheight > $(document).height()) {
      $("body").addClass('scroll-book-now');
   }
    else {
      $("body").removeClass('scroll-book-now');
  }
});

$(window).resize(function() {
  $booknowheight = $(window).height()+550;
  $booknowhp = $(window).height()-20;
  $(window).scroll(function() {
     if($(window).scrollTop() + $booknowheight > $(document).height()) {
        $("body").addClass('scroll-book-now');
     }
    else {
        $("body").removeClass('scroll-book-now');
    }
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
$(window).load(function() {

  $('.field-name-field-plan-box > .field-items > .field-item').each(function(){
    ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", 0);
    $imghight = $(".field-name-field-plan-box .field-name-field-image").innerHeight();
    $contenthight = (($(this).children().children().children(".content")).height());
    $paddinghight = ($imghight-$contenthight)/2;
    if ($paddinghight < 0){$paddinghight = 0};
    ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", $paddinghight);
    ($(this).children().children().children().children(".field-name-field-image")).css("min-height", $contenthight+$paddinghight);
  });

  $(window).resize(function() {
    $('.field-name-field-plan-box > .field-items > .field-item').each(function(){
      ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", 0);
      $imghight = $(".field-name-field-plan-box .field-name-field-image").innerHeight();
      $contenthight = (($(this).children().children().children(".content")).height());
      $paddinghight = ($imghight-$contenthight)/2;
      if ($paddinghight < 0){$paddinghight = 0};
    ($(this).children().children().children().children(".field-name-field-image")).css("min-height", $contenthight+$paddinghight);
    });
  });

})
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

  $(window).load(function() {

    $('.field-name-field-meal > .field-items > .field-item').each(function(){
      ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", 0);
      $imghight = (($(this).children().children().children().children(".field-name-field-image")).height());
      $contenthight = (($(this).children().children().children(".content")).height());
      $paddinghight = ($imghight-$contenthight)/2;
      if ($paddinghight < 0){$paddinghight = 0};
      ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", $paddinghight);
      ($(this).children().children().children().children(".field-name-field-image")).css("min-height", $contenthight+$paddinghight);
    });

    $(window).resize(function() {
      $('.field-name-field-meal > .field-items > .field-item').each(function(){
        ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", 0);
        $imghight = (($(this).children().children().children().children(".field-name-field-image")).height());
        $contenthight = (($(this).children().children().children(".content")).height());
        $paddinghight = ($imghight-$contenthight)/2;
        if ($paddinghight < 0){$paddinghight = 0};
        ($(this).children().children().children().children().children(".field-name-field-title-for-block")).css("padding-top", $paddinghight);
        ($(this).children().children().children().children(".field-name-field-image")).css("min-height", $contenthight+$paddinghight);
      });
    });

  });
}
/*  $(window).load(function(){
    $('#splash').fadeOut();
  });
*/
/**********  galleria  *********/


  $galleryheight=$(".galleria-stage img").height();
  //alert($galleryheight);
  $(".galleria-container").css("height", $galleryheight);
  
/*********  messages  *************/

setTimeout(function(){
    document.getElementById('block-mailchimp-signup-signup-for-newsletter').className = 'hide-message';
}, 10000);  

$("#main-menu li a").on("touchend", function(event) {
  window.location.href = $(this).attr("href");
});


  }
};


})(jQuery, Drupal, this, this.document);
