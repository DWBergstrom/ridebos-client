'use strict'

const store = require('../store.js')
const authAllRides = require('./auth-allrides.js')

const signUpSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').html('Sign-up successful! Please sign in.')
  $('#auth-message').css('color', 'white')
  $('.auth').trigger('reset')
  $('.sign-up').attr('aria-expanded', 'false')
  $('.dropdown-menu').removeClass('show')
}

const signUpError = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong! Please try signing up again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
  $('.sign-up').attr('aria-expanded', 'false')
  $('.dropdown-menu').removeClass('show')
}

const signInSuccess = function (response) {
  $('.auth').trigger('reset')
  $('#auth-message').html('')
  store.user = response.user
  $('.auth-in').addClass('hidden')
  $('.auth-out').removeClass('hidden')
  $('.auth-message').css('margin-top', '50px')
  $('.rides').removeClass('hidden')
  $('.ride-content').removeClass('hidden')
  $('#ride-content').removeClass('hidden')
  $('.side-nav').removeClass('hidden')
  $('.side-nav').css('background-color', 'rgba(70, 130, 180, .7)')
  authAllRides.onAuthGetRides()
}

const signInError = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong! Please try signing in again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
  $('.sign-in').attr('aria-expanded', 'false')
  $('.dropdown-menu').removeClass('show')
}

const changePasswordSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').html('Password change successful!').fadeOut(5000)
  $('#auth-message').css('color', 'white')
  $('.auth').trigger('reset')
  $('.change-password').attr('aria-expanded', 'false')
  $('.dropdown-menu').removeClass('show')
}

const changePasswordFailure = function () {
  $('#auth-message').show()
  $('#auth-message').html('Something went wrong with your password change! Please try again.').fadeOut(5000)
  $('#auth-message').css('color', 'red')
  $('.auth').trigger('reset')
  $('.change-password').attr('aria-expanded', 'false')
  $('.dropdown-menu').removeClass('show')
}

const signOutSuccess = function () {
  $('#ride-content').html('')
  $('#auth-message').show()
  $('#auth-message').html('You are signed out.  Go ride your bike!').fadeOut(5000)
  $('#auth-message').css('color', 'white')
  $('.auth').trigger('reset')
  $('#auth-message').show()
  $('.auth-message').css('margin-top', '-5px')
  $('.auth-in').removeClass('hidden')
  $('.auth-out').addClass('hidden')
  $('.rides').addClass('hidden')
  $('.side-nav').addClass('hidden')
  $('#ride-content').addClass('hidden')
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
