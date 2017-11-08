// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(d){
    return d.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue){
  let drivers = driversWithRevenueOver(driver, revenue);
  return drivers.map(function(d){
    return d.name;
  });
}

function exactMatch(driver, obj){
  let k; let val;
  for(key in obj){
    k = key;
    val = obj[key];
  }
  return driver.filter(function(d){
    return d[k] === val;
  })
}

function exactMatchToList(driver, obj){
  let result = exactMatch(driver, obj);
  return result.map(function(d){
    return d.name;
  })
}
