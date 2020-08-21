document.querySelector("#button-home").addEventListener("click", () => {
    location.href = "/"
})

document.querySelector("#logOutButton").addEventListener("click", () => {
    location.href = "/logout"
})

const username = document.querySelector("#name");

function getUsername() {
    fetch("/getuser", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        }
      })
     .then((res) => {
         username.innerHTML=res;
     })
     .catch((err) => conmouseleave.log(error));
}

getUsername;