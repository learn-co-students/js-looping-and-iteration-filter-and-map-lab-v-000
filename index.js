// Code your solution here:
function driversWithRevenueOver(list, revenue){
  return list.filter( (ele) => { return ele['revenue'] > revenue})
}
function driverNamesWithRevenueOver(list, revenue){
  return driversWithRevenueOver(list, revenue).map( (ele) => { return ele['name']} )
}
function exactMatch(list, attribute){
  return list.filter( (ele) => { return ele['name'] === attribute['name'] || ele['revenue'] === attribute['revenue'] })
}
/*
undefined 'sally'
'sally' 'sally' ||
'sally' undefined
undefined undefined
*/

function exactMatchToList(list, attribute){
   return exactMatch(list, attribute).map( (ele) => { return ele['name']})
}
