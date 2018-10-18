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

const getOneRide = function (rideData) {
  const rideId = rideData.ride.id
  return $.ajax({
    url: config.apiUrl + '/rides/' + rideId,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

module.exports = {
  getRides,
  createRide,
  getOneRide
}
