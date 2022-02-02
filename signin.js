function saveData()
{
let name,psw;
name=document.getElementById("name").value;


psw=document.getElementById("psw").value;

localStorage.setItem("name",name)

localStorage.setItem("psw",psw)
window.location.href="profile.html";
}
