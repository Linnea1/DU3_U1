create_element(document.querySelector("body"),"div","status_parent","");
create_element(document.querySelector(".status_parent"),"div","status_text","");
document.querySelector(".status_parent").style.visibility="hidden";
create_element(document.querySelector("body"),"div","feedback_parent","");
create_element(document.querySelector(".feedback_parent"),"div","feedback_box","");
create_element(document.querySelector(".feedback_box"),"div","feedback_text","");
create_element(document.querySelector(".feedback_box"),"button","feedback_button","CLOSE");
document.querySelector(".feedback_button").addEventListener("click",close);
document.querySelector(".feedback_parent").style.visibility="hidden";

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

async function check_request(request, type) {
    
    const response = await fetch_function(request);
    document.querySelector(".above_button_text").textContent="Let the magic start!";
    document.querySelector(".above_button_text").style.backgroundColor="transparent";
    if(response.status === 200) {

        if(type === "login") {
            console.log("stay logged in");
            logged_in=true;

        } else if(type === "register") {
            document.querySelector(".feedback_parent").style.visibility="visible";
            document.querySelector(".feedback_text").textContent="Registration Complete. Pleace proceed to login."
           console.log("registered");
        }
    } else if(response.status === 400) {
        document.querySelector(".feedback_parent").style.visibility="visible";
        document.querySelector(".feedback_text").textContent="Please enter username and password."
        console.log("nej")
    } else if(response.status === 404) {
        document.querySelector(".above_button_text").textContent="Wrong username or password";
        document.querySelector(".above_button_text").style.backgroundColor="white";
    } else if(response.status === 409) {
        document.querySelector(".feedback_parent").style.visibility="visible";
        document.querySelector(".feedback_text").textContent="Sorry that name is taken. Please try another one."
    } else if(response.status === 418) {
        document.querySelector(".feedback_parent").style.visibility="visible";
        document.querySelector(".feedback_text").textContent="The server thinks it is not a teapot!"
    }
}
function close(){
    document.querySelector(".feedback_parent").style.visibility="hidden";
}
