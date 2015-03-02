var Makerability = Makerability || {};

Makerability.BlueOcean = (function(){

    var timer;

    var animatePolyline = function(selector){
        if(selector == "purple"){
            TweenLite.to("#e7_polyline", 0.6, {"stroke-opacity": 0.25, stroke: "#DFDBDE", "stroke-width": "4px"});
            TweenLite.to("#e8_polyline", 0.6, {"stroke-opacity": 1, stroke: "#FA3077", "stroke-width": "5.5px"});
            TweenLite.to(".js-purplePolyline", 0.6, {background: "#FA3077"});
            TweenLite.to(".js-greenPolyline", 0.6, {background: "#f0f0f0"});
        }
        else if(selector == "green"){
            TweenLite.to("#e8_polyline", 0.6, {"stroke-opacity": 0.25, stroke: "#DFDBDE", "stroke-width": "4px"});
            TweenLite.to("#e7_polyline", 0.6, {"stroke-opacity": 1, stroke: "#BAC01C", "stroke-width": "5.5px"});
            TweenLite.to(".js-greenPolyline", 0.6, {background: "#BAC01C"});
            TweenLite.to(".js-purplePolyline", 0.6, {background: "#f0f0f0"});
        }
    };

    var resetAnimatePolyline = function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
                TweenLite.to("#e8_polyline", 0.4, {"stroke-opacity": 1, stroke: "#FA3077", "stroke-width": "4px"});
                TweenLite.to("#e7_polyline", 0.4, {"stroke-opacity": 1, stroke: "#BAC01C", "stroke-width": "4px"});
                TweenLite.to([".js-greenPolyline", ".js-purplePolyline"], 0.6, {background: "#f0f0f0"});
                }, 3500);
    };

    return{
        hoverPolyline: (function(){
            $(".js-greenPolyline").hover(function(){
                animatePolyline("green");
            });

            $(".js-purplePolyline").hover(function(){
                animatePolyline("purple");
            });
        })(),

        resetHoverPolyline: (function(){
            $(".js-SheetLeftAnimation").mouseout(function(){
                resetAnimatePolyline();
            })
        })()
    }

})();