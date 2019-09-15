const driver = [  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }];

const extendedDrivers = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 },
  { name: 'Sally',   revenue: 200 }
];


exactMatchToList(extendedDrivers, { name: 'Sally' })
