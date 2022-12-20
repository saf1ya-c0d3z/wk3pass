// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create a function to make guidlines for password
function generatePassword() {
  //define Variable for WHEN prompted for the length of the password (
  var passlength = prompt("Enter a passowrd length between 8-128 characters,");
  //define Variable for length of at least 8 characters and no more than 128 characters
  //define Variable for character types to include in the password
  //variable lowercase, 
  // variable uppercase, 
  // variable numeric
  // variable special characters
  // Make Prompt for buttom
  if (passlength < 8 || passlength > 128) {
    alert("You're password is too short or too long try again.")
    return ""
  }
var lowercaseq = confirm ("Do you want to include Lowercase letters?");
 var uppercaseq = confirm (" Do you want to use Uppercase letters?")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
