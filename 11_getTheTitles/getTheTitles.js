const getTheTitles = function (source) {
  let titles = [];
  for (let i = 0; i < source.length; i++) {
    titles[i] = source[i].title;
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
