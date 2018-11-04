function driversWithRevenueOver(drivers, amt) {
    output = drivers.filter(driver => driver.revenue > amt);
    return output;
}

function driverNamesWithRevenueOver(drivers, amt) {
    output = drivers.filter(driver => driver.revenue > amt);
    names = output.map(driver => driver.name);
    return names;
}

function exactMatch(drivers, hash) {
    key = Object.keys(hash);
    val = hash[key];

    output = drivers.filter(driver => driver[key] === val );
    return output;
}

function exactMatchToList(drivers, hash) {
    names = [];

    key = Object.keys(hash);
    val = hash[key];

    output = drivers.filter(driver => driver[key] === val );
    nameOutput = output.map(driver => driver.name);
    return nameOutput;
}