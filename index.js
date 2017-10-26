// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  let drivers = driver.filter(person => person.revenue > revenue);
  return drivers
}

function driverNamesWithRevenueOver(driver, revenue) {
  let drivers = driver.filter(person => person.revenue > revenue);
  let names = drivers.map(x => x.name)
  return names
}

function exactMatch(driver, obj) {
  const category = Object.keys(obj)[0]
  let drivers = driver.filter(person => person[category] === obj[category]);
  return drivers
}

function exactMatchToList(driver, obj) {
  const category = Object.keys(obj)[0]
  let drivers = driver.filter(person => person[category] === obj[category]);
  let names = drivers.map(x => x.name)
  return names
}
