const signUpSuccess = function (Response) {
  console.log('Reponse is ', Response)
}

const signUpFailure = function (error) {
  console.log('error is ', error)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure
}
