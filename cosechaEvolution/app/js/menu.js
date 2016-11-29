$(document).ready(main);

var contador = 1;
var ancho = $(document).width();

function main (){
	$('.menu_bar #icon').click(function(){
		// $('nav').toggle(); Forma Sencilla de aparecer y desaparecer

		if (contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		};

	});

	// Mostramos y ocultamos submenus
	$('#sub-menu').click(function(){
		$(this).children('.children').slideToggle();
	});

  $(window).resize(function(){
    if (ancho < 800) {
      $('nav').css({'display':'none'});
    }
  });

};
