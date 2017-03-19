const mobileSlider = document.querySelector('.mobile-slider');
const bannerSlider = document.querySelector('.banner-slider');

      function slider() {

    if (bannerSlider.classList.contains('slick-initialized')) {} else {
        $('.banner-slider').slick({
            centerMode: true,
            slidesToShow: 1,
            fade: true,
            zIndex: 1,
            dots: true
        });
    }
    if (window.innerWidth <= 768) {
        if (mobileSlider.classList.contains('slick-initialized')) {

        } else {
            $('.mobile-slider').slick({
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1,
                arrows: false,
                variableWidth: true,
                infinite: false,
                swipeToSlide: true
            });
        }
    } else if ((window.innerWidth > 768) && mobileSlider.classList.contains('slick-initialized')) {
        $('.mobile-slider').slick('unslick');
    }
}
$(document).ready(function() {
    window.addEventListener('resize', slider);
    slider();
});
