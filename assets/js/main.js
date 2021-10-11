$(document).ready(function () {
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-btn").addClass('active');
        } else {
            $(".scroll-top-btn").removeClass('active');
        }
    });
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    }); 
    //scroll to top button
    $(".scroll-top-btn").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
   $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.nav-content').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });
    $('.owl-company').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
                touchDrag:true,
                mouseDrag: true,
                dots: true,
            },
            600:{
                items:2,
                touchDrag:true,
                mouseDrag:true,
                dots: true,
            },
            1000:{
                items:4,
                touchDrag:false,
                mouseDrag:false,
                dots: false,
            }
        }
    });
});