// complete the function
function palindrom(str) {
  // code goes here

  

  //Change the string into lower case and remove all non-alphanumeric characters
  var cleanStr =str.toLowerCase().replace("/[^a-zA-Z0-9]+g", '');


  var count = 0;

  // Check whether string is empty or not
if (cleanStr==="") {
  console.log("Nothing found");
  return false;
}

// Check if the length of the string is even or odd
if ((cleanStr.length) % 2 === 0) {
  count = (cleanStr.length) / 2;
} else {

  //If the length of the string is 1 then it becomes a palindrome
  if (cleanStr.length === 1) {
      console.log("Entry is a palindrome");
      return true;
  }else {
    
      //If the length of the string is odd ignore middle character
     var count = (cleanStr.length - 1) / 2;
  }
}

//Loop through to check the first character to the last character and move next
for (var x = 0; x < count; x++) {

  //Compare characters and drop them if they do not match
  if (cleanStr[x] != cleanStr.slice(-1-x)[0]) {
      console.log("Entry is not a palindrome");
      return false;
  }
  
}

console.log("The entry is a palindrome");
return true;
}


  
  
function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
