"use strict";
const login_register_parent=document.querySelector("#login_register");
let _username;
//----------------Login----------------

let logged_in=false;
console.log(logged_in);

swap_style_sheet("css/login.css")
create_login();
    
function create_login(){
    create_element(login_register_parent,"h1","login","LOGIN");
    create_element(login_register_parent,"h2","small_headline","User Name:");
    create_element(login_register_parent, "input","username_input","");
    create_element(login_register_parent,"h2","small_headline","Password:");
    create_element(login_register_parent, "input","password_input","");
    create_element(login_register_parent, "p","above_button_text","Let the magic start!");
    create_element(login_register_parent, "button","button","Login");
    create_element(login_register_parent,"h2","register_or_login_link","New to this? Register for free");
}
document.querySelector(".button").addEventListener("click",login_or_register);
document.querySelector(".register_or_login_link").addEventListener("click",login_or_register_event);
    
async function login_or_register(){
    let prefix="https://teaching.maumt.se/apis/access/";
    _username=document.querySelector(".username_input").value;
    let _password=document.querySelector(".password_input").value;
    if(document.querySelector(".button").textContent==="Login"){
        let _prefix=`${prefix}?action=check_credentials&user_name=${_username}&password=${_password}`;
        await _fetch(_prefix,"Connecting to server...");
        login_logout();
    }   
    else if(document.querySelector(".button").textContent==="Register"){
        let body_post={
            action: "register",
            user_name:_username,
            password:_password,
        };
        const request_post = new Request (prefix,{
            method:"POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body:JSON.stringify(body_post),
        });
        await _fetch(request_post,"Connecting to server...");
        login_logout();
    }
}

function login_link(){
    document.querySelector("#wrapper").style.backgroundColor="aquamarine";
    document.querySelector(".login").textContent="LOGIN";
    document.querySelector(".above_button_text").textContent="Let the magic start!";
    document.querySelector(".button").textContent="Login";
    document.querySelector(".register_or_login_link").textContent="New to this? Register for free";
}

function login_logout(){
    switch(logged_in){
        case false:
            console.log("not logged in");
            break;
        case true:
            console.log("logged in");
            swap_style_sheet("css/quiz.css")
            login_register_parent.remove();
            start_quiz();
        break;
    }
}
   
//----------------Register----------------

function login_or_register_event(){
    if(document.querySelector("button").textContent==="Login"){
        register();
    }
    else{
        login_link()
    }
}
function register(){
    document.querySelector("#wrapper").style.backgroundColor="green";
    document.querySelector(".login").textContent="REGISTER";
    document.querySelector(".above_button_text").textContent="Ready when you are...";
    document.querySelector(".button").textContent="Register";
    document.querySelector(".register_or_login_link").textContent="Already have an account? Go to logn";
}
