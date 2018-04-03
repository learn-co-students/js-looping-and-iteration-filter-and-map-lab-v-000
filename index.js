function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(
    driver => driver.name);
}

function exactMatch(drivers, attributeMatch ) {
  let matcher = "";
  for(const key in attributeMatch){
    matcher = key;
  };
  return drivers.filter(driver => driver[matcher] === attributeMatch[matcher])
}

function exactMatchToList(drivers, attributeMatch) {
  let matcher = "";
  for(const key in attributeMatch){
    matcher = key;
  };
  return drivers.filter(driver => driver[matcher] === attributeMatch[matcher]).map(
    driver => driver.name);
}
