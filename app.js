var cylon = require('cylon');

cylon.robot({
    connection: { name: 'edison', adaptor: 'intel-iot' },
    devices: [
        { name: 'pin13', driver: 'led', pin: 13 },
    ]
}).on('ready', function (eddie) {
    every((0.5).second(), function () {
		eddie.pin13.toggle();
    });
}).start();