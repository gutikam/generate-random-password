function generatePassword(length){
    const charset =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for(let i = 0; i < length; i++){
        const randomN = Math.floor(Math.random() * charset.length)
        password += charset[randomN]
    }
    return password;
}

const btn = document.getElementById("generate-btn");
btn.addEventListener("click", function(){
    const inputLength = document.getElementById("length");
    const length = parseInt(inputLength.value);
    const passwordDisplay = document.getElementById("password-display");

    if(length >= 4 && length <= 32 ){
        const password = generatePassword(length);
        passwordDisplay.textContent = password;
    }else {
        passwordDisplay.textContent = "ingrese un numero entre 4 y 32"
    }
})