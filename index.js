// Code your solution here:
function driversWithRevenueOver(array, x){
  return array.filter(function(driver){
    return driver.revenue > x;
  })
}

function driverNamesWithRevenueOver(array, x){
  const newArray =
  array.filter(function(driver) {
    return driver.revenue > x;
  });

  return newArray.map(function(driver){
    return driver.name
  });
}

function exactMatch(array, attribute){
  return array.filter(function(person) {
    for (const key in attribute){
        return attribute[key] === person[key]
    }
  });
}

function exactMatchToList(array, attribute) {
  return exactMatch(array, attribute).map(function(person) {
    return person.name;
  });
}
