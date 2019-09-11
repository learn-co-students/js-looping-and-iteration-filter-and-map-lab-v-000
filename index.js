// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(arr, revenue) {
  nameOnly = driversWithRevenueOver(arr, revenue);
  return nameOnly.map(driver => driver.name);
}

function exactMatch(arr, object) {
  return arr.filter(driver => driver.name === object.name || driver.revenue === object.revenue);
}

function exactMatchToList(arr, object) {
  matchList = exactMatch(arr, object);
  return matchList.map(driver => driver.name);
}