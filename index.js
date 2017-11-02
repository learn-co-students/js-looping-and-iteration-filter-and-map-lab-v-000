function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let driverObjs = driversWithRevenueOver(drivers, revenue);
  return driverObjs.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attributeObj) {
  return drivers.filter(function(driver) {
    for (let key in attributeObj) {
      return driver[key] === attributeObj[key];
    }
  });
}

function exactMatchToList(drivers, attributeObj) {
  let driverObjs = exactMatch(drivers, attributeObj);
  return driverObjs.map(function(driver) {
    return driver.name;
  });
}
