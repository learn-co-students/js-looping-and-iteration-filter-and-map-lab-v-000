// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
     if (driver['revenue'] >= revenue) {
      return driver;
    };
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  newDrivers = [];
  drivers.filter(function(driver) {
     if (driver['revenue'] >= revenue) {
      newDrivers.push(driver['name']);
    };
  });
  return newDrivers;
};

function exactMatch(drivers, match) {
  for (const key in match) {
    return drivers.filter(driver => driver[key] === match[key]);
  };
};

function exactMatchToList(drivers, match){
const list = exactMatch(drivers, match)
return list.map(driver => driver.name)
}
