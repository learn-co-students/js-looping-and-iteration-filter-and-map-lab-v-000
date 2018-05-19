const drivers = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
];

function driversWithRevenueOver(list, rev) {
  return list.filter(function (driver) {
    return driver.revenue > rev
  });
};

function driverNamesWithRevenueOver(list, rev) {
  const names = driversWithRevenueOver(list,rev).map(driver => {
    return driver.name
  });
  return names
};

function exactMatch(list, attribute) {
  return list.filter(function(driver) {
    for (const key in attribute) {
      matches = driver[key] === attribute[key];
    }
    return matches
  });
};

function exactMatchToList(list, attribute) {
  return exactMatch(list, attribute).map(driver=> {
    return driver.name;
  })
};
