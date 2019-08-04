// Code your solution here:
function driversWithRevenueOver (arr, revenue) {
  return arr.filter((driver) => driver.revenue > revenue )
};

 function driverNamesWithRevenueOver (arr, revenue) {
  return driversWithRevenueOver (arr, revenue).map (function (driver) {return driver.name})
};

function exactMatch (arr, search){
  return arr.filter( function(driver) {
 if (search.name !== undefined) {
   return driver.name === search.name; }
   else {
   return driver.revenue === search.revenue;
  }
});
};

function exactMatchToList (arr, search) {
  return exactMatch (arr, search).map (function (driver) {return driver.name})
}
