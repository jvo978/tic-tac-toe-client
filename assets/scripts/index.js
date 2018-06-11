'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const store = require('./store')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#new-game').on('click', events.onCreateGame)
  $('.grid-item').on('click', function (event) {
    playerMove(event)
  })
})
// console.log('This is what happens when I pressed submit')
// const movesArray = ['', '', '', '', '', '', '', '', '']
let turn = 0
const playerMove = function (event) {
  if (event.target.innerHTML === '') {
    if (turn % 2 === 0) {
      event.target.innerHTML = 'X'
      $('#messageStatus').html('Player Os turn!')
    } else {
      event.target.innerHTML = 'O'
      $('#messageStatus').html('Player Xs turn!')
    }
    events.onUpdateGame(event)
    checkWin(event)
    turn++
  }
}
const checkWin = function (event) {
  if ((store.game[0] === store.game[1] === store.game[2]) ||
      (store.game[3] === store.game[4] === store.game[5]) ||
      (store.game[6] === store.game[7] === store.game[8]) ||
      (store.game[0] === store.game[3] === store.game[6]) ||
      (store.game[1] === store.game[4] === store.game[7]) ||
      (store.game[2] === store.game[5] === store.game[8]) ||
      (store.game[0] === store.game[4] === store.game[8]) ||
      (store.game[2] === store.game[4] === store.game[6])) {

  }
}
