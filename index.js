// Code your solution here:
function driversWithRevenueOver(array, number) {

  new_array = array.map(function (something) {
    if (something.revenue > number) {return something}
  })
  return new_array.filter(notEmpty);
}


function notEmpty(thing) {
  return thing !== undefined;
}

function driverNamesWithRevenueOver(array, number) {

  new_array = array.map(function (something) {
    if (something.revenue > number) {return something.name}
  })
  return new_array.filter(notEmpty);
}


function exactMatch(array, attribute) {
  new_array = array.map(function (driver) {
    if (driver[[Object.keys(attribute)[0]]] === attribute[Object.keys(attribute)[0]]) {return driver}
  })
  return new_array.filter(notEmpty);
}

function exactMatchToList(array, attribute) {
  new_array = array.map(function (driver) {
    if (driver[[Object.keys(attribute)[0]]] === attribute[Object.keys(attribute)[0]]) {return driver.name}
  })
  return new_array.filter(notEmpty);

}
