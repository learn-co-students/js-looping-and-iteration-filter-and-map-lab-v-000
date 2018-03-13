// Code your solution here:

function driversWithRevenueOver(list, revenue) {
  const newList = []

  list.map(function (driver) {
    if(driver.revenue > revenue){
      newList.push(driver);
    }
  });

  return newList;
}

function driverNamesWithRevenueOver(list, revenue) {
  const newList = []

  list.map(function (driver) {
    if(driver.revenue > revenue){
      newList.push(driver.name);
    }
  });

  return newList;
}

function exactMatch(list, obj) {
  const newList = []

  list.map(function (driver) {
    if (driver.name === obj.name || driver.revenue === obj.revenue){
      newList.push(driver);
    }
  });
  return newList;
}

function exactMatchToList(list, obj) {
  const newList = []

  exactMatch(list, obj).map(function (driver){
    newList.push(driver.name);
  });

  return newList;
}
