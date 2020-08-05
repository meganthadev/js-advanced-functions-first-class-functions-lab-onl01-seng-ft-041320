const returnFirstTwoDrivers = function(drivers) {
  let newDrivers = drivers.slice(0, 2)
  return newDrivers
}

const returnLastTwoDrivers = function(drivers) {
  let newDrivers = drivers.slice(-2)
  return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(numOfTickets) {
  return function()
}