// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let array = [];
  driversWithRevenueOver(drivers, revenue).map(function (driver) {
    array.push(driver.name);
  })
  return array;
}

function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in object) {
      matches = driver[key] === object[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, object) {
  let array = [];
  exactMatch(drivers, object).map(function (driver) {
    array.push(driver.name);
  })
  return array;
}
