'use script'

//selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const currentScore0El = document.querySelector('#current--0')
const currentScore1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')
let currentScore = 0
let activePlayer = 0

//Event listener for Roll dice method
btnRoll.addEventListener('click', () => {
  //1. generating random number
  const dice = Math.trunc(Math.random() * 6) + 1

  //2. displaying the dice with the corresponding dice image
  diceEl.classList.remove('hidden')
  diceEl.src = `images/dice-${dice}.png`

  //3. check if the dice roll is 1. if true switch player
  if (dice !== 1) {
    //1. add dice to current score
    currentScore += dice
    document.getElementById(
      `current--${activePlayer}`,
    ).textContent = currentScore
    // currentScore0El.textContent = currentScore //temporary changed by differentiating active player
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
})
