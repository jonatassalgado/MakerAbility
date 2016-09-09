var Makerability = Makerability || {};

Makerability.Faq = (function(){
  var $faqQuestion;

  $faqQuestion = $(".Faq-question");

  var show = function(){
    $faqQuestion.click(function(){
      $(".Faq-answer").hide();
      $(this).next().show();
    })
  }

  show();

})();
