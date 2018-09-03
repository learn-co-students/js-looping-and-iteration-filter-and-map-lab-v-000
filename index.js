// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){ 
    return parseInt(driver.revenue) > parseInt(revenue)
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > parseInt(revenue)}).map(function(driver) {return driver.name});
}



// function attributeFilter() {
//   if (driver.hasOwnProperty('key') && driver['key'] === value) {
//     return driver;
//   }
// }

// function exactMatch(drivers, {key: value}) {
//   return drivers.filter(attributeFilter);
// }

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {


    for (const key in matcher) {
      
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matcher){
  return exactMatch(drivers, matcher)
    .map(function(driver){
      return driver.name
    })
}
