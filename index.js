// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function (driver) {
    return driver.revenue > amount;
  });
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function (driver) {
    let attribute_match = true;
    for (const key in attributes) {
      if (driver[key] !== attributes[key]) {
        attribute_match = false;
      }
    }
    return attribute_match;
  });
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map(function (driver) {return driver.name;});
}
