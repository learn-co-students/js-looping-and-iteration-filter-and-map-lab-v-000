// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const collection = [];

  for (const driver of drivers) {
    if (driver.revenue > revenue) {
      collection.push(driver)
    }
  }

  return collection
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const collection = [];

  for (const driver of drivers) {
    if (driver.revenue > revenue) {
      collection.push(driver.name)
    }
  }

  return collection
}

function exactMatch(drivers, match) {
  const collection = [];
  const key = Object.keys(match)[0]

  for (const driver of drivers) {
    if (driver[key] === match[key]) {
      collection.push(driver)
    }
  }

  return collection
}

function exactMatchToList(drivers, match) {
  const collection = [];
  const key = Object.keys(match)[0]

  for (const driver of drivers) {
    if (driver[key] === match[key]) {
      collection.push(driver.name)
    }
  }

  return collection
}
