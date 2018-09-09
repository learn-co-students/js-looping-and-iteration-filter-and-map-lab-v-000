// Code your solution here:

function driversWithRevenueOver(drivers, amount) {
    const driversOver = drivers.filter(driver => driver.revenue > amount);
    return driversOver;
}

function driverNamesWithRevenueOver(drivers, amount){
    const driversNamesOver = drivers.filter(driver => driver.revenue > amount);

    const firstNames = driversNamesOver.map(driver => driver.name);
    return firstNames;
}

function exactMatch (drivers, nameRevenue) {
    const matched = drivers.filter(driver => driver.name === nameRevenue.name || driver.revenue === nameRevenue.revenue);
    return matched;

}

function exactMatchToList(drivers, name){
    const driversFound = exactMatch(drivers, name);
    const names = driversFound.map(driver => driver.name);
    return names;
}
