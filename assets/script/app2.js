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

    
// FLIPPING CARDS when we click it (HTML collection)
    const cards = document.querySelectorAll('.memory-card');

    function cardFlip() {
        this.classList.toggle("flip");
        }
    cards.forEach(card => card.addEventListener('click', cardFlip))
    }
    //game.cardFLip(card)

//if the html page hasn't loaded yet, wait for the page to get loaded and then call the function ready()

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}



