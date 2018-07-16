// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(x => x.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(x => x.name);
}

function exactMatch(drivers, attribute) {
  return drivers.filter(x => x[Object.keys(attribute)[0]] === Object.values(attribute)[0]);
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(x => x.name);
}
