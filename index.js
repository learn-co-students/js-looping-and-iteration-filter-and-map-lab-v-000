// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(d){
    return d.revenue > revenue
  })
}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, match){
  return drivers.filter(function(driver){
    let matches= false;

    for (const key in match){
      matches = driver[key] === match[key]
    }
    return matches;
  });
}

function exactMatchToList(drivers, match){
  return exactMatch(drivers, match).map(function(driver){
    return driver.name
  })
}
