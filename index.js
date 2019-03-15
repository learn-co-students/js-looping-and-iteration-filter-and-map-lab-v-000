// Code your solution here:
function driversWithRevenueOver(drivers, value) {
  const result = drivers.filter(driver => driver.revenue > value);
  return result;
}

function driverNamesWithRevenueOver(drivers, value) {
  const targetDrivers = drivers.filter(driver => driver.revenue > value);
  let result = [];
  for (const driver of targetDrivers) {
    result.push(driver.name);
  }
  return result;
}

function exactMatch(drivers, criteria) {
  return drivers.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
}

function exactMatchToList(drivers, criteria) {
  let targetDrivers = drivers.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
  let result = [];
  for (const driver of targetDrivers){
    result.push(driver.name);
  }
  return result;
}
