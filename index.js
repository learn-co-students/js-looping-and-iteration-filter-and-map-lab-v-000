// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
  return driver.revenue > revenue;
   })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
  return driver.name;
 })
}

function exactMatch(extendedDrivers, driverPiece) {
  return extendedDrivers.filter (function (driver) {
  return driver.name === driverPiece.name || driver.revenue === driverPiece.revenue;
})
}

function exactMatchToList(extendedDrivers, driverPiece) {
    return exactMatch(extendedDrivers, driverPiece).map(function (driver) {
    return driver.name;
})
} 
