// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(name) {
    return name.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, element) {
  return drivers.filter(function(driver) {
    let elements;
      for (const key in element) {
        elements = driver[key] === element[key];
      }
      return elements;
    });
  }

   function exactMatchToList(drivers, element){
    return exactMatch(drivers, element).map(function(driver){
      return driver.name;
    });
  }
