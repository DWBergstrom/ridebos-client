'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').html('Sign-up successful! Please sign in.')
  $('#auth-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpError = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong! Please try signing up again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#auth-message').show()
  $('#auth-message').html('Sign-in successful!').fadeOut(5000)
  $('#auth-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#total-rides').removeClass('hidden')
  $('#ride-create').removeClass('hidden')
  $('#ride-update').removeClass('hidden')
  $('#ride-destroy').removeClass('hidden')
  $('#one-ride').removeClass('hidden')
}

const signInError = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong! Please try signing in again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').html('Password change successful!').fadeOut(5000)
  $('#auth-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong with your password change! Please try again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#ride-content').html('')
  $('#auth-message').show()
  $('#auth-message').html('Sign out successful!').fadeOut(4000)
  $('#auth-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#auth-message').show()
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#total-rides').addClass('hidden')
  $('#ride-create').addClass('hidden')
  $('#ride-update').addClass('hidden')
  $('#ride-destroy').addClass('hidden')
  $('#one-ride').addClass('hidden')
}

const signOutFailure = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong signing out! Check your network connection.')
  $('#auth-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpError,
  signInError,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
