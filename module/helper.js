import fs from 'node:fs';
import url from 'node:url';

function renderHTML(path,res) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.write('File not found!');
      } else {
        res.write(data);
      }
      res.end();
    });
  }
  
  function render404(res) {
    res.writeHead(404);
    res.write('File not found!');
    res.end();
  }
  
  function onRequest(req, res) {
    const path = url.parse(req.url).pathname;
    console.log(path);
  
  
    switch (path) {
      case '/':
        renderHTML('./views/home.html',res);
        break;
      case '/about':
        renderHTML('./views/about.html',res);
        break;
    
      default:
        render404(res);
        break;
    }
  }

export {onRequest};