let numGuess = 0
let num = 0
num = Math.floor(Math.random() *10) +1
num = parseInt(num)

while (numGuess != num) {
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