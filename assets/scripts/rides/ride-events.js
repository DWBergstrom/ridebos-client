'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./ride-api.js')
const ui = require('./ride-ui.js')

const onGetRides = function () {
  api.getRides()
    .then(ui.onGetRidesSuccess)
    .catch(console.log)
}

module.exports = {
  onGetRides
}
