// Code your solution here:

function driversWithRevenueOver(driver, rev){
  return driver.filter(dvr => dvr.revenue > rev);
}

function driverNamesWithRevenueOver(drivers, rev){
  let driversNames = [];
  driversWithRevenueOver(drivers, rev).map(function (dvr) {
    driversNames.push(dvr.name);
  });
  return driversNames;
}

function exactMatch(driver, object){
  let bool = false;
  return driver.filter(function (dvr){
    for (const k in object) {
      bool = object[k] === dvr[k];
    }
    return bool;
  });
}

function exactMatchToList(driver, object){
let driversNames = [];

exactMatch(driver, object).map(function (dvr){
  driversNames.push(dvr.name);
});
  return driversNames;
}
