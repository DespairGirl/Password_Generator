// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '"', ']', '[', '{', '}', '|', '/', '.', '<', '>', '?', ';', ':'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function passCheck(){
  var lenghtCheck=parseInt(prompt("Choose a Password Lenght Between 8 & 128"));
  while (lenghtCheck<8 || lenghtCheck>128){
    alert("Password Lenght is Invalid. Choose a Number Between 8 & 128!")
  }
  if(lenghtCheck=""){
    alert("You MUST enter a value!")
  }
  if (lenghtCheck<=8 || lenghtCheck<=128){
    var numeriCon=confirm("Would you Like you Password to Contain Numbers?")
    var specialCon = confirm("Would You Like Special Characters in Password?");
    var  upperCon = confirm("Would You Like Uppercase Letters in Password?");
    var  lowerCon = confirm("Would You Like Lowercase Letters in Password?");
  
  }
  if(!numeriCon && !specialCon && !upperCon && !lowerCon){
    alert(" Please Choose at Least One Character Type!")
  }

}


   /* var criteria= {
    lenght: clickButton,
    numeric: numericCon,
    special: specialCon,
    upper: upperCon,
    lower: lowerCon
    }
    return criteria;
  }
  
  
  function passwordGen() {
    var password = generatePassword();
    console.log(password);
    
    var passChoices = [];
    console.log(passChoices)
  if (password.numeric) {
    for (i = 0; i < charNum.length; i++) {
      passChoices.push(charNum[i]);

    }
  }
  if (password.special) {
    for (i = 0; i < charSpecial.length; i++) {
      passChoices.push(charSpecial[i]);
    }
  }

  if (password.upper) {
    for (i = 0; i < charUpper.length; i++) {
      passChoices.push(charUpper[i]);
    }
  }
  if (password.lower) {
    for (i = 0; i < charLower.length; i++) {
      passChoices.push(charLower[i]);
    }
  }

  var passwordCom=[];
  for (i=0; i<password.lenght; i++){
      var randomPass=Math.floor((Math.random() * Math.floor(passChoices.lenght)));
      passwordCom.push(passChoices [randomPass]);
      console.log(passwordCom);

  }
  
    var pp=passwordCom.join("");
    console.log(pp);
   pp = document.querySelector("#password").textContent;
    

  }
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
