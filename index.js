// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversRevenueOver = driversWithRevenueOver(drivers, revenue);

  return driversRevenueOver.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attributeObject) {
  // return drivers.filter(function (driver) {
  //   let matches = false;
  //
  //   for (const key in matcher) {
  //     matches = driver[key] === matcher[key];
  //   }
  //
  //   return matches;
  // });
  const attributeKey = Object.keys(attributeObject)[0];
  const attributeValue = attributeObject[attributeKey];

  return drivers.filter(function(driver) {
    return driver[attributeKey] === attributeValue;
  });
}

function exactMatchToList(drivers, attributeObject) {
  const matchedDriver = exactMatch(drivers, attributeObject);

  return matchedDriver.map(function(driver) {
    return driver.name;
  });
}
