function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter( function(driver) {
      return driver.revenue > parseInt(revenue);
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = driversWithRevenueOver(drivers, revenue);
  return names.map( function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter( function(driver) {
    for (const key in obj) {
      return driver[key] === obj[key]
    }
  });
}

function exactMatchToList(drivers, obj) {
  const names = exactMatch(drivers, obj);
  return names.map( function(driver) {
    return driver.name;
  })
}
