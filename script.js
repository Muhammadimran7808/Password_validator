let password = document.getElementById("password")
let lower = ""
password.addEventListener('keypress', () => {
    if (password.value.length >= 8) {
        console.log("Hi")
    }
})