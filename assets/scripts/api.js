const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://aqueous-atoll-85096.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token // needs token to change password
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token // needs token to signout user
    }
  })
}
const showGame = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/' + store.game.id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: event.target.id,
          value: event.target.innerHTML
        },
        over: store.game.over
      }
    //  console.log(data)
    //  console.log(data.game.cells)
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  createGame: createGame,
  updateGame: updateGame,
  showGame: showGame
}
