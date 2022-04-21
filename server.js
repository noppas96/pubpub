const express = require('express');
const app = express();
const servicePort = 3100

    app.listen(servicePort); {
        console.log("Listening on " + servicePort)
    }

    app.get('/', function(req, res, next) {  
        res.json('Hello');
    });

    app.get('/health', function(req, res, next) {  
        res.json({ status: 'UP' });
    });

    app.get('*', function(req, res, next) {  
        res.json('error');
    });
