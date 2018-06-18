

const noble = require('noble');
// const bleno = require('bleno');


// noble.startScanning(function(error, data){
// 	if(error){
// 		console.log(error)
// 	}

// 	console.log(data)

// }); // any service UUID, no duplicates

//noble.startScanning()

let serviceUuids = ["adab616c6e7d4601bda2bffaa68956ba"]; // default: [] => all
//let serviceUuids = [];
const allowDuplicates = false; // default: false
 
noble.startScanning(serviceUuids, allowDuplicates);

noble.on('stateChange', function(state){
	console.log(state)
});

noble.on('scanStart', function(data){
	
 	console.log("scan started")

});


noble.on('discover', function(peripheral){

	//console.log(peripheral)

	console.log("ID: " + peripheral.id)
	console.log("UUID: " + peripheral.uuid)
	console.log("Address: " + peripheral.address)
	console.log("Address Type: " + peripheral.addressType)
	console.log("Connectable: " + peripheral.connectable)
	console.log("Local Name: " + peripheral.advertisement.localName)
	console.log("Advertisement: " + peripheral.advertisement);
	console.log("rssi: " + peripheral.rssi)
	console.log("State: " + peripheral.state)
	console.log("Service data: " + peripheral.serviceData)
	console.log("=============================================================================")

})




noble.on('discover', function(peripheral) {
  peripheral.connect(function(error) {
    console.log('connected to peripheral: ' + peripheral.uuid);
    peripheral.discoverServices(null, function(error, services) {
    	for(var i in services){
    		console.log("Name: " + services[i]);

    	
	      var deviceInformationService = services[i];
	      console.log('discovered device information service');
	      console.log("Name: " + services[i].name);

	      deviceInformationService.discoverCharacteristics([], function(error, characteristics) {
	        console.log('discovered the following characteristics for: ');
	        for (var i in characteristics) {
	          console.log('  ' + i + ' uuid: ' + characteristics[i].uuid);
	          console.log('  ' + i + ' name: ' + characteristics[i].name);
	      	}

      		})
      	}

        //   let characteristic = characteristics[0];
        //   characteristic.read(function(error, data) {
        //   // data is a buffer
        //   console.log('manufacture name is: ' + data.toString('utf8'));
        // });
        
      })
    })
  })







// noble.on('discover', function(peripheral){
// 	console.log("discover")
// 	console.log("================================================================")
// 	console.log(peripheral)
// 	console.log("ID: " + peripheral.id)
// 	console.log("UUID: " + peripheral.uuid)
// 	console.log("Address: " + peripheral.address)
// 	console.log("Address Type: " + peripheral.addressType)
// 	console.log("Connectable: " + peripheral.connectable)
// 	console.log("Local Name: " + peripheral.advertisement.localName)
// 	console.log("Advertisement: " + peripheral.advertisement);
// 	console.log("rssi: " + peripheral.rssi)
// 	console.log("State: " + peripheral.state)
// 	console.log("Service data: " + peripheral.serviceData)

// 	peripheral.connect(function(error) {
// 	    console.log('connected to peripheral: ' + peripheral.uuid);
// // 	  //   peripheral.discoverAllServicesAndCharacteristics(function(error, service, characteristics){
// // 	  //   	for (var i in service) {
// // 			//          console.log('  ' + i + ' uuid: ' + service[i].uuid);
// // 			//          console.log('  ' + i + ' name: ' + service[i].name);
// // 			// }

// // 			// for(var i in characteristics) {
// // 			// 		console.log('  ' + i + ' uuid: ' + characteristics[i].uuid);
// // 			//          console.log('  ' + i + ' name: ' + characteristics[i].name);

// // 			//     // characteristics.read(function(error, data){

// // 			//     // 	console.log("Reading the characteristic: " + data)
// // 			//     // });

// // 			// }

// // 	    })

// 		peripheral.discoverServices(); // any service UUID

// 	    peripheral.once('servicesDiscover', function(service){
// 	    	//console.log(services)
// 	    	for (let i in service) {
// 			         console.log('  ' + i + ' uuid: ' + service[i].uuid);
// 			         console.log('  ' + i + ' name: ' + service[i].name);
// 			}


// 			service[3].discoverCharacteristics(null, function(error, characteristics) {
// 	        console.log('discovered the following characteristics:');
// 	        for (var i in characteristics) {
// 	          console.log('  ' + i + ' uuid: ' + characteristics[i]);
// 	          // console.log('  ' + i + ' uuid: ' + characteristics[i].properties.read);
// 	        }

// 	        characteristics[0].read(function(error, data){

// 			     console.log("Reading the characteristic: " + data)
// 			});
// 	      });
// 		});

// 	});
// });
	    	// service.once('includedServicesDiscover', function(includedServiceUuids){
	    	// 	console.log('discovered the following services:');
			   //    for (var i in includedServiceUuids) {
			   //      console.log('  ' + i + ' uuid: ' + includedServiceUuids[i].uuid);
			   //    }

	    	// });
	      
	      // service.discoverCharacteristics("180a", function(error, characteristics) {
	      //   console.log('discovered the following characteristics:');
	      //   for (var i in characteristics) {
	      //     console.log('  ' + i + ' uuid: ' + characteristics[i].uuid);
	      //   }
	      // });
// 	      //service.discoverCharacteristics()
// 	    });
// });



	// peripheral.once('connect', function(connect){
	// 	console.log("connected")
	// 	console.log(connect)

	// });

	// peripheral.once('servicesDiscover', function(services){
	// 	console.log("Services ===============================================================")
	// 	console.log(services)

	// });










 

