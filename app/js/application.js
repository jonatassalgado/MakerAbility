var Makerability = Makerability || {};

Makerability.Application = (function(){

  var brandSmallSize = "7.5em";
  var brandNormalSize = "10em";
  var lazyMargin = 250;

  

  var firstScreenAnimations = function(){
    $(window).on("scroll", function(){
      var scrollTop = $(this).scrollTop();
      // $(".Home-container").css("margin-top", (scrollTop / 5));
      // TweenLite.to(".Home-container", 0, {"margin-top": scrollTop / 5});
      arrow.hide();
    });

    TweenLite.to(".Arrow", 0.8, {opacity: 1, bottom: 0, delay: 1.65});
  };

  var approachAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var windowHeight = window.innerHeight;
      var isScrollingToDown = amountScrolledAtNow > windowHeight - lazyMargin;
      var $purposeDescription = $(".Purpose-description");

      if (isScrollingToDown) {
        $(".Purpose-container").css({"margin-top":  amountScrolledAtNow - windowHeight, top: "18%"});
        //$(".Purpose-brand").css("font-size", brandSmallSize);
        fadeInUp($purposeDescription, {defaultPosition: 0});
      }
      else{
        $(".Purpose-container").css({"margin-top":  amountScrolledAtNow - windowHeight, top: "25%"});
        //$(".Purpose-brand").css("font-size", brandNormalSize);
      }
    })
  };


  var marketingAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var isScrollingToDown = amountScrolledAtNow > document.querySelector(".MarketingText").offsetTop - document.querySelector(".MarketingText").offsetHeight / 2;
      // var $sheetLeft = document.querySelector(".js-SheetLeftAnimation");
      // var $sheetRight = document.querySelector(".js-SheetRightAnimation");

      if(isScrollingToDown){
        // TweenLite.to($sheetLeft, 0.8, {"bottom": 0, delay: 0.3});
        // TweenLite.to($sheetRight, 0.8, {"bottom": 0});
        animateSVG();
        // sequentialyFadeIn(".BMC .isHide", {delayAll: 4000})
      }
      else{
        // TweenLite.to($sheetLeft, 0.8, {"bottom": "-42%"});
        // TweenLite.to($sheetRight, 0.8, {"bottom": "-70%"});
      }
    })
  };


  var codeAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var windowHeight = window.innerHeight;
      var $sectionOffsetTop = $(".CodeText").offset().top;
      var isScrollingToDown = amountScrolledAtNow > $sectionOffsetTop - lazyMargin;
      var isScrollingToOut = amountScrolledAtNow > $sectionOffsetTop + 15;
      // var $ipad = $(".Ipad");

      if(isScrollingToDown){
        // TweenLite.to($ipad, 0.8, {"bottom": 0, delay: 0.2});
        Makerability.Terminal.open();
        terminalEmulator();
      }
      else if(isScrollingToOut){
        // TweenLite.to($ipad, 0.8, {"bottom": 0})
      }
      else{
        // TweenLite.to($ipad, 0.8, {"bottom": "-65%"})
      }
    })
  };


  var codeServicesAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var $sectionOffsetTop = $(".Code").offset().top;
      var $codeContainer = $(".Code-container");
      var isScrollingToDown = amountScrolledAtNow > $sectionOffsetTop - lazyMargin;

      if(isScrollingToDown){
        fadeInUp($codeContainer, {defaultPosition: "25%"});
        $codeContainer.css("margin-top", (amountScrolledAtNow - $sectionOffsetTop));
      }else{
        $codeContainer.css("margin-top", (amountScrolledAtNow - $sectionOffsetTop));
      }

    })
  };



  var marketingServicesAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var windowHeight = window.innerHeight;
      var isScrollingToDown = amountScrolledAtNow > (windowHeight * 2) - lazyMargin;
      var $marketingContainer = $(".Marketing-container");

      if(isScrollingToDown){
        fadeInUp($marketingContainer, {defaultPosition: "25%"});
        $marketingContainer.css("margin-top", (amountScrolledAtNow - (windowHeight * 2)));
      }else{
        $marketingContainer.css("margin-top", (amountScrolledAtNow - (windowHeight * 2)));
      }

    })
  };


  var designAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var windowHeight = window.innerHeight;
      var $sectionOffsetTop = $(".Design").offset().top;
      var isScrollingToDown = amountScrolledAtNow > $sectionOffsetTop - lazyMargin;
      var isScrollingToOut = amountScrolledAtNow > $sectionOffsetTop + 15;
      var $mailchimp = $(".Design-mailchimp");
      var $mailchimpDrawing = $(".Design-mailchimpDrawing");

      if(isScrollingToDown){
        animateMailChimpSVG();
      }
      else if(isScrollingToOut){
        // TweenLite.to($ipad, 0.8, {"bottom": 0})
      }
      else{
        // TweenLite.to($ipad, 0.8, {"bottom": "-65%"})
      }
    })
  };
  
  var ContactFooterAnimations = function(){
    $(window).on("scroll",function(){
      var amountScrolledAtNow = $(this).scrollTop();
      var windowHeight = window.innerHeight;
      var $sectionOffsetTop = $(".ContactFooter").offset().top;
      var isScrollingToDown = amountScrolledAtNow > $sectionOffsetTop - (windowHeight / 2);
      var isScrollingToOut = amountScrolledAtNow > $sectionOffsetTop + 15;

      if(isScrollingToDown){
        Makerability.Chat.animate();
      }
      else if(isScrollingToOut){
        
      }
      else{
        
      }
    })
  };

  var fadeInUp = function(element, options){
    var duration, delay, defaultPosition;
    if(options !== undefined) {
      duration = options.duration === undefined ? 0.8 : options.duration;
      delay = options.delay === undefined ? 0 : options.delay;
      defaultPosition = options.defaultPosition === undefined ? 0 : options.defaultPosition;
    }
    else{
      duration = 0.8;
      delay = 0.5;
    }
    TweenLite.to(element, duration, {"opacity": 1, "top": defaultPosition, delay: delay})
  };


  var avatarAnimation = (function(){
    var $homeEmail = $(".Home-email");
    var $homeName = $(".Home-name");
    var $homeAvatar = $(".Home-avatar");
    var $homeImage = $(".Home-avatar img");

    $homeAvatar.hover(
      function(){
        $homeEmail.text("john@makerability.com");
        TweenLite.to($homeAvatar, 0.1, {width: "200px"});
        TweenLite.to($homeName, 0.1, {"font-size": "15px"});
        TweenLite.to($homeEmail, 0.1, {"font-size": "12.5px"});
        TweenLite.to($homeImage, 0.1, {width: "50px"});
      },
      function(){
        $homeEmail.text("Business Analyst");
        TweenLite.to($homeAvatar, 0.1, {width: "155px"});
        TweenLite.to($homeName, 0.1, {"font-size": "12px"});
        TweenLite.to($homeEmail, 0.1, {"font-size": "9.5px"});
        TweenLite.to($homeImage, 0.1, {width: "40px"});
      }
    )
  })();

  var terminalEmulator = (function(){
    var executed = false;
    return function(){
      if(!executed){
        executed = true;
        var typewriter = new Typewriter($(".Terminal-screen"));
        typewriter.setCaret("_");
        typewriter.setCaretPeriod(500);
        typewriter.setDelay(30, 5);
        animate(typewriter);
        setTimeout(function(){
          sequentialyFadeIn(".js-blocTofadeIn")
        }
        , 4000);
      }
    };
  })();


  var sequentialyFadeIn = function(selector, options){
    var delay, delayAll, fadeInDelay;

    if(options !== undefined){
      delay = options.delay === undefined ? 200 : options.delay;
      delayAll = options.delayAll === undefined ? 0 : options.delayAll;
      fadeInDelay = options.fadeInDelay === undefined ? 400 : options.fadeInDelay
    }
    else{
      delay = 200;
      delayAll = 0;
      fadeInDelay = 400;
    }

    setTimeout(function(){
      $.each($(selector), function(i, item) {
        setTimeout(function() {
          $(item).fadeIn(fadeInDelay);
        }, delay * i);
      })
    }, delayAll);

  };


  var fadeToggleOnScroll = function(selector, options){
    var outAnimation, paddingOpacity, $elementInnerHeight, $elementStyleTop, $sectionPositionTop, isScrollingToDown;

    $elementInnerHeight = $(selector).parents("section").height();
    $elementStyleTop = document.querySelector(selector).style.top.replace("%", "");
    $sectionPositionTop = $(selector).parents("section").position().top;

    if(options !== undefined){
      outAnimation = options.outAnimation === undefined ? false : options.outAnimation;
      paddingOpacity = options.paddingOpacity === undefined ? 180 : options.paddingOpacity
    }

    $(window).on("scroll",function(){
      var scrolled, opacityAnimate, positionAnimate, scaleAnimate;
      scrolled = $(window).scrollTop();
      opacityAnimate = (0 + (scrolled - paddingOpacity) / $elementInnerHeight * 2);
      positionAnimate = 0 - ((scrolled - $sectionPositionTop) / 50) + "%";
      scaleAnimate = calculateScale()

      TweenLite.to(selector, 0, {opacity: opacityAnimate, top: positionAnimate, scale: scaleAnimate});

      function calculateScale(){
        if ((0.8 + (scrolled - paddingOpacity) / $elementInnerHeight) <= 0.8){
          return 0.8
        }else if((0.8 + (scrolled - paddingOpacity) / $elementInnerHeight) <= 1){
          return (0.8 + (scrolled - paddingOpacity) / $elementInnerHeight)
        }else if (0.8 + (scrolled - paddingOpacity) / $elementInnerHeight > 1){
          return 1;
        };
      }

    });

  };


  var arrow = {
    show: function() {
      $(".Arrow").show()
    },
    hide: function(){
      $(".Arrow").hide()
    }
  };


  var animateSVG = (function(){
    var executed = false;

    return function(){
      if(!executed){
        executed = true;

        var svg = new Walkway({
          selector: '#Blueocean',
          duration: '3600'
        });

        sequentialyFadeIn(".js-sequentialyFadeIn", {delay: 2500});
        $("#Blueocean").show();
        svg.draw();
      }
    }
  })();

  var animateMailChimpSVG = (function(){
    var executed, coloring, rotate, $mailchimp, $mailchimpDrawing;
    executed = false;
    $mailchimp = $(".Design-mailchimp");
    $mailchimpDrawing = $(".Design-mailchimpDrawing");

    rotate = function(){
      $($mailchimpDrawing).css({"border": "1px dashed #333"});
      TweenLite.to($mailchimpDrawing, 0.5, {"transform": "0deg", delay: 1.5, onComplete: coloring});
    }

    coloring = function(){
      setTimeout(function(){
        TweenLite.to($mailchimp, 1.5, {"opacity": 1});
        TweenLite.to($mailchimpDrawing, 1.5, {"opacity": 0});
      }, 1000)
    }

    return function(){
      if(!executed){
        executed = true;

        var svg = new Walkway({
          selector: '#svg10474',
          duration: '3600'
        });
        $mailchimpDrawing.show();
        svg.draw(rotate);
      }
    }
  })();

  var servicesAnimation = function () {
    $(".Service").mouseenter(function(){
        $(".Service").css({opacity: 0.25});

        $(this).css({opacity: 1}).addClass("isActive");
        $(".js-SidebarSlide").addClass("is-open");
        $(".SidebarSlide-title").html("").html($(this).find(".Service-textTitle").html())
        $(".SidebarSlide-content").html("").html($(this).find(".Service-content").html())
    });
    $(".Service").mouseleave(function(){
       $(this).removeClass("isActive");
        $(".Service").css({opacity: 1});
    });

    $(".SidebarSlide").mouseleave(function(){
        $(".js-SidebarSlide").removeClass("is-open");
      }
    )
  };

  var TextRotator = function() {
    $("#js-rotating").show();
  
    $("#js-rotating").Morphext({
      animation: "fadeInDown",
      separator: ",",
      speed: 12000,
      complete: function() {
        
      }
    });
  
  }

  return {
    initialize: (function () {
      TextRotator();
      firstScreenAnimations();
      // approachAnimations();
      marketingAnimations();
      // marketingServicesAnimations();
      codeAnimations();
      // codeServicesAnimations();
      designAnimations();
      ContactFooterAnimations();

      // fullPagePlugin();
      // servicesAnimation();
      // sequentialyFadeIn('.HomePostIt', {
      //   delayAll: 1000,
      //   delay: 200,
      //   fadeInDelay: 1800
      // })

      // fadeInUp($(".Home-container"), {delay: 0.2, defaultPosition: "20%"});
      // fadeToggleOnScroll(".Ipad");
      // fadeToggleOnScroll(".Terminal");
      // fadeToggleOnScroll(".Purpose-container");
      // fadeToggleOnScroll(".Marketing-container");
      // fadeToggleOnScroll(".MarketingText-container");
    })()
  }

})();
