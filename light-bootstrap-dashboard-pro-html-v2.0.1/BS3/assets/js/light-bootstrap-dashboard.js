/*! =========================================================
 *
 * Light Bootstrap Dashboard PRO - V1.4.1
 *
 * =========================================================
 *
 * Copyright 2017 Creative Tim
 * Available with purchase of license from http://www.creative-tim.com/product/light-bootstrap-dashboard-pro
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \\|     |// '.
 *                 / \\|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false,
    $sidebar,
    isWindows;

(function(){
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !$('body').hasClass('sidebar-mini')){
       // if we are on windows OS we activate the perfectScrollbar function
       $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

       $('html').addClass('perfect-scrollbar-on');
   } else {
       $('html').addClass('perfect-scrollbar-off');
   }
})();

$(document).ready(function(){

    window_width = $(window).width();
    $sidebar = $('.sidebar');

    // check if there is an image set for the sidebar's background
    lbd.checkSidebarImage();

    if($('body').hasClass('sidebar-mini')){
        lbd.misc.sidebar_mini_active = true;
    }

    lbd.initSidebarsCheck();

    lbd.initMinimizeSidebar();

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Init Collapse Areas
    lbd.initCollapseArea();

    $("[data-toggle='switch']").each(function(){
        $this = $(this);
        data_on_label = $this.data('on-text') || '';
        data_off_label = $this.data('off-text') || '';

        $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        });
    });


    // Init Tooltips
    $('[rel="tooltip"]').tooltip();

    // Init Tags Input
    if($(".tagsinput").length != 0){
        $(".tagsinput").tagsInput();
    }

    //  Init Bootstrap Select Picker
    if($(".selectpicker").length != 0){
        $(".selectpicker").selectpicker();
    }

    if($sidebar.length == 0 && $(window).width() <= 991 ){
        $('body').find('.navbar-collapse').addClass('bootstrap-navbar');
    }

});

$(document).on('click', '.navbar-toggle', function(){
    $toggle = $(this);

    if(lbd.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        lbd.misc.navbar_menu_visible = 0;
        setTimeout(function(){
            $toggle.removeClass('toggled');
            $('.close-layer').remove();
        }, 550);

    } else {
        setTimeout(function(){
            $toggle.addClass('toggled');
        }, 580);

        $sidebar = $('body').find('.sidebar');
        $layer = $('<div class="close-layer"></div>');
        main_panel_height = $sidebar.length != 0 ? $('.main-panel')[0].scrollHeight : $('.wrapper')[0].scrollHeight;
        $layer.css('height',main_panel_height + 'px');
        $sidebar.length != 0 ? $layer.appendTo(".main-panel") : $layer.appendTo(".wrapper");

        setTimeout(function(){
            $layer.addClass('visible');
        }, 100);

        $layer.click(function() {
            $('html').removeClass('nav-open');
            lbd.misc.navbar_menu_visible = 0;
            $layer.removeClass('visible');

             setTimeout(function(){
                $layer.remove();
                $toggle.removeClass('toggled');

             }, 400);
        });

        $('html').addClass('nav-open');
        lbd.misc.navbar_menu_visible = 1;
    }
});


// activate mobile menus when the windows is resized
$(window).resize(function(){
    lbd.initSidebarsCheck();
    lbd.initBootstrapNavbar();
});


lbd = {

    misc:{
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,

    },

    initBootstrapNavbar: function(){
        if($sidebar.length == 0){
            if($(window).width() >= 991){
                $('body').find('.navbar-collapse').removeClass('bootstrap-navbar');
            } else {
                $('body').find('.navbar-collapse').addClass('bootstrap-navbar');
            }
        }
    },

    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        } else if(mobile_menu_initialized == true){
            // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
            $sidebar_wrapper.find('.navbar-form').remove();
            $sidebar_wrapper.find('.nav-mobile-menu').remove();

            mobile_menu_initialized = false;
        }
    },

    initSidebarsCheck: function(){
        if($(window).width() <= 991){
            if($sidebar.length != 0){
                lbd.initSidebarMenu();
            }
        }
    },

    initMinimizeSidebar: function(){

        // when we are on a Desktop Screen and the collapse is triggered we check if the sidebar mini is active or not. If it is active then we don't let the collapse to show the elements because the elements from the collapse are showing on the hover state over the icons in sidebar mini, not on the click.

        $('#minimizeSidebar').click(function(){
            var $btn = $(this);

            if(lbd.misc.sidebar_mini_active == true){
                $('body').removeClass('sidebar-mini');
                lbd.misc.sidebar_mini_active = false;
            }else{
                setTimeout(function(){
                    $('body').addClass('sidebar-mini');
                    lbd.misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });
    },


    checkFullPageBackgroundImage: function(){
        $page = $('.full-page');
        image_src = $page.data('image');

        if(image_src !== undefined){
            image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    },

    initSidebarMenu: debounce(function(){
        $sidebar_wrapper = $('.sidebar-wrapper');

        if(!mobile_menu_initialized){
            $navbar = $('nav').find('.navbar-collapse');
            nav_content = '';

            $navbar.children('ul').each(function(){

                content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            $navbar_form = $('nav').find('.navbar-form').clone(true);

            $sidebar_nav = $sidebar_wrapper.find(' > .nav');

            // insert the navbar form before the sidebar list
            $nav_content = $(nav_content);
            $nav_content.insertBefore($sidebar_nav);
            $navbar_form.insertBefore($nav_content);

            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();

            });

            mobile_menu_initialized = true;
        } else {
            console.log('window with:' + $(window).width());
            if($(window).width() > 991){
                // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();

                console.log(lbd.misc.sidebar_mini_active);

                // if(lbd.misc.sidebar_mini_active == true){
                //     $('body').addClass('sidebar-mini');
                // }

                mobile_menu_initialized = false;
            }
        }
    }, 500),

    initCollapseArea: function(){
        $('[data-toggle="collapse-hover"]').each(function () {
            var thisdiv = $(this).attr("data-target");
            $(thisdiv).addClass("collapse-hover");
        });

        $('[data-toggle="collapse-hover"]').hover(function(){
            var thisdiv = $(this).attr("data-target");
            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');
                $(thisdiv).css({
                    'height':'30px'
                });
            }

        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');

            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });
            }
        }).click(function(event){
                event.preventDefault();

                var thisdiv = $(this).attr("data-target");
                var height = $(thisdiv).children('.panel-body').height();

                if($(this).hasClass('state-open')){
                    $(thisdiv).css({
                        'height':'0px',
                    });
                    $(this).removeClass('state-open');
                } else {
                    $(thisdiv).css({
                        'height':height + 30,
                    });
                    $(this).addClass('state-open');
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
