// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  let filteredDrivers = drivers.filter(element => element.revenue > amount)
  return filteredDrivers
};

function driverNamesWithRevenueOver(drivers, amount) {
  let filteredDrivers = drivers.filter( element => element.revenue > amount )
  let filteredNames = filteredDrivers.map(element => element.name)
  return filteredNames
};

function exactMatch(drivers, object) {
  let match = drivers.filter(element => element.name === object.name || element.revenue === object.revenue)
  return match
};

function exactMatchToList(drivers, object) {
  let match = drivers.filter(element => element.name === object.name || element.revenue === object.revenue)
  let list = match.map(element => element.name)
  return list
};
