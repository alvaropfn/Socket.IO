var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
let port = 3000

app.get('/', (req, res) =>{
	res.sendFile( __dirname + '/index.html')
})

io.on('connection', (socket) => {
	console.log('s1')
	socket.on('chat', (msg) => {
		console.log('s2')
	})
})

http.listen(port, () =>{
	console.log('server on *: ' + port)
})