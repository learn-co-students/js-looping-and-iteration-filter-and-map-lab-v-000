// Code your solution here:

function driversWithRevenueOver(drivers,revenue){

  const bigRevenue = drivers.filter(function (e) {
    return e.revenue > revenue;
  });
return bigRevenue;
}

function driverNamesWithRevenueOver(drivers,revenue){

  const new_array = driversWithRevenueOver(drivers,revenue).map(function(e) {
    return e.name
  });
  return new_array
}


function exactMatch(drivers, attribute){
  const key_name = Object.keys(attribute)[0]

  const match = drivers.filter(function(driver){
    if (driver[key_name] === attribute[key_name]){
      return driver[key_name];
    }
  });
  return match;
}

function exactMatchToList(drivers, attribute){

  const new_array = exactMatch(drivers,attribute).map(function(e) {
    return e.name
  });
  return new_array
}
