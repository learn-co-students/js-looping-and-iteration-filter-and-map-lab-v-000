// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
	return collection.filter((element) => element.revenue > revenue )
}

function driverNamesWithRevenueOver(collection, revenue) {
  return driversWithRevenueOver(collection, revenue).map(function (element) { return element.name });
};

function exactMatch(array, query) {
  return array.filter(function(element) {
    if (query.name !== undefined) {
      return element.name === query.name
    } else {
      return element.revenue === query.revenue
    }
  });
};

function exactMatchToList(array, query) {
  return exactMatch(array, query).map(function (element) { return element.name });;
}
