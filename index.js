// Code your solution here:
//both filter and map incorporate callbacks over arrays and objects

function driversWithRevenueOver(collection, revenue){
          return collection.filter(function (driver){
                  return driver.revenue > revenue
          });
}

function driverNamesWithRevenueOver(collection, revenue){
//lets first filter and get a filtered list
//then apply a map function to that in order to return the names of each element in the object in an array
          return driversWithRevenueOver(collection, revenue)
                .map(function (driver) {return driver.name
          })
}

//this method takes a collection as an argument, and an object that sets the key and value that you want returned example = exactMatch(drivers, name:"bob")
function exactMatch(collection, matcherObject){
          //apply a filter to the collection of driivers
          return collection.filter(function (driver){
              //set a matching identifier as false as default until it can be set true
              let matches = false;

              //iterate over the oject in matcherObject with the for....in function
              for (const key in matcherObject){
                    matches = driver[key] === matcherObject[key]
                    //if the driver element that we are iterating over on this loop is the same as the given object key then update the matches variable
              }
              return matches //if matches is true
          })
}

function exactMatchToList(collection, matcherObject){
          //first apply the exact match function
          //then apply a maping function onto the the exactMatch in order to yield an array of the driver names
          return exactMatch(collection, matcherObject).map(function (driver) {return driver.name})
}
