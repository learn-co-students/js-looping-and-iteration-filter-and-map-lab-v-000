// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) {
    return driver["revenue"] > revenue;
  })
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) {
    return driver["revenue"] > revenue;
  }).map(function (driver) {
    return driver["name"];
  })
}

function exactMatch(driver, javaObject) {
  return driver.filter(function (driver) {
    return driver["name"] === javaObject["name"] || driver["revenue"] === javaObject["revenue"];
  })
}

function exactMatchToList(driver, javaObject) {
  return driver.filter(function (driver) {
    return driver["name"] === javaObject["name"] || driver["revenue"] === javaObject["revenue"];
  }).map(function (driver) {
    return driver["name"];
  })
}
