const driversWithRevenueOver = (drivers, revenue) => drivers.filter(driver=> driver.revenue > revenue)

const driverNamesWithRevenueOver = (drivers, revenue) => driversWithRevenueOver(drivers, revenue).map(driver => driver.name)

const exactMatch = (drivers, attr) => drivers.filter(driver => Object.values(driver).includes(Object.values(attr)[0]))

const exactMatchToList = (drivers, attr) => exactMatch(drivers, attr).map(driver=> driver.name)
