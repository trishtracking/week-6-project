const loginButton = document.querySelector("#log-in")
const signUp = document.querySelector("#sign-up")

loginButton.addEventListener("click", () => {
    location.href = "/login-page";
})

signUp.addEventListener("click", () => {
    location.href = "/signup-page";
})