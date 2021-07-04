// Code your solution here:

function driversWithRevenueOver(collection, num) {
  return collection.filter(function(driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(collection, num) {
  const newCollection = collection.filter(function(driver) {
    return driver.revenue > num;
  });
  return newCollection.map(function(list) {
    return list.name;
  });
}

function exactMatch(collection, obj) {
  return collection.filter(function(driver) {
    const param = [Object.keys(obj)];
    return driver[param] === obj[param];
  });
}

function exactMatchToList(collection, obj) {
  const newCollection = collection.filter(function(driver) {
    const param = [Object.keys(obj)];
    return driver[param] === obj[param];
  });
  return newCollection.map(function(list) {
    return list.name;
  })
}
