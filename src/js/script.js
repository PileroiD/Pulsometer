$(document).ready(function(){
  $('.carousel__inner').slick({
      // adaptiveHeight: true,
      prevArrow:
      `<button type="button" class="slick-prev">
            <img src="icons/left_arrow.png" alt="prev">
      </button>`,
      nextArrow:
      `<button type="button" class="slick-next">
            <img src="icons/right_arrow.png" alt="prev">
      </button>`,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});
