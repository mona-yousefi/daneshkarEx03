// write your func here

const array1 = [1, 4, 6, 3, 7];
const array2 = [1, 4, 6, 3, 7];

function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(compareArrays(array1, array2));
