// Code your solution here:
function driversWithRevenueOver (array, string) {
  const driversMakingMoney = array.filter(function (driver) {
    if (driver.revenue > string) {
      return driver
    };
  });
  return driversMakingMoney;
}

function driverNamesWithRevenueOver (array, string) {
  const driversMakingMoney = [];
  array.filter(function (driver) {
    if (driver.revenue > string) {
      driversMakingMoney.push(driver["name"]);
    };
  });
  return driversMakingMoney;
}

function exactMatch (array, object) {
  const key = Object.keys(object);
  const matches = array.filter(function (driver) {
    if (driver[key[0]] === object[key[0]]) {
      return driver;
    }
  });
  return matches;
}

function exactMatchToList (array, object) {
  const key = Object.keys(object);
  const matches = [];
  array.filter(function (driver) {
    if (driver[key[0]] === object[key[0]]) {
      matches.push(driver.name);
    }
  });
  return matches;
}
