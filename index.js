// Code your solution here:

function driversWithRevenueOver(list, revenue){
  return list.filter(function(driverRevenue) {
    return driverRevenue.revenue > revenue;
  });

}

function driverNamesWithRevenueOver(list, revenue) {
  // filter drivers with revenues greater than revenue arg
   return list.filter(driver => {
    return driver.revenue > revenue;
  })
  // map out those drivers' names
  .map(driver => driver.name)

}

function exactMatch(list, criteria){
  return list.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
}

function exactMatchToList(list, criteria){
  return list.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    })
  })
  .map(obj => obj.name)
}
