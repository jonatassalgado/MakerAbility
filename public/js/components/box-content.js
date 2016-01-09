var Makerability = Makerability || {};

Makerability.BoxContent = (function() {

  var $boxContent, $boxContentText, $boxContentImages, boxContent, boxContentText; 
  
  $boxContent = $(".BoxContent");
  $boxContentText = $(".BoxContent-text");
  $boxContentImages = $(".BoxContent-images");
  
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
      delay: 0
    },
    isShow: {
      display: "block", 
      left: "+=35px",
      opacity: 1, 
      delay: 0.6
    }
  };
  
  var boxContainerSize = function(){
    $boxContentImages.height(window.innerHeight);
    $(window).on("resize", function(){
      $boxContentImages.height(window.innerHeight);
    });
  };

  return {
    initialize: (function(){
      boxContainerSize();
    })(),
    
    show: function() {
      TweenLite.fromTo($boxContent, 0.4, boxContent.isHide, boxContent.isShow);
      TweenLite.fromTo($boxContentText, 0.2, boxContentText.isHide, boxContentText.isShow);
      $(".BoxContent-images").Chocolat({
        container: ".BoxContent-images", 
        imageSize: "cover",
        backgroundClose: false,
        initialZoomState: true,
        images: [{src: "../images/empreendedores.jpg"}]
      });
    },
    
    hide: function() {
      TweenLite.fromTo($boxContent, 0.4, boxContent.isShow, boxContent.isHide);
      TweenLite.fromTo($boxContentText, 0.1, boxContentText.isShow, boxContentText.isHide);
    }
  };

})();