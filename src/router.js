const handlers = require("./handlers");
const publicHandler = require("./public");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    handlers.indexHandler(request, response); //called from the start, loads the index page
  } else if (url === "/main") {
    handlers.homeHandler(request, response);
  } else if (url === "/read-fortune") {
    handlers.readFortuneHandler(request, response);
  } else if (url.includes("/create-fortune")) {
    handlers.createFortuneHandler(request, response);
  } else if (url === "/form") {
    handlers.formHandler(request, response);  
  } else if (url === "/all-fortunes") {
    handlers.allFortunesHandler(request, response);
  } else if (url === "/read-fortune-page") {
    handlers.readFortuneHtmlHandler(request, response);
  } else if (url === "/login-page") { 
    handlers.loginPageHandler(request, response);
  } else if (url === "/login") {
    handlers.loginHandler(request, response);
  }else if (url === "/signup-page") {  //called when you click 'sign-up' button on index page
    handlers.signupPageHandler(request, response);
  } else if (url === "/signup") { // called when you click submit for sign-up form
    handlers.signupHandler(request,response);
  } else if (url === "/delete") { //deletes posts 
    handlers.deleteHandler(request, response);
   } else if (url === "/logout") { //deletes posts 
    handlers.logoutHandler(request, response);
   } else if (url === "/getuser") { // called on load of add saying page to get the logged in username
    handlers.loggedInUserHandler(request, response);
   } else if (url.includes('public')) { //helps read html, css and js files
    publicHandler(request, response);
   } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;


// create functions for the new handlers