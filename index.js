// Code your solution here:

const drivers = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
];
// returns an array of all matching drivers
// returns an empty array if there is no match
function driversWithRevenueOver(driversObj, revenue) {
  return driversObj.filter(driver => driver["revenue"] > revenue);
}
// returns an array of all matching drivers names as string
// returns an empty array if there is no match
function driverNamesWithRevenueOver(driversObj, revenue) {
  return driversObj.filter(obj => obj["revenue"] > revenue)
    .map(function(obj) {
      return obj["name"];
    });
}

const extendedDrivers = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 },
  { name: 'Sally',   revenue: 200 }
];
// returns an array of all matching drivers
// returns an empty array if there is no match
function exactMatch(driversObj, jObj) {
  let driversMatch = driversObj.filter(obj => Object.values(obj).includes(Object.values(jObj)[0]));
  return driversMatch;
}
// returns an array of names for all matching drivers
// returns an empty array if there is no match
function exactMatchToList(driversObj, jObj) {
  return driversObj.filter(obj => Object.values(obj).includes(Object.values(jObj)[0]))
    .map(function(obj) {
      return obj["name"];
    });
}
