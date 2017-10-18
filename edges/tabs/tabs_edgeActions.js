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
   
      Symbol.bindElementAction(compId, symbolName, "${tab1}", "click", function(sym, e) {
         sym.stop("tab1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab2}", "click", function(sym, e) {
         sym.stop("tab2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab3}", "click", function(sym, e) {
         sym.stop("tab3");

      });
      //Edge binding end

   })("Tabs");
   //Edge symbol end:'Tabs'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6087977");