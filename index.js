function driversWithRevenueOver(drivers, revenue) {
  const new_drivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
  return new_drivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const new_drivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
  const result = new_drivers.map(driver => driver.name);
  return result;
}

function exactMatch(drivers, match) {
  const result = drivers.filter(function(driver) {
    match_key = Object.keys(match)[0];
    return driver[match_key] === match[match_key];
  });
  return result;
}

function exactMatchToList(drivers, match) {
  const matchedDrivers = drivers.filter(function(driver) {
    match_key = Object.keys(match)[0];
    return driver[match_key] === match[match_key];
  });
  const result = matchedDrivers.map(driver => driver.name);
  return result;
}
