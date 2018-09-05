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
