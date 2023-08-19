let password = document.getElementsByClassName("password")[0]
let passLength = document.getElementById("passLength")
let lower = document.getElementById("lower")
let upper = document.getElementById("upper")
let number = document.getElementById("number")
let special = document.getElementById("special")

const lowerCase = /[a-z]/g
const upperCase = /[A-Z]/g
const symbols = /[\W]/
const numbers = /[0-9]/

let showHidePassword = ()=>{
    if(password.type === "password"){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
}

let showP = document.getElementsByClassName("fa-eye")
let a = Array.from(showP)
a.forEach(function (elem){
    elem.addEventListener('click',()=>{
        if(elem.classList.contains("fa-eye")){
            showHidePassword();
            elem.classList.add("fa-eye-slash")
            elem.classList.remove("fa-eye")
        }
        else{
            showHidePassword();
            elem.classList.add("fa-eye")
        }
    })
})

let lowerChecker = (lowerCase) => {
    if (password.value.match(lowerCase)) {
        lower.style.color = "rgb(1, 175, 1)";
        lowerFulfilledIcon.style.display = "initial";
    }
    else {
        lower.style.color = "red";
        lowerFulfilledIcon.style.display = "none";
    }
}

let upperChecker = (upperCase) => {
    if (password.value.match(upperCase)) {
        upper.style.color = "rgb(1, 175, 1)";
        upperFulfilledIcon.style.display = "initial";
    }
    else {
        upper.style.color = "red";
        upperFulfilledIcon.style.display = "none";
    }
}
let numberChecker = (numbers) => {
    if (password.value.match(numbers)) {
        number.style.color = "rgb(1, 175, 1)";
        numFulfilledIcon.style.display = "initial";
    }
    else {
        number.style.color = "red";
        numFulfilledIcon.style.display = "none";
    }
}
let SymbolChecker = (symbols) => {
    if (password.value.match(symbols)) {
        special.style.color = "rgb(1, 175, 1)";
        specFulfilledIcon.style.display = "initial";
    }
    else {
        special.style.color = "red";
        specFulfilledIcon.style.display = "none";
    }
}
let lengthChecker = () => {
    if (password.value.length >= 8) {
        passLength.style.color = "rgb(1, 175, 1)";
        lenFulfilledIcon.style.display = "initial";
    }
    else {
        passLength.style.color = "red";
        lenFulfilledIcon.style.display = "none";
    }
}

password.addEventListener('input', () => {
    lowerChecker(lowerCase);
    upperChecker(upperCase);
    numberChecker(numbers);
    SymbolChecker(symbols);
    lengthChecker();
});
