var generateBtn = document.querySelector("#generate");
var characters ='abcdefghijklmnopqrstuvwxyz';
var Ulcharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LSCcharacters ='*&$#@?%!+~';
var numbers = "1234567890"
var combinechars = ""
let result = ' ';
 
function generatePassword(passlength, combinechars, initialpassword) {
  let result = initialpassword;
  //const charactersLength = combinechars.passlength;
 for ( let i = initialpassword.length; i < passlength; i++ ) {
     result += combinechars.charAt(Math.floor(Math.random() * combinechars.length));
   }
 
   return result;
 }
 
 
 
function generateString() {
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
 //generatePassword()
 

}
var initialpassword = ""
if (lowercaseq) {
combinechars += characters;
initialpassword +=  characters.charAt(Math.floor(Math.random() * characters.length));
}
if (numberq){
combinechars += numbers;
initialpassword +=  numbers.charAt(Math.floor(Math.random() * numbers.length));
 }
if (uppercaseq) {
combinechars += Ulcharacters;
initialpassword +=  Ulcharacters.charAt(Math.floor(Math.random() * Ulcharacters.length));
}
if (specialchar) {
 combinechars += LSCcharacters;
 initialpassword +=  LSCcharacters.charAt(Math.floor(Math.random() * LSCcharacters.length));
 }
 console.log(combinechars)

var result = generatePassword(passlength, combinechars, initialpassword );
//writePassword(password)
return result ;
 
}
 
 
 
 
// Write password to the #password input
function writePassword() {
 var password = generateString();
 var passwordText = document.querySelector("#password");
 
 passwordText.value = password;
 
}
//function generateLowercaseChar() {
 
//}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 


