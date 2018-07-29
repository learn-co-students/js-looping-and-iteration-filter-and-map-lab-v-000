function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(d => d.name)
}

function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    for (const key in matcher) { match = driver[key] === matcher[key] }
    return match
  })
}

/* EXACTMATCH() SHORTER SOLUTIONS NOT AS DYNAMIC */
/*===============================================*/

// function exactMatch (drivers, object) {
//   let key = Object.keys(object)[0]
//   return drivers.filter(driver => driver[key] === object[key])
// }

// function exactMatch(drivers, matcher) {
//   return drivers.filter(d => Object.values(d).includes(Object.values(matcher)[0]));
// }

/*===============================================*/

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(d => d.name);
}