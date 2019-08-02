function driversWithRevenueOver(drivers, revenue) {
    const driversOver = drivers.filter(function (driver) {
        return driver.revenue > revenue;
    });
    return driversOver;
};

function driverNamesWithRevenueOver(drivers, revenue) {
    const namesOver = driversWithRevenueOver(drivers, revenue).map(function(driver) {
        return driver.name;
    });
    return namesOver;
};

function exactMatch(drivers, attribute) {
    const attr = Object.keys(attribute);
    const val = attribute[attr];
    const matches = drivers.filter(function (driver) {
        return driver[attr] === val;
    });
    return matches;
};

function exactMatchToList(drivers, attribute) {
    const names = exactMatch(drivers, attribute).map(function (driver) {
        return driver.name;
    });
    return names;
};

    // exactMatchToList() - This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
