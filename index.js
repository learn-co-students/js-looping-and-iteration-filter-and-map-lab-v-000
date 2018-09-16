/*
driver (array) = [
    {
        name: "LeBron James",
        revenue: "120,000"
    },
    {
        name: "Trae Young",
        revenue: "140,000"
    }
]
revenue (string) = "130,000"
return value (array) = [
    {
        name: "Trae Young",
        revenue: "140,000"
    }
]
*/
function driversWithRevenueOver(driver, revenue) {
  revenueAsInt = parseInt(revenue, 10);
  let newDriversArray = driver.filter(function(d) {
    if (d.revenue > revenueAsInt) {
      return true;
    } else {
      return false;
    }
  });

  return newDriversArray;
}

function driverNamesWithRevenueOver(driver, revenue) {
  revenueAsInt = parseInt(revenue, 10);
  let newDriversArray = driver
    .filter(function(d) {
      if (d.revenue > revenueAsInt) {
        return true;
      } else {
        return false;
      }
    })
    .map(function(d) {
      return d.name;
    });

  return newDriversArray;
}

/*
driver (array) = [
    {
        name: "LeBron James",
        revenue: "120,000"
    },
    {
        name: "Trae Young",
        revenue: "140,000"
    }
]
attribute (Object) = { name: "Trae Young" }
return value (array) = [
    {
        name: "Trae Young",
        revenue: "140,000"
    }
]
*/

function exactMatch(driver, attribute) {
  attributeKey = Object.keys(attribute)[0];
  attributeValue = attribute[attributeKey];
  let newDriversArray = driver.filter(function(d) {
    if (d[attributeKey] == attributeValue) {
      return true;
    } else {
      return false;
    }
  });

  return newDriversArray;
}

function exactMatchToList(driver, attribute) {
  attributeKey = Object.keys(attribute)[0];
  attributeValue = attribute[attributeKey];
  let newDriversArray = driver
    .filter(function(d) {
      if (d[attributeKey] == attributeValue) {
        return true;
      } else {
        return false;
      }
    })
    .map(function(d) {
      return d.name;
    });

  return newDriversArray;
}
