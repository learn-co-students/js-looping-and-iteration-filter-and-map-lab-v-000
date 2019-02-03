// Code your solution here:

function driversWithRevenueOver(list, amount) {
  return list.filter(function (index) {
    return index.revenue > amount;
  });
}

function driverNamesWithRevenueOver(list, amount) {
  let result = driversWithRevenueOver(list, amount);
  return result.map (function (index) {
    return index.name;
  });
}

function exactMatch(list, object) {
  if (object.hasOwnProperty('name')) {
    return list.filter(function (index) {
      return index.name === object['name'];
    });
  } else {
    return list.filter(function (index) {
      return index.revenue === object['revenue'];
    });
  }
}

function exactMatchToList(list, object) {
  let result = exactMatch(list, object);
  return result.map (function (index) {
    return index.name;
  });
}
