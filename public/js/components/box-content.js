var Makerability = Makerability || {};

Makerability.BoxContent = (function() {

  var $boxContent, $boxContentText, $boxContentImages, boxContent, boxContentText, boxContentOverflow;

  $main = $(".Main");
  $boxContent = $(".BoxContent");
  $boxContentText = $(".BoxContent-text");
  $boxContentImages = $(".BoxContent-images");

  boxContentOverflow = {
    fixed: function(){
      setTimeout(function(){
        TweenLite.fromTo($main, 1.6, {"display": "block", "opacity": 0}, {"opacity": 1});
      }, 400)
      $boxContent.css({
        "position": "fixed",
        "height": "100%",
      });
    },
    scroll: function(){
      $boxContent.css({
        "position": "inherit",
        "height": "auto",
        "min-height": "800px"
      });
      $main.hide();
    }
  }

  boxContent = {
    isHide: {
      height: "40%",
      left: "30%",
      top: "30%",
      width: "40%",
      opacity: 0.2,
      display: "none"
    },
    isShow: {
      height: "100%",
      width: "100%",
      opacity: 1,
      left: 0,
      top: 0,
      display: "block"
    }
  };

  boxContentText = {
    isHide: {
      left: "-=35px",
      opacity: 0,
      display: "none",
      delay: 0,
      onStart: boxContentOverflow.fixed
    },
    isShow: {
      display: "block",
      left: "+=35px",
      opacity: 1,
      delay: 0.6,
      onComplete: boxContentOverflow.scroll
    }
  };

  function boxContainerSize(){
    $boxContentImages.height(window.innerHeight);
    $(window).on("resize", function(){
      $boxContentImages.height(window.innerHeight);
    });
  };

  function closeBoxContainer(){
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        Makerability.BoxContent.hide();
      }
    };
  }



  return {
    initialize: (function(){
      boxContainerSize();
      closeBoxContainer();
    })(),

    show: function() {
      TweenLite.fromTo($boxContent, 0.4, boxContent.isHide, boxContent.isShow);
      TweenLite.fromTo($boxContentText, 0.2, boxContentText.isHide, boxContentText.isShow);
    },

    hide: function() {
      TweenLite.fromTo($boxContent, 0.4, boxContent.isShow, boxContent.isHide);
      TweenLite.fromTo($boxContentText, 0.1, boxContentText.isShow, boxContentText.isHide);
    }
  };

})();
