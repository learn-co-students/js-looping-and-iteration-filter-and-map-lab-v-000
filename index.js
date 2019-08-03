// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(d => d.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, objToMatch) {
    return drivers.filter(d => {
        let matches = false;

        for (const key in objToMatch) {
            matches = d[key] === objToMatch[key];
        }

        return matches;
    })
}

function exactMatchToList(drivers, objToMatch) {
    return exactMatch(drivers, objToMatch).map(d => d.name);
}