var senderscore = require('../index');
var ipv4 = "xxx.xx.xxx.xxx";

senderscore(ipv4, function(err, result) {
	if (err) {
		console.log("error ", err);
	} else {
		console.log(result);
	}
});