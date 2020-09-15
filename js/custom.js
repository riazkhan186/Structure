(function ($)
{
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
          $(".topbar").addClass("sticky");
        }
        else{
          $(".topbar").removeClass("sticky");
        }
      });
    //animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
});

  // counter up
  
  jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
 });

// search animation
$('.fa-search').click(function(){
    $('.search-icon').toggleClass('active');
    $('input[type=text]').toggleClass('active');
    $('.menu').toggle();
})

// slider
$(document).ready(function(){
    $('.slider-area').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      nav: true,
      navText:[ '<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>']
     
    });
  });

//   venobox for video
$(document).ready(function(){
    $('.venobox').venobox(); 
  });

   // gallary 
   $('li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
  
  // init Isotope
  $(document).ready(function(){
  var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.portfolio-filter').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue })
    });
  });

  // slider
$(document).ready(function(){
  $('.team-slide-content').owlCarousel({
    items: 3,
    // loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dotsEach:true,
    margin:30,
    
    responsive:{
        0:{
            items:1,
        },
        576:{
          items:1,
        },
        768:{
          items:2,
        },
        992:{
            items:3,
            
        },  
        
      }
  });
});
// lightSlider
$(document).ready(function(){
  $('#vertical').lightSlider({
    item: 1,
    loop: true,
    easing: 'inOut',
    vertical:true,
    verticalHeight:280,
    adaptiveHeight:true,
    prevHtml: '<i class="fas fa-arrow-up"></i>',
    nextHtml: '<i class="fas fa-arrow-down"></i>',
    speed: 400, //ms'
    auto: true,
    pauseOnHover: true,
    slideEndAnimation: true,

  });
});

    

})(jQuery)
