// Code your solution here:
function driversWithRevenueOver(drivers, string) {
    return drivers.filter( 
        function(driver) { return driver.revenue >= string }
    );
}

function driverNamesWithRevenueOver(drivers, string) {
    const driverArray = [];
    
    drivers.map(function(driver) {
        while (driver.revenue >= string) { 
            return driverArray.push(driver.name);
        } 
    });
    return driverArray;
}

function exactMatch(drivers, object){
    return drivers.filter(
        function(driver) {
          for ( attribute in object ) {
          return driver[attribute] === object[attribute]; 
          }
        }
    );
}

function exactMatchToList(drivers, object){
    return drivers.filter(
        function(driver) {
          for (attribute in object ) {
            while (driver[attribute] === object[attribute]) {
              return console.log(driver['name']);
            }
          }
        }
    );
}

// https://repl.it/@emesfun/InfiniteMajorSynergy
