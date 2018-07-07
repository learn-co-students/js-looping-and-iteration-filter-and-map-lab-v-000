// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (drv) {return drv.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (drv) {return drv.name} );
}

function exactMatch(driver, obj) {
  return driver.filter(function (element) {return element[Object.keys(obj)[0]] === Object.values(obj)[0]})
}

function exactMatchToList(driver, obj) {
  return exactMatch(driver, obj).map(function(drv) {return drv.name});
}
