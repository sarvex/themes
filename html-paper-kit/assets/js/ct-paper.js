// =========================================================
// * Paper Kit PRO - v1.0.7
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/paper-kit-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
// 
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){
    window_width = $(window).width();

    burger_menu = $('nav[role="navigation-demo"]').hasClass('navbar-burger') ? true : false;

    // Init navigation toggle for small screens
    if(window_width < 768 || burger_menu){
        ct_paper.initRightMenu();
    }

    // Limit number of characters in limited textarea
    $('.textarea-limited').keyup(function () {
      var max = $(this).data('limit');
      var len = $(this).val().length;
      if (len >= max) {
        $('#textarea-limited-message').text(' you have reached the limit');
      } else {
        var char = max - len;
        $('#textarea-limited-message').text(char + ' characters left');
      }
    });

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip({
         container: 'body',
         selector: 'body'
    });

    $('.btn-tooltip').tooltip();
    $('.label-tooltip').tooltip();

    //      Activate the switches with icons
    if($('.switch').length != 0){
        $('.switch')['bootstrapSwitch']();
    }
    //      Activate regular switches
    if($("[data-toggle='switch']").length != 0){
         $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    }

    //    Activate bootstrap-select
    if($(".selectpicker").length != 0){
        $(".selectpicker").selectpicker();
    }

    if($(".tagsinput").length != 0){
        $(".tagsinput").tagsInput();
    }

    if($('.datepicker').length != 0){
        $('.datepicker').datepicker({
             weekStart:1,
             color: '{color}'
         });
    }

	// Carousel
	$('.carousel').carousel({
//       interval: 4000
    });

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

     // Make the images from the card fill the hole space
    ct_paper.fitBackgroundForCards();

    // Init icon search action for the navbar
    ct_paper.initNavbarSearch();

    // Init popovers
    ct_paper.initPopovers();

    // Init Sliders
    ct_paper.initSliders();

    // Init Video Background
    ct_paper.initVideoBackground();

    $('.dropdown-sharing .switch').click(function (e) {
        // custom handling here
        e.stopPropagation();
    });
});

// activate collapse right menu when the windows is resized
$(window).resize(function(){
    if($(window).width() < 768){
        ct_paper.initRightMenu();
    }
    if($(window).width() >= 768 && !burger_menu){
        $('nav[role="navigation-demo"]').removeClass('navbar-burger');
        ct_paper.misc.navbar_menu_visible = 0;
        navbar_initialized = false;
        $('html').removeClass('nav-open');
    }
});

ct_paper = {
    misc:{
        navbar_menu_visible: 0
    },
    initRightMenu: function(){
        if(!navbar_initialized){
           $nav = $('nav[role="navigation-demo"]');
           $nav.addClass('navbar-burger');

           $navbar = $nav.find('.navbar-collapse').first().clone(true);

           ul_content = '';

           $navbar.children('ul').each(function(){
               content_buff = $(this).html();
               ul_content = ul_content + content_buff;
           });

           ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';
           $navbar.html(ul_content);

           $('body').append($navbar);

           background_image = $navbar.data('nav-image');
           if(background_image != undefined){
               $navbar.css('background',"url('" + background_image + "')")
                      .removeAttr('data-nav-image')
                      .css('background-size',"cover")
                      .addClass('has-image');
           }

           $toggle = $('.navbar-toggle');

           $navbar.find('a, button').removeClass('btn btn-round btn-default btn-simple btn-neutral btn-fill btn-info btn-primary btn-success btn-danger btn-warning');
           $navbar.find('button').addClass('btn-simple btn-block');

           $toggle.click(function (){

               if(ct_paper.misc.navbar_menu_visible == 1) {
                   $('html').removeClass('nav-open');
                   ct_paper.misc.navbar_menu_visible = 0;
                   $('#bodyClick').remove();
                    setTimeout(function(){
                       $toggle.removeClass('toggled');
                    }, 550);

               } else {
                   setTimeout(function(){
                       $toggle.addClass('toggled');
                   }, 580);

                   div = '<div id="bodyClick"></div>';
                   $(div).appendTo("body").click(function() {
                       $('html').removeClass('nav-open');
                       ct_paper.misc.navbar_menu_visible = 0;
                       $('#bodyClick').remove();
                        setTimeout(function(){
                           $toggle.removeClass('toggled');
                        }, 550);
                   });

                   $('html').addClass('nav-open');
                   ct_paper.misc.navbar_menu_visible = 1;

               }
           });
           navbar_initialized = true;
       }

    },

    fitBackgroundForCards: function(){
         $('.card').each(function(){
            if(!$(this).hasClass('card-product') && !$(this).hasClass('card-user')){
                image = $(this).find('.image img');

                image.hide();
                image_src = image.attr('src');

                $(this).find('.image').css({
                    "background-image": "url('" + image_src + "')",
                    "background-position": "center center",
                    "background-size": "cover"
                });
            }
        });
    },
    initPopovers: function(){
        if($('[data-toggle="popover"]').length != 0){
            $('body').append('<div class="popover-filter"></div>');

            //    Activate Popovers
           $('[data-toggle="popover"]').popover().on('show.bs.popover', function () {
                $('.popover-filter').click(function(){
                    $(this).removeClass('in');
                    $('[data-toggle="popover"]').popover('hide');
                });
                $('.popover-filter').addClass('in');

            }).on('hide.bs.popover', function(){
                $('.popover-filter').removeClass('in');
            });

        }
    },

    initSliders: function(){
        // Sliders for demo purpose in refine cards section
        if($('#slider-range').length != 0){
            $( "#slider-range" ).slider({
        		range: true,
        		min: 0,
        		max: 500,
        		values: [ 75, 300 ],
        	});
        }
        if($('#refine-price-range').length != 0){
        	 $( "#refine-price-range" ).slider({
        		range: true,
        		min: 0,
        		max: 999,
        		values: [ 100, 850 ],
        		slide: function( event, ui ) {
        		    min_price = ui.values[0];
        		    max_price = ui.values[1];
            		$(this).siblings('.price-left').html('&euro; ' + min_price);
            		$(this).siblings('.price-right').html('&euro; ' + max_price)
        		}
        	});
        }
        if($('#slider-default').length != 0 || $('#slider-default2').length != 0){
        	$( "#slider-default, #slider-default2" ).slider({
        			value: 70,
        			orientation: "horizontal",
        			range: "min",
        			animate: true
        	});
        }
    },

    initVideoBackground: function(){
        $('[data-toggle="video"]').click(function(){
            id_video = $(this).data('video');
            video = $('#' + id_video).get(0);

            parent = $(this).parent('div').parent('div');

            if(video.paused){
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

    initNavbarSearch: function(){
        $('[data-toggle="search"]').click(function(){
            if(searchVisible == 0){
                searchVisible = 1;
                $(this).parent().addClass('active');
                $('.navbar-search-form').fadeIn(function(){
                    $('.navbar-search-form input').focus();
                });
            } else {
                searchVisible = 0;
                $(this).parent().removeClass('active');
                $(this).blur();
                $('.navbar-search-form').fadeOut(function(){
                    $('.navbar-search-form input').blur();
                });
            }
        });
    }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
