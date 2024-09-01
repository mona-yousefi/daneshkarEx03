// write your func here

function palindrome(text) {
  if (text[0] === text[text.length - 1]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindrome("songs");
