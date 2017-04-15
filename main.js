var app = require("express")()
var http = require("http").createServer(app)
var io = require("socket.io")(http)
var port = 3000;

app.get("/",(req, res)=>{
	res.sendFile( __dirname + "/index.html")
})

io.on("connection", (socket)=>{
	console.log("client connected")
	socket.on("chat", (msg)=>{
		io.emit('chat', msg)
	})
	socket.on("disconnect", ()=>{
		console.log("a client disconnect")
	})
})

http.listen(port, () =>{
	console.log("listening at *: " + port)
})