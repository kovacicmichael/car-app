 const express = require("express");
 const bodyParser = require("body-parser");
 const bluetooth = require('node-bluetooth');

 // Sets up the Express App
 // =============================================================
 const app = express();
 const PORT = process.env.PORT || 8080;




 // Sets up the Express app to handle data parsing
 app.use(bodyParser.urlencoded({ extended: true }));
 // parse application/json
 app.use(bodyParser.json());



//device.listPairedDevices(console.log);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



device
//.on('finished',  console.log.bind(console, 'finished'))
.on('found', function found(address, name){
  console.log('Found: ' + address + ' with name ' + name);
}).inquire();








//   device.findSerialPortChannel(address, function(channel){
//   console.log('Found RFCOMM channel for serial port on %s: ', name, channel);
 
//   // make bluetooth connect to remote device
//   bluetooth.connect(address, channel, function(err, connection){
//     if(err) return console.error(err);
//     connection.write(new Buffer('Hello!', 'utf-8'));
//   });
 
// });