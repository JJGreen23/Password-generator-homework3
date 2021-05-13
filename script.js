// Variables
var generateBtn = document.querySelector("#generateBtn");

const specialCharacters = ("~!@#$%^&*()_+");
const numbers = (12345678890);
const lowerCase = ("abcdefghijklmnopqrstuv");
const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function generatePassword(){
  var userCharAmount = "";
  var userlengthChar = prompt("How many charachters would you like your password to be?");

  if (userlengthChar < 8) {
    prompt("Your password must be at least 8 characters!");
    return "";
  }
  
  if (userlengthChar > 128) {
    prompt("Your password can't be more than 128 characters!");
    return "";
  }

  userlengthChar = parseInt(userlengthChar);

  var userspecialCharacters = confirm ("Would you like to have special characters in your password?");

  if (userspecialCharacters === true) {
    userCharAmount += specialCharacters;
  } else {
    (userspecialCharacters === false);
  }

  var userNumbers = confirm ("Would you like numbers in your password?");

  if (userNumbers === true) {
      userCharAmount += numbers;
    } else {
      (userNumbers === false);
  }
        
  var userlowerCase = confirm("Would you like lowercase letters in your password?");

  if (userlowerCase){
    userCharAmount += lowerCase;
    } else {
    (userlowerCase === false);
  }

  var userUpperCase = confirm ("would you like uppercase letters in your password?");

  if (userUpperCase === true) {
    userCharAmount += upperCase;
    } else {
    (userUpperCase === false)
  }

  for(var i = 0; i < userlengthChar; i++) {
    password += userCharAmount[Math.floor(Math.random() * userCharAmount.length)]
  }
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  password ="";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
