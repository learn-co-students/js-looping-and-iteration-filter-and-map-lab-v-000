// Code your solution here:

function driversWithRevenueOver(collection, amount) {
  const matches = []
  for (const item of collection) {
    if (item.revenue > amount) {
      matches.push(item);
    }
  }
  return matches
}


function driverNamesWithRevenueOver(collection, amount) {
  const matches = []
  for (const item of collection) {
    if (item.revenue > amount) {
      matches.push(item.name);
    }
  }
  return matches
}


function exactMatch(collection, k) {
    var matches = []
   	var ky = Object.keys(k)[0]
	  var v = Object.values(k)[0]
  	for (const user of collection) {

        for (const key in user) {

            if (user[ky] === v) {
                matches.push(user)
        	  }
		    }
	  }
	  return matches
}


function exactMatchToList(collection, k) {
    var matches = []
   	var ky = Object.keys(k)[0]
	  var v = Object.values(k)[0]
  	for (const user of collection) {

        for (const key in user) {

            if (user[ky] === v) {
                matches.push(user[ky])
        	  }
		    }
	  }
	  return matches
}
