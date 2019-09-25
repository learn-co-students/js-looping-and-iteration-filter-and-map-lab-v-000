function driversWithRevenueOver(array, revenue) {
  return array.filter(function (object) {
    return object.revenue > revenue;
  })
}

function driverNamesWithRevenueOver (array, revenue) {
  const filtered = array.filter(function (object) {
    return object.revenue > revenue;
  });
  return filtered.map(function (object) {
    return object.name;
  })
}

function exactMatch(array, object) {
  let key = Object.keys(object)[0];
  let value = object[key];

  return array.filter(function (obj) {
    return obj[key] != undefined && obj[key] === value;
  })
}

function exactMatchToList(array, object) {
  let filtered = exactMatch(array, object);

  return filtered.map(function (element) {
    return element.name;
  })
}



[
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 },
  { name: 'Sally',   revenue: 200 }
]
