// Code your solution here:

function driversWithRevenueOver(list, revenue) {
  return list.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(list, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(list, obj) {
  return list.filter(function (driver) {
    if (driver.name === obj.name || driver.revenue === obj.revenue){
      return driver;
    }
  });
}

function exactMatchToList(list, obj) {
  return exactMatch(list, obj).map(function (driver){
    return driver.name;
  });
}
