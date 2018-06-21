'use strict';
// jscs: disable
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxyConfig = require('./proxy.config.js');
const fixturesConfig = require('./fixtures.config.js');

const app_dir = path.normalize(proxyConfig.app_dir);

const app = express();
const proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq) {
    console.log(proxyReq.method, proxyReq.path);
});

// allow requests to endpoints with untrusted certs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

app
    .use(express.static(app_dir))
    .use(require('connect-livereload')())
    .enable('trust proxy')
    .listen(proxyConfig.port);

// response headers
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

console.log(`proxy is up and running on port ${proxyConfig.port}`);

function getAuthHeaders(username, password, accept) {
    // const base64 = new Buffer([username, password].join(':')).toString('base64');
    const headers = {};

    // headers['SM_USER'] = username;
    // headers['SM_USERDN'] = `CN=${username},CN=Users`;
    // headers['Accept'] = accept;
    // headers['Authorization'] = `Basic ${base64}`;

    return headers;
}

// proxy csm requests
fixturesConfig.forEach(function(fixture){
    app[fixture.method](`${proxyConfig.api_base}${fixture.url}`, function(req, res){
        if (fixture.useMock) {
            setTimeout(() => {
                if (fixture.useError) {
                    res.status(fixture.errorCode).send(fixture.errorData);
                } else {
                    res.json((typeof fixture.data === 'function') ? fixture.data(): fixture.data);
                }
            }, fixture.timeout || 0);
        } else {
            proxy.web(req, res, {
                target: proxyConfig.api_domian,
                changeOrigin: true,
                secure: false,
                headers: getAuthHeaders(
                    proxyConfig.username,
                    proxyConfig.password,
                    req.get('Accept')
                )
            });
        }
    })
});
