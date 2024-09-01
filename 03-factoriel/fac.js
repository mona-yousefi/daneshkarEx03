// write your func here

// let n = 4;
function factoriel(a) {
  let num = 1;
  if (a === 0) {
    return 1;
  }
  for (let i = 2; i <= a; i++) {
    num = num * i;
  }
  return num;
}
console.log(factoriel(12));
