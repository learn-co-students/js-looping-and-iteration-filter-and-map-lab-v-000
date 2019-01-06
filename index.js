function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (object) {
    return object.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (object) {
    return object.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {
    const key = Object.keys(obj)
    return driver[key] === obj[key];
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (object) {
    return object.name;
  })
}