// Assignment Code
var generateBtn = document.querySelector("#generate");
var charNum=[0,1,2,3,4,5,6,7,8,9];
var charSpecial=['~','`','!','@','#','$','%','^','&','*','(',')','-','_','=','+','"',']','[','{','}','|','/','.','<','>','?',';',':'];
var charUpper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var charLower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




// Write password to the #password input
function writePassword() {

 var clickButton= parseInt(prompt("Choose a Password Lenght Between 8 & 128"))
  if(clickButton< 8 ) {alert("Password Lenght Invalid. Choose a Lengh Greater Than 8");}
  else if(clickButton>128){alert("Password Lenght Invalid. Choose a Lenght Less Than 128");}
  else{
    numericCon=confirm("Would You Like Numbers in Password?");
    specialCon=confirm("Would You Like Special Characters in Password?");
    upperCon=confirm("Would You Like Uppercase Letters in Password?");
    lowerCon=confirm("Would You Like Lowercase Letters in Password?");

    if(!numericCon && !specialCon && !upperCon && !lowerCon){
      alert("Please Choose At Least One Character Type");

    }

  
  }
      
      
  
 

 

   


 

  
  
   

  
  
  
  
  
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




 