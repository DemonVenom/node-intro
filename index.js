const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const index = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin','*');


  const{method, url} = req;

  if(url === '/index' && method === 'GET') {
    res.write(`Here is a index.\n`);
    res.write(`Method:${method}, URL:${url}`);
    res.end();
  }
  else if(url === '/about') {
    res.write(`Here is a about.\n`);
    res.write(`Method:${method}, URL:${url}`);
    res.end();
  }
  else if(url === '/contact-me') {
    res.write(`Here is a contact.\n`);
    res.write(`Method:${method}, URL:${url}`);
    res.end();
  }
  else {
    res.write(`I don't recognize that request.\n`);
    res.write(`Method:${method}, URL:${url}`);
    res.end();
  }


})

index.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
