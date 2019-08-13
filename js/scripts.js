$(function(){
  $(".flashcard").click(function(){
    $(this).children(".definition").toggleClass("show-hide");
  });
});
