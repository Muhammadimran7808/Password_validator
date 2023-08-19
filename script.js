let password = document.getElementsByClassName("password")[0]
let rPassword = document.getElementsByClassName("password")[1]
let submit = document.getElementById("submit")
let passLength = document.getElementById("passLength")
let lower = document.getElementById("lower")
let upper = document.getElementById("upper")
let number = document.getElementById("number")
let special = document.getElementById("special")

// Regular Expression:
const lowerCase = /[a-z]/g
const upperCase = /[A-Z]/g
const symbols = /[\W_]/
const numbers = /[0-9]/

// Funtion to show or hide password
let showHidePassword = (data) => {
    if (data === "1") {
        if (password.type === "password") {
            password.type = "text"
        }
        else {
            password.type = "password"
        }
    }
    else {
        if (rPassword.type === "password") {
            rPassword.type = "text"
        }
        else {
            rPassword.type = "password"
        }
    }
}


let showP = document.getElementsByClassName("fa-eye")
// code that handel password show/hide icon when user click on icon.
let a = Array.from(showP)
a.forEach(function (elem) {
    elem.addEventListener('click', () => {
        data = elem.getAttribute("data")
        if (elem.classList.contains("fa-eye")) {
            elem.classList.add("fa-eye-slash")
            elem.classList.remove("fa-eye")
            showHidePassword(data);
        }
        else {
            elem.classList.add("fa-eye")
            showHidePassword(data);
        }
    })
})

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
    }
    else {
        rPassword.style.outline = "2px solid red"
        bothF = false;
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
    if (lowerF, upperF, numF, symbolF, lengthF, bothF == true){
        console.log("It works")
    }
});

rPassword.addEventListener('input', () => {
    bothPassword();
    if (lowerF, upperF, numF, symbolF, lengthF, bothF == true) {
        console.log("It works")
    }
});

submit.addEventListener('click', ()=>{
    console.log("ho")
})