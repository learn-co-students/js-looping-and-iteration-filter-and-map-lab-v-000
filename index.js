// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(object => object.revenue > revenue)
}

function driverNamesWithRevenueOver(collection, revenue) {
  let objects = driversWithRevenueOver(collection, revenue)
  return objects.map(object => object.name )
}

function exactMatch(collection, attribute) {
  let key = Object.keys(attribute)
  return collection.filter(object => object[key] === attribute[key])
}

function exactMatchToList(collection, attribute) {
  let matchedObjects = exactMatch(collection, attribute)
  return matchedObjects.map(object => object.name)
}
