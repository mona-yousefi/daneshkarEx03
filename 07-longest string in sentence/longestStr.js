const myStr = "hi this is a text filled with love and passion fdgfdgdg";
let a = myStr.split(" ");
// console.log(a);
value = a[0];
let max = value.length;
for (let i = 1; i < a.length; i++) {
  if (a[i].length > max) {
    value = a[i];
    max = value.length;
  }
}
console.log(value);
