// Code your solution here:
function driversWithRevenueOver(list, amount) {
  // return an object with the driver who has more revenue than the amount in the argument
  // filter the list to find the driver
  // Return the driver object
  // How can I grab the amount from my argument and use in my filter loop? - for some reason I couldn't grab it while debuggin but when I put the variable in there I could access it.
  return list.filter(function(driver) {
    if (driver.revenue > amount) {
      return driver;
    }
  })
}

function driverNamesWithRevenueOver(list, amount) {
  // returns an new array with all the names of the drivers that have revenue over the amount from the argument
  // I needed to alter the arry to return the names
  // .filter return the array or object how it's put in, I needed to use map to alter it
  // .map returns the altered array for the same amount of values in the array
  return driversWithRevenueOver(list, amount).map(function(driver) {
    if (driver.revenue > amount) {
      return driver.name;
    }
  })
}




function exactMatch(list, object) {
   // returns an array of all matching drivers
  // returns an empty array if there's no match
  // I may be creating a new array in this one
  // debugger;

   return list.filter(function(driver) {
     let exactMatchArray = [];
    for ( const key in object) {
      exactMatchArray = driver[key] === object[key];
    }
     return exactMatchArray;
  })
}

function exactMatchToList(list, object) {
  // returns an array of names for all matching drivers
  // The reason my old method didn't work is because the key changes that you're using to compare
  // The input you're comparing needs to be a variable
  return exactMatch(list, object).map(function(driver) {
    for (const key in object) {
      // debugger;
      if (driver[key] === object[key]) {
        return driver.name;
      }
    }
  })
}
