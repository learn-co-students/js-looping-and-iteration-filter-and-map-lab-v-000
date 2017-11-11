// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers
        .filter(driver => {
            return driver.revenue > revenue;
        })
        .map(driver => driver);
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return drivers
        .filter(driver => {
            return driver.revenue > revenue;
        })
        .map(driver => driver.name);
}

function exactMatch(drivers, obj) {
    return drivers
        .filter(driver => {
            return (
                ("name" in obj || "revenue" in obj) &&
                (driver.name === obj.name || driver.revenue === obj.revenue)
            );
        })
        .map(driver => driver);
}

function exactMatchToList(drivers, obj) {
    return drivers
        .filter(driver => {
            return (
                ("name" in obj || "revenue" in obj) &&
                (driver.name === obj.name || driver.revenue === obj.revenue)
            );
        })
        .map(driver => driver.name);
}
