// Code your solution here:

const newDrivers = [{ name: 'Sally',   revenue: 400 },
{ name: 'Annette', revenue: 200 },
{ name: 'Jim',     revenue: 150 },
{ name: 'Sally',   revenue: 200 }];

function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter(function (driver) {
        // Don't forget this return
        if (driver.revenue > revenue) {
            return driver;
        }  
    });
}

function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver (drivers, revenue).map(drivers, driver {
            return driver.name;
    });
}


// don't forget that map takes in the array as first parameter, unlike filter

