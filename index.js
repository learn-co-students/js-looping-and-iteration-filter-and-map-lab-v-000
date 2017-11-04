// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(element) {
    return element.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map( function(driver) {
    return driver.name;
  });
}

function exactMatch(array, object) {
  let objectKey = Object.keys(object)[0]
  let objectValue = Object.values(object)[0]

  return array.filter(function(element) {
    return element[objectKey] === objectValue;
  });
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(function(element) {
    return element.name;
  });
}
