var controle = 0;

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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${fpreto}", "click", function(sym, e) {
         sym.getSymbol("fpreto").stop("clicando");
         $("body").css("cursor","url(images/sfgaerg-13.png), auto");
         setTimeout(function(){
           $("body").css("cursor","url(images/sfgaerg-12.png), auto");
         }, 250);
         cortados.push("fpreto");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fvermelho}", "click", function(sym, e) {
         sym.getSymbol("fvermelho").stop("clicando");
         $("body").css("cursor","url(images/sfgaerg-13.png), auto");
         setTimeout(function(){
           $("body").css("cursor","url(images/sfgaerg-12.png), auto");
         }, 250);
         cortados.push("fvermelho");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${famarelo}", "click", function(sym, e) {
         sym.getSymbol("famarelo").stop("clicando");
         $("body").css("cursor","url(images/sfgaerg-13.png), auto");
         setTimeout(function(){
           $("body").css("cursor","url(images/sfgaerg-12.png), auto");
         }, 250);
         cortados.push("famarelo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fverde}", "click", function(sym, e) {
         sym.getSymbol("fverde").stop("clicando");
         $("body").css("cursor","url(images/sfgaerg-13.png), auto");
         setTimeout(function(){
           $("body").css("cursor","url(images/sfgaerg-12.png), auto");
         }, 250);
         cortados.push("fverde");

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("tPreto").hide();
         sym.$("tAmarelo").hide();
         sym.$("tVermelho").hide();
         sym.$("tVerde").hide();
         cortados = [];
         
         	sym.$("tPreto").hide();
         	sym.$("tAmarelo").hide();
         	sym.$("tVermelho").hide();
         	sym.$("tVerde").hide();
         
         	tempo = 59;
         	myVar = setInterval(function(){ 
         		if ( tempo >= 0 ) {
         			if ( tempo < 10 ){
         				sym.$("Text").html("00:0"+tempo);
         			} else {
         				sym.$("Text").html("00:"+tempo);
         			}
         			if ( tempo == 10 ){
         				sym.$("Text").css("color","red");
         			}
         			tempo--;
         		} else {
         			sym.play("explode");
         			clearInterval(myVar);
         		}
         	}, 1000);
         
         	verifica = function(fios){
         		console.log();
         		if ( cortados.length != fios.length ){
         			sym.play("explode");
         			clearInterval(myVar);
         			return;
         		}	 
         		for ( var i = 0; i < cortados.length; i++ ){
         			for ( var j = 0; j < fios.length; j++ ) {
         				console.log(fios[j]+"-"+cortados[i])
         				if ( fios[j] == cortados[i] ){
         					break;
         				}
         			}
         			console.log(j+"-"+fios.length)
         			if ( j == fios.length ){
         				sym.play("explode");
         				clearInterval(myVar);
         				return;
         			}
         		}
         		sym.play("ganhou");
         		clearInterval(myVar);
         	}
         	sym.setVariable("verifica", verifica);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnVerifica}", "click", function(sym, e) {
         fios = ["famarelo"];
         var v = sym.getVariable("verifica");
         v(fios);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnReinicia}", "click", function(sym, e) {
         sym.stop(0);
         tempo = 59;
         cortados = [];
         sym.getSymbol("fverde").stop(0);
         sym.getSymbol("famarelo").stop(0);
         sym.getSymbol("fvermelho").stop(0);
         sym.getSymbol("fpreto").stop(0);
         sym.$("Text").html("01:00");
         myVar = setInterval(function(){ 
         	if ( tempo >= 0 ) {
         		if ( tempo < 10 ){
         			sym.$("Text").html("00:0"+tempo);
         		} else {
         			sym.$("Text").html("00:"+tempo);
         		}
         		if ( tempo == 10 ){
         			sym.$("Text").css("color","red");
         		}
         		tempo--;
         	} else {
         		sym.play("explode");
         		clearInterval(myVar);
         	}
         }, 1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fpreto}", "mouseenter", function(sym, e) {
		sym.$("tPreto").hide();
		sym.$("tAmarelo").hide();
		sym.$("tVerde").hide();
		sym.$("tVermelho").hide();
         sym.$("tPreto").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fpreto}", "mouseleave", function(sym, e) {
         sym.$("tPreto").fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fvermelho}", "mouseenter", function(sym, e) {
		  sym.$("tPreto").hide();
		sym.$("tAmarelo").hide();
		sym.$("tVerde").hide();
		sym.$("tVermelho").hide();
         sym.$("tVermelho").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fvermelho}", "mouseleave", function(sym, e) {
         sym.$("tVermelho").fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fverde}", "mouseleave", function(sym, e) {
         sym.$("tVerde").fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fverde}", "mouseenter", function(sym, e) {
		  sym.$("tPreto").hide();
		sym.$("tAmarelo").hide();
		sym.$("tVerde").hide();
		sym.$("tVermelho").hide();
         sym.$("tVerde").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${famarelo}", "mouseenter", function(sym, e) {
		  sym.$("tPreto").hide();
		sym.$("tAmarelo").hide();
		sym.$("tVerde").hide();
		sym.$("tVermelho").hide();
         sym.$("tAmarelo").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${famarelo}", "mouseleave", function(sym, e) {
         sym.$("tAmarelo").fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseenter", function(sym, e) {
         $("body").css("cursor","url(images/sfgaerg-12.png), auto");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseleave", function(sym, e) {
         $("body").css("cursor","auto");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'fverde'
   (function(symbolName) {   
   
   })("fverde");
   //Edge symbol end:'fverde'

   //=========================================================
   
   //Edge symbol: 'famarelo'
   (function(symbolName) {   
   
   })("famarelo");
   //Edge symbol end:'famarelo'

   //=========================================================
   
   //Edge symbol: 'fvermelho'
   (function(symbolName) {   
   
   })("fvermelho");
   //Edge symbol end:'fvermelho'

   //=========================================================
   
   //Edge symbol: 'fpreto'
   (function(symbolName) {   
   
   })("fpreto");
   //Edge symbol end:'fpreto'

   //=========================================================
   
   //Edge symbol: 'fazul'
   (function(symbolName) {   
   
   })("fazul");
   //Edge symbol end:'fazul'

   //=========================================================
   
   //Edge symbol: 'btnVerifica'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mousedown", function(sym, e) {
         sym.stop("Pressionado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseover", function(sym, e) {
         sym.stop("Mouse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseout", function(sym, e) {
         sym.stop("Normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseup", function(sym, e) {
         sym.stop("Mouse");

      });
      //Edge binding end

   })("btnVerifica");
   //Edge symbol end:'btnVerifica'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Acao_mouse}", "mouseover", function(sym, e) {
         sym.stop("Focado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Acao_mouse}", "mousedown", function(sym, e) {
         sym.stop("Pressionado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Acao_mouse}", "mouseup", function(sym, e) {
         sym.stop("Focado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Acao_mouse}", "mouseout", function(sym, e) {
         sym.stop("Normal");

      });
      //Edge binding end

   })("btnReinicia");
   //Edge symbol end:'btnReinicia'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-14771589");