// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(i) {
    if (i.revenue > revenue) {
      return i;
    };
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newArr = driversWithRevenueOver(drivers, revenue);
  return newArr.map(function(i) {
    return i.name
  })
}

function exactMatch(drivers, object) {
  if (object.hasOwnProperty('revenue')) {
    return drivers.filter(function(i) {
      if (i.revenue === object.revenue) {
        return i;
      }
    })
  } else {
    return drivers.filter(function(i) {
      if (i.name === object.name) {
        return i;
      }
    })
  }
}

function exactMatchToList(drivers, object) {
  newArr = exactMatch(drivers, object);
  return newArr.map(function(i) {
    return i.name
  })
}
