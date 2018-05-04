// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return (driver.revenue > revenue);
  });
};

function driverNamesWithRevenueOver(drivers, revenue){
  let new_drivers = driversWithRevenueOver(drivers, revenue);
  return new_drivers.map(function(new_driver){
    return new_driver.name
  });
};

function exactMatch(drivers, attribute){
  return drivers.filter(function(driver){
    if (driver.revenue == attribute.revenue){
      return driver.revenue;
    } else if (driver.name == attribute.name){
      return driver.name;
    }
  });
};

function exactMatchToList(drivers, attribute){
  let new_drivers = exactMatch(drivers, attribute);
  return new_drivers.map(function(new_driver){
    return new_driver.name;
  });
};
