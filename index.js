const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const index = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');


  const{method, url} = req;

  if(url === '/') {

    fs.readFile("index.html", function(err, text){
      res.end(text);
    });

    return;

  }
  else if(url === '/about') {

    fs.readFile("about.html", function(err, text){
      res.end(text);
    });

    return;

  }
  else if(url === '/contact-me') {

    fs.readFile("contact-me.html", function(err, text){
      res.end(text);
    });

    return;

  }
  else {

    fs.readFile("404.html", function(err, text){
      res.end(text);
    });

    return;

  }


})

index.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
