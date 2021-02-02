const cards = document.querySelectorAll('.memory-card');



// background music set
class AudioController {
   constructor() {
        this.backgroundMusic = new Audio ("assets/music/game_music.mp3");
        this.backgroundMusic.volume = 0.5;
        this.backgroundMusic.loop = true;
   }

   startMusic() {
       this.backgroundMusic.play(); 
   }
   stopMusic() {
       this.backgroundMusic.pause();
       this.backgroundMusic.currentTime=0; 
   }
   victory() {
       this.stopMusic(); 
   }
   gameOver() {
       this.stopMusic();
   }
}



// GRABBING OVERLAYS and CARD FROM THE DOM 
// 3 overlays: START, GAME OVER, VICTORY
// decided not to go with HTML collection in order to have access to JavaScript array functions
function ready(){
//makes array of elements
    let overlaysArray = Array.from(document.querySelectorAll(".overlay-text"));
    
// looping over overlay arrays 
    overlaysArray.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove ("visible")
            let audioController = new AudioController();
            audioController.startMusic();
            });    // WE STILL NEED TO INITIALISE THE GAME!!
        });
//================================================================================

    const cards = document.querySelectorAll('.memory-card');

        
// FLIP CARDS
    let theCardIsFlipped;
    let firstCard, secondCard;
// lockBoard = not to match another pair before the first pair matches (unflips) or unmatches (flips back)
    let lockBoard = false;

    function cardFlip() {
        if (lockBoard) return;
        // double click on the card
        if (this === firstCard) return;
        this.classList.add("flip");
        

        if (!theCardIsFlipped) {
            // first click
            theCardIsFlipped = true;
            firstCard = this;
        } else {
            // second click
            theCardIsFlipped = false;
            secondCard = this; 
            cardMatch()
        }
        }

    function cardMatch(){
         if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // both cards are matching
                firstCard.removeEventListener('click', cardFlip);
                secondCard.removeEventListener('click', cardFlip);
                resetBoard();
            } else {
            // NOT a match
            //setTimeout introduced because it removed flip class from the second card before we opened it
            notFlipped();
    }
 }

 function notFlipped () {
        lockBoard = true;
        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 700);
}

function resetBoard() {
  theCardIsFlipped = false;
  lockBoard = false;
  firstCard = null, null;
  secondCard = null;
}

//Immediately Invoked Function Expression
//This function will be exacuted right after its definition
(function shuffleCards() {
  cards.forEach(card => {
    let randNumber = Math.floor(Math.random() * 24);
    card.style.order = randNumber;
  });
})();

cards.forEach(card => card.addEventListener('click', cardFlip))
}


//if the html page hasn't loaded yet, wait for the page to get loaded and then call the function ready()

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}



