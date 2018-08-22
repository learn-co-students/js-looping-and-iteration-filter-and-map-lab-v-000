// Code your solution here:
function driversWithRevenueOver(driver, revenue){
return driver.filter(function(d){
  return d.revenue > revenue;
})
}

function driverNamesWithRevenueOver(driver, revenue){
  return driver.filter(function(d){
    if(d.revenue > revenue){
      return d.name;
    }
  })
}
