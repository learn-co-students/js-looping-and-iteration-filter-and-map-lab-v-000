function driversWithRevenueOver(drivers, cutoff) {
  return drivers.filter(function(driverObj) {
    return driverObj.revenue > cutoff;
  });
}

function driverNamesWithRevenueOver(drivers, cutoff) {
  return driversWithRevenueOver(drivers, cutoff).map(function(driverObj) {
    return driverObj.name;
  });
}

function exactMatch(drivers, targetObj) {
  return drivers.filter(function(driverObj) {
    const key = Object.keys(targetObj)[0]
    return driverObj[key] === targetObj[key];
  });
}

function exactMatchToList(drivers, targetObj) {
  return exactMatch(drivers, targetObj).map(function(driverObj) {
    return driverObj.name;
  });
}
