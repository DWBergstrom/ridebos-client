'use strict'

const store = require('../store.js')

const onGetRidesSuccess = function (response) {
  // empty content element
  $('#ride-content').html('')
  // loop through API response data
  response.rides.forEach(ride => {
    // build HTML element with data
    const rideHTML = (`
      <h4>Ride Name: ${ride.ride_name} </h4>
      <p>Date: ${ride.date} </p>
      <p>Duration: ${ride.time} </p>
      <p>Distance: ${ride.distance} </p>
      <p>ID: ${ride.id} </p>
      <br />
      `)
    // append rideHTML to content
    $('#ride-content').append(rideHTML)
  })
  // add heading when data is rendered
  $('#ride-content').prepend(`<h2>All your rides:  </h2>
    <br />`)
}

const onCreateRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').html('')
  const ride = response.ride
  // build HTML element with data
  const rideHTML = (`
    <h4>Ride Name: ${ride.ride_name} </h4>
    <p>Date: ${ride.date} </p>
    <p>Duration: ${ride.time} </p>
    <p>Distance: ${ride.distance} </p>
    <p>ID: ${ride.id} </p>
    <br />
    `)
  // append rideHTML to content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h2>Your new ride:  </h2>
    <br />`)
}

const onGetOneRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').html('')
  const ride = response.ride
  // build HTML element with response
  const rideHTML = (`
    <h4>Ride Name: ${ride.ride_name} </h4>
    <p>Date: ${ride.date} </p>
    <p>Duration: ${ride.time} </p>
    <p>Distance: ${ride.distance} </p>
    <p>ID: ${ride.id} </p>
    <br />
    `)
  // append rideHTML to ride-content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h2>Your requested ride:  </h2>
    <br />`)
}

const onUpdateRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').html('')
  const ride = response.ride
  // build HTML element with data
  const rideHTML = (`
    <h4>Ride Name: ${ride.ride_name} </h4>
    <p>Date: ${ride.date} </p>
    <p>Duration: ${ride.time} </p>
    <p>Distance: ${ride.distance} </p>
    <p>ID: ${ride.id} </p>
    <br />
    `)
  // append rideHTML to content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h2>Your updated ride:  </h2>
    <br />`)
}

const onDestroyOneRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').html('')
  const rideId = store.rideData.ride.id
  // build HTML element with data
  const rideHTML = (`
    <p>ID of deleted ride: ${rideId} </p>
    <br />
    `)
  // append rideHTML to content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h2>Your deleted ride:  </h2>
    <br />`)
}

module.exports = {
  onGetRidesSuccess,
  onCreateRideSuccess,
  onGetOneRideSuccess,
  onUpdateRideSuccess,
  onDestroyOneRideSuccess
}
