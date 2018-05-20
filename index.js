// Code your solution here:
function driversWithRevenueOver (array, revenue) {
  const newarr =  array.filter (function (element) { return  element['revenue'] > revenue})
  return newarr
}

function driverNamesWithRevenueOver (array, revenue) {
  const newarr = array.filter (function (element) {if (element.revenue > revenue){ return element.name}})
  const driverarr = []  
  for (const driver of newarr) {
    driverarr.push(driver.name)
  }
  return driverarr
  }
  
  function exactMatch (array, object) {
    const obkey = Object.keys(object)
    const newarr = array.filter (function (element) { if (element[obkey] === object[obkey]) {return element}})
    return newarr
  }
  
  function exactMatchToList(array, object) {
    const obkey = Object.keys(object)
    const newarr = array.filter (function (element) { if (element[obkey] === object[obkey]) {return element}})
    const driverarr = []
    for (const driver of newarr) {
      driverarr.push(driver.name)
          }
          return driverarr
  }
  
  
  