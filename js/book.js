$(function() {




  function init() {

setTimeout(function(){

  $(".loadingpage").fadeOut(600)

  }, 5000);



clicks=0;
animationlistleftbox=["greenbackgroundzoom.gif","waterfinal.gif","lines.gif","coralflicker.gif"]
    // Toggle bg colour on and off
    $('.leftbox-top').on('click', function (e) {
      e.preventDefault();
    //  $('.leftbox-top').toggleClass('leftbox-top-still leftbox-top-gif');
    $('.leftbox-top').css('background-image',"url(assets/"+animationlistleftbox[clicks]+")");

      clicks = clicks+1;
      console.log(animationlistleftbox[clicks]);

      if(clicks>animationlistleftbox.length-1){
        clicks=0
      }



    })//end of left box click function




clicks2=0;
animationlistrightbox=["greenbackgroundzoom.gif","waterfinal.gif","lines.gif","coralflicker.gif"]
    // Toggle bg colour on and off
    $('.rightbox').on('click', function (e) {
      e.preventDefault();
    //  $('.leftbox-top').toggleClass('leftbox-top-still leftbox-top-gif');
    $('.rightbox').css('background-image',"url(assets/"+animationlistrightbox[clicks2]+")");

      clicks2 = clicks2+1;
      console.log(animationlistrightbox[clicks2]);

      if(clicks2>animationlistrightbox.length-1){
        clicks2=0
      }



      })//end of right box click function

      clicks3=0;
      animationlistrightbox=["greenbackgroundzoom.gif","waterfinal.gif","lines.gif","coralflicker.gif"]
          // Toggle bg colour on and off
          $('.leftbox-bottom').on('click', function (e) {
            e.preventDefault();
          //  $('.leftbox-top').toggleClass('leftbox-top-still leftbox-top-gif');
          $('.leftbox-bottom').css('background-image',"url(assets/"+animationlistrightbox[clicks3]+")");

            clicks3 = clicks3+1;
            console.log(animationlistleftbox[clicks3]);

            if(clicks3>animationlistleftbox.length-1){
              clicks3=0
            }



            })//end of right box click function



      clicks4=0;

          // Toggle bg colour on and off
          $('body').on('click', function (e) {
            e.preventDefault();

            console.log(clicks4);

            if(clicks4===15){

              $(".loadingpage").css('background-image',"url(assets/gifunlooped.gif)");

              $(".loadingpage").css('background-color',"transparent");

              $(".loadingpage").html('<div class="insta">MY TAG</div>');

              $(".loadingpage").fadeIn();

              setTimeout(function(){

                $(".insta").fadeIn(300)

              }, 2000);

            }

            clicks4 = clicks4+1;





            })//


  }//End of init function
  init();

});

