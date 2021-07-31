const express = require('express');
const Parcel = require('parcel-bundler');
const app = express();
const port = 8000;
const bundler = new Parcel('src/index.html');

app.get('/api/', (req, res) => {
    res.json({mensaje: "HOla"})
});

app.use(bundler.middleware());

app.listen(port, () => console.log('Api running on port: ' + port));
