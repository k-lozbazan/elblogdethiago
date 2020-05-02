document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 1500
    });
});

$(function() {

    //Lettering
    $('.nombre-sitio').lettering();

    //Menu Fijo
    var tamañoVentana = $(window).height(); // CUanto mide la ventana
    var barraAltura = $('.barra').innerHeight(); // Cuanto mide la barra de navegacion
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > tamañoVentana) {
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }
    });
});