$(function(){
  
  var slideCount =  $(".js-slideshow-cta").find(".js-slide").length;
  console.log(slideCount);
  var index = 1;
  setInterval(function(){ 
    $(".js-slideshow-cta").find(".js-slide.show").removeClass("show");
    $(".js-slideshow-cta").find(".js-slide").eq(index).addClass("show");
    if (index == slideCount -1)
      index = 0;
    else 
      index++;

  }, 3500);
    $(document).on("click", ".js-viewShipping", function(){
     $(".js-Shippingpayment").click();
  });
  $(document).on("click", ".js-Shippingpayment", function(){
       $([document.documentElement, document.body]).animate({
        scrollTop: $(".js-Shippingpayment").offset().top - $(".header").outerHeight()
    }, 500);
  });
});