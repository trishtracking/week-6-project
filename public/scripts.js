const message = document.querySelector('.message__text');
const author = document.querySelector('.author');

fetch("/read-fortune") //calls our fortune handler 
  .then(res => {
    if (!res.ok) {
      throw new Error("Server error");
    }
    return res;
  })
  .then(res => res.json()) // returns our response 
  .then(data => { 
        message.textContent = data; //ta - da!!! 
        // author.innerHTML = data.author; // we didn't get to this bit 
    })
  .catch(err => console.error(err));

  let buttons = document.querySelectorAll("button");

		buttons[0].addEventListener("click", () => {
			location.href = "/read-fortune-page"
		})

		buttons[1].addEventListener("click", () => {
			location.href = "/form"
    })
    
    buttons[2].addEventListener("click", () => {
			location.href = "/all-fortunes"
    })

    document.querySelector("#button-home").addEventListener("click", () => {
			location.href = "/"
		})