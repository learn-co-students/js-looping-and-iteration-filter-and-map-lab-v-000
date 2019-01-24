// Code your solution here:
function driversWithRevenueOver (array, revenue) {
  return array.filter(function(obj) {
    return obj['revenue'] > revenue;
  });
}
function driverNamesWithRevenueOver (array, revenue) {
  const nArray = array.filter(function(obj) {
    return obj['revenue'] > revenue;
  });
  return nArray.map(function(obj) {
    return obj['name'];
  });
}
function exactMatch (array, mObject) {
  return array.filter(function(el) {
    return (el.name === mObject.name) || (el.revenue === mObject.revenue);
  });
}
function exactMatchToList (array, mObject) {
  const nArray = array.filter(function(el) {
    return (el.name === mObject.name) || (el.revenue === mObject.revenue);
  });
  return nArray.map(function(obj) {
    return obj.name;
  });
}
