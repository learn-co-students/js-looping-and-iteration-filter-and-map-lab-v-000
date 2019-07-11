// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
 //return driversWithRevenueOver(drivers, revenue)
 const driversRevenue = driversWithRevenueOver(drivers, revenue);
      return  driversRevenue.map(function(driver) {
     return driver.name
   })
}
