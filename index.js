// Code your solution here:
//drvs is an array of objects
function driversWithRevenueOver(drvs,revenue){
  return drvs.filter(function (drv){
    return drv.revenue>revenue;
  });
}


function driverNamesWithRevenueOver(drvs,revenue){
  return driversWithRevenueOver(drvs,revenue).map(function(drv){
    return drv.name;
  });
}


function exactMatch(drvs, exObj){
  return drvs.filter(function (drv){
    for(const att in exObj){
      if (drv[att]!==exObj[att]){
        return false;
      } else {
        return true;
      }
  }});
}


function exactMatchToList(drvs,exObj){
  return exactMatch(drvs,exObj).map(function (drv){
    return drv.name;
  });
  
}