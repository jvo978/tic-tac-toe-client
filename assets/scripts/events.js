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
}

const onSignIn = function () {

}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn
}
