import greeter = require('./greeter');  

var body = document.getElementsByTagName("body")[0];
body.appendChild(document.createTextNode(greeter("world")));
document.write("Hello shit");