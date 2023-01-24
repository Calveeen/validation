export function validatePwd(){
    /*
    (?=.*[A-Z]) - Must include at least one capitalized alphabet
    (?=.*[0-9]) - Must include at least one number
    (?=.{8,16}$) - Must not contain less than 8 characters, 
    or greater than 16 characters 
    */
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,16}$)/;
    const pwd = document.getElementById("pwd");

    if(regex.test(pwd.value)){
        pwd.classList.remove("error");
    } else{
        pwd.classList.add("error");
    }
}

export function confirmPwd(){
    const pwd = document.getElementById("pwd");
    const confirmPwd = document.getElementById("pwd-r");

    if(pwd.value != confirmPwd.value){
        confirmPwd.classList.add("error");
    } else{
        confirmPwd.classList.remove("error");
    }
}