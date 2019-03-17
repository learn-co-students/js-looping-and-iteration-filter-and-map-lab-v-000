// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => `${driver.name}`);
}

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver) {
    for(const key in attr) {
      if (driver[key] == attr[key]) {
        return true;
      }
    }
  })
}

function exactMatchToList(drivers, attr) {
  return drivers.filter(function(driver) {
    for(const key in attr) {
      if (driver[key] == attr[key]) {
        return true;
      }
    }
  }).map(driver => `${driver.name}`);
}
