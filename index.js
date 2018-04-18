// Code your solution here:
function driversWithRevenueOver(drivers, sales){
  return drivers.filter(driver => driver.revenue > sales)
}

function driverNamesWithRevenueOver(drivers, sales){
  return driversWithRevenueOver(drivers,sales).map(driver => driver.name)
}

function exactMatch(drivers, driver_attr){
  return drivers.filter(driver =>{
      for (const key in driver) {
          if (driver[key] == driver_attr[key]) {
            return driver
          }
      }
  })
}

function exactMatchToList(drivers, driver_attr){
    return exactMatch(drivers, driver_attr).map(driver => driver.name)
}
