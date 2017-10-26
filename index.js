// Code your solution here:
const drivers = [];

const obj = {name: 'Annette'}

drivers.push(
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
);



function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  });
}


/* driversWithRevenueOver is returning array of drivers over a particular revenue.
So, in our new function, we take in two arguments, driver and revenue, then we return
our driversWithRevenueOver method, which is an array of drivers with revenues over a
certain amount.  We then call .map function on this array, which will return a new,
augmented array, of just the drivers' names.s
*/

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    for(const key in driver) {
      if(driver[key] === obj[key]) {
        return driver
      }
    }
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver) {
    return driver.name
  });
}


console.log(exactMatch(drivers, obj))

// console.log(driverNamesWithRevenueOver(drivers, 186))


// console.log(driversWithRevenueOver(drivers, 186))

/*
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  });
}
*/
