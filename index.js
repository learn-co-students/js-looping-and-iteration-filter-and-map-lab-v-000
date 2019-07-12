// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
 //return driversWithRevenueOver(drivers, revenue)
 const driversRevenue = driversWithRevenueOver(drivers, revenue);
      return  driversRevenue.map(function(driver) {
     return driver.name
   })
}

function exactMatch(drivers, attribute) {

  return drivers.filter(function (driver) {
    if (driver.name === attribute.name || driver.revenue === attribute.revenue) {
      return driver.name;
  };
});
}

function exactMatchToList(drivers, attribute) {
const exactMatchAction = exactMatch(drivers, attribute);
  return  exactMatchAction.map(function(driver) {
  return driver.name
  })
}
