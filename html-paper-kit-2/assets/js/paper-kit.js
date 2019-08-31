/*!

 =========================================================
 * Paper Kit Pro - v2.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-pro
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */


var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
  backgroundOrange = false,
  toggle_initialized = false;

$(document).ready(function() {
  window_width = $(window).width();

  // multi-level dropdown-menu


  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    var $el = $(this);
    var $parent = $(this).offsetParent(".dropdown-menu");
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parent("li").toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-menu .show').removeClass("show");
    });

    if (!$parent.parent().hasClass('navbar-nav')) {
      $el.next().css({
        "top": $el[0].offsetTop,
        "left": $parent.outerWidth() - 4
      });
    }

    return false;
  });


  // On responsive, when a section from navbar is clicked, jump to that section
  if ($('.sections-page').length != 0) {
    $('a[data-scroll="true"]').click(function(e) {
      var scroll_target = $(this).data('id');
      var scroll_trigger = $(this).data('scroll');

      if (scroll_trigger == true && scroll_target !== undefined) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $(scroll_target).offset().top - 50
        }, 1000);
      }
    });

    $('.navbar-collapse a[data-scroll="true"]').click(function() {
      setTimeout(function() {
        if (pk.misc.navbar_menu_visible == 1) {
          $('html').removeClass('nav-open');
          pk.misc.navbar_menu_visible = 0;
          $('#bodyClick').remove();
          setTimeout(function() {
            $toggle.removeClass('toggled');
          }, 550);
        }
      }, 550);
    });
  }

  //  Activate the tooltips
  if ($('[data-toggle="tooltip"]').length != 0) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //  Activate the switches with icons
  if ($('.switch').length != 0) {
    $('.switch')['.bootstrapSwitch']();
  }

  //  Activate regular switches
  if ($("[data-toggle='switch']").length != 0) {
    $("[data-toggle='switch']").bootstrapSwitch();
  }

  //  Activate bootstrap-select
  if ($(".selectpicker").length != 0) {
    $(".selectpicker").selectpicker();
  }

  //  Append modals to <body>
  if ($(".modal").length != 0) {
    $('.modal').appendTo('body');
  }

  // Activate Tags(badges)
  // var tagClass = $('.tagsinput').attr('data-color');
  if ($(".tagsinput").length != 0) {
    $(".tagsinput").tagsinput();
  }
  // $('.badge').addClass(''+ 'badge-' + tagClass);

  // Limit number of characters in limited textarea
  $('.textarea-limited').keyup(function() {
    var max = $(this).attr('maxlength');
    var len = $(this).val().length;
    if (len >= max) {
      $('#textarea-limited-message').text(' you have reached the limit');
    } else {
      var char = max - len;
      $('#textarea-limited-message').text(char + ' characters left');
    }
  });

  if (window_width >= 768) {
    big_image = $('.page-header[data-parallax="true"]');

    if (big_image.length != 0) {
      $(window).on('scroll', pk.checkScrollForPresentationPage);
    }
  }

  // Change the collor of navbar collapse
  $('#navbarToggler').on('show.bs.collapse', function() {
    if ($('nav').hasClass('navbar-transparent') && $(document).scrollTop() < 50) {
      $('.navbar').addClass('no-transition');
      $('nav').removeClass('navbar-transparent');
    }
  }).on('hidden.bs.collapse', function() {
    if ($(document).scrollTop() < 50) {
      $('.navbar').removeClass('no-transition');
      $('nav:first-of-type').addClass('navbar-transparent');
    }
  });

  // Navbar color change on scroll
  if ($('.navbar[color-on-scroll]').length != 0) {
    $(window).on('scroll', pk.checkScrollForTransparentNavbar);
  }

  $('.btn-tooltip').tooltip();
  $('.label-tooltip').tooltip();

  // Carousel
  $('.carousel').carousel({
    interval: 20000
  });

  $('.form-control').on("focus", function() {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function() {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  // Init popovers
  pk.initPopovers();

  // Init Sliders
  pk.initSliders();

  // Init video header
  pk.initVideoBackground();

  // Activate Navbar
  if ($('.nav-down').length != 0) {
    pk.checkScrollForMovingNavbar();
  };

});

// $(window).on('resize', function(){
//     pk.initNavbarImage();
// });

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (pk.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    pk.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
      $('html').removeClass('nav-open');
      pk.misc.navbar_menu_visible = 0;
      setTimeout(function() {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addClass('nav-open');
    pk.misc.navbar_menu_visible = 1;
  }
});

pk = {
  misc: {
    navbar_menu_visible: 0
  },
  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > $(".navbar").attr("color-on-scroll")) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17),

  checkScrollForMovingNavbar: function() {

    // Hide Header on on scroll down
    navbarHeight = $('.navbar').outerHeight();

    $(window).scroll(function(event) {
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);


  },

  checkScrollForPresentationPage: debounce(function() {
    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
  }, 4),

  initVideoBackground: function() {

    $('[data-toggle="video"]').click(function() {
      id_video = $(this).data('video');
      video = $('#' + id_video).get(0);

      parent = $(this).parent('div').parent('div');

      if (video.paused) {
        video.play();
        $(this).html('<i class="fa fa-pause"></i> Pause Video');
        parent.addClass('state-play');
      } else {
        video.pause();
        $(this).html('<i class="fa fa-play"></i> Play Video');
        parent.removeClass('state-play');
      }
    });
  },

  initPopovers: function() {
    if ($('[data-toggle="popover"]').length != 0) {
      $('body').append('<div class="popover-filter"></div>');

      //    Activate Popovers
      $('[data-toggle="popover"]').popover().on('show.bs.popover', function() {
        $('.popover-filter').click(function() {
          $(this).removeClass('in');
          $('[data-toggle="popover"]').popover('hide');
        });
        $('.popover-filter').addClass('in');
      }).on('hide.bs.popover', function() {
        $('.popover-filter').removeClass('in');
      });

    }
  },

  initSliders: function() {
    // Sliders for demo purpose in refine cards section
    if ($('#sliderRegular').length != 0) {
      var rangeSlider = document.getElementById('sliderRegular');
      noUiSlider.create(rangeSlider, {
        start: [5000],
        range: {
          'min': [2000],
          'max': [10000]
        }
      });
    }
    if ($('#sliderDouble').length != 0) {
      var slider = document.getElementById('sliderDouble');
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
          'min': 0,
          'max': 100
        }
      });
    }

  },
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

var big_image;
var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var toggle_initialized = false;

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

demo = {
  initContactUsMap: function() {

    var myLatlng = new google.maps.LatLng(44.445248, 26.099672);
    var mapOptions = {
      zoom: 14,
      center: myLatlng,
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }],
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }

    var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Creative Tim Office"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

  },

  initContactUsMap2: function() {

    var myLatlng = new google.maps.LatLng(44.445248, 26.099672);
    var mapOptions = {
      zoom: 14,
      center: myLatlng,
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }],
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }

    var map = new google.maps.Map(document.getElementById("contactUsMap2"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Creative Tim Office"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

  },

  verticalDots: function() {

    var contentSections = $('.cd-section'),
      navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function() {
      updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event) {
      event.preventDefault();
      smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event) {
      event.preventDefault();
      smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function() {
      $('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function() {
      $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
      contentSections.each(function() {
        $this = $(this);
        var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
        if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
          navigationItems.eq(activeSection).addClass('is-selected');
        } else {
          navigationItems.eq(activeSection).removeClass('is-selected');
        }
      });
    }

    function smoothScroll(target) {
      $('body,html').animate({
          'scrollTop': target.offset().top
        },
        600
      );
    }
  }
}

$(document).ready(function() {

  demo.verticalDots();
});



// onScroll animation

if ($('body').hasClass('presentation-page')) {

  $(function() {

    var $window = $(window),
      isTouch = Modernizr.touch;

    if (isTouch) {
      $('.add-animation').addClass('animated');
    }

    $window.on('scroll', revealAnimation);

    function revealAnimation() {

      // Showed...
      $(".add-animation:not(.animated)").each(function() {
        var $this = $(this),
          offsetTop = $this.offset().top,
          scrolled = $window.scrollTop(),
          win_height_padded = $window.height();
        if (scrolled + win_height_padded > offsetTop) {
          $this.addClass('animated');
        }
      });
      // Hidden...
      $(".add-animation.animated").each(function(index) {
        var $this = $(this),
          offsetTop = $this.offset().top;
        scrolled = $window.scrollTop(),
          win_height_padded = $window.height() * 0.8;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass('animated')
        }
      });
    }

    revealAnimation();
  });
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

function hasScrolled() {
  var st = $(this).scrollTop();
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.navbar.nav-down').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.navbar.nav-up').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
};