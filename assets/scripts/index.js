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
  $('#game-info').on('click', events.onShowGame)
  $('.grid-item').on('click', function (event) {
    playerMove(event)
  })
})
// console.log('This is what happens when I pressed submit')
// let board = []
//
// const playsOnBoard = function () {
//
// }
// let oWins = 0
// let xWins = 0
// // let ties = 0
// let x = playerX
// let o = playerO
let turn = 0
let currentPlayer = 'X'

const playerMove = function (event) {
  // console.log('event is', event.target.id)
  // board[event.target.id] = 'X'
  // console.log(board)
  if (event.target.innerHTML === '' && store.game.over === false) {
    if (currentPlayer === 'X') {
      store.game.cells[event.target.id] = 'X' // store.game.cells is my array
      event.target.innerHTML = 'X' // target clicked
      $('#messageStatus').html('Player O turn')
      currentPlayer = 'O' // switch current player
      //  console.log('inside if', board)
      //  $('#messageStatus').html('Player Os turn!')
    } else {
      store.game.cells[event.target.id] = 'O'
      event.target.innerHTML = 'O'
      $('#messageStatus').html('Player X turn')
      currentPlayer = 'X'
      //  $('#messageStatus').html('Player Xs turn!')
    }
    turn++
    checkWin(event)
    // elementId(event)
    // console.log(elementId())
    // events.onUpdateGame(event)
    // checkWin(event)
    events.onUpdateGame(event)
  }
}
const playerXwins = function (event) {
  $('#messageStatus').html('Player X Wins!!')
}
const playerOwins = function (event) {
  $('#messageStatus').html('Player O Wins!!')
}
const checkWin = function (event) {
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    playerXwins(event)
    store.game.over = true
  }
  if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    playerOwins(event)
    store.game.over = true
  }
  if (turn === 9) {
    $('#messageStatus').html('TIE GAME!!')
    store.game.over = true
  }
}
