let url = require('url');
let fs = require('fs');

users = [
    { username: "peter", birthdate: "23/09/1997", age: "21", email: "peter.hughes@griffithuni.edu.au", password: "password", valid: Boolean},
    { username: "mark", birthdate: "06/11/1992", age: "26", email: "mark@griffithuni.edu.au", password: "kram", valid: Boolean},
    { username: "alice", birthdate: "29/04/1999", age: "20", email: "alice@griffithuni.edu.au", password: "test", valid: Boolean}
]

function renderHTML(path,response){
    fs.readFile(path, null, function(err, data) {
        if (err) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}
module.exports = {
    handleRequest: function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        if (path == '/') {
            renderHTML('../src/index.html', response);
        } else {
            response.writeHead(404);
            response.write('Route not defined');
            response.end();
        }
    }
}
