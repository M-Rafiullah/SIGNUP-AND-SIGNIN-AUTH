function saveData1() {
    let name, email, psw;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    psw = document.getElementById("psw").value;
    window.location.href="signin.html"

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("psw", psw)}
