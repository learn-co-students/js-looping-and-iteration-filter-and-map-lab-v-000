// Code your solution here:
function driversWithRevenueOver(arr, rev) {
    return arr.filter(function (driverRev) {
        return driverRev.revenue > rev;
    });
}

function driverNamesWithRevenueOver(arr, rev) {
    return arr.filter(function (driver) {
        return driver.revenue > rev;
    }).map(function (obj) {
        return obj.name;
    });
}

function exactMatch(drivers, obj) {
    return drivers.filter(function (driver) {
        let matches = false;

        for (const key in obj) {
            matches = driver[key] === obj[key];
        }

        return matches;
    })
}

function exactMatchToList(drivers, obj) {
    return drivers.filter(function (driver) {
        let matches = false;

        for (const key in obj) {
            matches = driver[key] === obj[key];
        }

        return matches;
    }).map(function (newObj) {
        return newObj.name;
    });
}