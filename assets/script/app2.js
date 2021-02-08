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

    let matchedCards = [];
    let busy = true;


    let theCardIsFlipped;
    let firstCard, secondCard;
    // lockBoard = not to match another pair before the first pair matches (unflips) or unmatches (flips back)
    let lockBoard = false;

    let totalClicks = 0;
    let cardToCheck = null;
    let countDown;


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

    let timeRemaining = totalTime;
    let timer = document.getElementById('time-remaining');
    let ticker = document.getElementById('flips');
    let audioController = new AudioController();

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
        cardsArray.forEach(card => {
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

    function flipCard(card) {
        if (canFlipCard(card)) {

            if (!card.classList) return;

            totalClicks++;
            ticker.innerText = totalClicks;
            card.classList.add("visible");
            card.classList.add("flip");

            if (cardToCheck)
                checkForCardMatch(card);
            else
                cardToCheck = card;
        }
    }

    function checkForCardMatch(card) {

        if (getCardType(card) === getCardType(cardToCheck))
            cardMatch(card, cardToCheck);
        else
            cardmisMatch(card, cardToCheck);

        cardToCheck = null;
    }

    function cardMatch(card1, card2) {
        matchedCards.push(card1);
        matchedCards.push(card1);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if (matchedCards.length === cardsArray.length)
            victory();
    }

    function cardmisMatch(card1, card2) {
        busy = true;
        setTimeout(() => {
            card1.classList.remove("visible");
            card1.classList.remove("flip");
            card2.classList.remove("visible");
            card2.classList.remove("flip");
            busy = false;
        }, 1000);
    }


    function getCardType(card) {
        return card.dataset.framework;
    }

    //========
    function canFlipCard(card) {
        return (!busy && !matchedCards.includes(card) && card !== cardToCheck)
    }

    function victory() {
        clearInterval(countDown);
        document.getElementById("victory-text").classList.add("visible");
        audioController.victory();
        timeRemaining = totalTime;
        totalClicks = 0;
    }

    function gameOver() {
        clearInterval(countDown);
        document.getElementById("game-over-text").classList.add("visible");
        audioController.gameOver();
        timeRemaining = totalTime;
        totalClicks = 0;
    }


    // setting the countdown interval
    function startCountDown() {
        return setInterval(() => {
            timeRemaining--;
            timer.innerText = timeRemaining;
            if (timeRemaining === 0) {
                if (matchedCards.length === cardsArray.length) {
                    victory();
                } else {
                    gameOver();
                }
            }
        }, 1000);
    }

    //================================================================




    //This function will be exacuted right after its definition

    cards.forEach(card => card.addEventListener('click', function(card) {
        if (card) flipCard(card);
    }));
}


//if the html page hasn't loaded yet, wait for the page to get loaded and then call the function ready()

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}