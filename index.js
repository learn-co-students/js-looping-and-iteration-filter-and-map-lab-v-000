// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  const a = drivers.filter(function(driver) { return driver.revenue > revenue});
	return a;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const a = drivers.filter(function(driver) { return driver.revenue > revenue});
  const names = a.map(function(b) { return b.name });
	return names;
}

function exactMatch(drivers, property) {
  const key = Object.keys(property)
  const d = drivers.filter(function(driver) {return driver[key] === property[key]})
  return d;
}

function exactMatchToList(drivers, property) {
  const d = exactMatch(drivers, property);
  const names  = d.map(function(b) { return b.name });
	return names;
}

