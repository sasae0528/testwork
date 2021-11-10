const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const index_page = fs.readFileSync('./index.ejs','utf8');

var server = http.createServer(getFromClient);

server.listen(80);
console.log('Server Start!');

function getFromClient(request, response){
    var content = ejs.render(index_page, {
        title: "indexページ",
        content: "これはテンプレートを使ったサンプルページです。",
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end()
}

