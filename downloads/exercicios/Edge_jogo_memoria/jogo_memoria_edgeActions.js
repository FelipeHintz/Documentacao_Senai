var quadrado1 = 0;
var quadrado2 = 0;
var completo = 0;
var stageSym;
var contErros = 0;
var safe = new Array();

var quadrados = new Array();
var quadrados_names = new Array();
function verifica(){
		if(
			quadrado1 == "Card1" && quadrado2 == "Card11"  || quadrado1 == "Card11"  && quadrado2 == "Card1" ||
 			quadrado1 == "Card2" && quadrado2 == "Card12"  || quadrado1 == "Card12"  && quadrado2 == "Card2" ||
 			quadrado1 == "Card3" && quadrado2 == "Card13"  || quadrado1 == "Card13"  && quadrado2 == "Card3" ||
 			quadrado1 == "Card4" && quadrado2 == "Card14"  || quadrado1 == "Card14"  && quadrado2 == "Card4" ||
 			quadrado1 == "Card5" && quadrado2 == "Card15"  || quadrado1 == "Card15"  && quadrado2 == "Card5" ||
 			quadrado1 == "Card6" && quadrado2 == "Card16"  || quadrado1 == "Card16"  && quadrado2 == "Card6" || 
 			quadrado1 == "Card7" && quadrado2 == "Card17"  || quadrado1 == "Card17"  && quadrado2 == "Card7" ||
 			quadrado1 == "Card8" && quadrado2 == "Card18"  || quadrado1 == "Card18"  && quadrado2 == "Card8" ||
 			quadrado1 == "Card9" && quadrado2 == "Card19"  || quadrado1 == "Card19"  && quadrado2 == "Card9" ||
 			quadrado1 == "Card10" && quadrado2 == "Card20" || quadrado1 == "Card20"  && quadrado2 == "Card10"
		){
			safe.push(quadrado1);
			safe.push(quadrado2);
			quadrado1 = 0;
			quadrado2 = 0;
			completo++;
			if (completo == 10) {
				swal({
					title: "Parabéns",
					text: "Você identificou e nomeou corretamente os principais equipamentos encontrados em bancadas de laboratórios de eletrônica utilizados para a validação e teste de circuitos eletrônicos.",
					html: true,
					type: 'success',
				},function(isConfirm){
					stageSym.stop(2500);
				});
			}
		
			return;
		} else {
			for(var i = 0; i < 20; i++){
				if(quadrados_names[i] == quadrado1) quadrados[i].play();
				if(quadrados_names[i] == quadrado2) quadrados[i].play();
			}
			
		}
	quadrado1 = 0;
	quadrado2 = 0;
}
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
         for(var i = 1; i<=20; i++){
         	var str = "Card"+i;
         	quadrados.push(sym.getSymbol(str));
         	quadrados_names.push("Card"+i);
         	stageSym = sym;
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("inicio");

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Card_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card1";
         } else {
         	quadrado2 = "Card1";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("Card_1");
   //Edge symbol end:'Card_1'

   //=========================================================
   
   //Edge symbol: 'Card_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card2";
         } else {
         	quadrado2 = "Card2";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_2");
   //Edge symbol end:'Card_2'

   //=========================================================
   
   //Edge symbol: 'Card_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card3";
         } else {
         	quadrado2 = "Card3";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_3");
   //Edge symbol end:'Card_3'

   //=========================================================
   
   //Edge symbol: 'Card_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card4";
         } else {
         	quadrado2 = "Card4";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_4");
   //Edge symbol end:'Card_4'

   //=========================================================
   
   //Edge symbol: 'Card_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card5";
         } else {
         	quadrado2 = "Card5";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_5");
   //Edge symbol end:'Card_5'

   //=========================================================
   
   //Edge symbol: 'Card_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card6";
         } else {
         	quadrado2 = "Card6";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_6");
   //Edge symbol end:'Card_6'

   //=========================================================
   
   //Edge symbol: 'Card_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card7";
         } else {
         	quadrado2 = "Card7";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_7");
   //Edge symbol end:'Card_7'

   //=========================================================
   
   //Edge symbol: 'Card_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card8";
         } else {
         	quadrado2 = "Card8";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_8");
   //Edge symbol end:'Card_8'

   //=========================================================
   
   //Edge symbol: 'Card_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card9";
         } else {
         	quadrado2 = "Card9";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_9");
   //Edge symbol end:'Card_9'

   //=========================================================
   
   //Edge symbol: 'Card_10'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card10";
         } else {
         	quadrado2 = "Card10";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_10");
   //Edge symbol end:'Card_10'

   //=========================================================
   
   //Edge symbol: 'Card_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card11";
         } else {
         	quadrado2 = "Card11";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_11");
   //Edge symbol end:'Card_11'

   //=========================================================
   
   //Edge symbol: 'Card_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card12";
         } else {
         	quadrado2 = "Card12";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_12");
   //Edge symbol end:'Card_12'

   //=========================================================
   
   //Edge symbol: 'Card_13'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card13";
         } else {
         	quadrado2 = "Card13";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_13");
   //Edge symbol end:'Card_13'

   //=========================================================
   
   //Edge symbol: 'Card_14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card14";
         } else {
         	quadrado2 = "Card14";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_14");
   //Edge symbol end:'Card_14'

   //=========================================================
   
   //Edge symbol: 'Card_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card15";
         } else {
         	quadrado2 = "Card15";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_15");
   //Edge symbol end:'Card_15'

   //=========================================================
   
   //Edge symbol: 'Card_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card16";
         } else {
         	quadrado2 = "Card16";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_16");
   //Edge symbol end:'Card_16'

   //=========================================================
   
   //Edge symbol: 'Card_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card17";
         } else {
         	quadrado2 = "Card17";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_17");
   //Edge symbol end:'Card_17'

   //=========================================================
   
   //Edge symbol: 'Card_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card18";
         } else {
         	quadrado2 = "Card18";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_18");
   //Edge symbol end:'Card_18'

   //=========================================================
   
   //Edge symbol: 'Card_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card19";
         } else {
         	quadrado2 = "Card19";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_19");
   //Edge symbol end:'Card_19'

   //=========================================================
   
   //Edge symbol: 'Card_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         if (quadrado1 == 0) {
         	quadrado1 = "Card20";
         } else {
         	quadrado2 = "Card20";
         	verifica();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CardVirado}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Card_20");
   //Edge symbol end:'Card_20'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9095674");