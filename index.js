// Code your solution here:
function driversWithRevenueOver(array, amount) {
  const newArray = array.filter( function(driver) {
    return driver.revenue > amount
  });
  return newArray;
}

function driverNamesWithRevenueOver(array, amount) {
  const newArray = array.filter(function(driver){
    return driver.revenue > amount
  }).map(function(person){
    return person.name
  });
  return newArray;
}

function exactMatch(array, object) {
  const newArray = array.filter(function(driver){
    const key = Object.keys(object);
    return driver[key] === object[key]
  });
  return newArray;
}

function exactMatchToList(array, object) {
  const newArray = exactMatch(array, object).map(function(driver){return driver.name});
  return newArray;
}
