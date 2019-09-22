$( document ).ready(function() {

  setMenuLinksUnderline();
  ourClientsCarousel();
  ServicesItemAnim();
  servicesRange();
  // openOurCaseCarouselItem();
  ourCaseCarousel();

  /**
   * set menu links underline
   * on scroll
  */
  function setMenuLinksUnderline(){
    const $sections = $('section[id]');
    let $currentSection;
    $(window).scroll(function(){
      const currentScroll = $(this).scrollTop();
      // var $currentSection;
      $sections.each(function(){
        const divPosition = $(this).offset().top;
        if( divPosition - 1 < currentScroll ){
          $currentSection = $(this);
        }
        const id = $currentSection.attr('id');
        $('nav .nav li a').removeClass('nav-link-active');
        $('a[href$='+id+']').addClass('nav-link-active');
      })
    });
  }

  /**
   * our clients carousel
   * slick slider
  */  
  function ourClientsCarousel(){
    $('.our-clients-carousel').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 6000,
      useCSS: false,
      swipeToSlide: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          }
        } 
      ]
    });
  };

  /**
   * services item hover rotation,
   * stop services item rotation when srvice is checked
  */
  function ServicesItemAnim(){
    const servicesItem = $('.services-item');

    servicesItem.mouseenter(function(){
      this.querySelector('.card').style.transform = 'rotateY(180deg)';
      this.style.transition = '.3s';
      this.style.borderBottom = '8px solid #337ab7';
    });

    servicesItem.mouseleave(function(){
      this.querySelector('.card').style.transform = 'rotateY(0)';
      this.style.transition = '.3s';
      this.style.borderBottomWidth = '0';
      const checkboxes = this.getElementsByTagName('input');

      for(let i = 0; i < checkboxes.length; i ++){
        if(checkboxes[i].checked === true){
          this.querySelector('.card').style.transform = 'rotateY(180deg)';
          this.style.borderBottom = '8px solid #337ab7';
          break;
        } else {
          this.querySelector('.card').style.transform = 'rotateY(0)';
          this.style.transition = '.3s';
          this.style.borderBottomWidth = '0';
        }
      }
    });
  };

  /**
   * services input range
   * JQuery UI
  */
  function servicesRange(){
    /* budget */
    $("#slider-range-min-budget").slider({
      range: "min",
      value : 1000,
      min : 100,
      max : 100000,
      step : 100,
      slide: function( event, ui ) {
        $( "#budget" ).val( "$ " + ui.value );
      }
    });
    $( "#budget" ).val( "$ " + $( "#slider-range-min-budget" ).slider( "value" ) );

    /* deatline */
    $( function() {
      $( "#slider-range-min-deatline" ).slider({
        range: "min",
        value : 1,
        min : 0,
        max : 24,
        step : 1,
        slide: function( event, ui ) {
          $( "#deatline" ).val( ui.value + (ui.value > 1 ? " Months" : " Month") );
        }
      });
      $( "#deatline" ).val( $( "#slider-range-min-deatline" ).slider( "value" ) + " Month" );
    } );
  };

  /**
   * open and close
   * our case carousel item
  */  
  function openOurCaseCarouselItem(){
    const item = document.querySelector('.our-case-carousel .item');
    $('.our-case-carousel .item').on('click', function(){
      console.log( $(this) );
      $(this).toggleClass('open-our-case-item');
    })
  };

  /**
   * our case carousel
   * slick slider
  */  
  function ourCaseCarousel(){
    $('.our-case-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      nextArrow:"<button class='slick-next '><i class='fas fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          }
        } 
      ]
    });
  };
  
});

