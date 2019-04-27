// Code your solution here:
function driversWithRevenueOver(driver, revenue){
 const newDriver = driver.filter(function(r){ 
    return r.revenue > revenue
  })
  return newDriver
}

function driverNamesWithRevenueOver(driver, revenue){
  const nameDriver = driver.filter(function(r){
    return r.revenue > revenue
  });
  const name = nameDriver.map(function(drive){
    named = drive.name;
    return named;
  });
  return name;
}

function exactMatch(drivers, key){
  const newKey = Object.keys(key);
  
  const match = drivers.filter(function(matches){
    return matches[newKey] === key[newKey];
  });
  return match;
}

function exactMatchToList(drivers, key){
  const newKey = Object.keys(key);
  
  const match = drivers.filter(function(matches){
    return matches[newKey] === key[newKey];
  });
  
  const name = match.map(function(drive){
    named = drive.name;
    return named;
  });
  return name;
  
}


