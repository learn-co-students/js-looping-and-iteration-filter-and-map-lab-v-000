const expect = chai.expect;

describe('drivers', () => {
  let drivers;
  let extendedDrivers;

  beforeEach(() => {
    drivers = [
      {
        name: 'Sally',
        revenue: 400
      },
      {
        name: 'Annete',
        revenue: 200
      },
      {
        name: 'Jim', 
        revenue: 150
      }
    ];
    extendedDrivers = drivers.concat({
      name: 'Sally',
      revenue: 200
    });
  });

  describe('driversWithRevenueOver', () => {
    it('returns an array of all matching drivers', () => {
      expect(driversWithRevenueOver(drivers, 250)).to.eql([
        {
          name: 'Sally',
          revenue: 400
        }
      ]);
      expect(driversWithRevenueOver(drivers, 199)).to.eql([
        {
          name: 'Sally', 
          revenue: 400
        },
        {
          name: 'Annete',
          revenue: 200
        },
      ]);
    });

    it('returns an empty array if there is no match', () => {
      expect(driversWithRevenueOver(drivers, 500)).to.eql([]);
    });
  });

  describe('driverNamesWithRevenueOver', () => {
    it('returns an array of all matching drivers names as string', () => {
      expect(driverNamesWithRevenueOver(drivers, 199)).to.eql([
        'Sally', 'Annete'
      ]);
    });

    it('returns an empty array if there is no match', () => {
      expect(driverNamesWithRevenueOver(drivers, 500)).to.eql([]);
    });
  });

  describe('exactMatch', () => {
    it('returns an array of all matching drivers', () => {
      expect(exactMatch(extendedDrivers, { name: 'Sally' })).to.eql([
        {
          name: 'Sally',
          revenue: 400
        },
        {
          name: 'Sally',
          revenue: 200
        }
      ]);
      expect(exactMatch(extendedDrivers, { revenue: 200 })).to.eql([
        {
          name: 'Annete',
          revenue: 200
        },
        {
          name: 'Sally', 
          revenue: 200
        },
      ]);
    });

    it('returns an empty array if there is no match', () => {
      expect(exactMatch(extendedDrivers, { revenue: 500 })).to.eql([]);
      expect(exactMatch(extendedDrivers, { name: 'Alex' })).to.eql([]);
    });
  });

  describe('exactMatchToList', () => {
    it('returns an array of names for all matching drivers', () => {
      expect(exactMatchToList(extendedDrivers, { name: 'Sally' })).to.eql([
        'Sally', 'Sally'
      ]);
      expect(exactMatchToList(extendedDrivers, { revenue: 200 })).to.eql([
        'Annete', 'Sally'
      ]);
    });

    it('returns an empty array if there is no match', () => {
      expect(exactMatchToList(extendedDrivers, { revenue: 500 })).to.eql([]);
      expect(exactMatchToList(extendedDrivers, { name: 'Alex' })).to.eql([]);
    });
  });
});