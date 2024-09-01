// write your func here

const myArr = [12, 45, 10, 27, 1045];
let max = myArr[0];

for (let i = 1; i < myArr.length; i++) {
  if (myArr[i] > max) {
    max = myArr[i];
  }
}
console.log(max);
