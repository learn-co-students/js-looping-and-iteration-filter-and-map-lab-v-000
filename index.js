// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
    return driver.filter( driver => {
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(driver, revenue) {
    let drivers = driversWithRevenueOver(driver, revenue)
    if (drivers.length === 0) {
        return drivers
    } else {
        return drivers.map ( driver => {
            return driver.name
        })
    }
}

function exactMatch (drivers, obj) {
  return drivers.filter(function (driver) {
    let matches = false;
    for (const key in obj) {
      matches = driver[key] === obj[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, matcher) {
    const list = exactMatch(drivers, matcher)
    return list.map( person => {
        return person.name
    })
}
