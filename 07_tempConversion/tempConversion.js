// Formula is (x-32) * (5/9)
const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};
// Formula is x * (9/5) + 32
const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
