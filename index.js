// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  const newArr = drivers.filter(element => element.revenue > number);
  return newArr;
}

function driverNamesWithRevenueOver(drivers, number) {
  return driversWithRevenueOver(drivers,number).map(element => element.name);
}

function exactMatch(drivers, criteria) {
  const newArr = drivers.filter(driver => driver.name === criteria.name || driver.revenue === criteria.revenue )
  return newArr;
}

function exactMatchToList(drivers, criteria) {
  return exactMatch(drivers, criteria).map(driver => driver.name)
}
