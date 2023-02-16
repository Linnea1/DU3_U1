"use strict";
const main=document.querySelector("main");
let prefix="https://teaching.maumt.se/apis/access/";


//----------------Login----------------

let logged_in=false;
console.log(logged_in);
if(logged_in===false){
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
    function login_or_register(){
        document.querySelector(".contacting_server").style.height="100%";
        document.querySelector(".contacting_server").style.width="100%";
        document.querySelector(".contacting_text").textContent="Contacting server..."
        let _username=document.querySelector(".username_input").value;
        let _password=document.querySelector(".password_input").value;
        if(document.querySelector(".button").textContent==="Login"){
            let _prefix=`${prefix}?action=check_credentials&user_name=${_username}&password=${_password}`;
            _fetch(_prefix);
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
            })
            _fetch(request_post);
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
}
