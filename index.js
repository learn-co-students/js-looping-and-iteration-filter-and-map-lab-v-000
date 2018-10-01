// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  // console.log(drivers)
  // return 
  return drivers.filter(function(driver){
     for (let attr in driver){
      if (driver[attr] === obj[attr]){
        return driver;
        //  console.log(driver)
      }
    }
  });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name;
  })

}