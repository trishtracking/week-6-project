### COOKIES WEEK! 🍪 🥠✨

---

# FAC Fortunes and Cookies 🥠

This week we aimed to learn about password management & encryption, authentication with JWT & cookies, setting up continuous integration and lastly but not least, creating our own promises! 

 <br>
 
# What is our project doing?! 🤔🤩🌠

This week's goal was to build a web app that authenticates users and stores user-specific data in a PostgreSQL database.

We wanted to follow our Week 5's project theme and build on top of it - essentially, users can login to create a new fortune cookie 'saying', submit it to the main page and then view all sayings. 🍪 🍴

To top if off, only users can delete their own posts! 😉 🍹

 <br>
 
## Schema 
 
![](https://i.imgur.com/jpVM1LS.png)

 <br>
 
## Wireframe 
 
![](https://i.imgur.com/zDmmAj3.png)
 
  <br>
  
## Heroku 🚀🚀🚀

- https://fortunes-and-better-cookies.herokuapp.com/

 <br>
 
## Local installation 💻

### Clone
- Git clone this repo to your local machine

### Setup 
> Set up node modules:
```shell
$ npm install
```

> Move into psql:
```shell
$ psql
```

> Create database locally:
```shell
$ CREATE USER myuser SUPERUSER PASSWORD 'mypassword';
$ CREATE DATABASE database-name WITH OWNER myuser;
```

> Create .env file in project:
- Add `DATABASE_URL` variable in your .env file and assign to initialised database
- Add `SECRET` variable in your .env file (SECRET can just be a random string) 

> Database file should look like this:
```shell
postgres://myuser:mypassword@localhost:5432/database-name
```

### Start the server 🖨️

`npm run start` 


### Run the tests 🏃‍♀️

`npm run test` 

  <br>
  
## Our team 🏆

- Amber : deployment  🧙‍♂️
- Shaya : facilitator  🧞‍♀️
- Terrence : quality  🕵
- Trish : deployment  🧙‍♂️

  <br>
  
## Our user stories 🔖

- As a visually impaired user I would like to be able to navigate the page
- As a user, I want to: submit information to your site for anyone to see 
- As a user, I want to: come back to your site later and see what I posted is still there 
- As a user, I want to: be the only person allowed to delete my stuff
- Stretch goal: As a FAC20 member, I want to search through the wisdom of my cohort for specific people's answers
- Stretch goal: I want to show the user when they are logged in!

  <br>
  
## 📽️ 🚧 Project timeline 📽️ 🚧

### Day 1 

12 - 12:10 — Quick sketch-up of user-journey on prebuilt Figma wireframe for existing & new pages <br>
12:10 - 12:30 — Attempt #1 at GI actions 😅 <br>
12:30 - 12:40 — Reviewing previous week's SGCs <br>
12:40 - 1pm — Cloned wk5's repo into new repo & named handlers for the new pages (Mobbed so we knew the function names when we split off later!) <br>

> _Off to lunch_ 🍎🥪 

2 - 2:30 — Created new Project board, added issues & user stories  <br>
2:30 - 3:30 — First pair split off! One worked on the sign-up handlers while the other created the new pages' HTML skeletons 🦴  <br>

> _5 minute break!_ 💆 

3:35 - 4pm — Updated schema (Mobbing)  <br>
4 - 4:30 — Swapped pairs! Created .env file, connected to DB and attempted to debug (Shaving the yak here 🦙)  <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; — Other pair sorted the sign-up form's client-side validation/authentication!  <br>

### Day 2

10:10 - 10:20 — Updated ourselves on current achievements and next steps, reallocated pairs <br>
10:20 - 11am — One pair worked on testing the sign-up handler whilst fixing more bugs (🦙); the other pair was sorting out the confusing router names!! 😵💫 <br>

> _5 minute STANDUP!_ 🧍

11 - 12:05 — Same pair worked on the login handler, other same pair asked for help on routers but solution didn't work so was back to square one! 🥺 <br>
12:05 - 12:30 — Each pair performed a quick code walkthrough & managed to fix the problem one pair was having w/ routers, waheeee !👏🥂
12:30 - 1pm — Updated the project board along w/ adding some new issues! (Mobbed) <br>

> _Off to lunch_ 🍎🥪 

2 - 2:10 — Scrum updated mentors on team's current situation and next steps; did a quick 5 min stretch video together 🧘 <br>
2:10 - 2:30 — Pseudo code for the delete handler (Mobbed) <br>
2:30 - 4 — One pair created the list page's html, css & figured out how to display the user input's new schema data <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; — Other pair built the delete handler & the event listener for the delete button  <br>
4 - 4:20 — Delete handler bugs, yak shaving again!! (🦙) (Mobbed) <br>

> _5 minute STANDUP!_ 🧍

> _5 minute break!_ 💆 

4:30 - 5:15 —  One pair fixed and got the delete handler up and running <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; — Other pair also successfully made the logout function, button and handlers! <br>
5:15 - 5:45 — Updated readme, deployment on heroku & GI actions (success!) We also made some final merges to the repo. (Mobbed) <br>

 _We ended on a high with so many issues and all but one acceptance criteria completed! 🥂🥂🥂🥂_
 
 <br>
 
  _**GO GOD TEAM!!**_ 👑🙏🎉

 <br>
 
## Acceptance Criteria ✔️

- [x] Forms for users to sign up and log in
- [x] A form for users to submit data only accessible to logged in users
- [x] A page showing all the data
- [x] A way for logged in users to delete their own data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [ ] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

 <br>
 
## Tools/methods used ⛏️

- heroku
- figma
- dbdiagram
- postgres 
- lots and lots of hard work and grit!!! 💪

 <br>
 
#### Project presentation link: to be updated! ⏰
<!--- () ---!>
