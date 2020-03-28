import http from "http";
import express from "express";
import bodyParser from 'body-parser';
import socket from "socket.io";
import cors from "cors";
import routes from "./router";

import db from "./db";

// The rider class... I guess I have to see how to take this part and may the socket event codes to another file.
import Rider from "./rider";
const rider = new Rider();
//

const isProduction = process.env.NODE_ENV === 'production';
const origin = {
    origin: isProduction ? '*' : '*', }

const app = express();

const server = http.createServer(app);
const io = socket(server);

app.use(cors(origin));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


io.on("connection", function(socket){
    console.log("New client connected");

    // on this event the data is saved to the postgres db
    socket.on("myLocation", function(packet:any){
        let { name, device, data } = packet;
        rider.add( name, device, { lat:data.latitude, lng:data.longitude } );
    })

    socket.on("disconnect", function(){
        console.log("client disconnected")
    })
})

app.set('PORT', (process.env.PORT || 3500))


db.sync().then(function(){
    server.listen(app.get('PORT'), function(){
        console.log('connected')
    })
})