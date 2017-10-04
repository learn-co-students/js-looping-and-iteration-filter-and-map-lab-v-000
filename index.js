// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function (each){
      return each.revenue > revenue;
  });
};
function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function (each){
    return each.name;
  });
};
function exactMatch(driver, object){
  let key = Object.keys(object)[0]
  return driver.filter(function (each){
    return each[key] === object[key]
  });
};
function exactMatchToList(driver, object){
  return exactMatch(driver, object).map(function (each){
      return each.name;
  });
};
