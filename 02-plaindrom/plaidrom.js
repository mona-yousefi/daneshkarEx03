// write your func here

function reverse(str) {
  return str.split("").reverse().join("");
}

function plaindrom(str) {
  return str === reverse(str);
}
console.log(plaindrom("racecar"));
console.log(plaindrom("song"));
