let firstCard = 1
let secondCard = 20
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "" 


// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
}
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
else if(sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} 
// else -> "You're out of the game! 😭"
else {
    message = "You're out of the game! 😭"
    isAlive = false
}

console.log(message)

