var Makerability = Makerability || {};

Makerability.Application = (function(){

  var brandSmallSize = "7.5em";
  var brandNormalSize = "10em";
  var lazyMargin = 250;

  var pageTransitions = function(){
    $(document).ready(function() {
      $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
      });
    });
  }

  var sendEmail = function(){
    $("#sendEmail").submit(function(event){
      event.preventDefault();

      var $navbar = $('.Navbar-input');
      var $navbarButton = $('.Navbar-sendButton');
      var $form = $('#sendEmail');
      var email = $('input[name="email"]').val();

      $navbarButton.text('salvando...');

      $.ajax({
        method: "POST",
        url: "/enviar-email",
        data: { email: email }
      }).done(function(response){
        ga('send', 'event', 'Funnel', 'Leave email', 'At navbar', '1');
        $form.fadeOut(500, function(){
          $navbar.css({ margin: "20px 0" })
                 .text('Recebi seu email, em breve entrarei em contato!')
        });
      })
    })
  }

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
      var $purpose = $(".Purpose");
      var amountScrolledAtNow = $(this).scrollTop();
      var purposeOffsetTop = $purpose.offset().top;
      var isScrollingToDown = amountScrolledAtNow > purposeOffsetTop;

      if (isScrollingToDown) {
        $(".Navbar").removeClass("is-hide");
      }
      else{
        $(".Navbar").addClass("is-hide");
      }
    });
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
    var $facContainer = document.querySelector(".Faq");
    var animated, timer;

    $facContainer.addEventListener("mouseenter", function(){
      if (!animated) {
        timer = window.setTimeout(function(){
          Makerability.Chat.animate();
          ga('send', 'event', 'Engagement', 'See chat', 'Open automatic', '1');
          animated = true;
        }, 6000)
      }
    });

    $facContainer.addEventListener("mouseleave", function(){
      window.clearTimeout(timer);
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

  var servicesAnimation = function(){
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
    });

  };

  var lazyLoad = function(){
    window.onload = function () {
      aload();
    };
  };

  var TextRotator = function() {
    $(".js-rotating").show();

    $(".js-rotating").Morphext({
      animation: "fadeInDown",
      separator: ",",
      speed: 12000,
      complete: function() {

      }
    });
  };


  return {
    initialize: (function () {
      // pageTransitions();
      sendEmail();
      lazyLoad();
      TextRotator();
      firstScreenAnimations();
      approachAnimations();
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
