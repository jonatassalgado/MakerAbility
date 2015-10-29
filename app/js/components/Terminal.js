var Makerability = Makerability || {};

Makerability.Terminal = (function(){

    var $terminal = $(".Terminal");
    var $terminalClosed = $(".Terminal.isClose");


    var show = function(){
        TweenLite.to($terminalClosed, 0.4, {"opacity": 1});
    };

    var hide = function(){
        TweenLite.to($terminal, 0.2, {"opacity": 0});
    };

    var minimize = function(){
        TweenLite.to($terminal, 0.4, {"width": "5%", "height": "5%", "left": "0"});
    };

    var maximize = function(){
        slideUp();
    };

    var slideUp = function(){
        TweenLite.to($terminalClosed, 0.4, {"width": "52%", "height": "52%", "left": "0"});
        $terminalClosed.removeClass(".isClose");
    };

    var slideDown = function(){
        $terminal.css({"width": "5%", "height": "5%", "left": "22.5%"});
        $terminal.addClass(".isClose");
    };

    var buttonClose = (function(){
        $(".Terminal-button--close").click(function(){
            Makerability.Terminal.close();
        })
    })();

    var buttonMinimize = (function(){
        $(".Terminal-button--minimize").click(function(){
            minimize();
        })
    })();

    var buttonMaximize = (function(){
        $(".Terminal-button--maximize").click(function(){
            maximize();
        })
    })();

    return{

        open: function(){
            show();
            slideUp();
        },

        close: function(){
            hide();
            setTimeout(slideDown, 250)
        }
    }

})();
