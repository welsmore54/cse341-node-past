const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first Prove Assignment!</title></head>');
        res.write('<body><h1>Here is the first page</h1><p>This is the first page for my first Prove Assignment!!</p></body>');
        res.write('</html>');
        res.end();
    }

    if (url === '/input') {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/display" method="POST"><input type="text" name="input1">');
        res.write('<input type="text" name="input2"><br><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }

    if (url === '/display') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedInput = Buffer.concat(body).toString();
            console.log(parsedInput.split('=')[1]);
            res.write('<html>');
            res.write('<body><h1>Here is your input!</h1>');
            res.write('<div>' + parsedInput.split('=')[1] + ' ' + parsedInput.split('=')[2] + '</div>');
            res.write('</body></html>');
            res.end();
    
        });
    }
    
});

server.listen(3000);