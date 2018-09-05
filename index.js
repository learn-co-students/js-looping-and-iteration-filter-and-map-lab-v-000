// Code your solution here:

// takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument, and returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument

 // solution #1 refactored
function driversWithRevenueOver(array, revenue) {
  return array.filter(driver => driver.revenue > revenue)
}

// // solution #1 passes:
// function driversWithRevenueOver(array, revenue) {
//   return array.filter(function (driver) {
//     return driver.revenue > revenue
//   })
// }


 // returns an array of strings representing the name of each driver who has a revenue greater than the specified amount

 function driverNamesWithRevenueOver(array, revenue) {
   return driversWithRevenueOver(array, revenue).map(driver => driver.name)
 }


// takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.

function exactMatch(array, obj) {
  return array.filter(driver => driver.revenue === obj.revenue || driver.name === obj.name)
 }
