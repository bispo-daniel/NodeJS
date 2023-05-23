let http = require('http');
let getHours = require('./GetHoursModule');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`Current time: ${getHours.getHours()}`);
    res.end();
}).listen(8080);