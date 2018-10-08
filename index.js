// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (individual) {return individual.revenue > revenue })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driverNames = (driversWithRevenueOver(drivers,revenue).map(function(individual) {return individual.name}));
  return driverNames
}

function exactMatch(drivers, object) {
  return drivers.filter(function (individual) {
    for(element in object) {return individual[element] === object[element]}
  });
}

function exactMatchToList(drivers, object) {
  const driverNames = (exactMatch(drivers, object).map(function(individual) {return individual.name}));
  return driverNames
}
