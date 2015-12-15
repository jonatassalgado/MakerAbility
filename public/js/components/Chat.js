var Makerability = Makerability || {};

Makerability.Chat = (function(){
  

  return {
    initialize: (function(){

    })(),
    animate: (function(){
      var executed = false;
      
      return function(){
        if(!executed){
          var openChat, delayBetweenEach, writingText, animateMessage, $chatMessage, $chatWriting;
          
          $chatMessage = $(".Chat-message");
          $chatWriting = $(".Chat-writing");
          delayBetweenEach = 1500;
          executed = true;
          
          writingText = {
            show: function(){
              $chatWriting.css("display", "block");
            },
            hide: function(){
              $chatWriting.css("display", "none");
            }
          };
          
          animateMessage = function(message){
            TweenLite.to(message, 0.2, {"display": "block", "opacity": 1, "font-size": "14px", "delay": 2, onStart: writingText.hide});
          };
          
          openChat = function(){
            $(".Chat").addClass("is-open");
          };
          
          openChat();
          
          setTimeout(function(){
            $.each($($chatMessage), function(i, item) {
              setTimeout(function() {
                writingText.show();
                animateMessage(item);
              }, delayBetweenEach * i);
            });
          }, 0);
          
        }
      };
    })()
  };

    
})();