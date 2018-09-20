// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
      return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
      return driver.name;
    });
}

function exactMatch (list, attribute) {
  return list.filter(function(item) {
    let matches = false

    for (const key in attribute) {
      matches = item[key] === attribute[key];
    }
    return matches;
  });
}

function exactMatchToList (list, attribute) {
  return exactMatch(list, attribute).map(function (item){
    return item.name
  })
}
