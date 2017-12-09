// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
    return drivers.filter( function (driver) { return driver.revenue > rev } );
}

function driverNamesWithRevenueOver(drivers, rev) {
   driverRev = driversWithRevenueOver(drivers, rev)
   return driverRev.map( function (driverRev) { return driverRev.name} );
}

function exactMatch(drivers, match) {
  return drivers.filter( function (driver) { return driver.name ===  match["name"] || driver.revenue ===  match["revenue"]  });
}

function exactMatchToList(extendedDrivers, match) {
    matches = exactMatch(extendedDrivers, match)
    return matches.map( function (match) { return match.name });
}
