$(function(){
  var height = parseInt(prompt("how tall are you?"));

  if (height > 140){
    $(".ride").show();
    $("div.ride1").show();
    $("div.ride2").show();
    $("div.ride3").show();
    $("div.ride4").show();
    $("li.ride1").addClass("highlight");
    $("li.ride2").addClass("highlight");
    $("li.ride3").addClass("highlight");
    $("li.ride4").addClass("highlight");
  } else if (height > 100) {
    $(".ride").show();
    $("div.ride2").show();
    $("div.ride3").show();
    $("div.ride4").show();
    $("li.ride2").addClass("highlight");
    $("li.ride3").addClass("highlight");
    $("li.ride4").addClass("highlight");
  } else if (75 <= height <= 100 )  {
    $(".ride").show();
    $("div.ride3").show();
    $("div.ride4").show();
    $("li.ride3").addClass("highlight");
    $("li.ride2").addClass("highlight");
  } else if (height < 75) {
    $(".ride").show();
    $("div.ride4").show();
    $("li.ride4").addClass("highlight");
  }
});
