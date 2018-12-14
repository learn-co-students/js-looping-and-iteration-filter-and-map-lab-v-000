function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driverName) {
    return driverName.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driverName) {
    return driverName.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driverName) {
    let exactMatches = [];

    for (const key in attribute) {
      exactMatches = driverName[key] === attribute[key]
    }

    return exactMatches;
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function (driverName) {
    return driverName.name;
  })
}
