const palindromes = function (str) {
  let re = /[\W_]/g;
  let lowerStr = str.toLowerCase().replace(re, "");

  let reverseStr = lowerStr.split("").reverse().join("");

  return reverseStr === lowerStr;
};

// Do not edit below this line
module.exports = palindromes;
