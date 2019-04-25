var http = require("http");
var url = require("url");

function wakeup(route, handle) {

  function onRequest(request, response) {
    dataPost = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    request.setEncoding("utf8");

    request.addListener("data", function(partDataPost) {
      dataPost += partDataPost;
      console.log("Recibido trozo POST '" + partDataPost + "'.");
    });

    request.addListener("end", function() {
      console.log("Recibido END DATA '" );
      route(handle, pathname, response, dataPost);
    });

  }

  http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado");
  }

exports.wakeup = wakeup;
