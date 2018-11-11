// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(item) {
    return item.revenue > amount ;
  })
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, match) {
  return drivers.filter(function(item){
    let matches = false;
    for (const key in match) {
      matches = item[key] === match[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(function(item){
    return item.name;
  });
}
