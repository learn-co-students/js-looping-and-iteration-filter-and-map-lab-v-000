// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  let newArray =  drivers.filter(driver => driver.revenue > revenue);
  return newArray.map(function(driver){
    return driver.name
  })
}

// function exactMatch(drivers, object){
//   let newArray = drivers.filter(driver => driver.object);
//   debugger
//   return newArray.map(function(driver){
//     return driver
//   })
// }

function exactMatch(drivers, trait){
  return drivers.filter(function(driver){
  let newArray
    for (const key in trait){
      newArray = driver[key] === trait[key];
    }
    return newArray;
  });
}

function exactMatchToList(drivers, trait){
  return exactMatch(drivers, trait)
    .map(function(driver){
      return driver.name;
    });
}
