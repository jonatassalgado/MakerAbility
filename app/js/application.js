var Makerability = Makerability || {};

Makerability.Home = (function(){

    var brandExtraSmallSize = "5em";
    var brandSmallSize = "7.5em";
    var brandNormalSize = "10em";
    var lazyMargin = 45;

    var SectionOne = function(){
        $(window).on("scroll", function(){
            var scrollTop = $(this).scrollTop();
            var windowHeight = window.innerHeight;
            $(".Home-container").css("margin-top", (scrollTop));
            //TweenLite.to(".Home-container", 0, {"margin-top": scrollTop})
        })
    };

    var SectionTwo = function(){
        $(window).on("scroll",function(){
            var amountScrolledAtNow = $(this).scrollTop();
            var windowHeight = window.innerHeight;
            var isScrollingToDown = amountScrolledAtNow > windowHeight - lazyMargin;
            var $purposeDescription = $(".Purpose-description");

            if(isScrollingToDown){
                $(".Purpose-container").css({"margin-top":  amountScrolledAtNow - windowHeight, top: "18%"});
                $(".Purpose-brand").css("font-size", brandSmallSize);
                fadeInUp($purposeDescription, {defaultPosition: 0})
                console.log("animateContainerAtPurpose - Especial effect")
            }
            else{
                $(".Purpose-container").css({"margin-top":  amountScrolledAtNow - windowHeight, top: "25%"});
                $(".Purpose-brand").css("font-size", brandNormalSize);
                console.log("animateContainerAtPurpose")
            }
        })
    };


    var SectionThree = function(){
        $(window).on("scroll",function(){
            var amountScrolledAtNow = $(this).scrollTop();
            var windowHeight = window.innerHeight;
            var isScrollingToDown = amountScrolledAtNow > (windowHeight * 2) - lazyMargin;
            var $codeContainer = $(".Code-container");

            if(isScrollingToDown){
                fadeInUp($codeContainer, {defaultPosition: "25%"});
                $codeContainer.css("margin-top", (amountScrolledAtNow - (windowHeight * 2)));
            }else{
                $codeContainer.css("margin-top", (amountScrolledAtNow - (windowHeight * 2)));
            }

            console.log("animateContainerAtCode")
        })
    };


    var SectionFour = function(){
        $(window).on("scroll",function(){
            var scrollTop = $(this).scrollTop();
            var windowHeight = window.innerHeight;
            var isScrollingToDown = scrollTop > (windowHeight * 3) - lazyMargin && scrollTop <= (windowHeight * 3) + 15;
            var isScrollingToOut = scrollTop > (windowHeight * 3) + 15;
            var $ipad = $(".Ipad");

            if(isScrollingToDown){
                $(".CodeText-container").css({"margin-top":  scrollTop - (windowHeight * 3), top: "3%"});
                $(".CodeText-brand").css({"font-size": "4em"});
                $(".CodeText-description").css({"opacity": "1"});
                TweenLite.to($ipad, 0.5, {"opacity": 1, "bottom": 0})
            }
            else if(isScrollingToOut){
                TweenLite.to($ipad, 0.5, {"opacity": 0, "bottom": 0})
            }
            else{
                $(".CodeText-container").css({"margin-top":  scrollTop - (windowHeight * 3), top: "25%"});
                $(".CodeText-brand").css({"font-size": "7.5em"});
                $(".CodeText-description").css({"opacity": 0});
                TweenLite.to($ipad, 0.5, {"bottom": "-65%"})
            }
        })
    };



    var SectionFive = function(){
        $(window).on("scroll",function(){
            var amountScrolledAtNow = $(this).scrollTop();
            var windowHeight = window.innerHeight;
            var isScrollingToDown = amountScrolledAtNow > (windowHeight * 4) - lazyMargin;
            var $marketingContainer = $(".Marketing-container");

            if(isScrollingToDown){
                fadeInUp($marketingContainer, {defaultPosition: "25%"});
                $marketingContainer.css("margin-top", (amountScrolledAtNow - (windowHeight * 4)));
            }else{
                $marketingContainer.css("margin-top", (amountScrolledAtNow - (windowHeight * 4)));
            }

            console.log("animateContainerAtCode")
        })
    };


    var SectionSix = function(){
        $(window).on("scroll",function(){
            var amountScrolledAtNow = $(this).scrollTop();
            var windowHeight = window.innerHeight;
            var isScrollingToDown = amountScrolledAtNow > (windowHeight * 5) - lazyMargin && amountScrolledAtNow <= (windowHeight * 5) + 15;
            var isScrollingToOut = amountScrolledAtNow > (windowHeight * 5) + 15;
            var $sheetLeft = document.querySelector(".js-SheetLeftAnimation");
            var $sheetRight = document.querySelector(".js-SheetRightAnimation");

            if(isScrollingToDown){
                $(".MarketingText-container").css({"margin-top":  amountScrolledAtNow - (windowHeight * 5), top: "3%"});
                $(".MarketingText-brand").css({"font-size": "4em"});
                $(".MarketingText-description").css({"opacity": "1"});
                TweenLite.to($sheetLeft, 0.8, {"bottom": 0, delay: 0.3});
                TweenLite.to($sheetRight, 0.8, {"bottom": 0});
            }
            else if(isScrollingToOut){

            }
            else{
                $(".MarketingText-container").css({"margin-top":  amountScrolledAtNow - (windowHeight * 5), top: "25%"});
                $(".MarketingText-brand").css({"font-size": "7.5em"});
                $(".MarketingText-description").css({"opacity": "0"});
                TweenLite.to($sheetLeft, 0.8, {"bottom": "-60%"});
                TweenLite.to($sheetRight, 0.8, {"bottom": "-70%"});
            }
        })
    };


    var scrollifyPlugin = function(){
        $.scrollify({
            section : "section"
        });

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

    return {
        initialize: (function () {
            SectionOne();
            SectionTwo();
            SectionThree();
            SectionFour();
            SectionFive();
            SectionSix();
            scrollifyPlugin();
            fadeInUp($(".Home-container"), {delay: 0.8, defaultPosition: "25%"});
        })(),

        getOuterHeightFromTop: function(element){
            return $(element).scrollTop();
        }

    }

})();

