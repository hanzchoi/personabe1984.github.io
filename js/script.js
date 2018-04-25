$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Front-End Web Developer", "Passionate Learner", "Foodie"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  $('.chart').easyPieChart({
            //your options goes here

  });
  
});
