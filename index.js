// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (wealthydrivers) {
    return wealthydrivers.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (whatsMyName) {
      return whatsMyName.name;
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
    .map(function (imTheDriverYouWant) {
      return imTheDriverYouWant.name;
    });
}
