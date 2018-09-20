// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(dr => dr.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filteredDrivers = driversWithRevenueOver(drivers,revenue);
  return filteredDrivers.map(dr => dr.name);
}

function exactMatch(drivers, nameObject) {
  return drivers.filter((driver) => {
  let matched = false; //set as false
    for (const key in driver) {
     //evaluate if driver[key === nameObject[key], save it to local variable matched
     if (driver[key] === nameObject[key]) {
      matched = driver;
      }
    }
    return matched; //determines if filter returns the driver or not
  })
}

function exactMatchToList(drivers, nameObject){
  return exactMatch(drivers, nameObject).map(dr => dr.name);
}
