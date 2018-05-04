function driversWithRevenueOver(drivers, query) {
  return drivers.filter(function(driver) {
    return driver.revenue > query})
}

function driverNamesWithRevenueOver(drivers, query) {
  driverNames = drivers.filter(function(driver) {return driver.revenue > query})
  return driverNames.map(function(driver) {return driver.name})
}

function exactMatch(drivers, query) {
  return drivers.filter(function(driver) {
    let key = Object.keys(query)
    return driver[key] === query[key]
  })
}

function exactMatchToList(drivers, query) {
  list = [];
  drivers.map(function(driver) {
    let key = Object.keys(query);
    if (driver[key] === query[key]) {
      console.log(driver.name)
      list.push(driver.name);
    }
  })
  return list;
}
