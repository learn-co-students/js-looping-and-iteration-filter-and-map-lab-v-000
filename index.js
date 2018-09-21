// Code your solution here:
function driversWithRevenueOver(array, number) {
  const drivers = array.filter(d => d.revenue > number);
  return drivers;
}

function driverNamesWithRevenueOver(array, number) {
  const drivers = driversWithRevenueOver(array, number);
  const names = drivers.map(d => d.name);
  return names;
}

function exactMatch(array, attribute) {
  const match = array.filter(d => d[Object.keys(attribute)] === attribute[Object.keys(attribute)]);
  return match;
}

function exactMatchToList(array, attribute) {
  const match = exactMatch(array, attribute);
  const names = match.map(d => d.name);
  return names;
}