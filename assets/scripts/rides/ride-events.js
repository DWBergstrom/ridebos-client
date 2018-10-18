'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./ride-api.js')
const ui = require('./ride-ui.js')

const onGetRides = function () {
  api.getRides()
    .then(ui.onGetRidesSuccess)
    .catch(console.log)
}

const onCreateRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  api.createRide(rideData)
    .then(ui.onCreateRideSuccess)
    .catch(console.log)
}

const onGetOneRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  api.getOneRide(rideData)
    .then(ui.onGetOneRideSuccess)
    .catch(console.log)
}

const onUpdateRide = function (event) {
  event.preventDefault()
  const rideData = getFormFields(event.target)
  api.updateRide(rideData)
    .then(ui.onUpdateRideSuccess)
    .catch(console.log)
}

module.exports = {
  onGetRides,
  onCreateRide,
  onGetOneRide,
  onUpdateRide
}
