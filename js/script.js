$(function() {
  $('.menu__burger').on('click', function() {
    $('.header__menu-list').toggleClass('active');
    $('.menu__burger').toggleClass('active');
  });

  $('.auto__inner .auto__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
    responsive: [{
      breakpoint: 1121,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });

  $('.auto__inner .auto__dots').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.auto__inner .auto__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
  });
})