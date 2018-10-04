// Code your solution here:

//returns an array of the driverObjs whose revenue attribute is greater than theRevenue
function driversWithRevenueOver(driversObjsArr, num){
  return driversObjsArr.filter(function (driverObj){ 
      return driverObj.revenue > num;
    });
}


function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

//returns an array of the driverObjs have an attribute that matches the one passed into the function via objWithOneAttr
function exactMatch(driversObjsArr, objWithOneAttr){
  const key = Object.keys(objWithOneAttr)[0];
  const value = objWithOneAttr[key]
  return driversObjsArr.filter(function (driverObj){ 
      return driverObj[key] === value;
    });
}


//alternatively, using for ... in - to iterate over properties in an object
// to access a property's value combine the passed in key with bracket operator
// function exactMatch (driversObjsArr, objWithOneAttr) {
//   return driversObjsArr.filter(function (driverObj) {
//     let matches = false;


//     for (const key in objWithOneAttr) {
//       matches = driverObj[key] === objWithOneAttr[key];
//     }

//     return matches;
//   });
// }




//returns an array of strings representing the name of each driver who matches the passed in object
function exactMatchToList(driversObjsArr, objWithOneAttr){
  return exactMatch(driversObjsArr, objWithOneAttr).map(function(driverObj){return driverObj.name})
}
