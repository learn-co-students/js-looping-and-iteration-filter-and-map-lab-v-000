// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(driv) { return driv.revenue >= revenue })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newArray = driversWithRevenueOver(drivers, revenue);
  return newArray.map(function(driver) { return driver.name;});
}

function exactMatch(drivers, js) {
  return drivers.filter(function(d) { return d[Object.keys(js)[0]] === Object.values(js)[0];});
}

function exactMatchToList(drivers, js) {
  let newArray = exactMatch(drivers, js)
  return newArray.map(function(d) { return d.name; });
}
