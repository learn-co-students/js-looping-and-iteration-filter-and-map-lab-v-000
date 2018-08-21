// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(driver) {
    return driver[`revenue`] > revenue}
  )
}

function driverNamesWithRevenueOver(array, revenue) {
  const driverArray = driversWithRevenueOver(array, revenue);
  const nameArray = driverArray.map(
    function(driver) { return driver["name"] }
  )
  return nameArray;
}

function exactMatch(array, criteria) {
  return array.filter( function(object) {
    const trueOrFalse = [];
    for (const key in criteria) {
      trueOrFalse.push(object[key] === criteria[key]);
    }
    return trueOrFalse.every(value => value === true)
  })
}

function exactMatchToList(array, criteria) {
  const drivers = exactMatch(array, criteria);
  return drivers.map(
    function(driver) {return driver["name"]}
  )
}
