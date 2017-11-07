// Code your solution here:
const drivers = [];
function driversWithRevenueOver(drivers, revenue)
{
  return drivers.filter(function (driver)
{
  return driver.revenue > revenue;
});
}

function driverNamesWithRevenueOver(drivers,revenue)
{
return driversWithRevenueOver(drivers, revenue).map(function(driver){return driver.name;});
}

function exactMatch(drivers, condition)
{
  return drivers.filter(function(driver)
{
  for(const key in condition)
  {
       return driver[key] === condition[key];
     }
});
}
