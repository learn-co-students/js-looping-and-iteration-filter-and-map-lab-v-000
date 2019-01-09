// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(el) {
    return el.revenue > revenue;
  })
}

function exactMatch(drivers, key, value) {
  return drivers.filter(function(el) {
    return el.key === value;
  })
}

function exactMatchToList(drivers, revenue) {
  return drivers.filter(function(el) {
    if (el.revenue===revenue);
  })
}
