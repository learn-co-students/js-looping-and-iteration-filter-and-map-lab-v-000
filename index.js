function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
      .map(driver => driver.name);
}

//returns an array of all matching drivers
// returns an empty array of there is no match
function exactMatch(drivers, object) {
  return drivers.filter( driver => Object.values(driver).includes(Object.values(object)[0]) );
}

function exactMatchToList(drivers, object) {
  let matchArr = exactMatch(drivers, object);
  return matchArr.map(driver => driver.name);
}