/** @format */

const fs = require("fs");
const path = require("path");
const db = require("./database/connection");
const bcrypt = require("bcryptjs");
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');
const dotenv = require("dotenv");
// load the environment variables from the ".env" file
dotenv.config();

const SECRET = 'poiugyfguhijokpkoihugyfyguhijo'; //place in env variables then refer to as process.env.SECRET

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

function signupPageHandler(request, response) {
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

function loginPageHandler(request, response) {
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

function loginHandler(request, response) {
	let body = "";
	request.on("data", (chunk) => (body += chunk));
	request.on("end", () => {
		const searchParams = new URLSearchParams(body); // turns form post string in to an object
		const user = Object.fromEntries(searchParams); //user {username: xxx, password: xxx}
		console.log("user l60", user)
		db.query("SELECT * from USERS WHERE username = ($1)", [user.username])
		.then((data) => {
			data = data.rows[0]; //{id:dgsd , username: rshuigs, password: dfsg}
			console.log("data",data)
			console.log(user.password, data.password)
			console.log(typeof user.password, typeof data.password)
			return bcrypt.compare(user.password, data.password)
		})
        .then(compareResult => {
		  if (!compareResult) throw new Error("Password mismatch");
		  const cookie = sign(user.username, process.env.SECRET);
		  const decoded = verify(cookie, process.env.SECRET);
		  console.log(decoded) // qwerty
      		response.writeHead(302, {
			'Location': '/main',
			'Set-Cookie': `jwt=${cookie}; HttpOnly`
			}
      		);
      		return response.end();
			})

        .catch(error => {
          console.error(error);
          response.writeHead(401, { "content-type": "text/html" });
          response.end(`
            <h1>Something went wrong, sorry</h1>
            <p>User not found</p>
          `);
		});
	});
}

function logoutHandler(request, response) {
	response.writeHeader(302, {
		location: "/",
		"Set-Cookie": "jwt=blah; Max-Age=0"
	});
	response.end();
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
		const data = Object.fromEntries(searchParams); // extract logged-in users name 
		db.query("SELECT id FROM users WHERE username = ($1)", [data.name])
			.then((result) => {
				const inputID = result.rows[0].id;
				console.log("input", typeof inputID);
				db.query("INSERT INTO posts (username_id, text_content) VALUES (($1), ($2))", [
					inputID,
					data.message,
				])
					.then(() => {
						response.writeHead(302, { location: "/main" });
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
		console.log(data);
		// assumption: data = {username: xxx, password: xxx}
		bcrypt
        .genSalt(10) //generates a salt
        .then(salt => bcrypt.hash(data.password, salt)) // generate a hash of the password and the salt
        .then(hash => createUser({ username: data.username, password: hash })) //create a new user in the database with username and encrypted password 
        .then(() => {
          response.writeHead(200, { "content-type": "text/html" });
          response.end(`
			<h1>Thanks for signing up, ${data.username}</h1>
			<br> 
			<h2><a href="/login-page">Log in</a></h2>
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
			data = data.rows;
			console.log(data);
		  const existingUser = data.find(u => u.username === user.username); //check to see if there is already a user with this username in the database 
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


function deleteHandler(request, response) {
	let body = "";
	request.on("data", (chunk) => (body+=chunk));
	request.on("end", (sentInfo) => { //sentInfo = {saying: fershgk, author: agfreg}
		const cookie = request.headers.cookie; //get the request cookie (which contains a jwt of the user)
		const loggedInUser = verify(cookie, process.env.SECRET); //see which user is logged in by decoding the cookie
		if (loggedInUser === sentInfo.author) {
			db.query("DELETE FROM posts WHERE text_content=($1)", [sentInfo.saying]) // `DELETE FROM table_name WHERE condition  
			 .then( () => {
				 response.writeHead(200, {"content-type": "text/html"});
				 response.end(`
				 <h1>Your fortune has been removed</h1>`);
			 })
			 .catch(error => {
				 console.log(error)
				 response.writeHead(400, {"content-type": "text/html"});//400 is a bad request 
				 response.end(`
				 <h1>There's been a problem</h1>`);
			 });
		} //delete all from posts where saying 
	})
	// receive data from post request ({saying, author}) cookie= request.headers.cookie 
	// use to extract the username from the jwt of the cookie 
	// check if the author of that saying is the same as the user (username is in the cookie)
	// if it's the same, make a db.query to remove that saying 
	//if not throw error
}

function allFortunesHandler(request, response) {
	const filePath = path.join(__dirname, "..", "public", "list.html");

	fs.readFile(filePath, "utf-8", (error, file) => {
		if(error) {
			response.writeHead(404, {
				"content-type": "text/html"
			});
		response.end("<h1>Not found</h1>");
		} else {
		 return db.query("SELECT users.username, posts.text_content FROM users INNER JOIN posts ON users.id = posts.username_id")
			  .then(dataObj => {
				const post = dataObj.rows.map((entry) => {
					return `<article class="post">
					<h2 class="post-title">${entry.username}</h2>
					<p class="post-message">${entry.text_content}</p>
					<button class="delete-btn">Delete</button>
				  </article>`;
				  });

				  const updatedList = file.replace(
					`<!-- replace text here -->`,
					post.join("\n")
				  );
				  response.writeHead(200, {
					"content-type": "text/html"
				  });
				  // display newFile
				  response.end(updatedList);
				})
			  };
		})
}

module.exports = {
	homeHandler,
	missingHandler,
	createFortuneHandler,
	formHandler,
	readFortuneHandler,
	signupHandler,
	indexHandler,
	readFortuneHtmlHandler,
	loginHandler,
	loginPageHandler,
	signupPageHandler,
	allFortunesHandler,
	deleteHandler,
	logoutHandler
};

