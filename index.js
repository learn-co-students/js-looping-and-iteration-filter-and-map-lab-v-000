// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
    return drivers.filter(function(driver){
        return driver.revenue > amount
    })
}

function driverNamesWithRevenueOver(drivers, amount) {
    let a = driversWithRevenueOver(drivers, amount);
    return a.map(function(driver) {
        return driver.name
    })
}

function exactMatch(drivers, matchObj) {
    return drivers.filter(function(driver) {
        for(const key in matchObj) {
            return driver[key] === matchObj[key]
        }
    })
}

function exactMatchToList(drivers, matchObj) {
  let nuList = []
  nuList = drivers.filter(function(driver) {
        for(const key in matchObj) {
            if (driver[key] === matchObj[key]) {
                return driver['name']
            }
        }
    })
    return nuList.map(function(x) {
      return x.name
    })
}
