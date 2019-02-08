function driversWithRevenueOver(array, amount) {
    return array.filter(function(element) { return element.revenue > amount });
}

function driverNamesWithRevenueOver(array, amount) {
    const overArray = array.filter(function(element) {return element.revenue > amount});
      return overArray.map(function(element) {return element.name});
}

function exactMatch(array, attribute) {
  return array.filter(function(element) {
    let match = []

    for (const key in attribute) {
      match = element[key] === attribute[key];
    }
    return match;
  })
}

function exactMatchToList(array, attribute) {
  return exactMatch(array, attribute).map(function(element) {
    return element.name
  });
}
