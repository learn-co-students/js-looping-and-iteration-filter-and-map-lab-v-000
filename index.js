// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue >= revenue
});
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map (driver => driver.name
    );
}

function exactMatch(drivers, filter) {
  return drivers.filter((driver) => {
    return driver.name === filter.name || driver.revenue === filter.revenue;
  });
}

function exactMatchToList(drivers, filter) {
  return exactMatch(drivers,filter).map(driver => driver.name);
}
