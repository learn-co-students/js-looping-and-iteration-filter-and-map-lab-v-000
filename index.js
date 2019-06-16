// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const matches = drivers.filter(x => x.revenue > revenue)
  return matches
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const matches = drivers.filter(x => x.revenue > revenue)
  return matches.map(x => x.name)
}

function exactMatch(drivers, kv) {
 return drivers.filter(x => x[Object.keys(kv)[0]] === Object.values(kv)[0] )
}

function exactMatchToList(drivers, kv) {
  const matches = drivers.filter(x => x[Object.keys(kv)[0]] === Object.values(kv)[0] )
  return matches.map(x => x.name)
}
