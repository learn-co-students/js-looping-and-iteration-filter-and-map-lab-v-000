// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(element) {return element['revenue'] > revenue;});
}

function driverNamesWithRevenueOver(driver, revenue) {
  let driverNames = driversWithRevenueOver(driver, revenue).map(function (element) {return element['name'];});
  return driverNames
}

function exactMatch(driver, object) {
  let key = Object.keys(object)[0];
  return driver.filter(function (element){return element[key] === object[key];});

}

function exactMatchToList(driver, object) {
  return exactMatch(driver, object).map(function(element) {return element['name'];});

}
