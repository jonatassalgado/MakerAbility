var Makerability = Makerability || {};

Makerability.Chat = (function(){
  var $chat, $chatAvatar, $chatHeader, $chatMessage, $chatWriting;

  $chat = $(".Chat");
  $chatAvatar = $(".Chat-avatar");
  $chatHeader = $(".Chat-header");
  $chatMessage = $(".Chat-message");
  $chatWriting = $(".Chat-writing");

  var show = function(){
    $chat.addClass("is-show");
    $chatAvatar.addClass("is-show");
  }

  var hide = function(){
    $chat.removeClass("is-show");
    $chatAvatar.removeClass("is-show");
  }

  return {
    initialize: (function(){

    })(),

    animate: (function(){
      var executed = false;

      return function(){
        if(!executed){
          var openChat, delayBetweenEach, writingText, animateMessage;

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

          show();

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
    })(),

    toggle: (function(){
      $chatHeader.click(function(){
        if(($chat).hasClass("is-show")){
          hide();
        }else{
          show();
        }
      })

    })()
  };


})();
