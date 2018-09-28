function driversWithRevenueOver(drivers, revenue){
  const results = drivers.filter(driver => driver.revenue > revenue);
  return results;
}

function driverNamesWithRevenueOver(drivers, revenue){
  const result = [];
  drivers.filter(x =>{
    if (x.revenue > revenue){
      result.push(x.name);
    }
  });
  return result;
}

function exactMatch(drivers, obj){
  theKey = Object.keys(obj)[0];
  theValu = obj[theKey];
  let result = [];
  result = drivers.filter(x =>{
    if (x[theKey] === theValu){
      return x;
    }
  });
  return result;
}

function exactMatchToList(drivers, obj){
  theKey = Object.keys(obj)[0];
  theValu = obj[theKey];
  let result = [];
  drivers.filter(x =>{
    if (x[theKey] === theValu){
      result.push(x.name);
    }
  });
  return result;
}
