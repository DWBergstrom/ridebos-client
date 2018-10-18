'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').html('Sign-up successful! Please sign in.')
  $('#auth-message').css('color', 'green')
  $('.auth').trigger('reset')
}

const signUpError = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong! Please try signing up again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
}

const signInSuccess = function (response) {
  $('.auth').trigger('reset')
  store.user = response.user
  $('.auth-in').addClass('hidden')
  $('.auth-out').removeClass('hidden')
  $('.rides').removeClass('hidden')
}

const signInError = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong! Please try signing in again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').html('Password change successful!').fadeOut(5000)
  $('#auth-message').css('color', 'green')
  $('.auth').trigger('reset')
}

const changePasswordFailure = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong with your password change! Please try again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
}

const signOutSuccess = function () {
  $('#ride-content').html('')
  $('#auth-message').show()
  $('#auth-message').html('You are signed out.  Go ride your bike!').fadeOut(5000)
  $('#auth-message').css('color', 'green')
  $('.auth').trigger('reset')
  $('#auth-message').show()
  $('.auth-in').removeClass('hidden')
  $('.auth-out').addClass('hidden')
  $('.rides').addClass('hidden')
}

const signOutFailure = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong signing out! Check your network connection.')
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
