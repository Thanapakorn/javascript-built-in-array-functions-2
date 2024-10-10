function isPalindrome(string) {
  // Start coding here

  const revertString = string.split("").reverse().join("");
  return revertString === string;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
