// Code your solution here:
function driversWithRevenueOver(array, number) {
  return array.filter( d => d.revenue > number);
};

function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map( d => d.name);
};

function exactMatch(array, object ) {
  return array.filter( d => {
    for (const key in object) {
      return d[key] === object[key];
    };
  });
};

function exactMatchToList(array, object) {
  return exactMatch(array, object).map( d => d.name);
};
