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
      .then( res => res.json())
     .then((res) => {
         username.textContent=res;
     })
     .catch((err) => console.log(error));
}

getUsername();