function driversWithRevenueOver(array, revenue){
  return array.filter(element => {return element.revenue > revenue;});
};
function driverNamesWithRevenueOver(array, revenue){
  return driversWithRevenueOver(array, revenue).map(function (element){
    return element.name;
  });
};
function exactMatch(array, driver){
  return array.filter(function(element){
    if (driver.name !== undefined){
      return element.name === driver.name;
    } else {
      return element.revenue === driver.revenue;
    };
  });
};
function exactMatchToList(array, driver){
  return exactMatch(array, driver).map(function(element){
    return element.name
  });
};
