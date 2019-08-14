// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver["revenue"] > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
     return driver["revenue"] > revenue;
  }).map(function(name) {
     return name["name"];
  });
}

function exactMatch(drivers, keyValuePair) {
  return drivers.filter(function (driver) {
    return driver.hasOwnProperty(Object.keys(keyValuePair)[0]) && driver[Object.keys(keyValuePair)[0]] === Object.values(keyValuePair)[0];
  });
}

function exactMatchToList(drivers, keyValuePair) {
  return drivers.filter(function (driver) {
    return driver.hasOwnProperty(Object.keys(keyValuePair)[0]) && driver[Object.keys(keyValuePair)[0]] === Object.values(keyValuePair)[0];
  }).map(function(name) {
     return name["name"];
  });
}
