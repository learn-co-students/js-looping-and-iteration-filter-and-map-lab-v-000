// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(element){
    return element.name;
  });
}

// function exactMatch(drivers, object){
//   return drivers.filter(function(driver, object){
//     for(element in driver){
//       // debugger
//     }});
//   }

function exactMatch (drivers, testObject) {
  return drivers.filter(function (driver) {
    let test = false;
    for (const key in testObject) {
      // return t/f to add driver object to collection
      test = driver[key] === testObject[key];
    }
    return test;
  });
}

function exactMatchToList(drivers, testObject){
  return exactMatch(drivers, testObject).map(function(element){
    return element.name;
  });
}