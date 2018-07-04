// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const filtered = drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
  return filtered;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driverNames = driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
  return driverNames;
}

function exactMatch(drivers, obj) {
  const match = drivers.filter(function(driver){
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  });
  return match;
}

function exactMatchToList(drivers, obj) {
  const driverList = exactMatch(drivers, obj).map(function(driver){
    return driver.name;
  });
  return driverList;
}
