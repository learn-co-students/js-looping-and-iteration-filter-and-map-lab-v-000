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
