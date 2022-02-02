let name1=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name1);
if(name1=='')
{
  alert('You need to login first');
  window.location.href="signin.html";
}
function Logout()
{
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.href="signin.html";}
