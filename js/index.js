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

async function _fetch(url, status_text){
    create_element(document.querySelector("body"),"div","status_parent","");
    create_element(document.querySelector(".status_parent"),"div","status_text",status_text);
    const response=await fetch(url);
    if (response.ok){
        const resource=await response.json();
        console.log(resource);
        document.querySelector(".status_parent").remove();
        logged_in=true;
        console.log(logged_in);
    }
    else{
        document.querySelector(".status_text").textContent="Something went wrong";
    }
}

