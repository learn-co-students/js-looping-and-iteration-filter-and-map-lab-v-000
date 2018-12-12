// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    const revenueDrivers = drivers.filter(function(driver) {if (driver.revenue > revenue) {return driver;}});
    return revenueDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const revenueDrivers = drivers.filter(function(driver) {if (driver.revenue > revenue) {return driver.name;}});
    const onlyDriverNames = revenueDrivers.map(function(driver) {return driver.name;});
    return onlyDriverNames;
}

function exactMatch(drivers, attribute) {
    const selectedDrivers = drivers.filter(function(driver) {if(driver.name === attribute.name || driver.revenue === attribute.revenue) {return driver;}});
    return selectedDrivers;
}

function exactMatchToList(drivers, attribute) {
  const selectedDrivers = drivers.filter(function(driver) {if(driver.name === attribute.name || driver.revenue === attribute.revenue) {return driver;}});
  const onlyDriverNames = selectedDrivers.map(function(driver) {return driver.name;});
  return onlyDriverNames;

}

//}
