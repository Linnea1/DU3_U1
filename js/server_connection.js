create_element(document.querySelector("body"),"div","status_parent","");
create_element(document.querySelector(".status_parent"),"div","status_text","");
document.querySelector(".status_parent").style.visibility="hidden";
async function check_request(request, type) {
    document.querySelector(".status_parent").style.visibility="visible";
    const response = await fetch_function(request);

    if(response.status === 200) {

        if(type === "login") {
            console.log("stay logged in")
            logged_in=true;

        } else if(type === "register") {
           console.log("registered")
           logged_in=true;
           
        }

    } else if(response.status === 400) {
        feedback("Please enter username and password.");
       

    } else if(response.status === 404) {
    

    } else if(response.status === 409) {
        

    } else if(response.status === 418) {
        
    }

}
