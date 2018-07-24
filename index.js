// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(i) {
    if (i.revenue > revenue) {
      return i;
    };
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(i) {
    if (i.revenue > revenue) {
      return i.filter(function(x) {return x.name});
    };
  });
}

function exactMatch() {

}

function exactMatchToList() {

}
