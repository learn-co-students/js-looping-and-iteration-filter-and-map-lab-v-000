function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  }).map( function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, criteria) {

  return drivers.filter( function(driver) {
    let matches = [];

    for (const key in criteria) {
      if (driver[key] === criteria[key]) {
        matches.push(true)
      }
      else {
        matches.push(false) // attributes don't match
      }
    }

    return !matches.includes(false); // only true if all criteria match
  });
}

function exactMatchToList(drivers, criteria) {

  return drivers.filter( function(driver) {
    let matches = [];

    for (const key in criteria) {
      if (driver[key] === criteria[key]) {
        matches.push(true)
      }
      else {
        matches.push(false) // attributes don't match
      }
    }

    return !matches.includes(false); // only true if all criteria match
  }).map (function (driver) {
    return driver.name
  });
}
