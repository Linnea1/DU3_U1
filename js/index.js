"use strict";
function swap_style_sheet(sheet){
    document.getElementById("css_document").setAttribute("href", sheet);  
}

function create_element(parent, type, _class, text){
    const new_element=document.createElement(type);
    parent.appendChild(new_element);
    new_element.classList=_class;
    new_element.textContent=text;
};

/*async function _fetch (url, metod) {
    if(metod)
    if (metod === "Register") {
        const request_post = new Request (url, {
            action: "register",
            user_name:"hej",
            password:"hej",
        })
    }
}*/

async function _fetch(url, _function){
    const response=await fetch(url);
    if (response.ok){
        const resource=await response.json();
        console.log(resource);
        logged_in=true;
        document.querySelector(".contacting_server").style.height="0%";
        document.querySelector(".contacting_server").style.width="0%";
    }
    else{
        console.log("something went wrong");
        _function();
    }
}