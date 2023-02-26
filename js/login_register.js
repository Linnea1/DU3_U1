"use strict";
let _username;
//----------------Login----------------

let logged_in=localStorage.getItem("logged_in");
console.log(logged_in);
login_logout();


function create_login(){
    document.querySelector(".login_register").style.visibility="visible";
    create_element(document.querySelector(".login_register"),"h1","login","LOGIN");
    create_element(document.querySelector(".login_register"),"h2","small_headline","User Name:");
    create_element(document.querySelector(".login_register"), "input","username_input","");
    create_element(document.querySelector(".login_register"),"h2","small_headline","Password:");
    create_element(document.querySelector(".login_register"), "input","password_input","");
    create_element(document.querySelector(".login_register"), "p","above_button_text","Let the magic start!");
    create_element(document.querySelector(".login_register"), "button","button","Login");
    create_element(document.querySelector(".login_register"),"h2","register_or_login_link","New to this? Register for free");
    document.querySelector(".button").addEventListener("click",login_or_register);
    document.querySelector(".register_or_login_link").addEventListener("click",login_or_register_event);
}

async function login_or_register(){
    let prefix = "https://teaching.maumt.se/apis/access/";
    localStorage.setItem(`_username`,document.querySelector(".username_input").value);
    _username=localStorage.getItem("_username");
    let _password=document.querySelector(".password_input").value;
    let _prefix = `${prefix}?action=check_credentials&user_name=${localStorage.getItem("_username")}&password=${_password}`;
    if(document.querySelector(".button").textContent==="Login"){
        document.querySelector(".status_parent").style.visibility="visible";
        document.querySelector(".status_text").textContent="Contacting server..."
        const request_get = new Request (_prefix);
        const response = await fetch_function(request_get);
        check_request(request_get, "login");
        if(response.ok){
            
            localStorage.setItem(`logged_in`,"login");
            logged_in=localStorage.getItem("logged_in");
            document.querySelector(".status_parent").style.visibility="hidden";
        }
        else{
            document.querySelector(".status_parent").style.visibility="hidden";
            logged_in=false;
        }
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
        const request_get = new Request (_prefix);
        const response = await fetch_function(request_post);
        check_request(request_get, "register");
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
        case false||null:
            console.log("not logged in");
            swap_style_sheet("css/login.css")
            create_login();
            break;
        case "login":
            console.log("logged in");
            swap_style_sheet("css/quiz.css");
            
            document.querySelector(".login_register").style.visibility="hidden";
            
            
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
