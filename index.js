// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(collection, revenue) {
  return driversWithRevenueOver(collection, revenue).map( driver => driver.name );
}

function exactMatch(collection, object) {
  return collection.filter(function(driver) {
    for (const key in object) {
      return driver[key] === object[key];
    }
  });
}

function exactMatchToList(collection, object) {
  return exactMatch(collection, object).map( driver => driver.name );
}
