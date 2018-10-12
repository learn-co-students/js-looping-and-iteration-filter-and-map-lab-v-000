// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) {
    return driver.revenue > amount;
  });
}

function driverNamesWithRevenueOver(drivers, amount) {
  newDrivers = driversWithRevenueOver(drivers, amount);
  return newDrivers.map(function(driver) {
    driver.name;
  });
}

function exactMatch() {

}
