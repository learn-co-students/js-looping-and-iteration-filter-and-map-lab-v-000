// Code your solution here:
function driversWithRevenueOver(drivers, number){
  let newArr = [];
  for (const driver of drivers){
     if (driver.revenue > number){
       newArr.push(driver);
     }
  }
  return newArr
}

function driverNamesWithRevenueOver(drivers, number){
  let newArr = [];
  for (const driver of drivers){
    if (driver.revenue > number){
      newArr.push(driver.name);
    }
  }
  return newArr
}

function exactMatch(drivers, value){
  let result = drivers.filter(obj =>{
    return obj.name === value.name || obj.revenue === value.revenue
  })
  return result
  }

  function exactMatchToList(drivers, value){
    let result = exactMatch(drivers, value)
    const newArr = result.map(function(eng){
      return eng.name
    })
    return newArr
  }



// function driversWithRevenueOver(drivers,revenue){
//   const driversWithRevenueOver = filter(drivers, function (revenue) { return driver.revenue > revenue; });
// }
// const result = array.filter(item => item.name === criteria);
