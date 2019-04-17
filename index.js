// Code your solution here:

function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(list, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(list, objectToMatch) {
  return list.filter(function (driver) {
    let matches;

    for (const key in objectToMatch) {
      matches = driver[key] === objectToMatch[key];
    }

    return matches;
  })
}

function exactMatchToList(list, objectToMatch) {
  return exactMatch(list, objectToMatch).map(function (driver) {
    return driver.name;
  })
}
