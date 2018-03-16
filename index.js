function driversWithRevenueOver(drivers, revenue){
//returns an array of all matching drivers
//returns an empty array if there is no match
  return drivers.filter(function (driver){
    return driver.revenue>revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
//returns an array of all matching drivers names as string
//returns an empty array if there is no match
  array=drivers.filter(function (driver){return driver.revenue>revenue;});
  return array.map(function(driver) {return driver.name;});
}

function exactMatch (drivers, option){
  //returns an array of all matching drivers
  //returns an empty array if there is no match
  const key=Object.keys(option);
  const attribute = (option[key]);

  return drivers.filter(function (driver){
    return driver.name===attribute || driver.revenue===attribute;
  });
}

function exactMatchToList (drivers, option){
//returns an array of names for all matching drivers ‣
//returns an empty array if there is no match
  const key=Object.keys(option);
  const attribute = (option[key]);

  const array = drivers.filter(function (driver){return driver.name===attribute || driver.revenue===attribute;});

  return array.map(function(driver) {return driver.name;});

}
