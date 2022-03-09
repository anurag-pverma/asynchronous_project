import navbar from "../component/navbar.js";
let nav = document.getElementById("nav_append");
nav.innerHTML = navbar();


// *******************************************************************
// signup code 

document.querySelector("form").addEventListener("submit", formSubmit);

// var userStack = [];  /// when i refres page then local storge empty every time so instead of userstack arr 
//  we put local storage.getItem  and when userdatabase not in first time so we put [] empty arr in last   inmportent  nahi aata tha mujhko 
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
// ab local storage se data nahi udega 

function formSubmit(event) {
    event.preventDefault();
    let naam= document.querySelector("#name").value
    let num = document.querySelector("#number").value
    let ema = document.querySelector("#email").value
    let pass = document.querySelector("#password").value

    // we put all value in form of objet 

    var userData = {
        userName : naam,
        mobNumber: num,
        useremail: ema,
        userpassword: pass
    }
    userStack.push(userData);
    // console.log(userStack);
    localStorage.setItem("userDataBase", JSON.stringify(userStack));
    // after success full signup we  show a pop message 
    alert("SignUp Successfull Now")
    // and refer a login html page 
    window.location.href = "login.html"

    // agar hamara page refress hota to sara data  ud jata hai previous wala to uske liye upar locala storage.getitem wala function kam karega 


}