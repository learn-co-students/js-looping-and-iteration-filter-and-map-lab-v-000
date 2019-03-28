// Code your solution here:


function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function (driver) {return driver.revenue > amount})
}

function driverNamesWithRevenueOver(drivers, amount) {
  let newArray =  drivers.filter(function (driver) {return driver.revenue > amount})
  let newNewArray = []

  for (const element of newArray) {
    newNewArray.push(element.name)
  }
  return newNewArray

}


function exactMatch(drivers, match_by) {
  if ("name" in match_by) {
    return drivers.filter(function (driver) {return driver.name === match_by.name})
  }

  if ("revenue" in match_by) {
    return drivers.filter(function (driver) {return driver.revenue === match_by.revenue})
  }

}

function exactMatchToList(drivers, match_by) {
  let matches = exactMatch(drivers, match_by);
  let newArray = [];

  for (const element of matches) {
    newArray.push(element.name)
  }
  return newArray



}
