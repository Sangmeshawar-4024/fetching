const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer(async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data)); 
    } catch (error) {
        console.error('Error:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});
