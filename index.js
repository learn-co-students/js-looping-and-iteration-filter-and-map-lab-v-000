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

function exactMatch(drivers, attribute) {

  return drivers.filter(driver => driver.name === attribute );
}

// var newArray = homes.filter(function (el) {
//   return el.price <= 1000 &&
//          el.sqft >= 500 &&
//          el.num_of_beds >=2 &&
//          el.num_of_baths >= 2.5;
// });
