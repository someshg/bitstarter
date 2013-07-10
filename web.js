var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    // Try to read the input file
    try {
        var content = fs.readFileSync('index.html', 'utf-8');
    } catch (error) {
        console.error('Could not read file "' + file + '". Error: ' + error);
        process.exit(1);
    }
    response.write(content, "binary");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
