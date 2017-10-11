// Code your solution here:
driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter(driver => driver.revenue > revenue)
}

driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers,revenue).map(driver => driver.name)
}

exactMatch = (drivers, value) => {
  return drivers.filter(driver => {
    let matches = false;
    for(const key in value){
      matches = driver[key] === value[key]
    }
    return matches;
  })
}


function exactMatchToList (drivers, value) {
  return exactMatch(drivers, value).map(driver => driver.name);
}
