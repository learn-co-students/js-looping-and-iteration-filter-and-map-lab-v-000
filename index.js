// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(instance => instance.revenue > revenue);
}

function driverNamesWithRevenueOver(array, revenue) {
  newArray = array.filter(instance => instance.revenue > revenue);
  return newArray.map(function(instance) {
    return instance.name;
  })
}

function exactMatch(array, object) {
  return array.filter(instance => instance[Object.keys(object)[0]] === Object.values(object)[0]);
}

function exactMatchToList(array, object) {
  newArray = array.filter(instance => instance[Object.keys(object)[0]] === Object.values(object)[0]);
  nameArray = []
  for (const instance of newArray) {
    nameArray.push(instance.name);
  }
  return nameArray;
}
