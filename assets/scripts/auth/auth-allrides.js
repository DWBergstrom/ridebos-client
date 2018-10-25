'use strict'

const config = require('../config.js')
const store = require('../store.js')

const onAuthGetRides = function () {
  authGetRides()
    .then(onAuthGetRidesSuccess)
    .catch(onAuthGetRidesFailure)
}

const authGetRides = function () {
  return $.ajax({
    url: config.apiUrl + '/rides',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const onAuthGetRidesSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  $('#totals-content').html('')
  // loop through API response data
  // create total distance and time values
  let rideCount = 0
  let totalDistance = 0
  let totalTime = 0
  let longestRide = 0
  let totalHTML = ''
  response.rides.forEach(ride => {
    // update total distance and time values
    totalDistance += ride.distance
    totalTime += ride.time
    rideCount += 1
    if (ride.distance > longestRide) {
      longestRide = ride.distance
    }
    // get first 10 chars of date (removes time from datetime)
    let tempDate = ride.date
    let date = ''
    if (tempDate === null) {
      tempDate = ''
    } else {
      date = tempDate.substring(0, 10)
    }
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
  totalTime /= 60
  totalTime = totalTime.toFixed(1)
  let averageSpeed = totalDistance / totalTime
  averageSpeed = averageSpeed.toFixed(1)
  if (totalDistance === 0) {
    totalHTML = (`<h5>No rides yet. Please create a ride below`)
    $('#ride-content').html('No rides yet')
  } else {
    totalHTML = (`
    <h5>Total rides: ${rideCount}</h5>
    <h5>Total distance: ${totalDistance} miles</h5>
    <h5>Total time: ${totalTime} hours</h5>
    <h5>Average speed: ${averageSpeed} mph</h5>
    <h5>Longest ride: ${longestRide} miles</h5>
    `)
  }
  // append ride totals content
  $('#totals-content').append(totalHTML)
  // add heading when data is rendered
  $('#ride-content').prepend(`<h3>All your rides:  </h3>
    <br />`)
  $('#ride-content').css('background-color', 'rgba(70, 130, 180, .7)')
  $('#ride-content').css('padding', '20px')
}

const onAuthGetRidesFailure = function (response) {
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
}

module.exports = {
  onAuthGetRides
}
