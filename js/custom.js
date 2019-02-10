
$(document).ready(function() {


	// $('').slick({
	//   dots: true,
	//   infinite: true,
	//   speed: 300,
	//   slidesToShow: 1,
	//   centerMode: true,
	//   variableWidth: true
	// });

$('.testimonialSlider').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
    

});
    
	

// $(window).scroll(function(){
//   if ($(window).scrollTop() >= 330) {
//     $('.sticky-header').addClass('fixed');
//    }
//    else {
//     $('.sticky-header').removeClass('fixed');
//    }
// });