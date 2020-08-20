### COOKIES WEEK! 🍪 🥠

---

# FAC Fortunes and Cookies 🥠

This week we aimed to learn about password management & encryption, authentication with JWT & cookies, setting up continuous integration and lastly but not least, creating our own promises! 

# What is our project doing?!

This week's goal was to build a web app that authenticates users and stores user-specific data in a PostgreSQL database.

We wanted to follow our Week 5's project theme and build on top of it - essentially, users can login to create a new fortune cookie 'saying', submit it to the main page and then view all sayings. 🍪 🍴

To top if off, only users can delete their own posts! 😉 🍹

## Schema 

![](https://i.imgur.com/jpVM1LS.png)

## Wireframe 

![](https://i.imgur.com/zDmmAj3.png)


## Local installation

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
$ CREATE DATABASE learn_node_postgres WITH OWNER myuser;
```

> Create .env file in project:
- Add `DATABASE_URL` variable in your .env file and assign to initialised database
- Add `SECRET` variable in your .env file (SECRET can just be a random string) 

>  Start the server:
- `npm run start` 


### Run the tests

`npm run test` 


## Our team 

- Amber : deployment  🧙‍♂️
- Shaya : facilitator  🧞‍♀️
- Terrence : quality  🕵
- Trish : deployment  🧙‍♂️


## Our user stories 

- As a visually impaired user I would like to be able to navigate the page
- As a user, I want to: submit information to your site for anyone to see 
- As a user, I want to: come back to your site later and see what I posted is still there 
- As a user, I want to: be the only person allowed to delete my stuff
- Stretch goal: As a FAC20 member, I want to search through the wisdom of my cohort for specific people's answers
- Stretch goal: I want to show the user when they are logged in!


## Acceptance Criteria 

- [x] Forms for users to sign up and log in
- [x] A form for users to submit data only accessible to logged in users
- [x] A page showing all the data
- [x] A way for logged in users to delete their own data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [ ] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

## Tools/methods used

- heroku
- figma
- dbdiagram
- postgres 
- lots and lots of hard work and grit!!! 💪

#### Project presentation link: to be updated! ⏰
<!--- () ---!>
