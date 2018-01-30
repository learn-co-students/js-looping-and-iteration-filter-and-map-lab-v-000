// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(element) {
    return element.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function(element){
    return element.name;
  });
}
function exactMatch(driver, attribute){
  // how do you find it based on the matching object attribute
  // attribute.keys to find the value and see if it matches
  return driver.filter(function(element){
    return element[Object.keys(attribute)] === attribute[Object.keys(attribute)]
  })
}

function exactMatchToList(driver, attribute){
  return exactMatch(driver, attribute).map(function(element){
    return element.name;
  })
}
