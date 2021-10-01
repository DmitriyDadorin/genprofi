$(function () {
  'use strict';

  // //------- Sticky Header -------//
  // $(".sticky-header").sticky();

  //------- video popup -------//
  $('.hero-banner__video, .video-play-button').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // //------- mailchimp --------//
  // function mailChimp() {
  // 	$('#mc_embed_signup').find('form').ajaxChimp();
  // }
  // mailChimp();

  var nav_offset_top = $('header').height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area').addClass('navbar_fixed');
        } else {
          $('.header_area').removeClass('navbar_fixed');
        }
      });
    }
  }
  navbarFixed();

  if ($('.blog-slider').length) {
    $('.blog-slider').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      nav: true,
      autoplay: 2500,
      smartSpeed: 1500,
      dots: false,
      responsiveClass: true,
      navText: [
        "<div class='blog-slider__leftArrow'><img src='img/home/left-arrow.png'></div>",
        "<div class='blog-slider__rightArrow'><img src='img/home/right-arrow.png'></div>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  /*-------------------------------------------------------------------------------
	  testimonial slider
  -------------------------------------------------------------------------------*/

  if ($('.testimonial').length) {
    $('.testimonial').owlCarousel({
      loop: true,
      margin: 30,
      items: 5,
      nav: false,
      dots: true,
      responsiveClass: true,
      slideSpeed: 300,
      paginationSpeed: 500,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }

  popUp();
  //------- mailchimp --------//
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();
});

const form = document.querySelector('.popup-form');
const login = document.querySelector('#login');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let t = new FormData(form);
  let n = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: t.get('name'),
      phone: t.get('phone'),
      message: t.get('message'),
    }),
  };
  fetch('/send_post.php', n)
    .then((e) => {
      $('#login').modal('hide');
    })
    .catch((e) => {
      return console.log('error');
    });
});
