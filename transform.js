
function groupAdultsByAgeRange(arr) {
  const old = arr.filter(arr => arr.age >= 18)

  const group = old.reduce(
    (key, arr) => {
      if (arr.age <= 20) {
        key['20 and younger'].push(arr)
      } else if (arr.age <= 30) {
        key['21-30'].push(arr)
      } else if (arr.age <= 40) {
        key['31-40'].push(arr)
      } else if (arr.age <= 50) {
        key['41-50'].push(arr)
      } else {
        key['51 and older'].push(arr)
      }
      return key
    },
    {
      '41-50': [],
      '21-30': [],
      '31-40': [],
      '20 and younger': [],
      '51 and older': []
    })

  const older = Object.keys(group).reduce(
    (finalAgeGroup, range) => {
      if (group[range].length >= 1) {
        finalAgeGroup[range] = group[range]
      }
      return finalAgeGroup
    },
    {})

  return older
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange