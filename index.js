function driversWithRevenueOver(collection, revenue){
  return collection.filter(function(element){
    return element.revenue > revenue;
  })
}

function driverNamesWithRevenueOver (collection, revenue) {
  return driversWithRevenueOver(collection, revenue)
    .map(function (element) {
      return element.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
