'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./ride-api.js')
const ui = require('./ride-ui.js')
const store = require('../store.js')

const onGetRides = function () {
  api.getRides()
    .then(ui.onGetRidesSuccess)
    .catch(ui.onGetRidesFailure)
}

const onGetOneRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  api.getOneRide(rideData)
    .then(ui.onGetOneRideSuccess)
    .catch(ui.onGetOneRideFailure)
}

const onCreateRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  if (rideData.ride.distance < 0 || rideData.ride.time < 0) {
    $('#ride-content').html('Please make sure your time and distance are positive numbers, and try adding your ride info again.')
    window.scrollTo(0, 0)
    $('.rides').trigger('reset')
  } else {
    api.createRide(rideData)
      .then(ui.onCreateRideSuccess)
      .catch(ui.onCreateRideFailure)
  }
}

const onUpdateRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  if (rideData.ride.distance < 0 || rideData.ride.time < 0) {
    $('#ride-content').html('Please make sure your time and distance are positive numbers, and try updating your ride info again.')
    window.scrollTo(0, 0)
    $('.rides').trigger('reset')
  } else {
    api.updateRide(rideData)
      .then(ui.onUpdateRideSuccess)
      .catch(ui.onUpdateRideFailure)
  }
}

const onDestroyRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  store.rideData = rideData
  api.destroyOneRide(rideData)
    .then(ui.onDestroyOneRideSuccess)
    .catch(ui.onDestroyOneRideFailure)
}

module.exports = {
  onGetRides,
  onGetOneRide,
  onCreateRide,
  onUpdateRide,
  onDestroyRide
}
