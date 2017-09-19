const expect = chai.expect;

describe('drivers', function() {
  let drivers = [{name: 'Bobby', hometown: 'Pittsburgh', revenue: 3000},
  {name: 'Sammy', hometown: 'New York', revenue: 2000}, {name: "Sally", hometown: 'Cleveland', revenue: 2500},
  {name: "Annette", hometown: "Los Angelos", revenue: 6000}, {name: "Bobby", hometown: "Tampa Bay", revenue: 5000}]

  describe('driversWithRevenueOver', function() {
    it('returns all drivers with revenue over the passed through amount', function() {
      expect(driversWithRevenueOver(drivers, 3100)).to.eql([{name: "Annette", hometown: "Los Angelos", revenue: 6000}, {name: "Bobby", hometown: "Tampa Bay", revenue: 5000}])
      expect(driversWithRevenueOver(drivers, 5100)).to.eql([{name: "Annette", hometown: "Los Angelos", revenue: 6000}])
    })

    it('returns an empty array if there is no match', function() {
      expect(driversWithRevenueOver(drivers, 6100)).to.eql([])
    })
  })

  describe('exactMatch', function() {
    it('returns a driver the attribute and corresponding value match', function() {
      expect(exactMatch(drivers, {name: 'Bobby'})).to.eql([{name: 'Bobby', hometown: 'Pittsburgh', revenue: 3000}, {name: "Bobby", hometown: "Tampa Bay", revenue: 5000}])
    })

    it('works for all attributes', function() {
      expect(exactMatch(drivers, {revenue: 3000})).to.eql([{name: 'Bobby', hometown: 'Pittsburgh', revenue: 3000}])
    })
  })

  describe('exactMatchToList', function(){
    it('returns a list of names for the matching attributes', function() {
      expect(exactMatchToList(drivers, {revenue: 2000})).to.eql(["Sammy"])
    })
  })

  describe('driverNamesWithRevenueOver', function(){
    it('returns a list of names of drivers with revenue over the provided value', function() {
      expect(driverNamesWithRevenueOver(drivers, 2600)).to.eql(["Bobby", "Annette", "Bobby"])
    })
  })
})
