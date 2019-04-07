// Code your solution here:
function driversWithRevenueOver(drivers, revenue)
{
  const driversWithEnoughRevenue = drivers.filter(driver => driver.revenue > revenue);
  return driversWithEnoughRevenue;
}
function driverNamesWithRevenueOver(drivers, revenue)
{
  const driverNamesWithEnoughRevenue = driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
  return driverNamesWithEnoughRevenue;

}
function exactMatch(drivers, obj)
{
  const matchingDrivers = drivers.filter(driver => driver[Object.keys(obj)[0]] == Object.values(obj)[0]);
  return matchingDrivers;
}
function exactMatchToList(drivers, obj)
{
  const matchingDriverNames = exactMatch(drivers, obj).map(driver => driver.name);
  return matchingDriverNames;
}
