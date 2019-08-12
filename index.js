// Code your solution here:

function driversWithRevenueOver(drivers, string){
  return drivers.filter(function (driver) {
    return (driver.revenue > string)
  })
};

function driverNamesWithRevenueOver(drivers, string) {
  return driversWithRevenueOver(drivers, string).map(function (driver){
    return driver.name
  })
};

function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    for (const key in object){
        return (driver[key] === object[key])
      }
    })
  };

  function exactMatchToList(drivers, object) {
    return exactMatch(drivers, object).map(function (driver) {
      return driver.name
    })
  }
