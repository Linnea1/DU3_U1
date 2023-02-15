"use strict";
const main=document.querySelector("main");

//----------------Login----------------

let username;
console.log(username);
if(username===undefined){
    swap_style_sheet("css/login.css")
    create_login();
    function create_login(){
        create_element(main,"h1","login","LOGIN");
        create_element(main,"h2","small_headline","User Name:");
        create_element(main, "input","username_input","");
        create_element(main,"h2","small_headline","Password:");
        create_element(main, "input","password_input","");
        create_element(main, "p","above_button_text","Let the magic start!");
        create_element(main, "button","button","Login");
        create_element(main,"h2","register_or_login_link","New to this? Register for free");
    }
    document.querySelector(".button").addEventListener("click",login_or_register);
    document.querySelector(".register_or_login_link").addEventListener("click",login_or_register_event);
    function login_or_register(event){
        if(document.querySelector(".button").textContent==="Login"){
            console.log(document.querySelector(".username_input").value);
            console.log(document.querySelector(".password_input").value);
        }
        else{
            console.log("nej");
        }
        
    }

    function login_link(){
        document.querySelector("#wrapper").style.backgroundColor="aquamarine";
        document.querySelector(".login").textContent="LOGIN";
        document.querySelector(".above_button_text").textContent="Let the magic start!";
        document.querySelector(".button").textContent="Login";
        document.querySelector(".register_or_login_link").textContent="New to this? Register for free";
    }
    //----------------Register----------------

    function login_or_register_event(event){
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
}
