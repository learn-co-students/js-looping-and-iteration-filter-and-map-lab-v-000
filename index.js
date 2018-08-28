// Code your solution here:
function driversWithRevenueOver(data, amt){
  // console.log(data.filter(driver => driver.revenue > amt));
   return data.filter(driver => driver.revenue > amt);
}

function driverNamesWithRevenueOver(data,amt){
  let newArray = [];
  const fits = data.filter(driver => driver.revenue > amt);
  // console.log(fits);
  // for (const selected in fits){
  //   console.log(selected);
  //   newArray.push(selected.name);
  // }
  fits.map(function(selected){
    newArray.push(selected.name);
  });
  return newArray;
}

function exactMatch(data, nameObj){
  let newArray = [];
  let found = data.filter(person => (person.name == nameObj.name) || (person.revenue == nameObj.revenue));

  // console.log(found);
  // found.map(function(select){
  //   newArray.push(select);
  // });
  // console.log(found);
  return found;
}

function exactMatchToList(data,inputObj){
  let newArray = [];
  let found = data.filter(person => (person.name == inputObj.name) || (person.revenue == inputObj.revenue));

  // console.log(found);
  found.map(function(select){
    newArray.push(select.name);
  });
  // console.log(newArray);
  return newArray;
}
