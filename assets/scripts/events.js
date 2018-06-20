const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('checking if submit still works')
  const data = getFormFields(event.target)
  // console.log(data) -- shows data! From entry field
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)

  document.getElementById('sign-up-form').reset()
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

  document.getElementById('sign-in-form').reset()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)

  document.getElementById('change-password-form').reset() // clear form text after event
}

const onShowGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
const onUpdateGame = function (event) {
  event.preventDefault()

  api.updateGame(event)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onCreateGame: onCreateGame,
  onUpdateGame: onUpdateGame,
  onShowGame: onShowGame
}
