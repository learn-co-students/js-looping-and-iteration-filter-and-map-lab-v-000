// Code your solution here:
function driversWithRevenueOver(array, string){
  const driverMatches = array.filter(function(element){
    return element.revenue > string;
  });
  return driverMatches;
}

function driverNamesWithRevenueOver(drivers, revenue){
  const driverMatches = driversWithRevenueOver(drivers, revenue);
  const driverNames = driverMatches.map(function(element){
    return element.name;
  });
  return driverNames;
}

function exactMatch(drivers, hash){
  const driverMatches = drivers.filter(function(element){
    return element[Object.keys(hash)[0]] === Object.values(hash)[0];
  });
  return driverMatches;
}

function exactMatchToList(drivers, hash){
  const driverMatches = exactMatch(drivers, hash);
  const driverNames = driverMatches.map(function(element){
    return element.name;
  });
  return driverNames;
}
