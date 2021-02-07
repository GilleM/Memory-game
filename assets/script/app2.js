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

function ready() {
    let overlaysArray = Array.from(document.querySelectorAll(".overlay-text"));
    let cardsArray = Array.from(document.querySelectorAll(".memory-card"));
    let game;
    let totalTime;

    let matchedCard = [];
    let busy = true;


    let theCardIsFlipped;
    let firstCard, secondCard;
    // lockBoard = not to match another pair before the first pair matches (unflips) or unmatches (flips back)
    let lockBoard = false;

    let totalClicks = 0;
    let cardToCheck = null;
    let countDown;
    let timeRemaining = totalTime;
    let timer = document.getElementById('time-remaining');
    let ticker = document.getElementById('flips');
    let audioController = new AudioController();


    const pathName = window.location.pathname;
    const gameType = pathName.indexOf("easy") !== -1 ? "EASY" :
        pathName.indexOf("hard") !== -1 ? "HARD" : "MEDIUM";

    if (gameType === "EASY") {
        totalTime = 120;
    } else if (gameType === "MEDIUM") {
        totalTime = 90;
    } else if (gameType === "HARD") {
        totalTime = 60;
    }


    overlaysArray.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove("visible");
            startGame();
        });
    });

    cardsArray.forEach(card => {
        card.addEventListener('click', () => {
            flipCard(card);
        });
    });

    //=====================================
    const cards = document.querySelectorAll('.memory-card');


    function startGame() {

        setTimeout(() => {
            audioController.startMusic();
            shuffleCards();
            countDown = startCountDown();
            busy = false;
        }, 500);

        hideCards();
        timer.innerText = timeRemaining;
        ticker.innerText = totalClicks;
    }

    function hideCards() {
        cardsArray.forward(card => {
            card.classList.remove("visible");
            card.classList.remove("matched");
            card.classList.remove("flip");
        });
    }

    function shuffleCards(card) {
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            let randNumber = Math.floor(Math.random() * 24);
            card.style.order = randNumber;
        });
    }

    canFlipCard(card) {
        //return true
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
    }



    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add("visible");

            if (this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }


    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardmisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card1);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if (this.matchedCards.length === this.cardsArray)
            this.victory();
    }

    cardmisMatch(card) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove("visible");
            card2.classList.remove("visible");
            this.busy = false;
        }, 1000);
    }

    getCardType(card) {
        return card.getElementsByClassName("data-framework");
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









//================================================================




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

function disabled() {
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
    resetBoard();
}

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


//This function will be exacuted right after its definition

cards.forEach(card => card.addEventListener('click', cardFlip));
}


//if the html page hasn't loaded yet, wait for the page to get loaded and then call the function ready()

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}