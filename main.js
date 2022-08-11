function mobcheck(){
    var m=document.forms["details"]["mob"].value
    if(isNaN(m))
    {
        document.getElementById("mob").style.color="red"
        document.getElementById("mob").value="**Enter a valid phone number**"
    }
}
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