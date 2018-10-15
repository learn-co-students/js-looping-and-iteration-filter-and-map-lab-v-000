// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(collection, revenue) {
  return driversWithRevenueOver(collection, revenue).map( driver => driver.name );
}

function exactMatch(collection, object) {
  const property = Object.keys(object)[0];
  return collection.filter(function(driver) {
    debugger;
    return driver[property] === object[property];
  });
}

function exactMatchToList(collection, object) {
  return exactMatch(collection, object).map( driver => driver.name );
}
