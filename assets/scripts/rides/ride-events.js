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
  const data = getFormFields(event.target)
  api.createRide(data)
    .then(ui.onCreateRideSuccess)
    .catch(console.log)
}

module.exports = {
  onGetRides,
  onCreateRide
}
