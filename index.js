function driversWithRevenueOver(driver, revenue) {
    return driver.filter(function(el) {
        return el.revenue > revenue
    })
}

function driverNamesWithRevenueOver(driver, revenue) {
    return driver.filter(function(el) {
       return el.revenue > revenue
    })
    .map(function(el) {
        return el.name
    })
}

function exactMatch(driver, match) {
    return driver.filter(function(el) {
        for(const element in match) {
            if(match[element] === el[element]) {
                return el;
            }
        }
    })
}

function exactMatchToList(driver, match) {
    const matchKey = Object.keys(match);
    const matchKeyVal = matchKey[0];
    const matchVal = match[matchKeyVal];
    return driver.filter(function(el) {
        return el[matchKeyVal] === matchVal
    })
    .map(function(el) {
        return el.name;
    })
}
