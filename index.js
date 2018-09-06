// Code your solution here:                                                  80
const driverNames = drivers => drivers.map(driver => driver.name)

const driversWithRevenueOver = (drivers, revenue) => {
  return [...drivers].filter(driver => driver.revenue > revenue)
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driverNames(driversWithRevenueOver(drivers, revenue))
}

const exactMatch = (drivers, match) => {
  const Key = Object.keys(match)[0]
  return [...drivers].filter(driver => driver[Key] === match[Key])
}

const exactMatchToList = (drivers, match) => {
  return driverNames(exactMatch(drivers, match))
}
