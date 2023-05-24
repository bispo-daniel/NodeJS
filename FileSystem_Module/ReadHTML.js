let http = require('http')
let fs = require('fs')

let myPage = fs.readFileSync('index.html', 'utf8');

http.createServer((req, res) => {
    if(req){
        console.log("Requested");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(myPage);
    res.end();
}).listen(8080)