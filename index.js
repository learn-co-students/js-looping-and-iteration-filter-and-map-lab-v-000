function driversWithRevenueOver(list, rev){
  return list.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(list, rev){
  return driversWithRevenueOver(list, rev).map(function(driver){
    return driver.name;
  })
}

function exactMatch(list, attrPair){
  return list.filter(function(driver){
    let matches = false;

    for (const key in attrPair) {
      matches = driver[key] === attrPair[key];
    }

    return matches;
  });
}

function exactMatchToList(list, attrPair){
  return exactMatch(list, attrPair).map(function(driver){
    return driver.name;
  })
}
