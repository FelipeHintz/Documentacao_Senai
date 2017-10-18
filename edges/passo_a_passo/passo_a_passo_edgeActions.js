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
   
   //Edge symbol: 'Card'
   (function(symbolName) {   
   
   })("Card_titulo");
   //Edge symbol end:'Card_titulo'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Conteudo");
   //Edge symbol end:'Conteudo'

   //=========================================================
   
   //Edge symbol: 'BigButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${actions}", "mouseover", function(sym, e) {
         sym.stop("Hover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${actions}", "mouseout", function(sym, e) {
         sym.stop("Out");

      });
      //Edge binding end

   })("BigButton");
   //Edge symbol end:'BigButton'

   //=========================================================
   
   //Edge symbol: 'Passo_a_passo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${BigButton3}", "click", function(sym, e) {
         sym.getSymbol("Conteudo").play();
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BigButton3}", "touchend", function(sym, e) {
         sym.getSymbol("Conteudo").play();
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BigButton3Copy}", "click", function(sym, e) {
         sym.getSymbol("Conteudo").playReverse();
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BigButton3Copy}", "touchend", function(sym, e) {
         sym.getSymbol("Conteudo").playReverse();
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Passo_a_passo");
   //Edge symbol end:'Passo_a_passo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6087977");