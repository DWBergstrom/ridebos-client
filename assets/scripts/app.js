'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/auth-events.js')
const rideEvents = require('./rides/ride-events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#total-rides').on('click', rideEvents.onGetRides)
  $('#ride-create').on('submit', rideEvents.onCreateRide)
  $('#ride-update').on('submit', rideEvents.onUpdateRide)
  $('#one-ride').on('submit', rideEvents.onGetOneRide)
})
