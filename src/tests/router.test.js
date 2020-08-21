const supertest = require("supertest");
const test = require("tape");
const router = require("../router");

const fs = require("fs");
const path = require("path");

test("Landing page: check status code is 200 and validates some context in HTML", (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text.includes(`<button type="submit" id="log-in">Log in</button>`), true);
      t.equal(res.text.includes(`<h1>Fortune and Cookies Form</h1>`), false);
      t.end();
    });
});

test("Public handler: check status code is 200 and contents of CSS", (t) => {
    supertest(router)
      .get("/public/main.css")
      .expect(200)
      .expect("content-type", "text/css")
      .end((err, res) => {
        t.error(err);
        t.equal(res.text.includes(`animation-iteration-count: infinite;`), true);
        t.equal(res.text.includes(`<button class="background">`), false);
        t.end();
      });
  });