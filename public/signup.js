document.querySelector("#button-home").addEventListener("click", () => {
    location.href = "/"
})

const form = document.querySelector("form")

//disable the native validation

form.setAttribute("novalidate", ""); //set attribute takes 2 arguments 

form.addEventListener("submit", (event) => {

//check the validity of inputs, return true if all are valid

const allInputsValid = event.target.checkValidity();
if (!allInputsValid) {
    //stop form submitting if input is invalid
    event.preventDefault(); 
}

});

// check each form input for invalid entry 

const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
    // we want them to be valid first
    input.setAttribute("aria-invalid", false); 
    input.addEventListener("invalid", handleInvalidInput);
    input.addEventListener("input", clearValidity); 

});

function handleInvalidInput(event) {
    const input = event.target 

    input.setAttribute("aria-invalid", true);
    const errorId = input.id + "Error";
    const errorContainer = form.querySelector("#"+errorId);
    errorContainer.textContent= input.validationMessage;
}

function clearValidity(event) {
    const input = event.target; 
    input.setAttribute("aria-invalid", "false")


    const errorId = input.id+"Error";
    const errorContainer = form.querySelector("#"+errorId);
    errorContainer.textContent = "";
}