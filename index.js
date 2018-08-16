// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};
function driverNamesWithRevenueOver(drivers, revenue) {
  const filtered_drivers = driversWithRevenueOver(drivers, revenue);
  return filtered_drivers.map(driver => driver.name);
};
function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    for (const key in attribute) {
      return driver[key] == attribute[key];
    };
  });
};
function exactMatchToList(drivers, attribute) {
  const matchingDrivers = exactMatch(drivers, attribute);
  return matchingDrivers.map(driver => driver.name);
};
