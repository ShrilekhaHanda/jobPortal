const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server =  http.createServer(app);
const io = socketIo(server); //wiring up expressJS to socketIO

const getApiAndEmitReg = async socket => {
    try {
        const res = await axios.get("http://localhost:3001/register");
        //console.log("Res: "+ res);
        socket.emit("RegFromAPI", res.data);
    } catch ( error ){
        console.error(`Error: ${error.code}`);
    }
};

const getApiAndEmitJob = async socket => {
    try {
        const res = await axios.get("http://localhost:3001/jobs");
        //console.log("Res: "+ res);
        //io.sockets.emit("FromAPI", res.data);
        socket.emit("JobFromAPI", res.data);
    } catch ( error ){
        console.error(`Error: ${error.code}`);
    }
};
//let interval;
io.on("connection", socket => {
    console.log("New client connected");
    
    socket.on('formData', function(data){
        if(data.data.select === 'candidate'){
            socket.broadcast.emit("RegFromAPI", data.data);
        }else {
           // socket.broadcast.emit("JobFromAPI", data.data);            
        }
    });

    socket.on('jobFormData', function(data){
        socket.broadcast.emit("JobFromAPI", data.data);        
    });

    socket.on("disconnect", () => console.log("Client disconnected"));

});


server.listen(port, () => console.log(`Listening on port ${port}`));
