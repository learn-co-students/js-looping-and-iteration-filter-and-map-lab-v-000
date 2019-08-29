function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( function(d) { return d.revenue > revenue; } );
}
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map( function(d) { return d.name; });
}
function exactMatch(drivers, obj) {
  return drivers.filter( function (d) { return d[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]; });
}
function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map( function(d) { return d.name; });
}
