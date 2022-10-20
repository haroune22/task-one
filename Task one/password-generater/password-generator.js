var passgenerate = require('generate-password');

var newpassword = passgenerate.generate({
	length: 12,
	numbers: true
});

// 'uEyMTw32v9'
console.log(newpassword);