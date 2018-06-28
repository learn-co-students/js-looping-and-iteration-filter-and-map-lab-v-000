// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  newArray = []
  for (const user of drivers){
    if (user.revenue > revenue){
      newArray.push(user)
    }
  }
  return newArray
}

function driverNamesWithRevenueOver(drivers , revenue){
  newArray = []
  for (const user of drivers){
    if (user.revenue > revenue){
      newArray.push(user.name)
    }
  }
  return newArray
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
