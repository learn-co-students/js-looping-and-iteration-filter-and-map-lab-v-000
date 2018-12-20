function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  array = drivers.filter(d => d.revenue > revenue)
  return array.map(d => d.name)
}

function exactMatch(drivers, attr) {
  const k = Object.keys(attr)
  return drivers.filter(d => d[k] === attr[k] )
}

function exactMatchToList(drivers, attr) {
  const k = Object.keys(attr)
  return drivers.filter(d => d[k] === attr[k] ).map(d => d.name)

}
