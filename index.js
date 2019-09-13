// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => {return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue){
//  This is what i originally had. I was trying to recreate the funciton above but I just needed to return the function above instead
//  return drivers.filter(driver => {return driver.revenue > revenue; {return(driver.name)} });
  return driversWithRevenueOver(drivers, revenue).map(driver => {return driver.name});
}

//driver = {age: 10, car_color: 'blue', revenue: "3000"}

//object = {car_color: 'blue'}

function exactMatch(drivers, object){
  return drivers.filter(driver => {
        let matches = false;
    for (const key in object){
        matches = driver[key] === object[key]
        }
    return matches
  });
}

function exactMatchToList(drivers, strings){
  return exactMatch(drivers, strings).map(driver => {return driver.name});
}



//`exactMatchToList()` - This function works the same way as the `exactMatch()` function,
//except that instead of returning an array of `driver` objects, it returns an array of strings with each element in the array
//corresponding to the matching driver's name. For example, `exactMatchToList(drivers, { revenue: 2000 })`
//will return `['Sammy']`, as `Sammy` is the name of the matching `driver` object.
