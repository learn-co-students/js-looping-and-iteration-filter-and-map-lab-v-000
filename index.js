// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
 return driver.filter(function(d){
   return d.revenue > revenue;
 })
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(driver, object1){
  return driver.filter(function(d){
    for (const key in object1) {
      return d[key] === object1[key];
    }
  })
}

function exactMatchToList(driver, object1){
  return exactMatch(driver, object1)
    .map(function (driver) {
      return driver.name;
    });
}
