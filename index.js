function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const withRevenueOver = driversWithRevenueOver(drivers, revenue)
  const revenueOver = withRevenueOver.map(function(driver) {
    return driver.name;
  })
  return revenueOver;
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    if (attribute.name === driver.name) {
      return driver;
    } else if (attribute.revenue === driver.revenue) {
      return driver;
    }
  });
}

function exactMatchToList(drivers, attribute) {
  const matchToList = exactMatch(drivers, attribute)
  const toList = matchToList.map(function(object) {
    return object.name
  })
  return toList;
}
