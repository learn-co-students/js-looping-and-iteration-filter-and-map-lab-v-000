// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(element => { return element.revenue > revenue; });
};

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(function (element) { return element.name });
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