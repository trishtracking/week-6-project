/** @format */

const fs = require("fs");
const path = require("path");
const db = require("./database/connection");
const bcrypt = require("bcryptjs");

function homeHandler(request, response) {
	fs.readFile(path.join(__dirname, "..", "public", "main.html"), (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(404, { "content-type": "text/html" });
			response.end("<h1> Not Found </h1>");
		} else {
			response.writeHead(200, { "content-type": "text/html" });
			response.end(file);
		}
	});
}

function signupHandler(request, response) {
	fs.readFile(path.join(__dirname, "..", "public", "signup.html"), (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(404, { "content-type": "text/html" });
			response.end("<h1> Not Found </h1>");
		} else {
			response.writeHead(200, { "content-type": "text/html" });
			response.end(file);
		}
	});
}

function loginHandler(request, response) {
	fs.readFile(path.join(__dirname, "..", "public", "login.html"), (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(404, { "content-type": "text/html" });
			response.end("<h1> Not Found </h1>");
		} else {
			response.writeHead(200, { "content-type": "text/html" });
			response.end(file);
		}
	});
}

function indexHandler(request, response) {
		fs.readFile(path.join(__dirname, "..", "public", "index.html"), (error, file) => {
			if (error) {
				console.log(error);
				response.writeHead(404, { "content-type": "text/html" });
				response.end("<h1> Not Found </h1>");
			} else {
				response.writeHead(200, { "content-type": "text/html" });
				response.end(file);
			}
		});
}

function formHandler(request, response) {
	fs.readFile(path.join(__dirname, "..", "public", "form.html"), (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(404, { "content-type": "text/html" });
			response.end("<h1>404: Your present is looking unclear</h1>");
		} else {
			response.writeHead(200, { "content-type": "text/html" });
			response.end(file);
		}
	});
}

function readFortuneHtmlHandler(request, response) {
	fs.readFile(path.join(__dirname, "..", "public", "readfortune.html"), (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(404, { "content-type": "text/html" });
			response.end("<h1>404: Your present is looking unclear</h1>");
		} else {
			response.writeHead(200, { "content-type": "text/html" });
			response.end(file);
		}
	});
}

function missingHandler(request, response) {
	response.writeHead(404, { "content-type": "text/html" });
	response.end("<h1>404: your present is looking unclear</h1>");
}

function createFortuneHandler(request, response) {
	let body = "";
	request.on("data", (chunk) => (body += chunk));
	request.on("end", () => {
		// INJECTION PROTECTION !!!!
		const searchParams = new URLSearchParams(body); // turns form post string in to an object
		const data = Object.fromEntries(searchParams);
		const currentUser = // extract logged-in users name 
		db.query("SELECT id FROM users WHERE username = ($1)", [currentUser])
			.then((result) => {
				const inputID = result.rows[0].id;
				console.log("input", typeof inputID);
				db.query("INSERT INTO posts (username_id, text_content) VALUES (($1), ($2))", [
					inputID,
					data.message,
				])
					.then(() => {
						response.writeHead(302, { location: "/" });
						response.end();
					})
					.catch((error) => {
						console.log(error);
						response.writeHead(500, { "content-type": "text/html" });
						response.end(`<h1>Your fortune has not been well received</h1>`);
					});
			})
			.catch((error) => {
				console.log(error);
				response.writeHead(500, { "content-type": "text/html" });
				response.end(`<h1>Your fortune has not been well received</h1>`);
			});
	});
}

function readFortuneHandler(request, response) {
	db.query("SELECT * FROM posts")
		.then((result) => {
			let resultsArray = result.rows;
			let resultsLength = resultsArray.length; 
			let randomID = Math.floor(Math.random(resultsLength) * (resultsLength + 1));
			// mathrandom gives number <1, multiply by result length+1 and round it down 
			// bit after asterisk gives range, 
			//add one so that you always round down to the total number of posts  
			return randomID; 
		})
		.then(randomID => { 
			db.query(`SELECT text_content FROM posts WHERE id = ${randomID}`)
			.then(message => {
				response.writeHead(200, { "content-type": "application/json" });
				response.end(JSON.stringify(message.rows[0].text_content));
				// what we get back is an array inside an object so we need to select the right bit
				// row gets our array, [0] gives the first (only!) object, 
				// content gets us what we want 
			}
			)
			.catch((error) => {
				console.log(error);
				response.writeHead(404, { "content-type": "text/html" });
				response.end("<h1> 404: Your cookie not found </h1>");
			});
		})
		.catch((error) => {
			console.log(error);
			response.writeHead(404, { "content-type": "text/html" });
			response.end("<h1> 404: Your cookie not found </h1>");
		});
}


// Week 6 

function signupHandler(request, response) {
	let body = "";
	request.on("data", (chunk) => (body += chunk));
	request.on("end", () => {
		const searchParams = new URLSearchParams(body); // turns form post string in to an object
		const data = Object.fromEntries(searchParams); 
		// assumption: data = {username: xxx, password: xxx}
		bcrypt
        .genSalt(10) //generates a salt
        .then(salt => bcrypt.hash(password, salt)) // generate a hash of the password and the salt
        .then(hash => createUser({ username, password: hash })) //create a new user in the database with username and encrypted password 
        .then(() => {
          response.writeHead(200, { "content-type": "text/html" });
          response.end(`
            <h1>Thanks for signing up, ${email}</h1>
          `);
        })
        .catch(error => {
          console.error(error);
          response.writeHead(500, { "content-type": "text/html" });
          response.end(`
            <h1>Something went wrong, sorry</h1>
            <p>${error}</p> 
          `);
        });
    })
};

function createUser(user) {
	// return new Promise((resolve, reject) => {
	db.query("SELECT * from USERS")
		.then((data) => {
			console.log("data", data)
		  const existingUser = data.users.find(u => u.username === user.username); //check to see if there is already a user with this username in the database 
		  if (existingUser) {
			console.log(`${user.username} already exists`); //throw an error if there is already a user
		  } else {
			db.query(`INSERT INTO users(username, password) VALUES ($1, $2)`, [user.username, user.password])
				.then(console.log("username and password added"))
				.catch((err) => console.log(err));
		   }
		})
	.catch((err) => console.log(err));
};


createUser({ username: "Hi there", password: "ergyufakrgsjkbthgjqr"});

module.exports = {
	homeHandler,
	missingHandler,
	createFortuneHandler,
	formHandler,
	readFortuneHandler,
	signupHandler,
	indexHandler,
	readFortuneHtmlHandler,
	loginHandler
};

