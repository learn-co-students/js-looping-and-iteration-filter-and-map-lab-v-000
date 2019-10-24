const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter( (driver) => {
    return driver.revenue > revenue
  });
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map( (driver) => {
    return driver.name;
  });
}

const exactMatch = (drivers, params) => {
  return drivers.filter( (driver) => {
    let paramDrivers = false;

    for(const key in params) {
      paramDrivers = driver[key] === params[key];
    };
    return paramDrivers;
  });
}

const exactMatchToList = (drivers, params) => {
  return exactMatch(drivers, params).map( (driver) => {
    return driver.name;
  });
}