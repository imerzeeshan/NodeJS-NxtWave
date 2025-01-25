const peopleInCity = require('../country/state/city/index')
const getFirstNames = require('../utilities/utils/index')

const getPeopleInCity = peopleInCity => {
  return getFirstNames(peopleInCity)
}

module.exports = getPeopleInCity
