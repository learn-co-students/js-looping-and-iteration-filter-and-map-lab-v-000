function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  const resultsArray = driversWithRevenueOver(drivers, revenue);
  return resultsArray.map (function (person){
    return person.name;
  })
}

function exactMatch(drivers, attribute){
  const attrkey = Object.keys(attribute).toString();
  const matches = drivers.filter(d => d[attrkey] === attribute[attrkey] );
  return matches;
}

function exactMatchToList(drivers, attribute){
  const listResults = exactMatch(drivers,attribute)
  return listResults.map (function (person){
    return person.name;
  })
}