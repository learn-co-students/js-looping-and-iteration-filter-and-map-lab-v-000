// Code your solution here:

//returns an array of the driverObjs whose revenue attribute is greater than theRevenue
function driversWithRevenueOver(driversObjsArr, num){
  return driversObjsArr.filter(function (driverObj){ 
      return driverObj.revenue > num;
    });
}


//returns an array of strings representing the name of each driver who has a revenue greater than the specified amount.
function driverNamesWithRevenueOver(driversObjsArr, num){
  const driverObjsWithRevenueOver = driversObjsArr.filter(function (driverObj){ 
      return driverObj.revenue > num;
    });
  return driverObjsWithRevenueOver.map(function(driverObj){return driverObj.name})
}

//returns an array of the driverObjs have an attribute that matches the one passed into the function via objWithOneAttr
function exactMatch(driversObjsArr, objWithOneAttr){
  const key = Object.keys(objWithOneAttr)[0];
  const value = objWithOneAttr[key]
  return driversObjsArr.filter(function (driverObj){ 
      return driverObj[key] === value;
    });
}
//returns an array of strings representing the name of each driver who matches the passed in object
function exactMatchToList(driversObjsArr, objWithOneAttr){
  const key = Object.keys(objWithOneAttr)[0];
  const value = objWithOneAttr[key]
  const driverObjsThatMatch = driversObjsArr.filter(function (driverObj){ 
      return driverObj[key] === value;
    });
  return driverObjsThatMatch.map(function(driverObj){return driverObj.name})
}
