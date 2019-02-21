// Code your solution here:
function driversWithRevenueOver(array, amount) {
  return array.filter( function(element) {
    return element.revenue > amount;
  })
}

function driverNamesWithRevenueOver(array, amount) {
  return array.filter( function(element) {
    return element.revenue > amount;
  }).map( function(element) {
    return element.name;
  })
}

function exactMatch(array, attribute) {
  return array.filter( function(element) {
    for (const key in attribute) {
      if (attribute[key] === element[key]) {
        return element;
      }
    }
  })
}

function exactMatchToList(array, attribute) {
  return array.filter( function(element) {
    for (const key in attribute) {
      if (attribute[key] === element[key]) {
        return element;
      }
    }
  }).map( function(element) {
    return element.name;
  })
}
