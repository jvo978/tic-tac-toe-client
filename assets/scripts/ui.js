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
  $('#messageStatus').html('Signed in!')
  $('#new-game').show()
}

const signInFailure = function (response) {
  $('#messageStatus').html('Incorrect login, try again!')
}

const changePasswordSuccess = function (response) {
  $('#messageStatus').html('Change Password successful')
}

const changePasswordFailure = function (response) {
  $('#messageStatus').html('Change Password Unsuccessful')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#sign-out').hide()
  $('#messageStatus').html('Logged off')
  $('#signUp-signIn').show()
  $('#changePassword').hide()
}

const signOutFailure = function (response) {
  $('#messageStatus').html('Log off unsuccessful')
}

const createGameSuccess = function (response) {
  store.gameid = response.game.id // store game id in order to update game
  $('#messageStatus').html('New game started')
  $('.grid-item').html('')
  // console.log(response.game.id)
}

const createGameFailure = function (response) {
  $('#new-game-message').html('You have to sign in first')
}
const updateGameSuccess = function (response) {
  store.game = response.game.cells
}

const updateGameFailure = function (response) {
  console.log(response)
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
  updateGameFailure: updateGameFailure
}
