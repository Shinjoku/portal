var http = require('http');

var server = http.createServer(function(req, res) {
  var categoria = req.url;

  if(categoria == '/moda'){
    res.end('<html><body>Batata da Moda</body></html>')
  }


}).listen(3000);
