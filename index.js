// Code your solution here:
function driversWithRevenueOver(drivers, targetRevenue) {
  return drivers.filter( driver => driver.revenue >= targetRevenue );
}

function driverNamesWithRevenueOver(drivers, targetRevenue) {
  return driversWithRevenueOver(drivers, targetRevenue).map( driver => driver.name );
}

function exactMatch(drivers, driverQuery) {
  return drivers.filter(driver => {
    let anyMatching = false;
    let allMatching = true;

    for (const key in driverQuery) {
      anyMatching = driver[key] === driverQuery[key]
      if (allMatching) allMatching = anyMatching
    }

    return allMatching;
  })
}

function exactMatchToList(drivers, driverQuery) {
  return exactMatch(drivers, driverQuery).map( driver => driver.name );
}