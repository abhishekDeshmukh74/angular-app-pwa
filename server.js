const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(__dirname + '/dist/angular-app-pwa'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/angular-app-pwa/index.html'));
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
    console.log(`App is running on port ${app.get('port')} in ${process.env.NODE_ENV || 'development'} mode`);
});
