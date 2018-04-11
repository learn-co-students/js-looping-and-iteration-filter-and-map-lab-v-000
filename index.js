function driversWithRevenueOver (collection, revenue) {
  const newCollection = collection.filter(function (driver) {
    return driver.revenue > revenue;
  });
  return newCollection;
}

function driverNamesWithRevenueOver (collection, revenue) {
  const newDrivers = driversWithRevenueOver(collection, revenue);
  const newCollection = newDrivers.map(function (driver) {
    return driver.name;
  });
  return newCollection;
}

function exactMatch (collection, attr) {
  const newCollection = collection.filter(function (driver) {
    return driver[Object.keys(attr)[0]] === Object.values(attr)[0];
  });
  return newCollection;
}

function exactMatchToList (collection, attr) {
  const newDrivers = exactMatch(collection, attr);
  const newCollection = newDrivers.map(function (driver) {
    return driver.name;
  });
  return newCollection;
}
