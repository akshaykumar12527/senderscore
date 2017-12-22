# senderscore
node module to know your sender reputation

## Installation

```sh
$ npm install senderscore --save
```

## Usage

```js
var senderscore = require('senderscore');
var ipv4 = "xxx.xx.xxx.xxx";

senderscore(ipv4, function(err, result) {
	if (err) {
		console.log("error ", err);
	} else {
		console.log(result);
	}
});
```

## Contributors 

* Akshay Kumar (https://akshaykumar.tech)

## License

  [MIT](LICENSE)