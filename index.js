// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    let driversWithRevenue = [];
    drivers.map(function(driver) {
        if (driver.revenue > revenue) {
            driversWithRevenue.push(driver);
        }
    });
    return driversWithRevenue;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let driversWithRevenue = [];
    drivers.map(function(driver) {
        if (driver.revenue > revenue) {
            driversWithRevenue.push(driver.name);
        }
    });
    return driversWithRevenue;
}

function exactMatch(drivers, obj) {
    let matchedDrivers = [];
    drivers.map(function(driver) {
        if ("name" in obj || "revenue" in obj) {
            if (driver.name === obj.name || driver.revenue === obj.revenue) {
                matchedDrivers.push(driver);
            }
        } else {
            console.log("Not a matching object");
        }
    });
    return matchedDrivers;
}

function exactMatchToList(drivers, obj) {
    let matchedDrivers = [];
    drivers.map(function(driver) {
        if ("name" in obj || "revenue" in obj) {
            if (driver.name === obj.name || driver.revenue === obj.revenue) {
                matchedDrivers.push(driver.name);
            }
        } else {
            console.log("Not a matching object");
        }
    });
    return matchedDrivers;
}
