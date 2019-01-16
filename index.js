// Code your solution here:

function driversWithRevenueOver(drivers, money){

  let newCollection = [];

  for (const driver of drivers){
    if (driver.revenue > money){
      newCollection.push(driver);
    }
  }

  return newCollection;

}

function driverNamesWithRevenueOver(drivers, money){

  let newCollection = [];

  for (const driver of drivers){
    if (driver.revenue > money){
      newCollection.push(driver.name);
    }
  }

  return newCollection;
}


function exactMatch(drivers, condition){

  return drivers.filter(function(driver) {
    let matches = false;
    for(const c in condition){
      matches = driver[c] === condition[c];
    }
    return matches;
  });

}

function exactMatchToList(drivers, condition){

  let rtnDrivers = drivers.filter(function(driver) {
    let matches = false;
    for(const c in condition){
      matches = driver[c] == condition[c];
    }
    return matches;
  });

  return rtnDrivers.map(d => d.name);

}
