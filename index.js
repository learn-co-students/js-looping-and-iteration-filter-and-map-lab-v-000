// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter( d => d.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(d => d.name);
}

function exactMatch(drivers, object) {
  key = Object.keys(object)[0]
  return drivers.filter(d => d[key] === object[key]);
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(d => d.name);
}
