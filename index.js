// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(driver => driver.revenue > amount);
}

function driverNamesWithRevenueOver (drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(driver => driver.name);
}

function exactMatch(drivers, match) {
  return drivers.filter(driver => {
    let matches = false;

    for (const key in match) {
      matches = driver[key] === match[key];
    }
    return matches;
  });
}

function exactMatchToList (drivers, match) {
  return exactMatch(drivers, match).map(driver => driver.name);
}
