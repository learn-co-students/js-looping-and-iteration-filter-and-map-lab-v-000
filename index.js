// Code your solution here:
function driversWithRevenueOver(driver,revenue){
  const results = [];
    driver.map(function(drv){
    if (drv.revenue > revenue) {
      results.push(drv);
    }
  });
    return results;
}

function driverNamesWithRevenueOver(driver,revenue){
  const results = [];
    driver.map(function(drv){
    if (drv.revenue > revenue) {
      results.push(drv.name);
    }
  });
    return results;

}

function exactMatch(driver, obj){
 return driver.filter(function (drv){
  let results = false;

  for (const key in obj)  {
   results = drv[key] === obj[key];
  }
  return results;
  });
}


function exactMatchToList(driver,obj){
 return exactMatch(driver,obj).map(function (driver){
  return driver.name;
 });

}
