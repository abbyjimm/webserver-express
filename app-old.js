const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'Application/json' });

        let output = {
            name: 'Abigail',
            age: 29,
            url: req.url
        }

        res.write(JSON.stringify(output));
        //res.write('Hello world!');
        res.end();
    })
    .listen(8080);

console.log('Lisen port 8080');