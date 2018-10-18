'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getRides = function () {
  return $.ajax({
    url: config.apiUrl + '/rides',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const createRide = function (rideData) {
  console.log(rideData)
  return $.ajax({
    url: config.apiUrl + '/rides',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'POST',
    data: rideData
  })
}

module.exports = {
  getRides,
  createRide
}
