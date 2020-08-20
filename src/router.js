const handlers = require("./handlers");
const publicHandler = require("./public");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    handlers.indexHandler(request, response);
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
  } else if (url === "/login") { 
    loginHandler(request, response);
  } else if (url === "/signup") { 
    handlers.signupHandler(request, response);
  } else if (url.includes('public')) {
    publicHandler(request, response);
   } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;


// create functions for the new handlers