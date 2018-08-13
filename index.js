// Code your solution here:

// takes an array fileld with driver objects and a string called revenue
function driversWithRevenueOver(drivers, revenue) {
  // returns an array of driver objs with revenue > argument revenue
  return drivers.filter(driver => driver.revenue > revenue )
}

function driverNamesWithRevenueOver(drivers, revenue) {
  filtered_drivers = drivers.filter(driver => driver.revenue > revenue)
  return filtered_drivers.map(driver => driver.name)
}

function exactMatch(drivers, attr_value) {
  return drivers.filter(function(driver) {
    // set the default filter return
    let filter_flag = false;
    // for every key in AV, compare the driver's key
    for (const key in attr_value) {
      return filter_flag = driver[key] == attr_value[key]
    }
    // if the AV key/value is equal, boolean true returned. Else, false or the default
    return filter_flag
  })
}

function exactMatchToList(drivers, k_v) {
  let matches = exactMatch(drivers, k_v);
  return matches.map(driver => driver.name)
}
