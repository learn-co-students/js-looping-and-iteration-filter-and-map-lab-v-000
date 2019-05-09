// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue).map(d => d.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(function(d) {
    let matches = false;

    for (const key in object) {
      debugger; 
       matches = d[key] === object[key]
    }
    return matches
  });
}

function exactMatchToList(drivers, object) {
  return drivers.filter(function(d) {
    let matches = false;

    for (const key in object) {
       matches = d[key] === object[key]
    }
    return matches
  }).map(d => d.name)
}
