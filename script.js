// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText=document.querySelector("#password");
  passwordText.values=password;
  
}
generateBtn.addEventListener("click", writePassword);



// established variables for each character type in an array
var charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '"', ']', '[', '{', '}', '|', '/', '.', '<', '>', '?', ';', ':'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// function to check password criteria of length, numbers, specials, upper and lower case letters. Will keep alerting until valid input.
function passCheck() {

  var lenghtCheck = parseInt(prompt("Choose a Password Lenght Between 8 & 128")); // parseInt used to convert length inputted to interger value
  if (lenghtCheck < 8 || lenghtCheck > 128) {  //invalid parameters
    alert("Password Lenght is Invalid. Choose a Number Between 8 & 128!")
    lenghtCheck = parseInt(prompt("Choose a Password Lenght Between 8 & 128"));

  }

  if (lenghtCheck >= 8 && lenghtCheck <= 128) { // valid intial length check then asked to confirm other password props
    var numeriCon = confirm("Would you Like you Password to Contain Numbers?");
    var specialCon = confirm("Would You Like Special Characters in Password?");
    var upperCon = confirm("Would You Like Uppercase Letters in Password?");
    var lowerCon = confirm("Would You Like Lowercase Letters in Password?");
  }



  if (!numeriCon && !specialCon && !upperCon && !lowerCon) { //condition when no character type is selected.
    alert(" Please Choose at Least One Character Type!");
    var numeriCon = confirm("Would you Like you Password to Contain Numbers?");
    var specialCon = confirm("Would You Like Special Characters in Password?");
    var upperCon = confirm("Would You Like Uppercase Letters in Password?");
    var lowerCon = confirm("Would You Like Lowercase Letters in Password?");




  }
  var passCheckOpts = { //object made to house all password properties
    lens: lenghtCheck,
    number: numeriCon,
    special: specialCon,
    upperC: upperCon,
    lowerC: lowerCon
  }
  return passCheckOpts;



}
// Generating password
function generatePassword() { 

  var choices = passCheck(); // to add/ change values for password props
  console.log(choices)

  var intPass = []; // props stored in this array each iteration. initial password array
  console.log(intPass)



  if (choices.number) { //pushing number prop to intPass
    for (i = 0; i < charNum.length; i++) {
      intPass.push(charNum[i]);
    }

  }
  if (choices.special) { // pushing special prop to intPass
    for (i = 0; i < charSpecial.length; i++) {
      intPass.push(charSpecial[i]);
    }
  }
  if (choices.upperC) { //pushing upperC prop to intPass
    for (i = 0; i < charUpper.length; i++) {
      intPass.push(charUpper[i]);
    }
  }
  if (choices.lowerC) { //pushing lowerC prop into intPass
    for (i = 0; i < charLower.length; i++) { 
      intPass.push(charLower[i]);
    }
  }


  var finPass = []; //final password array

  for (let i = 0; i < choices.lens; i++) {
    var randoPass = Math.floor(Math.random() * Math.floor(intPass.length)); // Math floor rounds to nearest whole number, math random gives random values 
    //that will make up intPass
    finPass.push(intPass[randoPass]) //appending intPass and randoPass array vars to final password array
  }

  console.log(finPass); //outputs array of values

  password = finPass.join(''); //combines all array elements into single string
  console.log(password);



}
















