// Code your solution here:
function driversWithRevenueOver(collection, num){
  return collection.filter(driver => driver.revenue > num);
};

function driverNamesWithRevenueOver(collection, num){
  const drivers = driversWithRevenueOver(collection, num)
  return drivers.map(driver => driver.name);
};

function exactMatch(collection, attr_hash){
  const key = Object.keys(attr_hash)[0]
  return collection.filter(driver => driver[key] === attr_hash[key]);
};

function exactMatchToList(collection, attr_hash){
  const matchingResults = exactMatch(collection, attr_hash);
  return matchingResults.map(driver => driver.name)
};
