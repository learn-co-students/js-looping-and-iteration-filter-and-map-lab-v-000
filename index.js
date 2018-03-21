
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filteredNames = drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
  return filteredNames.map(function (driver){
    return driver.name;
  })
}

function exactMatch(drivers, object){
  let key = Object.keys(object)[0];
  let value = object[key];

  return drivers.filter(function (obj) {
    return obj[key] != undefined && obj[key] === value;
  })
}

function exactMatchToList(drivers, object) {
  let filteredNames = exactMatch(drivers, object);

  return filteredNames.map(function (driver) {
    return driver.name;
  })
}