function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){return driver.revenue > revenue});
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver){return driver.name});
};

function exactMatch(drivers, value) {
 const match = drivers.filter(function (driver){
   if (driver[Object.keys(value)[0]] === value[Object.keys(value)[0]]) {
     return true;
   }
 });
 return match
};
// if name or revenue is the exact match as the input

function exactMatchToList(drivers, value) {
  return exactMatch(drivers, value).map(function (driver){return driver.name});
}
