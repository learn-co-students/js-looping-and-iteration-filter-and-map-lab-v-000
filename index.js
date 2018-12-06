// Code your solution here:
function driversWithRevenueOver(list, revenue){
  return list.filter(function (driver) {
    return driver.revenue > revenue;
  });

}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(list, revenue).map(function (driver) {
    return driver.name
  })

}

function exactMatch (drivers, matchObject) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matchObject) {
      matches = driver[key] === matchObject[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matchObject) {
  return exactMatch(drivers, matchObject).map(function (driver) {
    return driver.name 

})
}
