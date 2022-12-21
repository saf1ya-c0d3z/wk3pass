
var generateBtn = document.querySelector("#generate");
var characters ='abcdefghijklmnopqrstuvwxyz';
var Ulcharacters ='nopqrstuvwxyzABCDEFGHIJKL';
var LSCcharacters ='nopqvwxyzABCIJKL*&$#@?%!+~';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  function UlgenerateString(length) {
    let result = ' ';
    const charactersLength = Ulcharacters.length;
    for ( let i = 0; i < length; i++ ) {
        result += Ulcharacters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  function LSCgenerateString(length) {
    let result = ' ';
    const charactersLength = LSCcharacters.length;
    for ( let i = 0; i < length; i++ ) {
        result += LSCcharacters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
console.log(generateString(5));
function generatePassword() {
  //define Variable for WHEN prompted for the length of the password (
  var passlength = prompt("Enter a number for your passowrd length between 8-128 characters,");
  //define Variable for character types to include in the password
 
  if (passlength < 8 || passlength > 128) {
    alert("You're password is too short or too long try again.")
    return ""
  }
var lowercaseq = confirm ("Do you want to include Lowercase letters?");
 var uppercaseq = confirm (" Do you want to include Uppercase letters?");
 var numberq = confirm ("Would you like to use numbers?");
 var specialchar = confirm ("Would you like to use special characters? ex: *, $, ?, !, @ ect.");

 if (!lowercaseq && !uppercaseq && !numberq && !specialchar) {
  alert ("Sorry, you must select at least one of these choices, please try again.");
  generatePassword()

 }
if (lowercaseq) {
 var password = generateString (passlength); 

}
if (numberq){ 
  password= password.replace(password.charAt(1),6);
  
} 
if (uppercaseq) {
  password = UlgenerateString (passlength);
}
if (specialchar) {
  password = LSCgenerateString (passlength);
}
return password

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generateLowercaseChar() {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
