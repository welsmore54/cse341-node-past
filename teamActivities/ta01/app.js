const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first team activity!</title></head>');
        res.write('<body><h1>Here is the first page</h1><p>This is the first page for my first team activity.</p></body>')
        res.write('</html>');
        res.end();
    }

    if (url === '/activities') {
        const activities = [];
        activities.push('Fishing', 'Skating', 'Reading');
        res.write('<html>');
        res.write('<body><li>' + activities[0] + '</li>');
        res.write('<body><li>' + activities[1] + '</li>');
        res.write('<body><li>' + activities[2] + '</li>');
        res.write('</body>');
        res.write('<form action="/add-activity" method="POST"><input type="text" name="new activity"><button type="submit">Submit</button></form>')
        res.write('</html>');
        res.end();
    }

    if (url === '/add-activity') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedInput = Buffer.concat(body).toString();
            console.log(parsedInput.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/activities');
        res.end();
    }
});

server.listen(3000);