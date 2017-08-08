var Makerability = Makerability || {};

Makerability.Faq = (function(){
  var $faqQuestion;

  $faqQuestion = $(".Faq-question");

  var show = function(){
    $faqQuestion.click(function(){
      ga('send', 'event', 'Engagement', 'See faq', this.innerText, '1');
      $(".Faq-answer").hide();
      $(this).next().show();
    })
  }

  show();

})();
