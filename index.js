// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driverObj => driverObj.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
 return driversWithRevenueOver(drivers, revenue).map(driverObj => driverObj.name);
}

function exactMatch(drivers, attrObj) {
  return drivers.filter(driverObj => driverObj[Object.keys(attrObj)[0]] === attrObj[Object.keys(attrObj)[0]]);
}

function exactMatchToList(drivers, attrObj) {
  return exactMatch(drivers, attrObj).map(driverObj => driverObj.name);
}
