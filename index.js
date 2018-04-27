// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(driver => driver.revenue > amount)
}

function driverNamesWithRevenueOver(drivers, amount) {
  // const goodDrivers = drivers.filter(driver => driver.revenue > amount)
  //
  // return goodDrivers.map (driver => driver.name)

  return driversWithRevenueOver(drivers, amount).map(driver => driver.name)
}

function exactMatch(drivers, param) {
  const keyOfParam = Object.keys(param)[0]

  return drivers.filter(driver => driver[keyOfParam] === param[keyOfParam])
}

function exactMatchToList(drivers, param) {
  // const keyOfParam = Object.keys(param)[0]
  //
  // const matchingDrivers = drivers.filter(driver => driver[keyOfParam] === param[keyOfParam])
  //
  // return matchingDrivers.map(driver => driver.name)

  return exactMatch(drivers, param).map(driver => driver.name)
}
