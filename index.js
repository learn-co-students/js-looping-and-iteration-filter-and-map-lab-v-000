function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(e => e.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(e => e.revenue > revenue)
  .map(e => e.name);
}