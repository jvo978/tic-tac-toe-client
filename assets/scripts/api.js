const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    data: data
  })
}

module.exports = {
  signUp: signUp
}
