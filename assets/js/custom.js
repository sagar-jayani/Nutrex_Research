$(document).ready(function() {
    
     /*----------- Sticky Header ------------*/
     $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    /*------------ Menu Js ------------*/
    $('.mobile_menu, .desk_menu').click(function() {
        $('.in_header_wrapper').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });

    $('.ovaerlay_bg, .close_trigger').click(function() {
        $('.in_header_wrapper').removeClass('open_menu');
        $('html').removeClass('cm-overflow');
        $('.sub_menu_warp').removeClass('open');
    });
   
    $('.has_submenu > a').click(function () {
        if ($(window).width() <= 991) {
            $(this).parents('.has_submenu').find('.sub_menu_warp').addClass('open');
        }
    });

    $('.back_menu').click(function() {
        $(this).parents('.has_submenu').find('.sub_menu_warp').removeClass('open');
    });


    /*--------- Hero slider Js ----------*/
    $('.hero_owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ["<img src='assets/images/slider_left_ic.png'>","<img src='assets/images/slider_right_ic.png'>"],
        dots:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            575:{
                items:1
            }
        }
    });

    /*--------- Stack Save slider Js ----------*/
    $('.stack_save_owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ["<img src='assets/images/slider_left_ic.png'>","<img src='assets/images/slider_right_ic.png'>"],
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:2,
                margin:10
            },
            992:{
                items:1
            },
        }
    });

    /*------------- Mobile Accordion JS -----------*/
    $('.cm_acc_title').click(function(){
        if ($(window).width() <= 767) {
            $(this).parent().toggleClass('active').find('.cm_acc_info').slideToggle();
            $(this).parent().siblings().removeClass('active').find('.cm_acc_info').slideUp();
            $(this).parents('.f_menu').siblings().find('.cm_acc_info').slideUp();
        }
    });

    /*------------- Product JS --------------*/
    $(".fruit_list ul li").on("mouseenter", function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(".fruit_list ul li").on("mouseleave", function(){
        $(this).removeClass('active')
        var data = $(this).parents('ul').attr('data-fruit')
        $(this).parents('ul').find('li').eq(data).addClass('active defult_active')
    });

    $('.fruit_list ul li').click(function(){
        var count = $(this).index();
        $(this).parents('ul').attr('data-fruit', count);
        $(this).addClass('active defult_active').siblings().removeClass('active defult_active');
        var dataImg = $(this).attr('data-src')
        $(this).parents('.cm_product_box').find('.cm_pro_image img').attr('src', dataImg);
    })


    /*------------ Swiper Slider JS ----------------*/
    var swiper = new Swiper(".mySwiper", {
        centeredSlides: false,
        spaceBetween: 6,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          575: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          991: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

});









