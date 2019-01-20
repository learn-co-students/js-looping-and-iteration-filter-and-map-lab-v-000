// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  // filter drivers with revenues greater than revenue arg
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  // filter drivers with revenues greater than revenue arg
  return driversWithRevenueOver(drivers, revenue)
  // map out those drivers' names
  .map(driver => driver.name)
}

function exactMatch(drivers, criteria){
  return drivers.filter(function(driver) {
    let match = false;

    for(const key in criteria) {
      match = driver[key] === criteria[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, criteria){
  return exactMatch(drivers, criteria)
  .map(driver => driver.name)
}
