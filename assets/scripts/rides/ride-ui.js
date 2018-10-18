'use strict'


const onGetRidesSuccess = function (response) {
  console.log('Async: inside .then for get rides')
  console.log(response)
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
  $('#ride-content').prepend(`<h2>All your rides:  </h2>
    <br />`)
}

module.exports = {
  onGetRidesSuccess
}
