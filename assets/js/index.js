const portfolioTabData = {
  "Branding":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText":"branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "branding"} 
  ],

  "UI/UX Design":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "UI/UX Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "UI/UX Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "UI/UX Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "UI/UX Design"}    
  ],

  "Graphic Design":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "graphic design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "graphic design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "graphic design"}  
  ],

  "Motion Design":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Motion Design"},  
  ],

  "3D Design":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
    "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "3D Design"},  
  ],

  "Web Development":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Web Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Web Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Web Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Web Development"},  
  ],

  "Mobile Development":[
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio/portfolio.png",
      "tabText": "Mobile Development"},  
  ]
};
$( document ).ready(function() {
  setMenuLinksUnderline();
  openHelpWindow();
  aboutAnim();
  ServicesItemAnim();
  servicesRange();
  renderPortfolioTabs();
  portfolioTabAnim();
  setPortfolioTabModalData(); 

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
   * add about image animation on mousemove
  */
  function aboutAnim(){
    const aboutsection = document.querySelector('#about');
    
    aboutsection.addEventListener('mousemove', (e)=>{
      const mouseX = e.clientX / (window.innerWidth / 5);
      const mouseY = e.clientY / (window.innerHeight / 5);
      const note = document.querySelector('.about-img .note');
      const cube_1 = document.querySelector('.about-img .cube-1');
      const cube_1_shadow = document.querySelector('.about-img .cube-1-shadow');
      const cube_2 = document.querySelector('.about-img .cube-2');
      const cube_2_shadow = document.querySelector('.about-img .cube-2-shadow');
      const cube_3 = document.querySelector('.about-img .cube-3');
      const cube_3_shadow = document.querySelector('.about-img .cube-3-shadow');

      note.style.transform = `translate3d(-${mouseX/3}%, -${mouseY/3}%, 0)`;
      cube_1.style.transform = `translate3d(-${mouseX*3}%, -${mouseY*3}%, 0)`;
      cube_1_shadow.style.transform = `translate3d(${mouseX*2}%, ${mouseY*1}%, 0)`;
      cube_2.style.transform = `translate3d(${mouseX*3}%, ${mouseY*3}%, 0)`;
      cube_2_shadow.style.transform = `translate3d(-${mouseX*3}%, -${mouseY*1}%, 0)`;
      cube_3.style.transform = `translate3d(-${mouseX*4}%, ${mouseY*3}%, 0)`;
      cube_3_shadow.style.transform = `translate3d(${mouseX*2}%, -${mouseY*1}%, 0)`;
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
   * render portfolio tabs data
  */
  function renderPortfolioTabs(){
    const portfoliTabContainer = document.querySelector('.portfolio-tab-container');
    // const portfolioTabs = document.querySelector('#portfolio-tabs');
    // const ul = document.createElement('ul');

    /* create portfolio items */
    // Object.keys(portfolioTabData).map( (elem, index)=>{
    //   ul.innerHTML += `<li><a rel = #tab-${index+1}> ${ elem } </a></li>`;
    // 	portfolioTabs.appendChild(ul);
    // } );

    /* create portfolio tab content */
    Object.keys(portfolioTabData).map( (elem, index)=>{
      portfoliTabContainer.innerHTML += `<div id=tab-${index+1} class = portfolio-tab-content>
      ${
        /* create portfolio list item */
        portfolioTabData[elem].map( (elem)=>{
          return `<div class = list-item data-toggle="modal" data-target="#portfolio-modal">
            <img src=${elem.tabImage}>
            <span>${elem.tabText}</span>
          </div>`;
        } )
      }
      </div>`
    } ); 
    /* remove  */
    const listIem = document.querySelectorAll('.list-item');
    for(let i = 0; i < listIem.length; i ++){
      listIem[i].nextSibling.remove();
    }
  };

  /**
   * set portfolio tabs modal data
   * from tab list item
  */
  function setPortfolioTabModalData(){
    const portfolioModal = $('#portfolio-modal');
    const listItem = $('.portfolio-tab-container .list-item');

    $('.portfolio-tab-container .list-item').on("click", function(){
      $('#portfolio-modal .modal-title').text( $(this).find('span').html() );
      $('#portfolio-modal .modal-body img').attr( 'src', $(this).find('img').attr('src') );
    });
  };

  /**
   * portfolio tabs animation
  */  
  function portfolioTabAnim (){
    $('.portfolio-tab-content').hide();
    $('.portfolio-tab-content:first').show();
    $('.portfolio-items a:first').addClass('portfolio-item-active');

    $(".portfolio-items a").on("click", function(){
      $(".portfolio-items a").removeClass("portfolio-item-active");
      $(this).addClass("portfolio-item-active");
      $('.portfolio-tab-content').hide();

      const selectTab = $(this).attr("rel");
      $(selectTab).fadeIn();
    });
  };

});




  

