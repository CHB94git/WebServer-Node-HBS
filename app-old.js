const http = require('http')


http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' })

    res.write('404 | Not Found')
    res.end()

}).listen(8080)

console.log('WebServer escuchando en el puerto 8080')