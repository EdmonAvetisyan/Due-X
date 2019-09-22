$( document ).ready(function() {
  
  setMenuLinksUnderline()
  fixMenuTop();
  openHelpWindow();
  brandsCarousel();

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
   * fix menu top
   * on scroll
  */
  function fixMenuTop(){
    const menu = document.querySelector("nav.navbar");
    const sticky = menu.offsetTop;
    
    window.onscroll = ()=> {
      if (window.pageYOffset >= sticky) {
        menu.classList.add("menu-fix-top")
      } else {
        menu.classList.remove("menu-fix-top");
      }
    };
  }
  
  /**
   * set help window display
  */  
  function openHelpWindow(){
    document.body.addEventListener('click', function(e){
      const helpWindow = document.querySelector('.help-window');
      const elemClassName = e.target.getAttribute('class');
      const elemParentClassName = e.target.parentNode.getAttribute('class');
      const elParents = e.target.parentNode.parentNode.parentNode;
      
      if(elParents.getAttribute('id') === 'help'){
        e.preventDefault();
        helpWindow.style.display = 'block';
      } else if(elemClassName !== 'help-window' && elemParentClassName !== 'help-window'){
        helpWindow.style.display = 'none';
      }
    });
  };

  /**
   * business and startup brands carousel
   * slick slider
  */  
  function brandsCarousel(){
    $('.brands-items-carousel').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000000,
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

});




  

