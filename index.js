function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(a => a.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(a => a.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(a => a[Object.keys(object)[0]] === Object.values(object)[0])
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(a => a.name)
}