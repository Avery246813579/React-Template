/*eslint no-extend-native: "off"*/

Date.prototype.getISODay = function () {
  let day = this.getDay();

  day -= 1;

  return day === -1 ? 6 : day;
};

String.prototype.replaceAll = function (search, replacement) {
  let target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
