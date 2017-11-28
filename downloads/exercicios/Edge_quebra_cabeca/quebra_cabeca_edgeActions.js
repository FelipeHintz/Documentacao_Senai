/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
var cont11 = 0;
var cont12 = 0;
var cont13 = 0;
var cont14 = 0;
var cont15 = 0;

var cont21 = 0;
var cont22 = 0;
var cont23 = 0;
var cont24 = 0;
var cont25 = 0;

var cont31 = 0;
var cont32 = 0;
var cont33 = 0;
var cont34 = 0;
var cont35 = 0;

var cont41 = 0;
var cont42 = 0;
var cont43 = 0;
var cont44 = 0;
var cont45 = 0;

var tituloErro = 'Tome cuidado!';
var mensagemErro = 'Este não é o local adequado para esta peça. Tente novamente!';

sym.$("Drag1").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag2").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag3").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag4").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag5").draggable({
	revert: "invalid",
	containment: ".Limite"
});

sym.$("Drag6").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag7").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag8").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag9").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag10").draggable({
	revert: "invalid",
	containment: ".Limite"
});

sym.$("Drag11").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag12").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag13").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag14").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag15").draggable({
	revert: "invalid",
	containment: ".Limite"
});

sym.$("Drag16").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag17").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag18").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag19").draggable({
	revert: "invalid",
	containment: ".Limite"
});
sym.$("Drag20").draggable({
	revert: "invalid",
	containment: ".Limite"
});

sym.$( "Drop11" ).droppable({
	drop: function( event, ui ) {
		if (cont11 != 1) {
			if (ui.draggable.hasClass('d11')) {
				cont11++;
				centralizaDrop(ui, $(this), 11);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop12" ).droppable({
	drop: function( event, ui ) {
		if (cont12 != 1) {
			if (ui.draggable.hasClass('d12')) {
				cont12++;
				centralizaDrop(ui, $(this), 12);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop13" ).droppable({
	drop: function( event, ui ) {
		if (cont13 != 1) {
			if (ui.draggable.hasClass('d13')) {
				cont13++;
				centralizaDrop(ui, $(this), 13);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop14" ).droppable({
	drop: function( event, ui ) {
		if (cont14 != 1) {
			if (ui.draggable.hasClass('d14')) {
				cont14++;
				centralizaDrop(ui, $(this), 14);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop15" ).droppable({
	drop: function( event, ui ) {
		if (cont15 != 1) {
			if (ui.draggable.hasClass('d15')) {
				cont15++;
				centralizaDrop(ui, $(this), 15);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop21" ).droppable({
	drop: function( event, ui ) {
		if (cont21 != 1) {
			if (ui.draggable.hasClass('d21')) {
				cont21++;
				centralizaDrop(ui, $(this), 21);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop22" ).droppable({
	drop: function( event, ui ) {
		if (cont22 != 1) {
			if (ui.draggable.hasClass('d22')) {
				cont22++;
				centralizaDrop(ui, $(this), 22);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop23" ).droppable({
	drop: function( event, ui ) {
		if (cont23 != 1) {
			if (ui.draggable.hasClass('d23')) {
				cont23++;
				centralizaDrop(ui, $(this), 23);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop24" ).droppable({
	drop: function( event, ui ) {
		if (cont24 != 1) {
			if (ui.draggable.hasClass('d24')) {
				cont24++;
				centralizaDrop(ui, $(this), 24);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop25" ).droppable({
	drop: function( event, ui ) {
		if (cont25 != 1) {
			if (ui.draggable.hasClass('d25')) {
				cont25++;
				centralizaDrop(ui, $(this), 25);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop31" ).droppable({
	drop: function( event, ui ) {
		if (cont31 != 1) {
			if (ui.draggable.hasClass('d31')) {
				cont31++;
				centralizaDrop(ui, $(this), 31);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop32" ).droppable({
	drop: function( event, ui ) {
		if (cont32 != 1) {
			if (ui.draggable.hasClass('d32')) {
				cont32++;
				centralizaDrop(ui, $(this), 32);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop33" ).droppable({
	drop: function( event, ui ) {
		if (cont33 != 1) {
			if (ui.draggable.hasClass('d33')) {
				cont33++;
				centralizaDrop(ui, $(this), 33);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop34" ).droppable({
	drop: function( event, ui ) {
		if (cont34 != 1) {
			if (ui.draggable.hasClass('d34')) {
				cont34++;
				centralizaDrop(ui, $(this), 34);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop35" ).droppable({
	drop: function( event, ui ) {
		if (cont35 != 1) {
			if (ui.draggable.hasClass('d35')) {
				cont35++;
				centralizaDrop(ui, $(this), 35);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop41" ).droppable({
	drop: function( event, ui ) {
		if (cont41 != 1) {
			if (ui.draggable.hasClass('d41')) {
				cont41++;
				centralizaDrop(ui, $(this), 41);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop42" ).droppable({
	drop: function( event, ui ) {
		if (cont42 != 1) {
			if (ui.draggable.hasClass('d42')) {
				cont42++;
				centralizaDrop(ui, $(this), 42);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop43" ).droppable({
	drop: function( event, ui ) {
		if (cont43 != 1) {
			if (ui.draggable.hasClass('d43')) {
				cont43++;
				centralizaDrop(ui, $(this), 43);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop44" ).droppable({
	drop: function( event, ui ) {
		if (cont44 != 1) {
			if (ui.draggable.hasClass('d44')) {
				cont44++;
				centralizaDrop(ui, $(this), 44);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

sym.$( "Drop45" ).droppable({
	drop: function( event, ui ) {
		if (cont45 != 1) {
			if (ui.draggable.hasClass('d45')) {
				cont45++;
				centralizaDrop(ui, $(this), 45);
			} else {
				swal({
					title: tituloErro,
					text: mensagemErro,
					type: 'error',
					html: true
				})
				$(ui.draggable).animate({
					'left': $(ui.draggable).data('originalLeft'),
					'top': $(ui.draggable).data('originalTop')
				})
			}
		} else {
			swal({
				title: tituloErro,
				text: mensagemErro,
				type: 'error',
				html: true
			})
			$(ui.draggable).animate({
				'left': $(ui.draggable).data('originalLeft'),
				'top': $(ui.draggable).data('originalTop')
			})
		}
		verifica();
	}
});

function centralizaDrop(ui, th, opc){
	if (opc == 11){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2+10
			}
		);
	} else if (opc == 12){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2+10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2
			}
		);
	} else if (opc == 13){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2
			}
		);
	} else if (opc == 14){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2+10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2
			}
		);
	} else if (opc == 15){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-11
			}
		);
	} else if (opc == 21){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2
			}
		);
	} else if (opc == 22){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2+10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-11
			}
		);
	} else if (opc == 23){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-10
			}
		);
	} else if (opc == 24){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2+10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-10
			}
		);
	} else if (opc == 25){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-11
			}
		);
	} else if (opc == 31){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2+10
			}
		);
	} else if (opc == 32){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2+10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2+10
			}
		);
	} else if (opc == 33){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2+10
			}
		);
	} else if (opc == 34){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2+10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2+10
			}
		);
	} else if (opc == 35){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2
			}
		);
	} else if (opc == 41){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2
			}
		);
	} else if (opc == 42){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-10
			}
		);
	} else if (opc == 43){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-10
			}
		);
	} else if (opc == 44){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-10
			}
		);
	} else if (opc == 45){
		$(ui.draggable).css(
			{
				top: th.position().top + (th.height()-$(ui.draggable).height())/2-10,
				left: th.position().left + (th.width()-$(ui.draggable).width())/2-11
			}
		);
	}
}

verifica = function() {
	if (cont11 == 1 && cont12 == 1 && cont13 == 1 && cont14 == 1 && cont15 == 1 &&
	cont21 == 1 && cont22 == 1 && cont23 == 1 && cont24 == 1 && cont25 == 1 &&
	cont31 == 1 && cont32 == 1 && cont33 == 1 && cont34 == 1 && cont35 == 1 &&
	cont41 == 1 && cont42 == 1 && cont43 == 1 && cont44 == 1 && cont45 == 1){
		sym.play()
	}
}

sym.setVariable("verifica", verifica);

for(var i =1; i<21; i++){
	var str = "Drag"+i;
	sym.$(str).data({
		 'originalLeft': sym.$(str).css('left'),
		 'originalTop': sym.$(str).css('top')
	});
}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         swal({
         	title: 'TITULO MENSAGEM DE ACERTO',
         	text: 'MENSAGEM DE ACERTO',
         	type: 'success',
         	confirmButtonText: 'Fechar',
         	html: true
         })

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5491406");