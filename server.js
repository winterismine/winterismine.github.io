var connect = require('connect');
var static = require('serve-static');

var server = connect();

server.use(static(__dirname));

server.listen(3000, function() {
    console.log('App running on port 3000');
})