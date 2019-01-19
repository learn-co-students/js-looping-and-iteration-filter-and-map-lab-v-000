function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver) {return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(
    function(driver) {
      return driver.name;
    }
  );
}

function exactMatch(drivers, object) {
  return drivers.filter(
    function (driver) {
      let matchingDriver = false;
      for (const key in object){
        matchingDriver = driver[key] === object[key];
      }
      return matchingDriver;
    }
  );
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map (
    function(driver){
      return driver.name;
    }
  );
}
