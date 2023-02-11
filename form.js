function validate(){
var Username=document.getElementById("uname").value;
var Password=document.getElementById("pass").value;
if (Username==""){
    alert("Username must be filled");
    return false
}else if(Password==""){
    alert("Password must be filled");
    return false
}else if(Password.length<5){
    alert("password must be long ")
    return false
}else{
    alert("Logged in Successfully");
    return true
}
}
