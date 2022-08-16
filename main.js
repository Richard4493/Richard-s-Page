//Function to check if the user types a valid number in the field//
function mobcheck(){
    var m=document.forms["details"]["mob"].value
    if(isNaN(m))
    {
        document.getElementById("mob").style.color="red"
        document.getElementById("mob").value="**Enter a valid phone number**"
    }
}
//Function to check whether the user inputs invalid mail format in the field//
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
  document.getElementById("mail").style.color="red"
  document.getElementById("mail").value="**Enter a valid mail address**"
}
}
function gotoTop() { //function to scroll up to top of page//
  document.body.scrollTop = 0; //for safari browser//
  document.documentElement.scrollTop = 0; //for chrome and firefox//
} 
