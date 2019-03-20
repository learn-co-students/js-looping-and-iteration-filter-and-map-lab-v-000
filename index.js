function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (el) {return (el.revenue > revenue)});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(d => `${d.name}`);
}

function exactMatch(drivers, attValuePair) {
  const attName = Object.keys(attValuePair)[0];
  const attValue = attValuePair[attName];
  return drivers.filter(function (el) {return (el[attName] === attValue)});
}

function exactMatchToList(drivers, attValuePair) {
  matches = exactMatch(drivers, attValuePair);
  return matches.map(d => `${d.name}`);
}
