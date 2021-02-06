// Setting up Timer and Flips
class FlipAndTime {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }

    startGame() {
        this.totalClicks = 0;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        this.timeRemaining = this.totalTime;

        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);

    }

    shuffleCards(card) {
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            let randNumber = Math.floor(Math.random() * 24);
            card.style.order = randNumber;
        });
    }

    flipsCounter(card) {
        if (this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;

        }
    }
    canFlipCard(card) {
        return true;
    }
    // setting the countdown interval
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }

    victory() {
        clearInterval(this.countDown);
        document.getElementById("victory-text").classList.add("visible");
        this.audioController.victory();
    }

    gameOver() {
        clearInterval(this.countDown);
        document.getElementById("game-over-text").classList.add("visible");
        this.audioController.gameOver();
    }
}


// background music set
class AudioController {
    constructor() {
        this.backgroundMusic = new Audio("assets/music/game_music.mp3");
        this.gameOverSong = new Audio("assets/music/game_over_song.mp3");
        this.victorySong = new Audio("assets/music/victory_song.mp3");
        this.backgroundMusic.volume = 0.5;
        this.gameOverSong.volume = 0.2;
        this.backgroundMusic.loop = true;
    }

    startMusic() {
        this.backgroundMusic.play();
    }
    stopMusic() {
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;
    }
    victory() {
        this.stopMusic();
        this.victorySong.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSong.play();
    }
}



// GRABBING OVERLAYS and CARD FROM THE DOM 
// 3 overlays: START, GAME OVER, VICTORY
function ready() {
    //makes array of elements
    let overlaysArray = Array.from(document.querySelectorAll(".overlay-text"));
    let cardsArray = Array.from(document.querySelectorAll(".memory-card"));
    let game;

    const pathName = window.location.pathname;
    const gameType = pathName.indexOf("easy") !== -1 ? "EASY" :
        pathName.indexOf("hard") !== -1 ? "HARD" : "MEDIUM";

    if (gameType === "EASY") {
        game = new FlipAndTime(120, cardsArray);
    } else if (gameType === "MEDIUM") {
        game = new FlipAndTime(90, cardsArray);
    } else if (gameType === "HARD") {
        game = new FlipAndTime(60, cardsArray);
    }


    overlaysArray.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove("visible");
            //let audioController = new AudioController();
            //audioController.startMusic();
            game.startGame();
        });
    });

    cardsArray.forEach(card => {
        card.addEventListener('click', () => {
            game.flipsCounter(card);
        });
    });

    //=============================================================================

    const cards = document.querySelectorAll('.memory-card');

    let theCardIsFlipped;
    let firstCard, secondCard;
    // lockBoard = not to match another pair before the first pair matches (unflips) or unmatches (flips back)
    let lockBoard = false;


    // FLIP CARDS
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

    function cardMatch() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            disabled();
        } else {
            notFlipped();
        }
    }

    // both cards are matching
    function disabled() {
        firstCard.removeEventListener('click', cardFlip);
        secondCard.removeEventListener('click', cardFlip);
        resetBoard();
    }

    // NOT a match
    //setTimeout introduced because it removed flip class from the second card before we opened it
    function notFlipped() {
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
        firstCard = null;
        secondCard = null;
    }

    //Immediately Invoked Function Expression
    //This function will be exacuted right after its definition

    cards.forEach(card => card.addEventListener('click', cardFlip));
}


//if the html page hasn't loaded yet, wait for the page to get loaded and then call the function ready()

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}