export function validateZip(){
    // Regex to check for valid zip code in format xxx-xxx
    const regex = /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}$/;
    const zip = document.getElementById("zip");
    // Check if the length of the zip code is 6 and if the regex pattern matches
    if (zip.value.length == 7 && regex.test(zip.value)) {
        zip.classList.remove("error");
    } else {
        zip.classList.add('error');
    }
}
