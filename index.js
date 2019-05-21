// Code your solution here:
function driversWithRevenueOver(array, revenue)
{
  return array.filter(driver => driver["revenue"] > revenue)
}

function driverNamesWithRevenueOver(array, revenue)
{
  return driversWithRevenueOver(array, revenue).map((driver, i, array) =>
{
  return driver["name"]
})
}

function exactMatch(arr, attr)
{
  return arr.filter(driver => driver[`${Object.keys(attr)[0]}`] === attr[`${Object.keys(attr)[0]}`])
}

function exactMatchToList(arr, attr)
{
  return exactMatch(arr, attr).map((driver, i, array) =>
{
  return driver["name"]
})
}
