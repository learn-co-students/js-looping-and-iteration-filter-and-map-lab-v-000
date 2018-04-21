// Code your solution here:
function driversWithRevenueOver(driverObj, revenue) {
  return driverObj.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(driverObj, revenue) {
  const drivers = driverObj.filter(driver => driver.revenue > revenue);
  return drivers.map(driver => driver.name);
}

function exactMatch(driverObj, matcher) {
  return driverObj.filter(driver => {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key]
    }
  return matches;
  })
}

function exactMatchToList(driverObj, matcher) {
  return exactMatch(driverObj, matcher)
    .map(driver => {return driver.name})
}