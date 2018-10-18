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

const updateRide = function (rideData) {
  const rideId = rideData.ride.id
  return $.ajax({
    url: config.apiUrl + '/rides/' + rideId,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: rideData
  })
}

const destroyOneRide = function (rideData) {
  const rideId = store.rideData.ride.id
  return $.ajax({
    url: config.apiUrl + '/rides/' + rideId,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

module.exports = {
  getRides,
  createRide,
  getOneRide,
  updateRide,
  destroyOneRide
}
