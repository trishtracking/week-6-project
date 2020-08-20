### COOKIES WEEK! 🍪 🥠

---

# FAC Fortunes and Cookies 🥠

This week we aimed to learn about password management & encryption, authentication with JWT & cookies, setting up continuous integration and lastly but not least, creating our own promises! 

- Designing and documenting a database schema
- Create a relational database
- Read and write SQL queries 
- Avoid SQL injection vulnerabilities
- Handle node errors 
- Testing SQL and servers 

We used all this database and node wizardry to create a page where FAC20 submit their own quotes and wisdom, and receive a cookie containing the wisdom of others! 

## Schema 

![](https://i.imgur.com/PxINJD5.png)

## Wireframe 

![](https://i.imgur.com/zDmmAj3.png)


## If you want to install locally rather than using the heroku link 

- Git clone this repo
- Run `npm install` to set up node modules
-- enter `psql`
-- `CREATE USER myuser SUPERUSER PASSWORD 'mypassword';`
-- `CREATE DATABASE learn_node_postgres WITH OWNER myuser;`
- Create .env file in project
- Add `DATABASE_URL` variable in your .env file and assign to initialised database
- `npm run start` will start the server 


### For the tests -- 

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

- [ ] Forms for users to sign up and log in
- [ ] A form for users to submit data only accessible to logged in users
- [ ] A page showing all the data
- [ ] A way for logged in users to delete their own data
- [ ] Semantic form elements with correctly associated labels
- [ ] A Postgres database hosted on Heroku
- [ ] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [ ] Hidden environment variables (i.e. not on GitHub)

## Tools/methods used

- heroku
- figma
- dbdiagram
- postgres 

#### Project presentation link: to be updated 
<!--- () ---!>
