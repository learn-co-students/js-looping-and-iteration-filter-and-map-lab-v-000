// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(d => d.name);
}

function exactMatch(drivers, match) {
  const attname = Object.keys(match)[0];
  return drivers.filter(function (driver) {
      return driver[attname] === match[attname];
    });
 }
 
 function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(d => d.name);
}