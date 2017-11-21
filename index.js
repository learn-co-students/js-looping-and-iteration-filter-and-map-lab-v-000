// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driverObj){
    return driverObj.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driverObj) {
    return driverObj.name
  });
}

function exactMatch(drivers, matchObj){
  return drivers.filter(function(driverObj){
    for(const key in driverObj){
      if(key === Object.keys(matchObj)[0] && driverObj[key] === Object.values(matchObj)[0]){
        return driverObj;
      }
    }

  });
}


function exactMatchToList(drivers, matchObj) {
  return exactMatch(drivers, matchObj).map(function(driverObj){
    return driverObj.name;
  });
}
