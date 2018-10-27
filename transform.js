
function groupAdultsByAgeRange(arr) {
  const result = arr.filter(function (age) {
    if (age >= 21) {
      return true
    }
  })
  return result

}


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange