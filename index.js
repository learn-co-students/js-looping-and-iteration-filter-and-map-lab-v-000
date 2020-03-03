function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(e => e.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(e => e.revenue > revenue)
  .map(e => e.name);
}

function exactMatch(drivers, obj) {
  return drivers.filter(e => e.name === obj.name || e.revenue === obj.revenue);
}

function exactMatchToList(drivers, obj) {
  return drivers.filter(e => e.name === obj.name || e.revenue === obj.revenue)
  .map(e => e.name);
}