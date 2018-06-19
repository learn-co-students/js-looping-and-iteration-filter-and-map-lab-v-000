// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (d) {
    return d.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function (m){
    return m.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (d) {
    for(const key in obj) {
      return d[key] === obj[key]
    };
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (m){
    return m.name;
  });
}
