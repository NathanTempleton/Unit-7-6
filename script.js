// These will be used later so I've set them to zero for now.
let numGuess = 0
let num = 0
// This will create a random number that the player has to guess.
num = Math.floor(Math.random() * 10) + 1
num = parseInt(num)

// This lopp will have it so it continues until the player guesses a number right in the promt.
while (numGuess !== num) {
  numGuess = prompt('Guess a number between 1 and 10: ')
  numGuess = parseInt(numGuess)
  if (numGuess > num) {
    alert('You guessed to high, try again.')
  } else if (numGuess < num) {
    alert('You guessed to low, try again.')
  }
}

if (numGuess === num) {
  alert('You Win!')
}
