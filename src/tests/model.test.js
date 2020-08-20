const test = require("tape");
const build = require("../database/build");
const db = require("../database/connection");

test("Can get list of users", t => {
build()
.then( () => db.query("SELECT * FROM users"))
.then((result) => result.rows)
.then( usernames => {
        const firstUser = usernames[0];
        t.equal(firstUser.username, "Aishah");
        t.equal(firstUser.id, 1);
        t.end();
    }).catch((buildError) => {
        t.error(buildError);
        t.end();
      });
})

test("Can create a new user in usernames table", (t) => {
  build().then(() => {
    db.query("INSERT INTO users (username) VALUES ('Bob') ")
    db.query("SELECT username FROM users")
      .then((result => result.rows))
      .then((usernames) => {
        console.log(usernames)
        const latestUser = usernames[usernames.length - 1];
        t.equal(latestUser.username, "Bob");
        t.end();
      })
      .catch((error) => {
        t.error(error);
        t.end();
      });
  });
});

test("Can create a new message in posts table", (t) => {
    build().then(() => {
      db.query("INSERT INTO posts (username_id, text_content) VALUES ( 1, 'I love chocolate') ") // this query needs to finish before you keep going 
      .then( () => (db.query("SELECT text_content FROM posts")) //you need to NEST THIS QUERY!!! otherwise it dont work 
        .then((result => result.rows))
        .then((posts) => {
            console.log(posts)
          const latestPost = posts[posts.length - 1];
          t.equal(latestPost.text_content, 'I love chocolate');
          t.end();
        })
        .catch((error) => {
          t.error(error);
          t.end();
        }))
    });
  });  



// otherwise tests will pause for 10s in the terminal
test("Close DB pool (not a real test)", (t) => {
    db.end();
    t.end();
  });