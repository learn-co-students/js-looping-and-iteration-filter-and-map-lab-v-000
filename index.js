// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
// takes array of driver objects and a string called revenue
// returns array of driver objects that have a revenue that is greater than revenue string
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
// same as above except...
// returns an array of strings representing the names of drivers
  const driverList = [];
  for (const driver of driversWithRevenueOver(drivers, revenue)) {
    driverList.push(driver.name);
  };
  return driverList;
}


function exactMatch (drivers, attribute) {
  // takes arrray of driver objects and a js object that specifies attribute and value
  // returns all driver objects who match js object
  const key = Object.keys(attribute)[0];
  const value = attribute[key];

  return drivers.filter(function (driver) {
    return driver[key] === value;
  });
}

function exactMatchToList (drivers, attribute) {
  // same as above except ...
  // returns array of strings w/ driver names
  const driverList = [];
  for (const driver of exactMatch(drivers, attribute)) {
    driverList.push(driver.name);
  };
  return driverList; 
}
