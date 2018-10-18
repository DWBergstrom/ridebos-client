'use strict'

const store = require('../store.js')

const onGetRidesSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
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

const onGetRidesFailure = function (response) {
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem retrieving your rides.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
}

const onGetOneRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
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

const onGetOneRideFailure = function (response) {
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem retrieving your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
}

const onCreateRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
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

const onCreateRideFailure = function (response) {
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem creating your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
}

const onUpdateRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
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

const onUpdateRideFailure = function (response) {
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem updating your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
}

const onDestroyOneRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  const rideId = store.rideData.ride.id
  // build HTML element with data
  const rideHTML = (`
    <p>ID: ${rideId} </p>
    <br />
    `)
  // append rideHTML to content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h2>Successfully deleted ride:  </h2>
    <br />`)
}

const onDestroyOneRideFailure = function (response) {
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem deleting your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
}

module.exports = {
  onGetRidesSuccess,
  onGetRidesFailure,
  onGetOneRideSuccess,
  onGetOneRideFailure,
  onCreateRideSuccess,
  onCreateRideFailure,
  onUpdateRideSuccess,
  onUpdateRideFailure,
  onDestroyOneRideSuccess,
  onDestroyOneRideFailure
}
