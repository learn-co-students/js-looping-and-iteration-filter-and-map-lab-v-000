// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let names = []
  drivers.filter(function(driver) {
    if (driver.revenue > revenue) {
      names.push(driver.name);
    }
  })
  return names;
}

function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    let attr = Object.keys(object);
    return driver[attr] === object[attr];
  })
}

function exactMatchToList(drivers, object) {
  let names = [];
  drivers.filter(function (driver) {
    let attr = Object.keys(object);
    if (driver[attr] === object[attr]) {
      names.push(driver.name);
    }
  })
  return names;
}
