"use strict";

$(document).ready(function () {
  svg4everybody({});
});

var sandwich = function sandwich() {
  var $hideElement = $('.sandwich__content');
  $('.sandwich__open-btn').on('click', function () {
    $hideElement.addClass('sandwich__content-opend');
  });
  $('.sandwich__close-btn').on('click', function () {
    $hideElement.removeClass('sandwich__content-opend');
  });
  $('.sandwich-nav__link').on('click', function () {
    $hideElement.removeClass('sandwich__content-opend');
  });
};

sandwich();
var swiper = new Swiper('.hero-slider__container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev'
  },
  loop: true
});
var swiper2 = new Swiper('.testimonials-slider__container', {
  slidesPerView: 1,
  spaceBetween: 45,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

var swiper2 = new Swiper('.profile-slider__container', {
  slidesPerView: 1,
  spaceBetween: 45,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/

  if (height > 800) {
    $('.scrolltop-link').addClass('scrolltop-link--active');
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $('.scrolltop-link').removeClass('scrolltop-link--active');
  }
});
$(document).ready(function () {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}