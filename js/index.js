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

async function fetch_function (request) {
    const response = await fetch(request);
    return response;
}

