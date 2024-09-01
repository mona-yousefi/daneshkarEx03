// write your func here
// const str = "this is going to be reverse";

function reverseStr(str) {
  let splitString = str.split("");
  let reverseArr = splitString.reverse();
  let joinArr = reverseArr.join("");
  console.log(joinArr);
}
reverseStr("hi this is reverse");
