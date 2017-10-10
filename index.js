// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, object){
  return drivers.filter((driver) => {
    for (const key in driver) {
      if (driver[key] === object[key]){
        return driver;
      }
    }
  })
}

function exactMatchToList(drivers, object){
  return exactMatch(drivers, object).map(driver => driver.name);
}
