function isPalindrome(string) {
  // Start coding here
  const reverseString = string.toLowerCase().split("").reverse().join("");
  return string === reverseString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
