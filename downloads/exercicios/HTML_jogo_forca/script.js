window.onload = function () {

  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;           // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space = 0;          // Number of spaces in word '-'
  var vivo = true;        // isAlive
  var fase = 0;
  
    // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");


  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
	pal = word[fase];
    for (var i = 0; i < pal.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (pal[i] === "-") {
        guess.innerHTML = "-";
        space += 1;
      } else {
        guess.innerHTML = "_";
      }

      if (pal[i] === " ") {
        guess.innerHTML = " ";
        space += 1;
      }
       
      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = lives + " tentativas restantes";
    if (lives < 1) {
      showLives.innerHTML = "<span style='background-color:red;padding:10px;margin-top:20px;color:white;font-size:14px;'>Fim de Jogo</span>";
      correct.parentNode.removeChild(correct);
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
		fase++;
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		console.log(fase);
		if ( fase == word.length ){
			showLives.innerHTML = "<span style='background-color:green;padding:10px;margin-top:20px;color:white;font-size:14px'>Voc&ecirc; venceu!</span>";
		} else {
			swal({
				title: "Parabéns!",
				text: "Resposta correta, continue para a próxima pergunta.",
				html: true
			});
			play();
		}
			
	  }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
  check = function () {
    
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
		pal = word[fase];
        for (var i = 0; i < pal.length; i++) {
          if (pal[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (pal.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    
  }
  
    
  // Play
  play = function () {
    word = ["RESPOSTA","RESPOSTA","RESPOSTA", "RESPOSTA"];
	hints = ["Pergunta","Pergunta","Pergunta","Pergunta"];
	showClue.innerHTML = hints[fase];
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();  
  }

  play();

   // Reset

  document.getElementById('reset').onclick = function() {
    if ( (fase-1) == word.length )
		window.location.reload(true);
	else {
		if (lives != 0)
			correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		play();
	}
  }
}


