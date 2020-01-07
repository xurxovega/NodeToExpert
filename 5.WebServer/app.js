const http = require('http');

http.createServer((req, res) => {

/*     res.writeHead(200, {'Content-type': 'application/json'});
    
    let output = {
        name: 'Darío Jorge',
        age: 34,
        url: req.url
    }
    res.write(JSON.stringify(output));
    //res.write('Testing to create Server'); */

    var fs = require('fs');

    fs.readFile('./public/index.html', (err, html) => {
        console.log(html.toString());
        var varString = html.toString().match(/[^\{\}]+(?=\})/g);
        console.log(varString);
    })

    res.end();

}).listen(8080);

console.log('Listen port 8080');
