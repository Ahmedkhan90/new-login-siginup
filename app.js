const url = 'http://localhost:5000';
function signUp(){
    var user = {
        name = document.getElementById('userName').Value,
        email = document.getElementById('userEmail').value,
        password = document.getElementById('userPassword').value
    };
    document.getElementById('userName').Value = "",
    document.getElementById('userEmail').Value = "",
    document.getElementById('userPassword').Value = ""
    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerText = Http.responseText;
    }
    return false

}

function logIn(){
    
    let Emails = document.getElementById("email").value;
    let Passwords = document.getElementById("password").value;

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Emails,
        password: Passwords
    }));
    document.getElementById('lemail').value = ""
    document.getElementById('lpassword').value = ""
    Http.onreadystatechange = (e) => {

        let JSONres = JSON.parse(Http.responseText)

        document.getElementById("Result").innerText = JSONres.message;
        document.getElementById("name").innerText = "Name :" + JSONres.name;
        // document.getElementById("fname").innerText = "Father Name :" + JSONres.fname;
        document.getElementById("email").innerText = "Email :" + JSONres.email;



    }


    return false;
}
