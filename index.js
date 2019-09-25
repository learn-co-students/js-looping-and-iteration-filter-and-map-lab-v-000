// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(x => x.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers
            .filter(x => x.revenue > revenue)
            .map(x => x.name)
}

function exactMatch(drivers, obj) {
  var key = Object.keys(obj)[0];
  return drivers
            .filter(x => x[key] === obj[key]);
}

function exactMatchToList(drivers, obj) {
  var key = Object.keys(obj)[0];
  return drivers
            .filter(x => x[key] === obj[key])
            .map(x => x.name);
}
