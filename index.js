// Code your solution here:

// takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument

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


 // returns an array of strings representing the name of each driver who has a revenue greater than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'], as Sammy is the name of the matching driver object with a revenue greater than 2000

 function driverNamesWithRevenueOver(array, revenue) {
   return driversWithRevenueOver(array, revenue).map(driver => driver.name)
 }
