//1 import json-server

const jsonServer = require('json-server')

//2 create a server application using jsonserer
const restServer = jsonServer.create()

//3 setup path for db.json
const router = jsonServer.router('db.json')

//return middleware
const middleware = jsonServer.defaults()

//5 setup a port number
const port = 3001

//use in restServer
restServer.use(middleware)
restServer.use(router)

//to run the server 
restServer.listen(port,()=>{console.log("Restaurent server listening on port" + port);})