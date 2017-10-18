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
      
      
   })("stage");
   //Edge symbol end:'stage'

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

   })("Botao_flutuante");
   //Edge symbol end:'Botao_flutuante'

   //=========================================================
   
   //Edge symbol: 'Botao_flutuante_1'
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

      })("Botao_flutuante_branco");
   //Edge symbol end:'Botao_flutuante_branco'

   //=========================================================
   
   //Edge symbol: 'Botao_flutuante_branco_1'
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

      })("Botao_flutuante_preto");
   //Edge symbol end:'Botao_flutuante_preto'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2384955");