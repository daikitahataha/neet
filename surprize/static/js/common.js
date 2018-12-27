
  jQuery(function($){

    $('#MenuBtn').on("click", function(){
      $(this).toggleClass("active");
      $(".sp_header_nav").slideToggle();
    });

    $(".sp_header_nav .header_nav_link").on("click", function(){
      $("#MenuBtn").removeClass("active");
      $(".sp_header_nav").slideUp();
    });
  
    $('.slide01').slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 100,
      accessibility: false
    });

    $('.slide02').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 100,
      accessibility: false,
      rtl: true
    });

    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
  });
