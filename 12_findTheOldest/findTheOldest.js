const findTheOldest = function (array) {
  const oldest = array.sort(function (a, b) {
    let lastGuy;
    let newGuy;
    let date = new Date();
    let thisYear = date.getFullYear();
    if (!a.yearOfDeath) {
      lastGuy = thisYear - a.yearOfBirth;
    } else {
      lastGuy = a.yearOfDeath - a.yearOfBirth;
    }
    if (!b.yearOfDeath) {
      newGuy = thisYear - b.yearOfBirth;
    } else {
      newGuy = b.yearOfDeath - b.yearOfBirth;
    }
    return lastGuy > newGuy ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
