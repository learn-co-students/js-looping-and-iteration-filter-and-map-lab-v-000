// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver => (driver.revenue > revenue))
};

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map((driver) => driver.name)
};

function exactMatch(drivers, matchingObject){
  return drivers.filter(driver => driver[Object.keys(matchingObject)[0]] === Object.values(matchingObject)[0])
};

function exactMatchToList(drivers, matchingObject){
  let driverList = exactMatch(drivers, matchingObject);
  return driverList.map(driver => driver.name);
};
