var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

// Create servers

var server1 = http.createServer(function(request,response) {
    response.end("You rock!");
});

var server2 = http.createServer(function(request,response) {
    response.end("You stink!");
});

// Server listeners

server1.listen(PORT1, function() {
    console.log("server listening on http://localhost: " + PORT1);
});

server2.listen(PORT2, function() {
    console.log("server listening on http://localhost: " + PORT2);
});