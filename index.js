// Code your solution here:

function driversWithRevenueOver(driver, rev) {
  return driver.filter(x => x.revenue > rev);
}

function driverNamesWithRevenueOver(driver, rev) {
  let names = driver.filter(x => x.revenue > rev);
  return names.map(x => x.name)
}

function exactMatch(driver, obj) {
  if (obj.name) {
      return driver.filter(x => x.name === obj.name)
  } else {
      return driver.filter(x => x.revenue == obj.revenue)
  }
}

function exactMatchToList(driver, obj) {
  if (obj.name) {
       let names = driver.filter(x =>  x.name === obj.name);
       return names.map(x => x.name)
  } else {
      let names =  driver.filter(x => x.revenue == obj.revenue)
      return names.map(x => x.name)
  }
}