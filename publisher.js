var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');

client.on('connect', function() {
	setInterval(function () {
		client.publish('myTopic', 'Hello Mqtt');
		console.log('message sent');
	}, 5000);
});