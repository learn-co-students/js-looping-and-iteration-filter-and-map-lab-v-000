// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function(driverInfo) {
    return driverInfo.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue).map(function(driverInfo){
    return driverInfo.name;
  });
}

function exactMatch(arr, attribute) {
  return arr.filter(function(driverInfo) {
    for (const key in attribute) {
      if (driverInfo[key] === attribute[key]) { return driverInfo; }
    };
  });
}

function exactMatchToList(arr, attribute) {
  return exactMatch(arr, attribute).map(function(driverInfo){
    return driverInfo.name;
  });
}
