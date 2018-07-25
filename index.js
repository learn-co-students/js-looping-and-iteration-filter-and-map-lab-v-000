// Code your solution here:
function driversWithRevenueOver(drivers, numString){
    return drivers.filter(x => x.revenue > parseInt(numString));
}

function driverNamesWithRevenueOver(drivers, numString){
     return drivers.filter(x => x.revenue > parseInt(numString)).map(x => x.name);
}

function exactMatch(drivers, object){
    return drivers.filter(x => x.name === object.name || x.revenue === object.revenue)
}

function exactMatchToList(drivers, object){ 
    return drivers.filter(x => x.name === object.name || x.revenue === object.revenue).map(x => x.name)
}