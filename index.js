// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map((driver) => driver.name);
}

function exactMatch(drivers, objectToMatch) {
  return drivers.filter((driver) => {
    for (let property in objectToMatch) {
      if (objectToMatch.hasOwnProperty(property) && driver[property] === objectToMatch[property]) {
        return true;
      }
    }
    return false;
  });
}

function exactMatchToList(drivers, objectToMatch) {
  return exactMatch(drivers, objectToMatch).map((driver) => driver.name);
}
