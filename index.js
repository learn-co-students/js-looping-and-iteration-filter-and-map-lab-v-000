// Code your solution here:
function driversWithRevenueOver(list, revenue){
  return list.filter(function (driver){
    return driver.revenue > revenue;
});
}

//take in a list(which is an array) and a revenue amount, which is a key/value pair in the driver Object
//use .filter to create a function that sets the parameter for the filter based on the parameter passed in by the user
//return drivers for whom the value of the revenue key is at least the revenue value passed in by the user


function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver){
      return driver.name;
    });
}

//take in a list of drivers and a revenue amount
//use the driversWithRevenueOver function we just built, passing in the drivers list and revenues value we are going to look at
//for each object in the returned array, create a function to return the value for the name key, and save that to an empty array which is then returned
//end result is an array of names for drivers who have a revenue greater than the amount passed in


function exactMatch(drivers, criteria) {
  //
}
