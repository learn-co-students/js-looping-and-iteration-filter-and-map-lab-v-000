// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    // let newDrivers = []

    // for (const element of drivers) {
    //     if (element.revenue > revenue){
    //         newDrivers.push(element)
    //     }
    // }

    // return newDrivers 

    return drivers.filter(function(driver){ 
        return driver.revenue > revenue 
    });
};

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(function(driver){
        return driver.name
    });
};

function exactMatch(drivers, param){
    // let newDrivers = []
    
    // for (const element of drivers) {
    //     if (element.name === param.name){
    //         newDrivers.push(element)
    //     } else if (element.revenue === param.revenue){
    //         newDrivers.push(element)
    //     } 
    // } 
    // return newDrivers

    const paramKey = Object.keys(param)[0]

    return drivers.filter(driver => driver[paramKey] === param[paramKey])
};

function exactMatchToList(drivers, param){
    return exactMatch(drivers, param).map(driver => driver.name)
};