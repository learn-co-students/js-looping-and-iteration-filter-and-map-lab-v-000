// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const qualifiedDrivers = drivers.filter(driver => driver.revenue > revenue);
  return qualifiedDrivers
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const qualifiedDrivers = drivers.filter(driver => driver.revenue > revenue)
  const qualifiedDriversName = qualifiedDrivers.map(function (d){
    return d.name;
  })
  return qualifiedDriversName;
}

function exactMatch(drivers, argument) {
  const qualifiedDrivers = drivers.filter(function(driver){
    for (const key in driver) {
      if (driver[key] === argument[key]) {
        return driver[key] === argument[key]
      }
    }
  })
  return qualifiedDrivers
}

function exactMatchToList(drivers, argument){
  const list = exactMatch(drivers, argument).map(function(driver) {
    return driver.name
  })

  return list
}
