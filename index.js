// Code your solution here:

const driver = [  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }];

const extendedDrivers = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 },
  { name: 'Sally',   revenue: 200 }
];


function driversWithRevenueOver(arr, num) {
  const results = arr.filter(
    function (e) {
      return e.revenue > num;
    }
  )
  return results;
};

function driverNamesWithRevenueOver(arr, num) {
  const results1 = arr.filter(
    function (e) {
      if (e.revenue > num) {
        return e.name;
      }
    }
  );
  const results2 = results1.map(
    function(e) {
      return e.name
    }
  );
  return results2;
};
//
// function exactMatch(arr, hash) {
//   const results = arr.filter(
//     function (e) {
//       debugger;
//       const key1 = Object.keys(e);
//       debugger;
//       const key2 = Object.keys(hash);
//       debugger;
//       return key1 === key2 && e[key1] === hash[key2];
//       debugger;
//     }
//   );
//   return results;
// }
//
// function exactMatch (arr, hash) {
//   return arr.filter(function (e) {
//     let matches = false;
//
//     for (const key in matcher) {
//       matches = e[key] === hash[key];
//     }
//
//     return matches;
//   });
// }

// got this from the flatiron solution after stuggling with it.  Note that matcher is a hash.
function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) { // I'm not sure why matcher isn't driver here, to iterate over all drivers (multiple hashes)
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matcher) {
  const arrayOfHashes = exactMatch(drivers, matcher);
    console.log(arrayOfHashes);
  const results = arrayOfHashes.map(function (hash) {
    return hash["name"];
  });
  return results;
}

// function giveName(hash) {
//   return hash["name"]
// }
