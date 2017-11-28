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
         var cont1 = 0;
         var cont2 = 0;
         var cont3 = 0;
         var cont4 = 0;
         var cont5 = 0;
		 
		 var tituloErro = 'TITULO MENSAGEM DE ERRO';
		 var mensagemErro = 'MENSAGEM DE ERRO';
         
         sym.$("Drag1").draggable({
         	revert: "invalid"
         });
         sym.$("Drag2").draggable({
         	revert: "invalid"
         });
         sym.$("Drag3").draggable({
         	revert: "invalid"
         });
         sym.$("Drag4").draggable({
         	revert: "invalid"
         });
         sym.$("Drag5").draggable({
         	revert: "invalid"
         });
         
         for (var i = 1; i < 6; i++) {
         	var str = "Drag"+i;
         	sym.$(str).data({
         		'originalLeft': sym.$(str).css('left'),
         		'originalTop': sym.$(str).css('top'),
         	})
         }
         
         sym.$( "Drop1" ).droppable({
         	drop: function( event, ui ) {
         		if (cont1 != 1) {
         			if (ui.draggable.hasClass('d1')) {
         				cont1++;
         				centralizaDrop(ui, $(this));
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
         
         sym.$( "Drop2" ).droppable({
         	drop: function( event, ui ) {
         		if (cont2 != 1) {
         			if (ui.draggable.hasClass('d2')) {
         				cont2++;
         				centralizaDrop(ui, $(this));
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
         
         sym.$( "Drop3" ).droppable({
         	drop: function( event, ui ) {
         		if (cont3 != 1) {
         			if (ui.draggable.hasClass('d3')) {
         				cont3++;
         				centralizaDrop(ui, $(this));
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
         
         sym.$( "Drop4" ).droppable({
         	drop: function( event, ui ) {
         		if (cont4 != 1) {
         			if (ui.draggable.hasClass('d4')) {
         				cont4++;
         				centralizaDrop(ui, $(this));
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
         
         sym.$( "Drop5" ).droppable({
         	drop: function( event, ui ) {
         		if (cont5 != 1) {
         			if (ui.draggable.hasClass('d5')) {
         				cont5++;
         				centralizaDrop(ui, $(this));
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
         
         
         function centralizaDrop(ui, th){
         	$(ui.draggable).css({
         		top: th.position().top + (th.height()-$(ui.draggable).height())/2,
         		left: th.position().left + (th.width()-$(ui.draggable).width())/2
         	});
         }
         
         verifica = function() {
         	if (cont1 == 1 && cont2 == 1 && cont3 == 1 && cont4 == 1 && cont5 == 1){
         		sym.play()
         		swal({
         			title: 'TITULO MENSAGEM DE ACERTO',
         			text: 'MENSAGEM DE ACERTO',
         			type: 'success',
					confirmButtonText: 'Fechar',
         			html: true
         		})
         	}
         }
         
         sym.setVariable("verifica", verifica);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-22918710");