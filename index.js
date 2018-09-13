// Code your solution here:

function driversWithRevenueOver(lists,revenue) {
  return lists.filter(function(list){
    return  list.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(lists, revenue) {
    return driversWithRevenueOver(lists, revenue).map(function(list){
      // console.log(list.name);
      return list.name;
    });
}

function exactMatch(lists, toMatch) {
  return lists.filter(function (element){
    // console.log('element', element);
      for (const key in toMatch) {
        // console.log('value', element[key]);
        matches = element[key] === toMatch[key];
      }
      // console.log('return', matches);
      return matches;
  });
}

function exactMatchToList(lists, toMatch) {
  return exactMatch(lists, toMatch).map(function(list){
    // console.log('name',list.name);
    return list.name;
  });
}
