function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToFahrenheit = function (celciusTemperature) {
  let fahrenheitTemperature = (9 * celciusTemperature) / 5 + 32;
  return round(fahrenheitTemperature, 1);
};

const convertToCelsius = function (fahrenheitTemperature) {
  let celciusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  return round(celciusTemperature, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
