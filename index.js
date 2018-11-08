function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( driver => driver.revenue > revenue );
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map( driver => driver.name );
}

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute);
  const value = attribute[key];
  return drivers.filter(driver => driver[key] === value );
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map( driver => driver.name );
}
