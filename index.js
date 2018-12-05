function driversWithRevenueOver(drivers, revenue) {
  const driversFiltered = drivers.filter(function(x) { return x.revenue > revenue; });
  return driversFiltered;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversFiltered = driversWithRevenueOver(drivers, revenue);
  const driversNames = driversFiltered.map(function(x) { return x.name; });
  return driversNames;
}

function exactMatch(drivers, attribute) {
  const attributeKey = Object.keys(attribute);
  const key = attributeKey[0];
  const driversFiltered = drivers.filter(function(x) { return x[`${key}`] == attribute[`${key}`]; });
  return driversFiltered;
}

function exactMatchToList(drivers, attribute) {
  const driversFiltered = exactMatch(drivers, attribute);
  const driversNames = driversFiltered.map(function(x) { return x.name; });
  return driversNames;
}
