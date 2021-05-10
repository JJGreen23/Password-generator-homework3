const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt ("How many characters would you like for your password? (note: must be more than 12 characters");
  var numbers = confirm ("Does your password require numbers?");
  var lowerCases = confirm ("Do you want lowercase characters?");
  var upperCases = confirm ("How about uppercases?");
  var special = confirm ("Would you like special characters?");
  
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowercases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUppercases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;

}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowercases();
  minimumCount++;

}

if (upperCases === true) {
  minimumUpperCases = functionArray.getUppercases();
  minimumCount++;

}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;

}

var randomGeneratedPassword = "";

for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomGeneratedPassword += randomNumberPicked;
}

randomGeneratedPassword += minimumNumbers;
randomGeneratedPassword += minimumUpperCases;
randomGeneratedPassword += minimumLowerCases;
randomGeneratedPassword += minimumSpecialCharacters;

return randomGeneratedPassword; 


}