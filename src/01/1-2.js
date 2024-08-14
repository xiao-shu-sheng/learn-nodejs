import http from 'node:http'

const port = 8080

/** 
function createServer<typeof http.IncomingMessage, 
typeof http.ServerResponse>(requestListener?: 
    http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined)
    : http.Server<...> (+1 overload)
Returns a new instance of Server.

The requestListener is a function which is automatically added to the 'request' event.
*/


// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'call me father or i will kill you',
//   }));
// });

// server.listen(port, () => {
//     console.log('Server listening on: http://localhost:%s', port);
// });


// Create a local server to receive data from
// const server = http.createServer();

// Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'mother fuck, i do not like English!',
//   }));
// });

// server.listen(port, ()=> {
//   console.log('Server listening on: http://localhost:%s', port);
// });


// debug 
// node debug 1-2.js
