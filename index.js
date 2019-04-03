
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(name) { return name.revenue > revenue; });

}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function (name) { return name.name; });

}

function exactMatch(driver, revenue){
  const arg_keys = Object.keys(revenue)
  debugger
  return driver.filter(function(name) {return name[arg_keys] === revenue[arg_keys]; });
}


 function exactMatchToList(driver, revenue){
   return exactMatch(driver, revenue).map(function (name) {return name.name;});

 }
