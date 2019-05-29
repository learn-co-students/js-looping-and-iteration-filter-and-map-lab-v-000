// Code your solution here:
 function driversWithRevenueOver(arr, money) {
   return arr.filter(person => person.revenue > money);
 }
 function driverNamesWithRevenueOver(arr, money) {
   const newArr = arr.filter(person => person.revenue > money);
   return newArr.map(person => person.name);
 }
 function exactMatch(arr, obj) {
   const key = Object.keys(obj);
   return arr.filter(person => person[key] === obj[key]);
 }

 function exactMatchToList(arr, obj){
   return exactMatch(arr, obj).map(person => person.name);
 }
