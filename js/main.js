$(document).ready(function () {

  // Select
  $('select').niceSelect();

  // Open menu && close
  $('.menu__btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu__btn--open');
    $('.menu__main').fadeToggle(200);
    $('.navbar-toggle').removeClass('active');
    $('.nav, .header__search').fadeOut(200);
    $('.open-search').removeClass('open-search--active');
  });

  $(document).on('click', function(event) {
    if ($(event.target).closest('.menu__btn').length 
      || $(event.target).closest('.menu__main').length ) return;
      $('.menu__btn').removeClass('menu__btn--open')
      $('.menu__main').fadeOut(200);
      event.stopPropagation();
  });

  // Menu back
  $('.menu__back').on('click', function(e) {
    e.preventDefault();
    $('.menu__item').removeClass('menu__item--active');
  })

  // Menu hover add class
  $('.menu__link').hover(
    function () {
      $('.menu__item').removeClass('menu__item--active');
      $(this).parents('.menu__item').addClass('menu__item--active');
    }
  );

  // Menu remove hover class form mob
  $(window).resize(function () {
    if($(window).width() < 768){
      $('.menu__link').on('click', function(e) {
        e.preventDefault();
      });
      $('.menu__item').removeClass('menu__item--active');
    }
  });

  if($(window).width() < 768) {
    $('.menu__link').on('click', function(e) {
      e.preventDefault();
    });
    $('.menu__item').removeClass('menu__item--active');
  }

  // Open nav for mob
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav').fadeToggle(200);
    $('.header__search').fadeOut(200);
    $('.open-search').removeClass('open-search--active');
  });

  // Open search for mob
  $('.open-search').on('click', function() {
    $(this).toggleClass('open-search--active');
    $('.header__search').fadeToggle(200);
    $('.navbar-toggle').removeClass('active');
    $('.nav').fadeOut(200);
  });

  // Modal
  $('.open-modal-reviews').on('click', function(e) {
    e.preventDefault();
    $('.modal--reviews').fadeIn(200);
  })

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  })

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Type display catalog
  $('.type-display-item--row').on('click', function(e) {
    e.preventDefault();
    $('.type-display-item').removeClass('type-display-item--active');
    $('.catalog__group').addClass('catalog__group--row');
    $(this).addClass('type-display-item--active');
  });

  $('.type-display-item--grid').on('click', function(e) {
    e.preventDefault();
    $('.type-display-item').removeClass('type-display-item--active');
    $('.catalog__group').removeClass('catalog__group--row');
    $(this).addClass('type-display-item--active');
  });

  // Open filter
  $('.p-courses__filter').on('click', function() {
    $('.filter').addClass('filter--open');
    $('.layer').fadeIn(200);
  });

  $('.filter__close, .layer').on('click', function() {
    $('.filter').removeClass('filter--open');
    $('.layer').fadeOut(200);
  });

  // Range price
  $('.js-range-price').ionRangeSlider({
    type: "double",
    min: 0,
    max: 400000,
    from: 0,
    to: 200000,
    postfix: " ₽"
  });

  // Range term
  $('.js-range-term').ionRangeSlider({
    type: "double",
    min: 0,
    max: 16,
    from: 0,
    to: 8,
    postfix: "<span> месяцев</span>",
  });

  // Accardion
  var accordion = function() {
    $('.accordion__header').on('click', function(){
      $(this).next('.accordion__body').not(':animated').slideToggle()
    })
    $('.accordion__header').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Catalog sl
  var swiper = new Swiper(".catalog__sl", {
    spaceBetween: 8,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 32,
        slidesPerView: 3,
      }
    },
  });

  // Interesting sl
  var swiper = new Swiper(".interesting__sl", {
    spaceBetween: 8,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      375: {
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1200: {
        spaceBetween: 60,
        slidesPerView: 3,
      }
    },
  });

});