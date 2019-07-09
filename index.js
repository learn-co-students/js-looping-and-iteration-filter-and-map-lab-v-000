// Code your solution here:
const drivers = [{ name: 'Sally',   revenue: 400 },
                 { name: 'Annette', revenue: 200 },
                 { name: 'Jim',     revenue: 150 }];

const extendedDrivers = [];

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(name => name.name)
}

//console.log(driverNamesWithRevenueOver(drivers, 200));
//["Sally"]

function exactMatch(driver, obj) {
  key = Object.keys(obj)[0];
  return driver.filter(name => name[key] === obj[key]);
}

function exactMatchToList(driver, obj) {
  const newArr = exactMatch(driver, obj);
  return newArr.map(name => name.name);
}
