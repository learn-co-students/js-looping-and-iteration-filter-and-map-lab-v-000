// Code your solution here:
 function driversWithRevenueOver(drivers, r) {
   return drivers.filter(function (driver) {return driver.revenue >= r})
 }

 function driverNamesWithRevenueOver(drivers, r) {
   d = drivers.filter(function (driver) {return driver.revenue >= r});
   return d.map(function (driver) { return driver.name; })
 }

 function exactMatch(drivers, attr) {
   targetAttr = Object.keys(attr)[0]
   targetVal = attr[Object.keys(attr)[0]]
   return drivers.filter(function (driver) {
     return driver[targetAttr] === targetVal
     })
 }

 function exactMatchToList(drivers, attr) {
   targetAttr = Object.keys(attr)[0]
   targetVal = attr[Object.keys(attr)[0]]
   names = drivers.filter(function (driver) {
     return driver[targetAttr] === targetVal
   })
   return names.map(function (driver) { return driver.name; })
 }
 
