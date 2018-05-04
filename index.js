function driversWithRevenueOver(driver, revenue) {
    return driver.filter(function(d) {return d.revenue > revenue; });
}

function driverNamesWithRevenueOver(driver, revenue) {
    return driversWithRevenueOver(driver, revenue)
        .map(function(driver){ return driver.name;
    });
}

function exactMatch(driver, obj) {
    return driver.filter(function(d){
        let res = false;
            for (const key in obj) {
                res = d[key] === obj[key];
            }
        return res;
    })
}

function exactMatchToList(drivers, obj) {
    return drivers.filter(function(d){
        let res = false;
            for (const key in obj) {
                res = d[key] === obj[key]
            }
                if (res) {
                    return d.name
                } else {
                    return res
                }
    })
}

