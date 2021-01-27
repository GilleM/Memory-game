// FLIPPING CARD when we click it

const cards = document.querySelectorAll('.memory-card');

function cardFlip() {
    this.classList.toggle("flip");
}

cards.forEach(card => card.addEventListener('click', cardFlip))