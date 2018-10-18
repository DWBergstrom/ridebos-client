'use strict'

const store = require('../store.js')
const rideTotals = require('./ride-totals.js')

const onGetRidesSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  $('#totals-content').html('')
  // loop through API response data
  response.rides.forEach(ride => {
    // get first 10 chars of date (removes time from datetime)
    const tempDate = ride.date
    const date = tempDate.substring(0, 10)
    // build HTML element with data
    const rideHTML = (`
      <h5>Ride Name: ${ride.ride_name} </h5>
      <p>Date: ${date} </p>
      <p>Duration: ${ride.time} minutes</p>
      <p>Distance: ${ride.distance} miles</p>
      <p>Ride ID: ${ride.id} </p>
      <br />
      `)
    // append rideHTML to content
    $('#ride-content').append(rideHTML)
  })
  // add heading when data is rendered
  $('#ride-content').prepend(`<h3>All your rides:  </h3>
    <br />`)
  $('#ride-content').css('background-color', 'rgba(70, 130, 180, .7)')
  $('#ride-content').css('padding', '20px')
  window.scrollTo(0, 0)
  rideTotals.getRidesTotals()
    .then(rideTotals.onGetRidesTotalsSuccess)
    .catch(rideTotals.onGetRidesTotalsFailure)
}

const onGetRidesFailure = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem retrieving your rides.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
  window.scrollTo(0, 0)
}

const onGetOneRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  const ride = response.ride
  // get first 10 chars of date (removes time from datetime)
  const tempDate = ride.date
  const date = tempDate.substring(0, 10)
  // build HTML element with response
  const rideHTML = (`
    <h4>Ride Name: ${ride.ride_name} </h4>
    <p>Date: ${date} </p>
    <p>Duration: ${ride.time} minutes</p>
    <p>Distance: ${ride.distance} miles</p>
    <p>Ride ID: ${ride.id} </p>
    <br />
    `)
  // append rideHTML to ride-content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h4>Your requested ride:  </h4>
    <br />`)
  window.scrollTo(0, 0)
}

const onGetOneRideFailure = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem retrieving your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
  window.scrollTo(0, 0)
}

const onCreateRideSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  const ride = response.ride
  // get first 10 chars of date (removes time from datetime)
  const tempDate = ride.date
  const date = tempDate.substring(0, 10)
  // build HTML element with data
  const rideHTML = (`
    <h4>Ride Name: ${ride.ride_name} </h4>
    <p>Date: ${date} </p>
    <p>Duration: ${ride.time} minutes</p>
    <p>Distance: ${ride.distance} miles</p>
    <p>ID: ${ride.id} </p>
    <br />
    `)
  // append rideHTML to content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h4>Your new ride:  </h4>
    <br />`)
  window.scrollTo(0, 0)
  rideTotals.getRidesTotals()
    .then(rideTotals.onGetRidesTotalsSuccess)
    .catch(rideTotals.onGetRidesTotalsFailure)
}

const onCreateRideFailure = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem creating your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
  window.scrollTo(0, 0)
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
    <p>Duration: ${ride.time} minutes</p>
    <p>Distance: ${ride.distance} miles</p>
    <p>Ride ID: ${ride.id} </p>
    <br />
    `)
  // append rideHTML to content
  $('#ride-content').append(rideHTML)
  $('#ride-content').prepend(`<h4>Your updated ride:  </h4>
    <br />`)
  window.scrollTo(0, 0)
}

const onUpdateRideFailure = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem updating your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
  window.scrollTo(0, 0)
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
  $('#ride-content').prepend(`<h4>Successfully deleted ride:  </h4>
    <br />`)
  window.scrollTo(0, 0)
  rideTotals.getRidesTotals()
    .then(rideTotals.onGetRidesTotalsSuccess)
    .catch(rideTotals.onGetRidesTotalsFailure)
}

const onDestroyOneRideFailure = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  // build HTML element with data
  const rideHTML = (`<h4>There was a problem deleting your ride.  Please
    try again.</h4>`)
  // append rideHTML to content
  $('#ride-content').append(rideHTML).fadeOut(5000)
  window.scrollTo(0, 0)
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
