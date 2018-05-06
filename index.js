// Code your solution here:


driversWithRevenueOver = (driver, revenue) => {
  return driver.filter(d => d.revenue > revenue)
}

driverNamesWithRevenueOver = (driver, revenue) => {
  return driversWithRevenueOver(driver, revenue).map(m => {
    return m.name
  })

}

exactMatch = (drivers, object) => {
  return drivers.filter(function(m) {
    match = false
    for(const key in object) {
      match = m[key] === object[key]
    }
    return match
  })
}

exactMatchToList = (drivers, object) => {
  return exactMatch(drivers, object).map(function(m) {
    return m.name 
  })
}
