// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const newArr = drivers.filter(function(driver) {
    return driver['revenue'] > revenue
  });

  return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newArr = driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver['name'];
  })

  return newArr;
}

function exactMatch(drivers, obj) {
  const newArr = drivers.filter(function(driver) {
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  })

  return newArr;
}

function exactMatchToList(drivers, obj) {
  const newArr = exactMatch(drivers, obj).map(function(driver) {
    return driver['name'];
  })

  return newArr;
}
