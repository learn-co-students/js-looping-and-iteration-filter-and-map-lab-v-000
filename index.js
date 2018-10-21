// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  //filter drivers to find the one's w/revenue > passed in revenue
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  //return function from above, map it & return driver.name
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}
//or can do
//function driverNamesWithRevenueOver(drivers, revenue) {         //this option repeats the code from 1st
// list = drivers.filter(driver => driver.revenue > revenue)      //function. Then maps the list & returns
 //console.log(list)                                              //the driver name
 //return list.map(driver => driver.name)
 //}


function exactMatch(drivers, object) {
  //Object.keys() returns an array of a given object's own properties
  let key = Object.keys(object)[0]
  //console.log(key)
  //return driver objects whose key matches the object's key
  return drivers.filter(driver => driver[key] === object[key])
  //console.log(list)
}

//or can do
//function exactMatch (drivers, matcher) {
  //return drivers.filter(function (driver) {
  //  let matches = false;

    //for (const key in matcher) {
    //  matches = driver[key] === matcher[key];
  //  }
    //return matches;
  //});
//}

function exactMatchToList(drivers, object) {
  //return function from above, map it & return driver.name
  return exactMatch(drivers, object).map(driver => driver.name)
}
