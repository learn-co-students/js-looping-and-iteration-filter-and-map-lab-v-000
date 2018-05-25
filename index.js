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


function exactMatch(drivers, matcher) {
  //will be given a list array and a criteria, which will either be revenue or name (number or string)
  //based on which is given, either search the name keys for a match in the values if a string is passed, or the revenue keys for the values
  //use filter first, then map?
  return drivers.filter(function (driver) {
  let matches = false;

  for (const key in matcher) {
    matches = driver[key] === matcher[key];
  }

  return matches;
});
}


function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
