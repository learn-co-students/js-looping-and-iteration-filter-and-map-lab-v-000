function driversWithRevenueOver(arr, revenue){
  return arr.filter(
    function (obj){return obj.revenue > revenue;}
  );
}

function driverNamesWithRevenueOver(arr, revenue){
  return driversWithRevenueOver(arr, revenue).map(
    function (obj){return obj.name;}
  );
}

function exactMatch(arr, obj){
  return arr.filter(
    function (arrObj){
      const key = Object.keys(obj);
      return arrObj[key] === obj[key];
    }
  );
}

function exactMatchToList(arr, obj){
  return exactMatch(arr, obj).map(
    function (arrObj){return arrObj.name;}
  );
}
