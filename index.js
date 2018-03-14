function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversOver =  driversWithRevenueOver(drivers, revenue);
  return driversOver.map(function(driver) {return driver.name;});
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {return driver[Object.keys(attribute)] === attribute[Object.keys(attribute)];});
}

function exactMatchToList(drivers, attribute) {
  const driversMatched =  exactMatch(drivers, attribute);
  return driversMatched.map(function(driver) {return driver.name;});
}
