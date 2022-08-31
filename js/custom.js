$('.banneSlider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
      console.log(slider);  
      // console.log(slider.slideCount);
      console.log(i + 1);
      return  '<span>' + '0' + (i + 1)+'</span>' + '/' +'<span>'+ '0'+slider.slideCount +'</span>';
  }
  });



  $(document).on("mousemove", function(event){

    var $mouseX = event.pageX,
        $mouseY = event.pageY;
    
    $('.plus-icon').css("margin-top", - ($mouseY * 0.1) + 'px');
    $('.plus-icon').css("margin-left", - ($mouseX * 0.1) + 'px');
    
  });


    $('.clickme').click(function(){
      $('.clickme').removeClass("show")
      $(this).addClass("show")
      $('.tabs-content').hide()
      $('.list' + $(this).index()).show()
    });

  

$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});


$('.responsive').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 2.4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.menu-btn').click(function(){
  $('.main').toggleClass('active')

});