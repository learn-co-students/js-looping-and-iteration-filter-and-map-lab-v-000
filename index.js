// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map((driver) => {
    return driver.name;
  });
}

function exactMatch(drivers, attributes) {
  return drivers.filter((driver) => {
    if (driver.name === attributes.name) {
      return driver;
    } else if (driver.revenue === attributes.revenue) {
      return driver;
    }
  });
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map((driver) => {
    return driver.name;
  })
}
