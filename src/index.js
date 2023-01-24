import {countries} from "../node_modules/countries-list";
import { validateEmail } from "./email";
import { validateZip } from "./zip";
import {validatePwd, confirmPwd} from "./password";

const email = document.getElementById("email");
const zip = document.getElementById("zip");
const submit = document.querySelector("#submit");
const pwd = document.getElementById("pwd");
const confirm = document.getElementById("pwd-r");
const allInputs = [...document.querySelectorAll("div > input")];
let counter = 0;
let hasClicked = false;


submit.addEventListener("click", (e) =>{
    hasClicked = true;
    validateZip();
    validateEmail();
    validatePwd();
    confirmPwd();

    for(let i=0; i<allInputs.length; i++){
        if(!allInputs[i].classList.contains("error")){
            counter++
        }
    }
    if(counter == 4){
        alert("ALL VALID NICE");
    }
    counter = 0;
    e.preventDefault();

});

//Continue to monitor all changes after submit button has been clicked.
email.addEventListener("input", () =>{
    if(hasClicked){
        validateEmail();
    }
});


zip.addEventListener("input", ()=>{
    if(hasClicked){
        validateZip();
    }
});

pwd.addEventListener("input", ()=>{
    if(hasClicked){
        validatePwd();
        confirmPwd();
    }
});

confirm.addEventListener("input", () =>{
    if(hasClicked){
        confirmPwd();
    }
});

(function populateCountries(){
    const list = [];
    const dropdown = document.querySelector("#country");
    //append all the countries into the empty list array
    for(const key in countries){
        const name = countries[key].name;
        list.push(name);
    }   
    //sort the countries alphabetically
    list.sort((a,b) =>{
        if(a.toLowerCase() < b.toLowerCase()){
            return -1;
        }
        return 1;
    });
    //append to the dom
    for(let i=0; i<list.length; i++){
        const country = document.createElement("option");
        country.value = list[i];
        country.text = list[i];
        dropdown.append(country);
    }

})();


