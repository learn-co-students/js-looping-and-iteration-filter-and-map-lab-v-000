// returns an array of all matching drivers
// returns an empty array if there is no match
// returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.

function driversWithRevenueOver(drivers, value) {
  return drivers.filter(function(el) { return el.revenue > value} );
}

// returns an array of all matching drivers names as string
// returns an empty array if there is no match
// returns an array of strings representing the name of each driver who has a revenue greater than the specified amount.
const drivers = []
function driverNamesWithRevenueOver(drivers, value) {
  return driversWithRevenueOver(drivers, value).map(function(el) { return el.name})
}

// 'returns an array of all matching drivers'
// 'returns an empty array if there is no match'

function exactMatch(drivers, value) {
    return drivers.filter(function(el)
    { return Object.keys(value).every(function (key)
      { return el[key] === value[key]
    });
  });
}

// 'returns an array of names for all matching drivers'
// 'returns an empty array if there is no match'
// returns an array of strings with each element in the array corresponding to the matching driver's name

function exactMatchToList(drivers, value) {
  return exactMatch(drivers, value).map(function(el) { return el.name})
}
