// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue )
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = []
  drivers.filter(driver => {
    if (driver.revenue > revenue) {
      newDrivers.push(driver.name)
    }
  })
  return newDrivers
}

function exactMatch(drivers, attribute) {
  let exactDrivers = []
  drivers.filter(driver => {
    for (var prop in attribute) {
      if (driver[prop] === attribute[prop]) {
        exactDrivers.push(driver)
      }
    }
  })
  return exactDrivers;
}

function exactMatchToList(drivers, attribute) {
  let driverNames = []
  drivers.filter(driver => {
    for (var prop in attribute) {
      if (driver[prop] === attribute[prop]) {
        driverNames.push(driver.name)
      }
    }
  })
  return driverNames
}
