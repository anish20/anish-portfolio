// Navbar
$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        
      });
      
      $('.materialboxed').materialbox();

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
      
      $('.tooltipped').tooltip();

      $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });

    $().UItoTop({ easingType: 'easeOutQuart' });
   

  });

  