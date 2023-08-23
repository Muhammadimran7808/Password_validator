
let password = document.getElementsByClassName("password")[0]
let rPassword = document.getElementsByClassName("password")[1]
let submit = document.getElementById("submit")
let passLength = document.getElementById("passLength")
let lower = document.getElementById("lower")
let upper = document.getElementById("upper")
let number = document.getElementById("number")
let special = document.getElementById("special")
let passNotMatch = document.getElementById("passNotMatch")

// Regular Expression:
const lowerCase = /[a-z]/g
const upperCase = /[A-Z]/g
const symbols = /[\W_]/g
const numbers = /[0-9]/g

// Funtion to show or hide password
let togglePasswordVisibility = (inputElement) => {
    if (inputElement.type === "password") {
        inputElement.type = "text";
    } else {
        inputElement.type = "password";
    }
}



// Event delegation for show/hide password icons
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("fa-solid")) {
        const data = target.getAttribute("data");
        const passwordInput = data === "1" ? password : rPassword;
        togglePasswordVisibility(passwordInput);
        target.classList.toggle("fa-eye");
        target.classList.toggle("fa-eye-slash");
    }
});


let lowerF, upperF, numF, symbolF, lengthF, bothF = false;

let lowerChecker = (lowerCase) => {
    if (password.value.match(lowerCase)) {
        lower.style.color = "rgb(1, 175, 1)";
        lowerFulfilledIcon.style.display = "initial";
        lowerF = true
    }
    else {
        lower.style.color = "red";
        lowerFulfilledIcon.style.display = "none";
        lowerF = false
    }
}
let upperChecker = (upperCase) => {
    if (password.value.match(upperCase)) {
        upper.style.color = "rgb(1, 175, 1)";
        upperFulfilledIcon.style.display = "initial";
        upperF = true;
    }
    else {
        upper.style.color = "red";
        upperFulfilledIcon.style.display = "none";
        upperF = false;
    }
}
let numberChecker = (numbers) => {
    if (password.value.match(numbers)) {
        number.style.color = "rgb(1, 175, 1)";
        numFulfilledIcon.style.display = "initial";
        numF = true
    }
    else {
        number.style.color = "red";
        numFulfilledIcon.style.display = "none";
        numF = false
    }
}
let SymbolChecker = (symbols) => {
    if (password.value.match(symbols)) {
        special.style.color = "rgb(1, 175, 1)";
        specFulfilledIcon.style.display = "initial";
        symbolF = true;
    }
    else {
        special.style.color = "red";
        specFulfilledIcon.style.display = "none";
        symbolF = false;
    }
}
let lengthChecker = () => {
    if (password.value.length >= 8) {
        passLength.style.color = "rgb(1, 175, 1)";
        lenFulfilledIcon.style.display = "initial";
        lengthF = true;
    }
    else {
        passLength.style.color = "red";
        lenFulfilledIcon.style.display = "none";
        lengthF = false;
    }
}
let bothPassword = () => {
    if (password.value == rPassword.value) {
        rPassword.style.outline = "2px solid #accfef"
        bothF = true;
        passNotMatch.classList.remove("active")
    }
    else {
        rPassword.style.outline = "2px solid red"
        bothF = false;
        passNotMatch.classList.add("active")
    }
}
// function that checks all the conditions are fulfilled or not. If fulfilled it enable submit button.
let decesionMaker = () => {
    if (lowerF == true && upperF == true && numF == true && symbolF == true && lengthF == true && bothF == true) {
        submit.classList.add("active")
        submit.disabled = false;
    }
    else {
        submit.classList.remove("active")
        submit.disabled = true;
    }
}

// password event listener. The functions inside Listener will invoked when user enter something in the input feild.
password.addEventListener('input', () => {
    lowerChecker(lowerCase);
    upperChecker(upperCase);
    numberChecker(numbers);
    SymbolChecker(symbols);
    lengthChecker();
    bothPassword()
    decesionMaker();
});

rPassword.addEventListener('input', () => {
    bothPassword();
    decesionMaker();
});