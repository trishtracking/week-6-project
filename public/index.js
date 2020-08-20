const loginButton = document.querySelector("#log-in")
const signUp = document.querySelector("#sign-up")

loginButton.addEventListener("click", () => {
    location.href = "/login";
})

signUp.addEventListener("click", () => {
    location.href = "/signup-page";
})