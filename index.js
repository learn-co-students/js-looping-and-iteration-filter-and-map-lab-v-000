function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driverRevenue) {
        return driverRevenue.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map (function(driverName) {
            return driverName.name;
        });
    }

function exactMatch (drivers, object) {
    return drivers.filter (function (driver) {

        for (const key in object) {
        return driver[key] === object[key];
            };
        });
    };

function exactMatchToList(drivers, object) {
    return exactMatch (drivers, object).map (function(driverList) {
        return driverList.name
    })
}
