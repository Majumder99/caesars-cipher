function rot13(str) {
  str = str.split("");
  let newStr = "";
  //   console.log(str[0].charCodeAt());
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() < 78) {
      newStr += String.fromCharCode(str[i].charCodeAt() + 13);
    } else if (str[i].charCodeAt() >= 78 && str[i].charCodeAt() <= 90) {
      newStr += String.fromCharCode(str[i].charCodeAt() - 13);
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

// rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
