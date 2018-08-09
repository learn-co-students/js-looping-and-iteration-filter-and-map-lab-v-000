// Code your solution here:
function driversWithRevenueOver(drivers, revenue){


  const result = drivers.filter(driver => driver.revenue > revenue);
  return result;

}


function driverNamesWithRevenueOver(drivers, revenue){

  const result = drivers.filter(driver => driver.revenue > revenue);
  const names = result.map(name => name.name);
  return names;
}


function exactMatch(extendedDrivers, object){

  const result = extendedDrivers.filter(function(driver) {
  for (var key in driver) {
    if (driver[key] === object[key]){
      return true;}
  }
  });
  return result;



}



function exactMatchToList(extendedDrivers, object){

  return exactMatch(extendedDrivers, object).map(function(driver){

    return driver.name;

  });


}
