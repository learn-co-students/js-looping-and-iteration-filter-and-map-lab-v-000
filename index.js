// Code your solution here:
function driversWithRevenueOver(drivers, quantity) {
 return drivers.filter(function (driver) {
  return driver.revenue > quantity;
 }); 
}

function driverNamesWithRevenueOver(drivers, quantity) {
  return driversWithRevenueOver(drivers, quantity).map(function (driver){
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver){
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver){
    return driver.name;
  });
}