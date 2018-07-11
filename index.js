// Code your solution here:
const drivers = {}

function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function (driver) {
   return driver.revenue > amount;
 });
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount).map(function (driver){
    return driver.name;
  });
 }

function exactMatch(drivers, list){
  return drivers.filter(function (driver) {
    let flag = false
     for (const key in list){
          flag = driver[key] === list[key]
        }
        return flag
    });
}

function exactMatchToList(drivers, list){
  return exactMatch(drivers, list).map(function (driver){
    return driver.name;
  }
);
}
