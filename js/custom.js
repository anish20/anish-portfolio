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
   
    $(window).scroll(function (event) {
      var scroll = Math.floor($(window).scrollTop());
      if(scroll >0 && scroll<200){
        $("#profile-role").addClass("animate__animated animate__fadeInRight");
       
      }else{
        $("#profile-role").removeClass("animate__animated animate__fadeInRight");
      }
      if(scroll>450 && scroll<540){
       $("#intro-section").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#intro-section").removeClass("animate__animated animate__fadeInRight");
      
      }
      if(scroll>685 && scroll<740){
        $("#careerobjective").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#careerobjective").removeClass("animate__animated animate__fadeInRight");
      }
      if(scroll>875 && scroll<1000){
        $("#skills").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#skills").removeClass("animate__animated animate__fadeInRight");
      }
      if(scroll>1917 && scroll<2000){
        $("#workexperience").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#workexperience").removeClass("animate__animated animate__fadeInRight");
      }
      if(scroll>2140 && scroll<2200){
        $("#jobresponsibility").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#jobresponsibility").removeClass("animate__animated animate__fadeInRight");
      }
      if(scroll>2470 && scroll<2500){
        $("#ourproject").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#ourproject").removeClass("animate__animated animate__fadeInRight");
      }

      if(scroll>2470 && scroll<2500){
        $("#iplink").addClass("animate__animated animate__fadeInRight");
      }else{
        $("#iplink").removeClass("animate__animated animate__fadeInRight");
      }
      console.log(scroll);
  });

  });

  