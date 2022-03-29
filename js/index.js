let player = {
    name: "Alex",
    chips: 100
}

let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomCardNumber = Math.floor(Math.random() * 13) + 1
        if (randomCardNumber > 10){
            return 10
      } else if (randomCardNumber === 1)  {
          return 11
      } else {
          return randomCardNumber
      }
}
 

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
// Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive && !hasBlackJack) {
        let newCard = getRandomCard()
        sum += newCard
        //Push the cards to the array
        cards.push(newCard)
        console.log(cards)
        renderGame()
    }

}