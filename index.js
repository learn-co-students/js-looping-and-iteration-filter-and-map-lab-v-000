// Code your solution here:
function driversWithRevenueOver(array, amount) {
  const newArr = []
  for (const driver of array) {
    if (driver.revenue > amount) {
      newArr.push(driver);
    }
  }
  return newArr;
}

function driverNamesWithRevenueOver(array, amount) {
  const newArr = []
  for (const driver of array) {
    if (driver.revenue > amount) {
      newArr.push(driver.name);
    }
  }
  return newArr;
}

function exactMatch(array, search) {
  const newArr = []
  for (const driver of array) {
    if (typeof(search) === 'object') {
      for (const key in search) {
        if( driver[key] === search[key]){
          newArr.push(driver);
        }
      }
    }
  }
  return newArr;
}

function exactMatchToList(array, search) {
  const newArr = []
  for (const driver of array) {
    if (typeof(search) === 'object') {
      for (const key in search) {
        if( driver[key] === search[key]){
          newArr.push(driver.name);
        }
      }
    }
  }
  return newArr;
}