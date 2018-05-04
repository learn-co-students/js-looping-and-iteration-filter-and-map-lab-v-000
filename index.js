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
        
    })
}