function login(){
const email=document.getElementById("email").value
if(email===""){
alert("Enter email")
return
}
localStorage.setItem("email",email)
window.location="dashboard.html"
}