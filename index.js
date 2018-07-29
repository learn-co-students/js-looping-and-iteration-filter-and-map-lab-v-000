// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(d => d.revenue > rev);
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(d => d.name);
}

function exactMatch(drivers, matcher) {
  return drivers.filter(d => Object.values(d).includes(Object.values(matcher)[0]));
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(user => user.name);
}