jQuery(document).ready(function($) {

});
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function mobileNav() {
    var $body = document.body;
    var $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

    $('.mobile-menu-unit').click(function(){
      $body.className = document.body.className.replace("menu-active","");
    });

    if ( typeof $menu_trigger !== 'undefined' ) {
        $menu_trigger.addEventListener('click', function() {
            $body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
        });
    } 
});


$(function StickyNav(){
  var top = $('#navbar-belt').offset().top+2;

  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#navbar-belt').addClass('fixed');
      $('.menu-trigger').css('top','25px');
      $('.main-menu li a').css('line-height','80px')
    } else {
      // otherwise remove it
      $('#navbar-belt').removeClass('fixed');
      $('.menu-trigger').css('top','30px');
      $('.main-menu li a').css('line-height','100px')
    }
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('.owl-iphone').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    center:true,
    margin:40,
    lazyLoad: true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:3
        },
        1400:{
            items:5
        }
    }
})

$('.owl-testimonials').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:20,
    items:1,
    lazyLoad: true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50
        },
        700:{
            items:1,
            stagePadding: 120
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 220
        },
        1400:{
            items:1,
            stagePadding: 220
        }
    }
})



$(function chooseOption(){
    $(".choose-option").first().addClass('active');
    $(".plan-choose").first().addClass('active');

    $(".choose-option").click(function(e){
        e.preventDefault();
        var $this = $(this);

        $this.addClass('active');
        $this.siblings().removeClass('active');

        if ($this.hasClass('choose-option-2')){
            $('.choose-border').addClass('changed');
            $('.plan-1').removeClass('active');
            $('.plan-2').addClass('active');

        } else {
            $('.choose-border').removeClass('changed');
            $('.plan-2').removeClass('active');
            $('.plan-1').addClass('active');
        };
    });
});

$(function plansHover(){

    $(".plan-option").hover(function(){
       
        var $this = $(this);

        $this.addClass('plan-active');
        $this.siblings().removeClass('plan-active');

    });
});

