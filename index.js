// Code your solution here:

function driversWithRevenueOver(list, revenue){
  return list.filter(function (driverList)
  {
    return driverList.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(list, revenue)
{
  return driversWithRevenueOver(list, revenue).map(function(driverList){return driverList.name;});
}


function exactMatch(driverList, matcher){
  return driverList.filter(function(driver){
    let matches= false;

    for (const key in matcher){
      matches = driver[key] === matcher[key];
    }
    return matches;
  });
}

function exactMatchToList(driverList, matcher){
  return exactMatch(driverList, matcher).map(function(driver){return driver.name;});
}
