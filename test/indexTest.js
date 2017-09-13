const expect = chai.expect;

<<<<<<< HEAD


describe('Arrays', function() {
  beforeEach(() => {
    drivers = ['Milo', 'Otis', 'Garfield'];
  })

  describe('drivers', function() {
    it('defines drivers as `var drivers = ["Milo", "Otis", "Garfield"]`', function() {
      expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendDriver(name)', function() {
    it('appends a driver to the end of the drivers array', function() {
      destructivelyAppendDriver('Ralph')
      expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })

  describe('destructivelyPrependDriver(name)', function() {
    it('prepends a driver to the beginning of the drivers array', function() {
      destructivelyPrependDriver("Bob")
=======
/*global describe, it */
>>>>>>> master

describe('drivers', function() {
  describe('findMatching', function() {
    it('returns all drivers that match the passed in name', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "Bobby"]
      expect(findMatching(drivers, 'Bobby')).to.eql(["Bobby", "Bobby"])
      expect(findMatching(drivers, 'Sammy')).to.eql(["Sammy"])
    })

    it('returns matching drivers if case does not match but letters do', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "bobby"]
      expect(findMatching(drivers, 'Bobby')).to.eql(["Bobby", "bobby"])
    })

    it('returns an empty array if there is no match', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "bobby"]
      expect(findMatching(drivers, 'Susan')).to.eql([])
    })
  })

  describe('fuzzyMatch', function() {
    it('returns a driver if beginning provided letters match', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "bobby"]
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(["Sammy", "Sarah", "Sally"])
    })

    it('does not return drivers if only middle or ending letters match', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "bobby"]
      expect(fuzzyMatch(drivers, 'y')).to.have.members([])
    })

    it('does not return drivers if only middle or ending letters match', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "bobby"]
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([])
    })
  })

  describe('matchName', function() {
    it('accesses the data structure to check if name matches', function() {
      let drivers = [{name: 'Bobby', hometown: 'Pittsburgh'},
      {name: 'Sammy', hometown: 'New York'}, {name: "Sally", hometown: 'Cleveland'},
      {name: "Annette", hometown: "Los Angelos"}, {name: "Bobby", hometown: "Tampa Bay"}]
      expect(matchName(drivers, 'Bobby')).to.eql([{name: 'Bobby', hometown: 'Pittsburgh'}, {name: "Bobby", hometown: "Tampa Bay"}])
    })
  })
})
