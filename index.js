// Code your solution here:
function driversWithRevenueOver(arr, revenue){
  return arr.filter(e => e.revenue > revenue);
}

function driverNamesWithRevenueOver(arr, revenue){
  return arr.filter(e => e.revenue > revenue).map(e => e.name);
}

function exactMatch(arr, obj){
  let myArr = [];
  let objVal = Object.values(obj)[0];
  arr.forEach(function(el, obj){
    for (let prop in el){
      if (el[prop] === objVal){
        myArr.push(el);
      }
    }
  });
 return(myArr); 
}

function exactMatchToList(arr, obj){
    let myArr = [];
  let objVal = Object.values(obj)[0];
  arr.forEach(function(el, obj){
    for (let prop in el){
      if (el[prop] === objVal){
        myArr.push(el.name);
      }
    }
  });
 return(myArr); 
}
