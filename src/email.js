export function validateEmail(){
    // Get the email field
    const email = document.getElementById("email");
    // Create a regular expression to check if the email is valid
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    /* 
    1. An alphanumeric character or underscore, followed by one or more characters.
    (([a-zA-Z0-9_\-\.]+))
    2. An @ symbol. (@)
    3. One or more alphanumeric characters or underscores. (([a-zA-Z0-9_\-\.]+))
    4. A dot. (\.)
    5. Two to five alphabetic characters. ([a-zA-Z]{2,5})
    */
    const emailInput = document.getElementById("email");

    // Check if the email is valid using the regex
    if(regex.test(email.value) === false) {
        emailInput.classList.add("error");           
    } else{
        emailInput.classList.remove("error");
    }
  
}

