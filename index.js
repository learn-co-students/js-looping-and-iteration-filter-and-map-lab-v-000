function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(driver => driver.name);
}

function exactMatch(drivers, object) {
  return drivers.filter((driver) => {
    for (const i in driver) {
      if (driver[i] === object[i]) {
        return driver;
      }
    }
  })
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object)
    .map(driver => driver.name);
}
