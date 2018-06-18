// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] > revenue) {
      return driver
    }
  })
  return x;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] > revenue) {
      z = driver["name"]
      console.log(z)
      return z
    }
  })
  return x.map(function (driver) {return driver["name"]});
}

function exactMatch(drivers, object1) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] == Object.values(object1)) {
      return driver
    }
    if (driver["name"] == Object.values(object1)) {
      return driver
    }
  })
  return x;
}

function exactMatchToList(drivers, object1) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] == Object.values(object1)) {
      return driver
    }
    if (driver["name"] == Object.values(object1)) {
      return driver
    }
  })
  return x.map(function (driver) {return driver["name"]});
}
