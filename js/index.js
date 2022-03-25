let firstCard = 1
let secondCard = 20
let cards = [firstCard, secondCard] //array = ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}
function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum
    // if less than or equal to 20 -> "Do you want to draw a new card?"
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    // else if exactly 21 -> "Wohoo! You've got Blackjack!"
    else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true

    } 
    // else -> "You're out of the game!"
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    //Display the message in the messageEl
    messageEl.textContent = message

}

function newCard() {
    let card = 2
    sum += card
    renderGame()
}