$(document).ready(function(){
let barra = $('#barra');
let li = $('.nav-link');
let logo = $('#logo');
let logo_fullcode = $("#logo-full");

// DEFINIR SECCIONES
let plus = $('.info').offset().top;
let acerca_de = $('.code').offset().top;
let portafolio = $('.portafolio').offset().top;
let contacto = $('.contact').offset().top;


// CODIGO PARA EFECTO DEL NAVAR
if ($(window).width() > 800 ){
  $( window ).scroll(function(){
    if ($(window).scrollTop() > 600 ){
      barra.css("height", "75px");
      barra.css("border-bottom", "3px solid #1a237e");
      li.css("height", "75px");
      // logo_fullcode.css("display", "inline");
      setTimeout(function(){
        logo.css("display", "none");
        logo_fullcode.css("display", "inline");
      }, 100);
    }else{
      barra.css("height", "100px");
      barra.css("border-bottom", "7px solid #1a237e");
      li.css("height", "100px");
      setTimeout(function(){
        logo.css("display", "inline");
        logo_fullcode.css("display", "none");
      }, 100);
    }
  });
};

// CODIGO PARA LINKS DEL NAVAR
$('.brand-logo').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});

$('.plus').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: plus - 80
  }, 500);
});

$('.acerca_de').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: acerca_de - 80
  }, 500);
});

$('.portafolio-l').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: portafolio
  }, 500);
});

$('.contacto').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: contacto - 80
  }, 500);
});



});
