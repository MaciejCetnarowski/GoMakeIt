const fitCardsSlider = document.querySelector('.cards-container');

      function slider() {
    if (window.innerWidth <= 768) {
        if (fitCardsSlider.classList.contains('slick-initialized')) {

        } else {
            $('.cards-container').slick({
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1,
                arrows: false,
                variableWidth: true,
                infinite: false,
                swipeToSlide: true
            });
        }
    } else if ((window.innerWidth > 768) && fitCardsSlider.classList.contains('slick-initialized')) {
        $('.cards-container').slick('unslick');
    }
}
$(document).ready(function() {
    window.addEventListener('resize', slider);
});
slider();
