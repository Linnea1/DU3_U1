function start_quiz(){
    create_element(document.querySelector("main"),"div","quiz","");
    create_element(document.querySelector(".quiz"),"div","logout",_username);
    create_element(document.querySelector(".logout"),"button","logout_button","logout");
    create_element(document.querySelector(".quiz"),"div","dog_picture","");
    create_element(document.querySelector(".quiz"),"div","button_container","");
    create_element(document.querySelector(".button_container"),"button","button_0","");
    create_element(document.querySelector(".button_container"),"button","button_1","");
    create_element(document.querySelector(".button_container"),"button","button_2","");
    create_element(document.querySelector(".button_container"),"button","button_3","");
    get_dog();
}
async function get_dog(){
    let array_of_dogs=[];
    let array_of_selected_dogs=[];
    for(let i=0;i<ALL_BREEDS.length;i++){
        array_of_dogs.push(i);
    }
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    for(let i=0;i<4;i++){
        let random_number=getRandomNumber(array_of_dogs.length);
        array_of_selected_dogs.push(ALL_BREEDS[array_of_dogs[random_number]]);
        document.querySelector(`.button_${i}`).textContent=ALL_BREEDS[array_of_dogs[random_number]].name;
        array_of_dogs.splice(random_number,1);
    }
    let correct_dog=array_of_selected_dogs[getRandomNumber(array_of_selected_dogs.length)];
    console.log(array_of_selected_dogs);
    console.log(correct_dog.url)
    let dog_picture=await _fetch(`https://dog.ceo/api/breed/${correct_dog.url}/images/random`,"Hej");
    console.log(dog_picture);
    document.querySelector(".dog_picture").style.backgroundImage=`url(${dog_picture})`;

}
