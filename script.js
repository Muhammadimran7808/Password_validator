let password = document.getElementsByClassName("password")[0]
let passLength = document.getElementById("passLength")


let lower = ""
password.addEventListener('input', () => {
    if (password.value.length >= 8) {
        passLength.style.color = "rgb(1, 175, 1)";
        lenFulfilled.style.display = "initial";
    }
    else {
        passLength.style.color = "red";
        lenFulfilled.style.display = "none";
    }
});