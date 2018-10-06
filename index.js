// Code your solution here:
function driversWithRevenueOver(collection, number) {
  let newCollection = collection.filter(function(individual) {return individual.revenue > number})
  return newCollection
}

function driverNamesWithRevenueOver(collection, number) {
  let newCollection = driversWithRevenueOver(collection, number).map(function(i) {return i.name})
  return newCollection
}

function exactMatch(collection, searchObject) {
  let newCollection = collection.filter(function(individual) {
    let collectionKey = Object.keys(searchObject)[0]
    return individual[collectionKey] === searchObject[collectionKey]
  })
  return newCollection
}

function exactMatchToList(collection, searchObject) {
  let newCollection = exactMatch(collection, searchObject).map(function(i) {return i.name})
  return newCollection
}
