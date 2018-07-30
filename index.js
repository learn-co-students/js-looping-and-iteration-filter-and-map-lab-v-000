// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) {
    return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(driver, revenue) {
  const newDrivers = driversWithRevenueOver(driver, revenue);
  return newDrivers.map(function (driver) {return `${driver.name}`})
}

function exactMatch(driver, matcher) {
  return driver.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }
    return matches;
}

function exactMatchToList(driver, object) {
  return exactMatch(driver, object).map(function (driver) {
    return driver.name;
  });
}
