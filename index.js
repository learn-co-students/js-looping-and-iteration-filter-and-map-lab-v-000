function driversWithRevenueOver(drivers, revenue) {
  let rev = drivers.filter(function(driver) {return driver.revenue > revenue});
  return rev;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let rev = drivers.filter(function(driver) {return driver.revenue > revenue});
  let revName = rev.map(function(driver) {return driver.name});
  return revName;

}

function exactMatch(drivers, object) {
  let key = Object.keys(object)[0]
  let matches = drivers.filter(function(driver) {return driver[key] === object[key]});
  return matches;
}

function exactMatchToList(drivers, object) {
  const list = exactMatch(drivers, object).map(function(driver) {return driver.name});
  return list;
}
