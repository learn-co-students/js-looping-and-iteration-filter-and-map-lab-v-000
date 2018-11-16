// Code your solution here:
function driversWithRevenueOver(drivers, inputRevenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > inputRevenue });
}

function driverNamesWithRevenueOver(drivers, inputRevenue) {
  return driversWithRevenueOver(drivers, inputRevenue).map(function(driver) {
    return driver.name;
  });
}



function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {

    for (key in attribute) {
      return driver[key] === attribute[key];
    }
  });
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) {
    return driver.name;
  })
}
