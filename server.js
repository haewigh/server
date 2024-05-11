//const http = require("http");
const { createServer } = require("http");

const db = require("./db/jokes")
console.log(db)

const requestHandler = (req, res) => {
  if (req.url == '/' && req.method == 'GET'){
    res.end(JSON.stringify({message:'API working'}))
  }
  else if (req.url == '/jokes' && req.method == 'GET'){
    res.end(JSON.stringify({}))
  }
  else if (req.url == '/jokes' && req.method == 'PUT'){
    res.end(JSON.stringify({message:'Putting Successful'}))
  }
  else {
    res.writeHead(404)
    res.end(JSON.stringify({message : 'RESPONSE NOT FOUND'}))
  }
  //console.log(req.url);
  //res.end(JSON.stringify({message:"Connection is alive"}))


};

//const server = http.createServer(requestHandler)
const server = createServer(requestHandler)

server.listen(3000, ()=>{
  console.log('Server running');
});