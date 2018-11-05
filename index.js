// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
    output = drivers.filter(driver => driver.revenue > amount);
    return output;
}
 function driverNamesWithRevenueOver(drivers, amount) {
    output = drivers.filter(driver => driver.revenue > amount);
    names = output.map(driver => driver.name);
    return names;
}
 function exactMatch(drivers, hash) {
    key = Object.keys(hash);
    value = hash[key];
     output = drivers.filter(driver => driver[key] === value );
    return output;
}
 function exactMatchToList(drivers, hash) {
    names = [];
     key = Object.keys(hash);
    value = hash[key];
     output = drivers.filter(driver => driver[key] === value );
    nameOutput = output.map(driver => driver.name);
    return nameOutput;
 }