import navbar from "../component/navbar.js";
let nav = document.getElementById("nav_append");
nav.innerHTML = navbar();



// *********************************************************
// fetching the data in localStorage loging section 

document.querySelector("form").addEventListener("submit", singnIn);

// getdata from local storage  and check 
var rgstduser = JSON.parse(localStorage.getItem("userDataBase"));
// console.log(rgstduser);

function singnIn(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    // we need to check username and password whose person present in local storage or not 
    // and we check one by one data using for loop 

    for (var  i = 0; i < rgstduser.length; i++){
        console.log(rgstduser[i].useremail, rgstduser[i].userpassword)

        if (rgstduser[i].useremail == email  &&  rgstduser[i].userpassword == password) {
            alert("Password is Successfully Matched!")
            window.location.href = "index.html";
        }
        else {
            alert("invalid Credentials");
            window.location.href = "signup.html";

        }
    }


}