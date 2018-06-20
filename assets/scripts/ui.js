const store = require('./store')

const signUpSuccess = function (response) {
  $('#messageStatus').html('Wecome, you are signed up!')
}

const signUpFailure = function (response) {
  $('#messageStatus').html('Sign up unsucessful, please try again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-out').show()
  $('#signUp-signIn').hide()
  $('#changePassword').show()
  $('#messageStatus').html('You are now signed in!')
  $('#new-game').show()
  $('#second-message').html('Click New Game to play')
}

const signInFailure = function (response) {
  $('#messageStatus').html('Sign in error, try again!')
}

const changePasswordSuccess = function (response) {
  $('#messageStatus').html('Change Password successful')
  $('#second-message').html('')
}

const changePasswordFailure = function (response) {
  $('#messageStatus').html('Change Password Unsuccessful')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#sign-out').hide()
  $('#messageStatus').html('You are now signed off')
  $('#signUp-signIn').show()
  $('#changePassword').hide()
  $('#new-game').hide()
  $('.grid-container').hide()
  $('#game-info').hide()
  $('#game-id').html('')
  $('#second-message').html('')
}

const signOutFailure = function (response) {
  $('#messageStatus').html('Log off unsuccessful')
}

const createGameSuccess = function (response) {
  store.game = response.game // store game object in order to update game
  $('#messageStatus').html('New game -- Player X turn')
  $('.grid-item').html('')
  $('.grid-container').show()
  $('#second-message').html('')
  $('#game-info').show()
  // $('#new-game').hide()
}
// console.log(response.game.id)

const createGameFailure = function (response) {
  $('#messageStatus').html('Unable to create new game, try again')
}
const updateGameSuccess = function (response) {
  // store.game = response.game.cells
}
const updateGameFailure = function (response) {
  $('#messageStatus').html('Unable to update game')
}
const showGameSuccess = function (response) {
  $('#second-message').html('')
  const displayMessage = (`<p>Game ID: ${response.game.id}</p>
                           <p>Player O: ${response.game.player_o}</p>
                           <p>Player X ID: ${response.game.player_x.id}</p>
                           <p>Player X Email: ${response.game.player_x.email}</p>`)
  $('#second-message').append(displayMessage)
//  const displayMessage = (`<p>yea...</p>`)
}
const showGameFailure = function (response) {
  $('#messageStatus').html('Unable to view game info')
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  updateGameSuccess: updateGameSuccess,
  updateGameFailure: updateGameFailure,
  showGameFailure: showGameFailure,
  showGameSuccess: showGameSuccess
}
