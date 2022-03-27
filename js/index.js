let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array = ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 14) + 1
    return randomNumber
}


function startGame() {
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

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

function addingNewCard() {
    let newCard = getRandomCard()
    sum += newCard
    //Push the cards to the array
    cards.push(newCard)
    console.log(cards)
    renderGame()
}