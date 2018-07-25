// Code your solution here:
function driversWithRevenueOver(drivers, numString){
    return drivers.filter(x => x.revenue > parseInt(numString));
}