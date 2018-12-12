// Code your solution here:
function driversWithRevenueOver(drivers, r) {
  return drivers.filter(function(driver) {
    return driver.revenue > r;
  })
}

function driverNamesWithRevenueOver(drivers, r) {
  // return drivers.filter(driver['name'] => driver['revenue'] > r);
  return drivers.filter(function(driver) {
    return driver.revenue > r;
  }).map(function(driver) {
    return driver.name;
})
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    return (driver.name == obj.name || driver.revenue == obj.revenue);
  })
}

function exactMatchToList(drivers, obj) {
  return drivers.filter(function(driver) {
    return (driver.name == obj.name || driver.revenue == obj.revenue);
  }).map(function(driver) {
    return driver.name;
  })
}
