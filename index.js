// Code your solution here:
function driversWithRevenueOver(array, string){
  const bigEarners = array.filter(function(driver){
    if (driver.revenue > string){
      return driver;
    };
  });
  return bigEarners;
}

function driverNamesWithRevenueOver(array, string){
  const bigEarners = [];
  array.filter(function(driver){
    if (driver.revenue > string){
      bigEarners.push(driver["name"]);
    };
  });
  return bigEarners;
}

function exactMatch(drivers, object){
  const key = Object.keys(object);
  const equalMatch = drivers.filter(function(driver){
    if (driver[key[0]] === object[key[0]]){
      return driver;
    }
  });
  return equalMatch;
}

function exactMatchToList(drivers, name){
  const key = Object.keys(name);
  const pairs = [];
  drivers.filter(function (driver){
    if (driver[key[0]] === name[key[0]]){
      pairs.push(driver.name);
    }
  });
  return pairs;
}
