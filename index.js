// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(person){
    if(person.revenue > revenue) {
      return person;
    }
  }).map(function (item){
    return item.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (person){
    let objKey = Object.keys(obj)[0];
    if(person[objKey] === obj[objKey]) {
      return person;
    }
  })
}

function exactMatchToList(drivers, obj) {
  return drivers.filter(function (person){
    let objKey = Object.keys(obj)[0];
    if(person[objKey] === obj[objKey]) {
      return person;
    }
  }).map(function (item){
    return item["name"];
  })
}