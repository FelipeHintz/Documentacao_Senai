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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Botao}", "click", function(sym, e) {
         sym.$("Dialogo").show();
         sym.getSymbol("Dialogo").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Card'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().$("Dialogo").hide();
         sym.stop("Inicio");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Botao}", "click", function(sym, e) {
         sym.play("Final");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getComposition().getStage().$("Dialogo").hide();
         sym.stop("Inicio");

      });
      //Edge binding end

   })("Dialogo");
   //Edge symbol end:'Dialogo'

   //=========================================================
   
   //Edge symbol: 'Botao'
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

   })("BotaoOK");
   //Edge symbol end:'BotaoOK'

   //=========================================================
   
   //Edge symbol: 'Botao'
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

   })("Botao");
   //Edge symbol end:'Botao'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-10093115");