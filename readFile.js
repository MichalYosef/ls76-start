var http = require('http');
var fs = require('fileServer')

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.readFile('notes.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.end(data);
    });

}).listen(1330);