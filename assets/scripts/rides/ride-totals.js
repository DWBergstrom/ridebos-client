'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getRidesTotals = function () {
  return $.ajax({
    url: config.apiUrl + '/rides',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const onGetRidesTotalsSuccess = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
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
  })
  totalTime /= 60
  totalTime = totalTime.toFixed(1)
  let averageSpeed = totalDistance / totalTime
  averageSpeed = averageSpeed.toFixed(1)
  if (totalDistance === 0) {
    totalHTML = (`<h5>No rides yet. Please create a ride below`)
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
  window.scrollTo(0, 0)
}

const onGetRidesTotalsFailure = function (response) {
  // clear forms
  $('.rides').trigger('reset')
  // empty content element
  $('#ride-content').show()
  $('#ride-content').html('')
  $('#totals-content').show()
  $('#totals-content').html('')
  // build HTML element with data
  const totalsHTML = (`<h4>There was a problem updating your totals.  Please
    try again.</h4>`)
  // append totalsHTML to content
  $('#totals-content').append(totalsHTML)
  window.scrollTo(0, 0)
}

module.exports = {
  getRidesTotals,
  onGetRidesTotalsSuccess,
  onGetRidesTotalsFailure
}
