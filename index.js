function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver =>{ return driver.revenue > revenue });
};

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => {return driver.name});
};

function exactMatch(drivers, obj) {
  const key = Object.keys(obj);
  return drivers.filter( driver => {return driver[key] === obj[key];});
};

function exactMatchToList (drivers, matchAttribute) {
  return exactMatch(drivers, matchAttribute).map(driver => {return driver.name;});
};
