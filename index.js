// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(person){
    return person.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function(person){
    return `${person.name}`;
  });
}

function exactMatch(driver, attr) {
  return driver.filter(function(person) {
    return person[Object.keys(attr)[0]] === Object.values(attr)[0];
  })
}

function exactMatchToList(driver, attr) {
  return driver.filter(function(person) {
    return person[Object.keys(attr)[0]] === Object.values(attr)[0];
  }).
  map(function(person) {
    return person.name;
  })
}
