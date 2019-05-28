// Code your solution here:
function driversWithRevenueOver(drivers,revenue) {
   return drivers.filter(function(e) {
       return e.revenue > revenue
   }) 
}

function driverNamesWithRevenueOver(drivers,revenue) {
   const a = driversWithRevenueOver(drivers,revenue);
   return a.map(function(e) {
       return e.name
   })     
}

function exactMatch(drivers,queryObj) {
    const thisKey = Object.keys(queryObj)[0];
    const thisVal = queryObj[thisKey];
    return drivers.filter(function(e) {
        return e[thisKey] === thisVal
    })
}

function exactMatchToList(drivers,queryObj) {
    const a = exactMatch(drivers,queryObj);
    return a.map(function(e) {
        return e.name
    })
}

