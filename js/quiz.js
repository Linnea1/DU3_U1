function start_quiz(){
    create_element(document.querySelector("main"),"div","quiz","");
    create_element(document.querySelector(".quiz"),"div","logout","");
    create_element(document.querySelector(".logout"),"div","username",localStorage.getItem("_username"));
    create_element(document.querySelector(".logout"),"button","logout_button","logout");
    create_element(document.querySelector(".quiz"),"div","dog_picture","");
    create_element(document.querySelector(".quiz"),"div","button_container","");
    create_element(document.querySelector(".button_container"),"button","button_0","");
    create_element(document.querySelector(".button_container"),"button","button_1","");
    create_element(document.querySelector(".button_container"),"button","button_2","");
    create_element(document.querySelector(".button_container"),"button","button_3","");
    create_element(document.querySelector("body"),"div","pop_up","");
    create_element(document.querySelector(".pop_up"),"div","box","");
    create_element(document.querySelector(".box"),"div","answer_text","");
    create_element(document.querySelector(".box"),"button","button_event","ONE MORE");
    document.querySelector(".button_event").addEventListener("click",close_div);
    document.querySelector(".logout").addEventListener("click",logout);
    document.querySelector(`.button_0`).addEventListener("click", quiz_event);
    document.querySelector(`.button_1`).addEventListener("click", quiz_event);
    document.querySelector(`.button_2`).addEventListener("click", quiz_event);
    document.querySelector(`.button_3`).addEventListener("click", quiz_event);
    play_quiz();
}

function pop_up_answer(answer){
    document.querySelector(".pop_up").style.visibility="visible";
    document.querySelector(".answer_text").textContent=answer;
    if(answer==="CORRECT!"){
        document.querySelector(".box").style.backgroundColor="green";
    }
    else{
        document.querySelector(".box").style.backgroundColor="red";
    }
}

function close_div(){
    document.querySelector(".pop_up").style.visibility="hidden";
    play_quiz();
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function get_dogs(){
    let array_of_dogs=[];
    let selected_dogs=[];
    for(let i=0;i<ALL_BREEDS.length;i++){
        array_of_dogs.push(i);
    }
    for(let i=0;i<4;i++){
        let random_number=getRandomNumber(array_of_dogs.length);
        selected_dogs.push(ALL_BREEDS[array_of_dogs[random_number]]);
        array_of_dogs.splice(random_number,1);
    }
    return selected_dogs
}
let selected_dog_name;

async function play_quiz(){
    document.querySelector(".pop_up").style.visibility="hidden";
    let dogs=get_dogs();
    let selected_dog=dogs[getRandomNumber(4)];
    selected_dog_name=selected_dog.name;

    for(let i=0;i<4;i++){
        document.querySelector(`.button_${i}`).textContent=dogs[i].name;
    }

    let dog_picture= new Request(`https://dog.ceo/api/breed/${selected_dog.url}/images/random`);
    let response=await fetch_function(dog_picture);
    let resource=await response.json();
    let image=resource.message;
    document.querySelector(".status_parent").style.visibility="visible";
    document.querySelector(".status_text").textContent="Getting random dog image."
    console.log(resource);
    console.log(selected_dog.name);
    if(response.ok) {
        document.querySelector(".dog_picture").innerHTML= `<img class="image" src="${image}">`;
        document.querySelector(".status_parent").style.visibility="hidden";
    } else {
        document.querySelector("#image_div").innerHTML= `<img class="image" src="media/logo.png">`;
        document.querySelector(".status_parent").style.visibility="hidden";
    };
}

function quiz_event(event){
    if(event.target.textContent===selected_dog_name){
        pop_up_answer("CORRECT!");
    }
    else{
        pop_up_answer("Wrong");
    }
}

function logout(){
    document.querySelector(".quiz").remove();
    document.querySelector(".pop_up").remove();
    if(document.querySelector(".password_input")===null){
        create_login();
    }
    document.querySelector(".login_register").style.height="100vh";
    document.querySelector(".login_register").style.visibility="visible";
    swap_style_sheet("css/login.css")
    localStorage.clear();
}