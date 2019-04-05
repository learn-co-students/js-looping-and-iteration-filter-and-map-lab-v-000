






function driversWithRevenueOver(array, revenue) {
  return (array.filter(name => name.revenue > revenue))
  }

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(name => name.name)
}

function exactMatch(array, value) {

  return array.filter(name => {

  let match = false;

    for (const key in value) {
      match = name[key] === value[key]
    }
    return match;
  })
}


function exactMatchToList(array, match) {
  return exactMatch(array, match).map(match => match.name)
}
