// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) =>
  drivers.filter(driver => driver.revenue > revenue);

const driverNamesWithRevenueOver = (drivers, revenue) =>
  driversWithRevenueOver(drivers, revenue).map(driver => driver.name);

const exactMatch = (drivers, matcher) =>
  drivers.filter((driver) => {
    const [searchField] = Object.keys(matcher);
    return driver[searchField] === matcher[searchField];
  });

const exactMatchToList = (drivers, matcher) =>
  exactMatch(drivers, matcher).map(driver => driver.name);
