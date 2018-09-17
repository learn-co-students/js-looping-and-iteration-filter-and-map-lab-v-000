// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  // const driversWithRevenue = drivers.filter(driver => driver.revenue > revenue);
  // return driversWithRevenue.map(driver => driver.name);
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);

}

function exactMatch(drivers, attrValue) {

  return drivers.filter(driver => {
    let matches = false;
    for(const key in attrValue){
      matches = driver[key] === attrValue[key]
      // if (driver[key] === attrValue[key]) {    // matches = driver[key] === attrValue[key]
      //   matches = true//driver[key]
      // }
    }
    return matches;
  });
}

function exactMatchToList(drivers, attrValue) {
  return exactMatch(drivers, attrValue).map(driver => driver.name);
}
