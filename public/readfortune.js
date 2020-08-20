/** @format */

const message = document.querySelector(".message__text");
const author = document.querySelector(".author");

fetch("/read-fortune") //calls our fortune handler
	.then((res) => {
		if (!res.ok) {
			throw new Error("Server error");
		}
		return res;
	})
	.then((res) => res.json()) // returns our response
	.then((data) => {
		message.textContent = data; //ta - da!!!
		// author.innerHTML = data.author; // we didn't get to this bit
	})
	.catch((err) => console.error(err));

document.querySelector("#give-another").addEventListener("click", () => {
	location.href = "/read-fortune-page";
});

document.querySelector("#add-form").addEventListener("click", () => {
	location.href = "/form";
});

document.querySelector("#show-all").addEventListener("click", () => {
	location.href = "/all-fortunes";
});

document.querySelector("#button-home").addEventListener("click", () => {
	location.href = "/";
});

document.querySelector("#log-out-button").addEventListener("click", () => {
	location.href = "/logout";
});
